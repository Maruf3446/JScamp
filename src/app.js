console.log("merhaba kodlama.io")

let dolarDun = 9.20
var dolarBugun = 9.50

{
    let dolarDun = 10 //let ile ayrı bir blok olarak kabul edilir ve her blok kendi değişken adresini işaret eder
}
{
    var dolarBugun=11 //var ile global değişken gibi davranır ve dolarBugun'ün değerini değiştirir
}
 //var'ı unutacağız let'i kullanacağız
console.log("Dolar dün : "+dolarDun)
console.log("Dolar bugün : "+dolarBugun)

const euroDun=11.2  //sabit değişken sonradan değiştirilemez
//euroDun = 12 bu hatalı satır
console.log("Euro Dün : "+euroDun)

//array
let konutKredileri = ["Konut kredisi","Kamu konut kredisi","Emlak konut kredisi"]
console.log(konutKredileri)
let farkliTipliDegiskenler = [12,"Konut kredisi","Kamu konut kredisi",["a","b","c"]]
console.log(farkliTipliDegiskenler)
console.log(farkliTipliDegiskenler[3])

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")






