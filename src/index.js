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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var data1 = 44;
    data1 = 99;
    console.log(data1);
    console.log(typeof data1);
    data1 = 99.88;
    console.log(data1);
    console.log(typeof data1);
    // TS datatypes (string)
    var data2 = " ts ÖĞreniyorum ts";
    console.log(data2);
    data2 = data2.trim();
    console.log(data2);
    console.log(typeof data2);
    // TS datatypes (boolean)
    var data3 = 3 > 1;
    console.log(data3);
    console.log(typeof data3);
    // Dikkat: const mutlaka başlangıç değeri vermelisiniz.
    // 'const' declarations must be initialized.
    // const data5:number;
    // console.log(data5);
}
//staticDataTypes()
// #### DYNAMICS DATA TYPES #################################################
var dynamicsDataTypes = function () {
    // Dynamics data types (any)
    // karşı taraftan(api,database,object) gelen veri türünü bilmiyorum.
    var data4 = true; //44;   //"Malatya";
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
var tsArray = function () {
    // TypeScript Diziler
    var array = [1, 2, 9, 5, 3];
    //console.log(array[0]);
    //array[5] = 23;
    //console.log(array[array.length - 1]);
    var array2 = [1, 2, 9, 5, 3];
    var array3 = ["İstanbul", "Ankara", "Adana"];
    var array4 = [3 > 1, 44 < 1, true];
    var array5 = [44, "str", true];
    // tuple: Veri olarak birden fazla datatypes tek bir bileşende göstermek için kullanıyoruz.
    var tuple1 = [1, "Adana"];
    var result = "".concat(tuple1[0], " => ").concat(tuple1[1]);
    console.log(result);
    tuple1.push(2, "Adıyaman");
    tuple1.push(3, "Afyon");
    tuple1.push(4, "Bolu");
    tuple1.push(5, "Amasya");
    tuple1.forEach(function (temp) {
        console.log("".concat(temp));
    });
    var tuple2 = [44, "str", true];
};
//tsArray()
// #### FUNCTIONS #################################################
// TypeScript Fonksiyonlar
// void: dönüşü olmayan (Yani işlem sonunda bana birşey döndermee)
function tsFunction(x, y, z) {
    console.log("Normal: ".concat(x, " ").concat(y, " ").concat(z));
}
tsFunction(4, 10, 99);
function tsFunction2(x, y, z) {
    console.log("TS Function2: ".concat(x, " ").concat(y, " ").concat(z));
}
tsFunction2(4, 10, "Merhabalar");
function tsFunction3(x, y, z) {
    console.log("TS Function3: ".concat(x, " ").concat(y, " ").concat(z));
}
tsFunction3(44, 10, "Merhabalar");
tsFunction3(true, 10, "Merhabalar");
tsFunction3("Malatya", 10, "Merhabalar");
// void: geriye bir şey dönderme
function tsFunction4(x, y, z) {
    console.log("TS Function4: ".concat(x, " ").concat(y, " ").concat(z));
}
tsFunction4("Malatya", 10, "Merhabalar");
function tsFunction5(x, y, z) {
    //console.log(`TS Function4: ${x} ${y} ${z}`);
    //return 10;
    //return Number(x)+y+Number(z);
    return parseInt(x) + y + parseFloat(z);
}
var result5 = tsFunction5("44", 10, "99.12");
// console.log(result5);
// #### ENUM #################################################
// TypeScript Enum
var tsEnum = function () {
    // ENUM
    var colors;
    (function (colors) {
        colors["color1"] = "k\u0131rm\u0131z\u0131";
        colors["color2"] = "mavi";
        colors["color3"] = "sar\u0131";
    })(colors || (colors = {}));
    console.log(colors.color1);
    var otherColor = colors.color3;
    console.log(otherColor);
};
tsEnum();
// #### CLASS #################################################
var tsClass = function () {
    var Computer = /** @class */ (function () {
        // CONSTRUCTOR
        function Computer(computerName, ram, newVersion) {
            this._computerName = computerName;
            this._ram = ram;
            this._newVersion = newVersion;
        }
        // FUNCTION
        Computer.prototype.computerInformation = function () {
            var result = "Computer Name: ".concat(this._computerName, " Computer Ram: ").concat(this._ram, " Computer version: ").concat(this._newVersion);
            console.log(result);
        }; //end function
        return Computer;
    }()); //end Computer
    // INSTANCE
    var computerIntance = new Computer("Nvidia", 16, false);
    console.log("NAME: " + computerIntance._computerName);
    console.log("RAM: " + computerIntance._ram);
    console.log("VERSION: " + computerIntance._newVersion);
};
// tsClass();
// #### GENERICS #################################################
// TypeScript Generics
// #### INHERITANCE #################################################
// TypeScript Inheritance
// this
// super
var tsInheritance = function () {
    // CLASS
    var Computer = /** @class */ (function () {
        // CONSTRUCTOR
        function Computer(mainCard, cpu, ram, harddisk, newVersion) {
            this._mainCard = mainCard;
            this._cpu = cpu;
            this._ram = ram;
            this._harddisk = harddisk;
            this._newVersion = newVersion;
        }
        // FUNCTION
        Computer.prototype.computerInformation = function () {
            var result = "Details => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion);
            console.log(result);
        };
        return Computer;
    }()); //end class Computer
    // 2.CLASS (Lenovo)
    var Lenovo = /** @class */ (function (_super) {
        __extends(Lenovo, _super);
        // Constructor
        function Lenovo(mainCard, cpu, ram, harddisk, newVersion, usb) {
            //super: üst atadan gelen bilgileri gösterir
            var _this = _super.call(this, mainCard, cpu, ram, harddisk, newVersion) || this;
            //this global state gösterir.
            _this._usb = usb;
            return _this;
        }
        // function
        Lenovo.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion, " USB: ").concat(this._usb);
            console.log(result);
        };
        return Lenovo;
    }(Computer));
    // 3.CLASS (Monster)
    var Monster = /** @class */ (function (_super) {
        __extends(Monster, _super);
        // Constructor
        function Monster(mainCard, cpu, ram, harddisk, newVersion, typeC) {
            //super: üst atadan gelen bilgileri gösterir
            var _this = _super.call(this, mainCard, cpu, ram, harddisk, newVersion) || this;
            //this global state gösterir.
            _this._typeC = typeC;
            return _this;
        }
        // function
        Monster.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion, " USB: ").concat(this._typeC);
            console.log(result);
        };
        return Monster;
    }(Computer));
    // INSTANCE (Computer)
    var computerInstance = new Computer("Computer", "i7", 16, "512gb", true);
    console.log("MAIN CARD: " + computerInstance._mainCard);
    console.log("CPU: " + computerInstance._cpu);
    console.log("RAM: " + computerInstance._ram);
    console.log("HARD DISK: " + computerInstance._harddisk);
    console.log("Version: " + computerInstance._newVersion);
    computerInstance.computerInformation();
    console.log("**********************************************");
    var lenovoInstance = new Lenovo("Lenovo", "i10", 8, "1TB", false, "2");
    console.log("MAIN CARD: " + lenovoInstance._mainCard);
    console.log("CPU: " + lenovoInstance._cpu);
    console.log("RAM: " + lenovoInstance._ram);
    console.log("HARD DISK: " + lenovoInstance._harddisk);
    console.log("Version: " + lenovoInstance._newVersion);
    console.log("Usb: " + lenovoInstance._usb);
    lenovoInstance.computerInformation();
    console.log("**********************************************");
    var monsterInstance = new Monster("Monster", "i7", 8, "1TB", false, "TypeC");
    console.log("MAIN CARD: " + monsterInstance._mainCard);
    console.log("CPU: " + monsterInstance._cpu);
    console.log("RAM: " + monsterInstance._ram);
    console.log("HARD DISK: " + monsterInstance._harddisk);
    console.log("Version: " + monsterInstance._newVersion);
    console.log("Type: " + monsterInstance._typeC);
    monsterInstance.computerInformation();
};
tsInheritance();
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
