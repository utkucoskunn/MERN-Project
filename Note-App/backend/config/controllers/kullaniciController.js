const asyncHadler = require('express-async-handler');
const Kullanici = require('../models/kullaniciModel');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');


const tokenOlustur=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'5m' //beş dakika sonra yenilenmesi lazım
    })
}


const registerKullanici = asyncHadler(async (req, res) => {

    const {kullaniciAd, email, parola} = req.body;
    if (!kullaniciAd || !email || !parola) {
        res.status(400)
        throw new Error('Lütfen gerekli alanları doldurunuz')
    }
    //veri tabanında email var mı karşılaştırıyoruz
    const kullanici = await Kullanici.findOne({email});

    if (kullanici) {
        res.status(400)
        throw new Error("Bu email zaten var");
    }
//parolayı hash ile şifreliyoruz


    const salt = await bcrypt.genSalt(10);
    const sifrelenmisParola = await bcrypt.hash(parola.toString(), salt);

// kullanıcıyı db ye kaydetme
    const yeniKullanici = await Kullanici.create({
        kullaniciAd,
        email,
        parola: sifrelenmisParola,
    })
//kullanıcı geri bildirimi
    if (yeniKullanici) {
        res.status(201).json({
            _id: yeniKullanici.id,
            kullaniciAd: yeniKullanici.kullaniciAd,
            email: yeniKullanici.email,
            parola: yeniKullanici.parola,
            token:tokenOlustur(yeniKullanici._id)
        })
    } else {
        res.status(400)

        throw new Error("Geçersiz kullanıcı verisi");
    }

})

const loginKullanici = asyncHadler(async (req, res) => {

    const {email, parola} = req.body;

    const kullanici = await Kullanici.findOne({email})
    if(kullanici && (await bcrypt.compare(parola,kullanici.parola))){
        res.json({
            _id:kullanici.id,
            kullaniciAd:kullanici.kullaniciAd,
            email:kullanici.email,
            token:tokenOlustur(kullanici._id)
        })
    }else{
        res.status(400)
        throw new Error('Geçersiz email yada parola');
    }
})

const getKullanici = asyncHadler(async (req, res) => {

    const {_id,kullaniciAd,email}=await Kullanici.findById(req.user.id)

    res.status(200).json({
        id:_id,
        kullaniciAd,
        email
    })
})

module.exports = {
    registerKullanici,
    loginKullanici,
    getKullanici,
}