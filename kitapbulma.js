let kitap1 = {isim : "Hiçbir şeyi düşünme", yazar : "Anne Bogel", fiyat : 25, raf:"1.5.RAF"}
let kitap2 = {isim : "Hiçbir karşılaşma tesadüf değildir", yazar : "Hakan Mengüç", fiyat : 33, raf:"2.3.RAF"}
let kitap3 = {isim : "İnsan neyle yaşar", yazar : "Tolstoy", fiyat : 15, raf:"3.4.RAF"}
let kitap4 = {isim : "Zafer sızlanarak kazanılmaz", yazar : "Haluk Tatar", fiyat : 45, raf:"4.1.RAF"}
let kitap5 = {isim : "Şeker portakalı", yazar : "Jose Mauro de Vasconselos", fiyat : 19, raf:"5.3.RAF"}

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

let raf11  = {kod : "1.1.RAF" , goster:false}
let raf12  = {kod : "1.2.RAF" , goster:false}
let raf13  = {kod : "1.3.RAF" , goster:false}
let raf14  = {kod : "1.4.RAF" , goster:false}
let raf15  = {kod : "1.5.RAF" , goster:false}

let raf21  = {kod : "2.1.RAF" , goster:false}
let raf22  = {kod : "2.2.RAF" , goster:false}
let raf23  = {kod : "2.3.RAF" , goster:false}
let raf24  = {kod : "2.4.RAF" , goster:false}
let raf25  = {kod : "2.5.RAF" , goster:false}

let raf31  = {kod : "3.1.RAF" , goster:false}
let raf32  = {kod : "3.2.RAF" , goster:false}
let raf33  = {kod : "3.3.RAF" , goster:false}
let raf34  = {kod : "3.4.RAF" , goster:false}
let raf35  = {kod : "3.5.RAF" , goster:false}

let raf41  = {kod : "4.1.RAF" , goster:false}
let raf42  = {kod : "4.2.RAF" , goster:false}
let raf43  = {kod : "4.3.RAF" , goster:false}
let raf44  = {kod : "4.4.RAF" , goster:false}
let raf45  = {kod : "4.5.RAF" , goster:false}

let raf51  = {kod : "5.1.RAF" , goster:false}
let raf52  = {kod : "5.2.RAF" , goster:false}
let raf53  = {kod : "5.3.RAF" , goster:false}
let raf54  = {kod : "5.4.RAF" , goster:false}
let raf55  = {kod : "5.5.RAF" , goster:false}

let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]
];

function rafOlustur(){
    console.clear();
    let satir ="";
    for(let i=0 ; i<raflar.length ; i++){
        for(let j=0 ; j<5 ; j++){
            satir+="|"+ raflar[i][j].goster ? raflar[i][j].kod : "---"  + "|";
        }
        console.log(satir);
        satir="";
    }
}

rafOlustur();
