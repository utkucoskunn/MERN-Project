const express=require('express');

const {getNotlar,setNotlar,updateNotlar,deleteNotlar}=require('../controllers/notController');
const  {kullaniciKontrol}=require('../middlewares/authMiddleware');

const router=express.Router();
/*
router.get('/',getNotlar);
router.post('/',setNotlar);
router.put('/:id',updateNotlar);
router.delete('/:id',deleteNotlar);

burdan zincirlemeye geçiyoruz
*/

router.route('/').get(kullaniciKontrol,getNotlar).post(kullaniciKontrol,setNotlar);
router.route('/:id').put(kullaniciKontrol,updateNotlar).delete(kullaniciKontrol,deleteNotlar);


module.exports=router;