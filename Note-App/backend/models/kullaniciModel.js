const mongoose=require('mongoose');

const kullaniciSchema=mongoose.Schema({
    kullaniciAd:{
        type:String,
        required:[true,"Lütfen adınıız girin"]
    },
    email:{
        type:String,
        required: [true,"Lütfen email giriniz"],
        unique:true, //email,n eşsiz olup olmadığını sorgular
    },
    parola:{
        type:String,
        required:[true,"Lütfen parola girin"],
        trim:true

    }
},{
    timestamps:true
})

module.exports=mongoose.model('Kullanicis',kullaniciSchema)