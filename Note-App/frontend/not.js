/*
Ana package.json dosyasında
"scripts altında  "client": "npm star --prefix frontend" yazarak frontend in çalışmasını sağlıyoruz.

SAYFALARI OLUŞTURMA
register, login, dashboard sayfaları oluşturduk

REACT ROUTER KURULUMU
npm i react-router-doom
app.js içerisine route işlemlerini gerçekleştirdik

HEADER COMPONENT OLUŞTURMA
react icon kullanmak için npm i react-icons
header component ekledim
app.js içerisinde headerı ekledik en üstte o hep orda

REGİSTER SAYFASINI OLUŞTURMAK
register sayfası içerisinde gerekli bütün işlemler yapıldı

LOGİN SAYFASI OLUŞTURMAK
register ile aynı

CONCURRENTLY KULLANIMI
server ve client ayrı ayrı çalıştırmak yerine concurrently paketi ile ikisini de aynı anda çalıştırabiliriz.
mern içerisinde npm i -D concurrently
mern içerisinde package.json script alanına  "dev": "concurrently \" npm run server\" \"npm run client\"" ekledik
artık npm run dev diyince ikisi de ayağa kalkacak

REDUX
stament yönetimi

STORE ACTİON  VE REDUCER
npm i redux
npm i react-redux@7.2.7
sırasıyla front end içine indirdik
src içinde index içinde

==>

import {createStore} from 'redux';

const topla = () => {
    return {
        type: 'TOPLA'
    }
}

const cikar = () => {
    return {
        type: 'CIKAR'
    }
}

const hesapla = (state = 0, action) => {
    switch (action.type) {
        case 'TOPLA':
            return state+1;
        case 'CIKAR':
            return state-1;
    }
}

let store=createStore(hesapla);

store.subscribe(()=>console.log(store.getState()))

store.dispatch(topla())
store.dispatch(topla())

                                    <====

BİRDEN FAZLA REDUCER KULLANIMI
src reducers klasörü içerisinde giriş hesapla reducerları oluşturduk aynı klasördeki index içinde birleştirdik
 src genel index içinde de

 import butunReducerlar from "./reducers";


let store = createStore(butunReducerlar,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => console.log(store.getState()))

yazarak kullandık. redux chrome tools ile görüntüledik

PROVİDER İLE STATE ERİŞİMİ
front end içerisinde npm i @reduxjs/toolkit

front/src içerisine app klasörü oluşturduk içinde store .js onun içinde store oluşturduk
front app.js içine store u çağırdık ve provide ettik.

SLİCE OLUŞTURMA
src->features->counter->

AUTH SLİCE OLUŞTURMA
features->auth->authSlice içinde slice oluşturuyoruz işlemleri yapıp app klasörü içinde store a git
store içerine auth redux u çağır

REGISTER ICIN APIYE ERİSİM
axios , react-toastify(uyarı mesajı) indir



*/