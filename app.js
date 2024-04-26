let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// Helper function to restart GIF animation
function restartGif(imgElement) {
    let imageUrl = imgElement.src;
    imgElement.src = ''; // Clear the src
    imgElement.src = imageUrl; // Reset the src to its original
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function() {
    restartGif(document.querySelector('#btn1').closest('.item').querySelector('.img'));
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function() {
    restartGif(document.querySelector('#btn2').closest('.item').querySelector('.img'));
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function() {
    restartGif(document.querySelector('#btn3').closest('.item').querySelector('.img'));
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 3!");
        item = "3";
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function() {
    restartGif(document.querySelector('#btn4').closest('.item').querySelector('.img'));
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 4!");
        item = "4";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
