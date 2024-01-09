/*
Javascript Nedir ?

Betik dildir.
Tarayıcı tarafında çalışır.
Nodejs ile sunucu tarafında da çalışır.
OOP (interface,inheritance,abstract)

TypeScript Nedir ?

TS: Açık kaynak kodlu bir dildir.
TS: Esnektir.
TS: Js herşeyi kullanabilirsiniz.
TS: Microsoft ürünüdür. C# , Hejlberg 
TS: Javascript+...+ diğer özellikleri 
Javascript = TS

 TypeScript Özellikleri Nelerdir ?
TS: Esnektir
TS: Static type
TS: Derleme zamanı
TS: Yazılım kalitesini arttırır.
TS: Hata bulma kolaylığı
TS: Kod okunabilirliği
TS: Büyük projelerde kullanılır.
TS: Angular,React JS,Vue ile geliştirmeler yapabiliriz.
TS: Nodejs ile backend tarafında da kullanabiliriz.
TS: Javascript ile çalışır.
TS: Javascript kodlarını derler.
TS: Javascript'e dönüştürür.

TypeScript Neden Öğrenmeliyim ?
TypeScript Genel Bileşenleri Nelerdir ?
Ecmascript ile JavaScript Arasındaki Farklar Nelerdir ?
TypeScript ile JavaScript Arasındaki Farklar Nelerdir ?
TypeScript ile Ecmascript Arasındaki Farklar Nelerdir ?
TypeScript Kurulumu
TypeScript Compiler
Javascript Interpreter
Java: Interpreter and Compiler 
*/

// TypeScript Editor
// TypeScript İlk Program
// TypeScript Değişkenler

// ####  STATIC DATA TYPES #################################################
function staticDataTypes() {
  // TypeScript Veri Tipleri
  // Dynamics data types
  // let data=44;
  // console.log(data);
  // data="kelime";
  // console.log(data);
  // data=true;
  // console.log(data);

  // Data types: number,string,boolean
  // type Safe:
  // TS datatypes (number)
  let data1: number = 44;
  data1 = 99;
  console.log(data1);
  console.log(typeof data1);
  data1 = 99.88;
  console.log(data1);
  console.log(typeof data1);

  // TS datatypes (string)
  let data2: string = " ts ÖĞreniyorum ts";
  console.log(data2);
  data2 = data2.trim();
  console.log(data2);
  console.log(typeof data2);

  // TS datatypes (boolean)
  let data3: boolean = 3 > 1;
  console.log(data3);
  console.log(typeof data3);

  // Dikkat: const mutlaka başlangıç değeri vermelisiniz.
  // 'const' declarations must be initialized.
  // const data5:number;
  // console.log(data5);
}
//staticDataTypes()

// #### DYNAMICS DATA TYPES #################################################
const dynamicsDataTypes = function () {
  // Dynamics data types (any)
  // karşı taraftan(api,database,object) gelen veri türünü bilmiyorum.
  let data4: any = true; //44;   //"Malatya";
  console.log(data4);
  data4 = 44;
  console.log(data4);
  data4 = false;
  console.log(data4);

  // unknown

  // any ile unknown arasındaki farklar

  // null
  // undefined
};
//dynamicsDataTypes ();

// #### OPERATORS #################################################
// TypeScript Operatörler
// + - * / % && || ! > >= < <=

// #### CONDITION #################################################
// TypeScript Koşullu İfadeler
// if else if, ternary

// #### LOOP #################################################
// TypeScript Döngüler
// for() while() do-while() foreach() for-in() for-of()

// number,string,boolean,any
// #### ARRAY #################################################
// TypeScript Döngüler
let tsArray = () => {
  // TypeScript Diziler
  let array: number[] = [1, 2, 9, 5, 3];
  //console.log(array[0]);
  //array[5] = 23;
  //console.log(array[array.length - 1]);

  let array2: number[] = [1, 2, 9, 5, 3];
  let array3: string[] = ["İstanbul", "Ankara", "Adana"];
  let array4: boolean[] = [3 > 1, 44 < 1, true];
  let array5: any[] = [44, "str", true];

  // tuple: Veri olarak birden fazla datatypes tek bir bileşende göstermek için kullanıyoruz.
  let tuple1: [number, string] = [1, "Adana"];
  let result = `${tuple1[0]} => ${tuple1[1]}`;
  console.log(result);
  tuple1.push(2, "Adıyaman");
  tuple1.push(3, "Afyon");
  tuple1.push(4, "Bolu");
  tuple1.push(5, "Amasya");
  tuple1.forEach((temp) => {
    console.log(`${temp}`);
  });

  let tuple2: [number, string, boolean] = [44, "str", true];
};
//tsArray()

// #### FUNCTIONS #################################################
// TypeScript Fonksiyonlar
// void: dönüşü olmayan (Yani işlem sonunda bana birşey döndermee)
function tsFunction(x: number, y: number, z: number) {
  console.log(`Normal: ${x} ${y} ${z}`);
}
tsFunction(4, 10, 99);

function tsFunction2(x: number, y: number, z: string) {
  console.log(`TS Function2: ${x} ${y} ${z}`);
}
tsFunction2(4, 10, "Merhabalar");

function tsFunction3(x: any, y: number, z: string) {
  console.log(`TS Function3: ${x} ${y} ${z}`);
}
tsFunction3(44, 10, "Merhabalar");
tsFunction3(true, 10, "Merhabalar");
tsFunction3("Malatya", 10, "Merhabalar");

// void: geriye bir şey dönderme
function tsFunction4(x: any, y: number, z: string): void {
  console.log(`TS Function4: ${x} ${y} ${z}`);
}
tsFunction4("Malatya", 10, "Merhabalar");

function tsFunction5(x: any, y: number, z: string): number {
  //console.log(`TS Function4: ${x} ${y} ${z}`);
  //return 10;
  //return Number(x)+y+Number(z);
  return parseInt(x) + y + parseFloat(z);
}

const result5 = tsFunction5("44", 10, "99.12");
// console.log(result5);

// #### ENUM #################################################
// TypeScript Enum
let tsEnum = () => {
  // ENUM
  enum colors {
    color1 = "kırmızı",
    color2 = "mavi",
    color3 = "sarı",
  }

  console.log(colors.color1);
  let otherColor: colors = colors.color3;
  console.log(otherColor);
};
tsEnum();

// #### CLASS #################################################
let tsClass = () => {
  class Computer {
    // DATA TYPES
    _computerName: string;
    _ram: number;
    _newVersion: boolean;

    // CONSTRUCTOR
    constructor(computerName: string, ram: number, newVersion: boolean) {
      this._computerName = computerName;
      this._ram = ram;
      this._newVersion = newVersion;
    }

    // FUNCTION
    computerInformation(): void {
      let result = `Computer Name: ${this._computerName} Computer Ram: ${this._ram} Computer version: ${this._newVersion}`;
      console.log(result);
    } //end function
  } //end Computer

  // INSTANCE
  let computerIntance = new Computer("Nvidia", 16, false);
  console.log("NAME: " + computerIntance._computerName);
  console.log("RAM: " + computerIntance._ram);
  console.log("VERSION: " + computerIntance._newVersion);
};
tsClass();

// #### GENERICS #################################################
// TypeScript Generics

// #### INHERITANCE #################################################
// TypeScript Inheritance
// this
// super

// #### ABSTRACT #################################################
// TypeScript Abstract

// #### INTERFACE #################################################
// TypeScript Interface

// TypeScript Null ve Undefined
// TypeScript Never
// TypeScript Type Assertion
// TypeScript Type Aliases
// TypeScript Object Methods

// TypeScript Decorators
// TypeScript Mixins
// TypeScript Interfaces vs Types
// TypeScript Modules
// TypeScript Namespaces
// TypeScript Namespaces vs Modules
// TypeScript Ambient Namespaces
// TypeScript Ambient Modules
// TypeScript Inference
// TypeScript Type Compatibility
// TypeScript Intersection Types
