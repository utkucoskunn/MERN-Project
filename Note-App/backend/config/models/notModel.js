const mongose=require('mongoose');

const notSchema=mongose.Schema({
    kullanici:{
      type:mongose.Schema.Types.ObjectId,
      required:true,
      ref:'Kullanicis'
    },
    baslik:{
        type:String,
        required:[true,"Başlık doldurulmalı"]
    },
    aciklama:{
        type:String,
        required: [true,"Açıklama doldurulmalı"]
    },
    oncelik:{
        type:Number,
    }
},{
    timestamps:true
})

module.exports=mongose.model('Not', notSchema);