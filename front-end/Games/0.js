/*
    Creating a guessing game where user guesses who the killer is.
    The game will start off with four characters, and they get shuffled.
    End animation will dramatically display the sole character...
*/
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

let i = 0;
let max_shuffle = 5;
let img_cnt = 4;

let image1 = document.createElement("img");
image1.setAttribute("src", "./images0/edsheeran.png");
image1.setAttribute("alt", "culprit1")
let image2 = document.createElement("img");
image2.setAttribute("src", "./images0/theweeknd.png");
image2.setAttribute("alt", "culprit2")
let image3 = document.createElement("img");
image3.setAttribute("src", "./images0/joseph.png");
image3.setAttribute("alt", "culprit3")
let image4 = document.createElement("img");
image4.setAttribute("src", "./images0/annie.jpeg");
image4.setAttribute("alt", "culprit4")

let img_arr = [image1, image2, image3, image4];
let temp_arr = [];
let culprit_body_HTML = document.getElementById("display-culprits");

function stopShuffle(){
    setTimeout(function(){
        clearInterval(shuffle)
    },6000);
};

function shuffleImg(){
    for(let j = 0; j < 4; j++){
        //Generate a random number between 0-4
        let img_index = getRandomInt(img_cnt);
        //Subtract from total count to later use
        img_cnt--;
        console.log("img_index: " + img_index); 
        culprit_body_HTML.appendChild(img_arr[img_index]);
        temp_arr.push(img_arr[img_index]);
        img_arr.splice(img_arr.indexOf(img_arr[img_index]), 1);
    }
    img_cnt = 4;
    img_arr = temp_arr;
    stopShuffle();
}
shuffleImg();

let shuffle = setInterval(shuffleImg, 800);
