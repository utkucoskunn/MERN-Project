const asyncHandler = require('express-async-handler');
const notModel = require('../models/notModel');
const kullaniciModel = require('../models/kullaniciModel');


const getNotlar = asyncHandler(async (req, res) => {
    //res.status(200).json({mesaj: ' controller get notlar'})

    const notlar = await notModel.find({kullanici: req.user.id})
    res.status(200).json(notlar)
})

const setNotlar = asyncHandler(async (req, res) => {

    /*if(!req.body.mesaj){
        //res.status(400).json({mesaj:'lütfen mesaj alanını giriniz!'});
        throw new Error('Lütfen mesaj alanını giriniz')
    }
    res.status(200).json({mesaj: 'controller post Notlar'});*/

    if (!req.body.baslik || !req.body.aciklama) {
        res.status(400)
        throw new Error("Lütfen başlık-açıklama alanlarını giriniz!")
    }

    const not = await notModel.create({
        baslik: req.body.baslik,
        aciklama: req.body.aciklama,
        oncelik: req.body.oncelik,
        kullanici: req.user.id
    })
    res.status(200).json(not);
});

const updateNotlar = asyncHandler(async (req, res) => {
    //res.status(200).json({mesaj: `controller put ${req.params.id} idli notlar`});
    const not = await notModel.findById(req.params.id)
    const kullanici = await kullaniciModel.findById((req.user.id)) //kullanıcının kendi notlarını düzenlemesi için

    if (!kullanici) {
        res.status(400)  //kullanıcının kendi notlarını düzenlemesi için
        throw new Error('Kullanıcı bulunamadı ')
    }
    if (!not) {
        res.status(400)
        throw new Error('Not Bulunamadı')
    }

    //kullanıcı var not var şimdi kullanıcının idsi nottaki kullanıcı id ile karşılaştır

    if (not.kullanici.toString() !== kullanici.id) {
        res.status(401)
        throw new Error("Kullanıcı yetkili değil")
    }
//kullanıcının idsi nottaki kullanıcı id eşleşti şuan

    const guncellendi = await notModel.findByIdAndUpdate(req.params.id, req.body,
        {new: true}) //new true diyerek verinin güncellenmiş halini  getirir false dersen ilk halini

    res.status(200).json(guncellendi);
})

const deleteNotlar = asyncHandler(async (req, res) => {
    //res.status(200).json({mesaj: `controller delete ${req.params.id} idli notlar`})

    const not = await notModel.findById(req.params.id)
    const kullanici = await kullaniciModel.findById((req.user.id)) //kullanıcının kendi notlarını silmesi için

    if (!kullanici) {
        res.status(400)  //kullanıcının kendi notlarını silmesi için
        throw new Error('Kullanıcı bulunamadı ')
    }

    if (!not) {
        res.status(400)
        throw new Error('not bulunamadı')
    }
    //kullanıcı var not var şimdi kullanıcının idsi nottaki kullanıcı id ile karşılaştır

    if (not.kullanici.toString() !== kullanici.id) {
        res.status(401)
        throw new Error("Kullanıcı yetkili değil")
    }
    //kullanıcının idsi nottaki kullanıcı id eşleşti şuan artık silsin
    await not.remove()
    res.status(200).json({mesaj: `Not silindi`})
});


module.exports = {
    getNotlar,
    setNotlar,
    updateNotlar,
    deleteNotlar
}