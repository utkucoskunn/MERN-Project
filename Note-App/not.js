/*
server yapısı için express,
db için mongoose,
dotenv,
konsol üzerinde renkli uyarılar için colors,
anlık değişiklikleri görüntülemek için dev modunda i - D nodemon
kuruldu...

backend klasörü içerisine server.js oluşturuldu. nodemoon ile server tanımı yapıldı. Ayrıca start sayfası da belirlendi.

express require edildi. app değişkenine atandı. Sonra port ve listen tanımlamaları yapıldı.

env kullanımı:
.env dosyası oluşturdum
server.js içerisinde
const dotenv=require('dotenv').config();
const PORT=process.env.PORT;

route oluşturma:
app.get('/api/notlar',(request,response)=>{
   // response.send('Notlar');
    let not={
        ad:'ilk not',
        icerik:'ilk icerik',
        oncelik:3
    }
    response.status(200).json(not);
});

ilk route dosyası oluşturma:

routes klasörü içine notRoute.js oluşturduk.
notRoute içerisinde

const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({mesaj:'get notlar'});
});


module.exports=router;

sonrasında:

server da router yolu tanıtıp not Route içerisinde route tanımlamalarını yaptık yukarıdakiler azcık değişti.


CONTROLLER OLUŞTURMA:

controller içerisinde gerekli fonksiyonları oluşturduk sonrasında bunları export ettik.
route içerisine import ederek route kodu içerisinde kullandık.Hepsi için bunu yaptık.

ZİNCİRLEME ROUTE OLUŞTURMA:

aynı url içeren routelar için düzenleme yapıldı.

BODY VERİSİNİ KULLANMA:
body i post yada update işlemlerinden kullanmamız lazım.
şimdi notCont içerinden setNotlar da body var ama bunu yakalayamıyoruz.
bunu sağlamak için server içerisinde

app.use(express.urlencoded());
app.use(express.json());
yazdık.
not:Sıra çok önemli doğru sırada yazmazsan hata veriyor.
bu yaptığın işlem bir middleware

HATA YAKALAMA:
middleware kullanmamız lazım

set notlara if yazarak body içerisinde mesaj var mı ona baktık! yoruma aldık!

error middle ware oluşturduk. serverjs içine geldik.
app.use(hataYakalama);
env de de hataların sadece development modunda görülmesi için ayar yaptık

EXPRESS ASYNC KULLANIMI:
bunu klasik async yapısı ile de yapabilirsin ancak bu daha kolay dedi bakalım
npm i express-async-handler
bununla indirdik

notController içerisindeki asyncHandler( async ) ile sarmaladık.

MONGOOOSE İLE VERİ TABANINA BAĞLANMA:

env içerisine bağlantıyı oluşturduk. Sonra sonrasında config dosyası içine db js oluşturduk. işlemler orda baglan fonk.ordan sonra
serverjs içinde port dinlemeden önce hemen baglanı çalıştırdık.
colors ile de server içerisinde .magenta.italic yaparak renklerdime yaptık.

VERİTABANINA MODEL OLUŞTURMA:
 Model klasörü oluşturulup onun altına notModel oluşturduk. Sonrasında içine not schemasını oluşturduk. Sonra notController
 içerisinde bulunan setNotlar fonksiyonu içerisine bu schemayı kullanarak colletions oluşturduk

VERİTABANI READ İŞLEMLERİ:

veri tabanında bulunan verileri ulaşmak için;
notController içierisindeki getNotlar fonksiyonu düzenledik

VERİTABANI UPDATE ETME;

önce hangi notun güncelleneceğini bulacağız.
notController içierisindeki updateNotlar fonk içerisinde gerekli değişikleri yaptık

VERİTABANI DELETE İŞLEMLERİ:

yine id ile notu bulup notu silmemiz lazım

gerekli işlemler notController fonk altında yapıldı

USER MODEL OLUŞTURMA:
kullaniciModel dosyasında user schema oluşturuldu.

NOTMODELE KULLANICI EKLEME:
notmodel schema içerisinde kullanici prop u ekledik.

KULLANICI ROUTE VE CONTROLLER OLUŞTURMA:

önce kullaniciController oluşturduk sonra route işlemlerini yaptık.server.js içerisinde path belirledik.
bu işlemleri login register ve kullanici için gerçekleştirdik.


KULLANICI REGİSTER İŞLEMLERİ

kullanici controller içerisinde register fonk içine email eşsizliği, zorunla alanlar denetimleri ile ilgili ifler yazıldı

PAROLA ŞİFRELEME VE KULLANICI KAYDETME:
Şifreleme işlemleri için bcrypt kullanılacak.
npm i bcryptjs ile download yaptık.
kullaniciController içinde registerKullanici yaparken parolayı şifrelendirerek kaydetmemiz lazım
kullanıcı şifrelerken hash metodu kullanmamız lazım
ilgili işlemler kullanici Kontroller içinde

KULLANICI LOGİN İŞLEMİ:
İşlemler kullanıcı kontroller içinde loginKullanici içerisinde

TOKEN OLUŞTURMA:

npm i jsonwebtoken ile indiriyoruz
env dosyasında jwt secret oluşturduk
kullaniciController için token oluştur fonk içinde işlemi yaptık
hem login hem de register da token ı oluşturup res e ekledik

AUTH MİDDLEWARE OLIŞTURMA:
 kullancının varlığını kontrol token ın varlığını kontrol etme

 authorization bearer token kullanıyoruz
 authMiddleware oluşturdum ve bütün işlemleri orada yaptık
 req ten gelen token aldık şifreyi çözdük.

 AUTHORİZATİON İŞLEMLERİ:

 kullaniciRoute içerisinde ;
router.get('/kullanici',kullaniciKontrol,getKullanici) kullanıcı kontrol middleware den geçerse get kullaniciya gider
kullanciController içerisinde getKullanici içinde ==>yazdık. Oluşturduğumu< kullaniciController middlewareini hepsine ekledik

KULLANICININ SADECE KENDİ NOTUNU GÖRMESİ

notController içinde get not içinde find({kullanici:req.user.id}) yazdık

KULLANICININ KENDİ NOTUNU SİLMESİ VE DÜZENLEMESİ
not kontroller içerisine kullanıcı modeli ekle ve orda delete update fonk güncelle


JSON WEB TOKEN NEDİR:



 */