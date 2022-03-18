let time = new Date();
let hours = 0;
let hoursTemp = 0;
let daysNotTeach = 0;
let buttonType = "";

// kurang / d n
var kurangMakan = 0.4;
var kurangTidur = 0.2;
var kurangMain = 0.2;
var kurangBelajar = 0;
// tambah / d n
var tambahMakan = 0;
var tambahTidur = 0;
var tambahMain = 0;
var tambahBelajar = 0.4;
var round = Math.round;
// kumpulan variabel untuk digunakan pada function
let widthMakan = document.getElementById('makan');
let valueMakan = round(document.getElementById('makan').ariaValueNow,0);
let widthTidur = document.getElementById('tidur');
let valueTidur = round(document.getElementById('tidur').ariaValueNow,0);
let widthMain = document.getElementById('main');
let valueMain = round(document.getElementById('main').ariaValueNow,0);
let widthBelajar = document.getElementById('belajar');
let valueBelajar = round(document.getElementById('belajar').ariaValueNow,0);

function ambilNama(){
    localStorage.setItem("avatar", document.querySelector(".carousel-item.active").querySelector("img").getAttribute("src"));
    localStorage.setItem("nama", document.getElementById("nama").value);
}

// MENGAMBIL SEMESTER
var semesterValue = 1;
var semester = "Semester " + semesterValue;
// MENGAMBIL NAMA DARI PAGE SEBELUMNYA
var nama = localStorage.getItem("nama");
// mewngambil image dari page sebelumnya
var avatar = localStorage.getItem("avatar");

var avatarTemp = avatar;
// menaruh avatar di page sekarang
var avatarPlace = document.getElementById("avatar");
var avatarMakan = avatarTemp+"-Makan"+".jpg";
var avatarMain = avatarTemp+"-Main"+".jpg";
var avatarTidur = avatarTemp+"-Tidur"+".jpg";
var avatarBelajar = avatarTemp+"-Belajar"+".jpg";
// MENGAMBIL QUERY DARI BUTTON
var buttonMakan = document.querySelector("#buttonMakan");
var buttonTidur = document.querySelector("#buttonTidur");
var buttonMain = document.querySelector("#buttonMain");
var buttonBelajar = document.querySelector("#buttonBelajar");

// untuk cek apakah tombol yang ditekan adalah tombol makan, tidur, main, atau belajar
var isClickedMakan = true
var isClickedTidur = true
var isClickedMain = true
var isClickedBelajar = true


// UNTUK MENGGANTI BACKGROUND BODY
var body = document.querySelector("body");

// jika button makan dipencet akan dijalankan
buttonMakan.addEventListener("click", function() {
    isClickedTidur = true;
    isClickedMain = true;
    isClickedBelajar = true;
    if(isClickedMakan) {
        avatarTemp = avatarMakan;
        buttonMakan.style.backgroundColor = "#EE9F16";
        buttonBelajar.style.backgroundColor = "#FFFFFF";
        buttonTidur.style.backgroundColor = "#FFFFFF";
        buttonMain.style.backgroundColor = "#FFFFFF";
        buttonType= "makan";
        var music = new Audio('./assets/effect/makan.mp3');
        music.play();
    }else{
        buttonMakan.style.backgroundColor = "#FFFFFF";
        avatarTemp = avatar;
        buttonType= "";
    }
    isClickedMakan = !isClickedMakan;
});


// jika button tidur dipencet akan dijalankan
buttonTidur.addEventListener("click", function() {
    isClickedMakan = true;
    isClickedMain = true;
    isClickedBelajar = true;
    if(isClickedTidur) {
        avatarTemp = avatarTidur;
        buttonMakan.style.backgroundColor = "#FFFFFF";
        buttonBelajar.style.backgroundColor = "#FFFFFF";
        buttonTidur.style.backgroundColor = "#EE9F16";
        buttonMain.style.backgroundColor = "#FFFFFF";
        buttonType= "tidur";
        var music = new Audio('./assets/effect/ngorok.mp3');
        music.play();
    }else{
        avatarTemp = avatar;
        buttonTidur.style.backgroundColor = "#FFFFFF";
        buttonType= "";
    }
    isClickedTidur = !isClickedTidur;
    });


// jika button main dipencet akan dijalankan
buttonMain.addEventListener("click", function() {
    isClickedTidur = true;
    isClickedBelajar = true;
    isClickedMakan = true;
    if(isClickedMain) {
        avatarTemp = avatarMain;
        buttonMakan.style.backgroundColor = "#FFFFFF";
        buttonBelajar.style.backgroundColor = "#FFFFFF";
        buttonTidur.style.backgroundColor = "#FFFFFF";
        buttonMain.style.backgroundColor = "#EE9F16";
        buttonType= "main";
        var music = new Audio('./assets/effect/main.mp3');
        music.play();
    }else{
        avatarTemp = avatar;
        buttonMain.style.backgroundColor = "#FFFFFF";
        buttonType= "";
    }
    isClickedMain = !isClickedMain;
});


// jika button belajar dipencet akan dijalankan
buttonBelajar.addEventListener("click", function() {
    isClickedTidur = true;
    isClickedMain = true;
    isClickedMakan = true;
    if(isClickedBelajar) {
        avatarTemp = avatarBelajar;
        buttonMakan.style.backgroundColor = "#FFFFFF";
        buttonBelajar.style.backgroundColor = "#EE9F16";
        buttonTidur.style.backgroundColor = "#FFFFFF";
        buttonMain.style.backgroundColor = "#FFFFFF";
        buttonType= "belajar";
        var music = new Audio('./assets/effect/belajar.mp3');
        music.play();
    }else{
        avatarTemp = avatar;
        buttonBelajar.style.backgroundColor = "#FFFFFF";
        buttonType= "";
    }
    isClickedBelajar = !isClickedBelajar;
});


// FUNGSI AGAR JS BERJALAN SETIAP 1 DETIK SEKALI
const intervalTime = setInterval(interval,1000);

function interval(){
    let greetings = "";
    let time = new Date();
    let seconds = time.getSeconds();

    // fungsi untuk mengecek dan meninggaL
    if(valueTidur == 0){
        clearInterval(intervalTime);
        alert('Anda meninggal, karena terlalu lelah');
        window.location.href='index.html';
        throw new Error();
    }
    if(valueMakan == 0){
        clearInterval(intervalTime);
        alert("Anda kelaperan, sehingga anda meninggal kesakitan");
        window.location.href='index.html';
    }
    if(valueMain == 0){
        clearInterval(intervalTime);
        alert("Anda meninggal, karena depresi");
        window.location.href = "index.html";
    }

    // Cek DO atau tidak
    if(daysNotTeach == 1){
        clearInterval(intervalTime);
        alert("Anda di-DO, nilai anda rendah karena tidak pernah belajar");
        window.location.href='index.html';
    }

    // menampilkan jam
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (seconds == 0) {
        hours ++;
        hoursTemp++;
    }
    if (hours > 23) {
        hours = 0;
    }
    if (hours > 23) {
        daysNotTeach++;
    }

    // cek waktu
    if (hours >= 7 && hours <= 22) {
        kurangTidur = 0.1;
    }else if (hours >= 23 && hours <= 24) {
        kurangTidur = 0.25;
    }else if (hours >= 0 && hours < 7) {
        kurangTidur = 0.25;
    }

    // mengecek greeting apa yang akan diambil
    if (hours >= 4 && hours < 12){
            greetings = "Good Morning";
            body.style.backgroundImage = "url('./assets/bg/morning.png')";
    }else if(hours >= 12 && hours < 18){
            greetings = "Good Afternoon";
            body.style.backgroundImage = "url('./assets/bg/afternoon.png')";
    }else if(hours >= 18 && hours < 24){
            greetings = "Good Evening";
            body.style.backgroundImage = "url('./assets/bg/night.png')";
    }else if (hours >= 0 && hours < 4){
            greetings = "Good Evening";
            body.style.backgroundImage = "url('./assets/bg/night.png')";
    }

    // mengecek semester apa anda sekarang
    if (valueBelajar >= 100) {
        semesterValue ++;
        semester = "Semester " + semesterValue;
        valueBelajar = 0;
        avatarTemp = avatar;
        widthBelajar.style.width = valueBelajar + "%";
        buttonType="";
    }
    // menampilkan seluruh yang ada dilayar komputer
    // menampilkan gambar bisa diganti jpg/png
    avatarPlace.src = avatarTemp;

    document.getElementById("semester").innerHTML = semester;
    document.getElementById("status").innerHTML = greetings +", "+ nama +"!";
    document.getElementById("clock").innerHTML = hours + ":" + seconds;
    // untuk mengatur tombol apa yang ditekan
    if (buttonType == "") {
        // redeclare variable
        kurangMakan = 0.4;
        kurangTidur = 0.2;
        kurangMain = 0.2;

        if (valueMakan >= 20 ) {
            kurangMain = 0.2;
        }
        else if (valueMakan < 20) {
            kurangMain = 0.4;
        }
        if (valueMakan <= 0) {
            valueMakan = 0;
            widthMakan.style.width = valueMakan+"%"; 
        }else{
            valueMakan = valueMakan - kurangMakan;
            widthMakan.style.width = valueMakan+"%";    
        }
        if (valueTidur <= 0) {
            valueTidur = 0;
            widthTidur.style.width = valueTidur+"%";
        }else{
            valueTidur = valueTidur - kurangTidur;
            widthTidur.style.width = valueTidur+"%";
        }
        if (valueMain <= 0) {
            valueMain = 0;
            widthMain.style.width = valueMain+"%";
        }else{
            valueMain = valueMain - kurangMain;
            widthMain.style.width = valueMain+"%";
        }

    }else if (buttonType == "makan") {
        // finish
        kurangMakan = 0.4;
        kurangTidur = 0.2;
        kurangMain = 0.2;

        tambahMain = 3;
        tambahMakan = 10;
        valueMakan = valueMakan + tambahMakan;
        widthMakan.style.width = valueMakan+"%";

        valueMain = valueMain + tambahMain;
        widthMain.style.width = valueMain+"%";

        valueTidur = valueTidur - kurangTidur;
        widthTidur.style.width = valueTidur+"%";
        console.log(valueMakan);
        if (valueMakan > 99) {
            valueMain = valueMain + 2;
            widthMain.style.width = valueMain + "%";

            valueTidur = valueTidur - 2;
            widthTidur.style.width = valueTidur + "%";
            avatarTemp = avatar;
            buttonType = "";
        }
    }else if (buttonType == "tidur") {
        kurangMakan = 0.4;
        kurangTidur = 0.1;
        kurangMain = 0.2;
        tambahTidur = 1;

        if (valueMakan <= 0) {
            valueMakan = 0;
            widthMakan.style.width = valueMakan+"%"; 
        }else{
            valueMakan = valueMakan - kurangMakan;
            widthMakan.style.width = valueMakan+"%";    
        }
        if (valueMain <= 0) {
            valueMain = 0;
            widthMain.style.width = valueMain+"%";
        }else{
            valueMain = valueMain - kurangMain;
            widthMain.style.width = valueMain+"%";
        }

        valueTidur = valueTidur + tambahTidur;
        widthTidur.style.width = valueTidur+"%";

        if (valueTidur > 99) {
            avatarTemp = avatar;
            buttonType = "";
        }

    }else if (buttonType == "main") {
        kurangMakan = 0.4;
        kurangTidur = 0.2;
        kurangMain = 0.2;
        tambahMain = 0.8;

        if (valueMakan <= 0) {
            valueMakan = 0;
            widthMakan.style.width = valueMakan+"%"; 
        }else{
            valueMakan = valueMakan - kurangMakan;
            widthMakan.style.width = valueMakan+"%";    
        }
        if (valueTidur <= 0) {
            valueTidur = 0;
            widthTidur.style.width = valueTidur+"%";
        }else{
            valueTidur = valueTidur - kurangTidur;
            widthTidur.style.width = valueTidur+"%";
        }
        
        valueMain = valueMain + tambahMain;
        widthMain.style.width = valueMain+"%"; 

        if (valueMain > 99) {
            avatarTemp = avatar;
            buttonType = "";
        }
    }else if (buttonType == "belajar") {
        // finish
        kurangMakan = 0.6;
        kurangTidur = 0.2;
        kurangMain = 0.3;

        if (valueMain > 90) {
            tambahBelajar = 0.5;
        }
        else if(valueMain < 20){
            tambahBelajar = 0.2;
        }
        else if (valueMain < 10) {
            tambahBelajar = 0.1;
        }
        else if (valueMakan < 20) {
            tambahBelajar = 0.1;
        }
        else if (valueTidur < 20) {
            tambahBelajar = 0.1;
        }
        else{
            tambahBelajar = 0.4;
        }
        // klau sudah 0 akan stop
        if (valueMakan <= 0) {
            valueMakan = 0;
            widthMakan.style.width = valueMakan+"%"; 
        }else{
            valueMakan = valueMakan - kurangMakan;
            widthMakan.style.width = valueMakan+"%";    
        }
        if (valueTidur <= 0) {
            valueTidur = 0;
            widthTidur.style.width = valueTidur+"%";
        }else{
            valueTidur = valueTidur - kurangTidur;
            widthTidur.style.width = valueTidur+"%";
        }
        if (valueMain <= 0) {
            valueMain = 0;
            widthMain.style.width = valueMain+"%";
        }else{
            valueMain = valueMain - kurangMain;
            widthMain.style.width = valueMain+"%";
        }
        
        hoursTemp = 0;
        valueBelajar = valueBelajar + tambahBelajar;
        widthBelajar.style.width = valueBelajar+"%";
    }

// 1 DETIK SEKALI
}

console.log(avatar);
console.log(nama);