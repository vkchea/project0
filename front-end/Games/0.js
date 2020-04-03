/*
    Creating a guessing game where user guesses who the killer is.
    The game will start off with four characters, and they get shuffled.
    End animation will dramatically display the sole character...
*/
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

let i = 0;
let img_cnt = 4;

let image1 = document.createElement("img");
image1.setAttribute("src", "./images0/edsheeran.png");
image1.setAttribute("alt", "culprit1");
image1.setAttribute("name", "Ed Sheeran");
image1.addEventListener("click", checkCulp);
let image2 = document.createElement("img");
image2.setAttribute("src", "./images0/theweeknd.png");
image2.setAttribute("alt", "culprit2");
image2.setAttribute("name", "The Weeknd");
image2.addEventListener("click", checkCulp);
let image3 = document.createElement("img");
image3.setAttribute("src", "./images0/joseph.png");
image3.setAttribute("alt", "culprit3");
image3.setAttribute("name", "Joseph");
image3.addEventListener("click", checkCulp);
let image4 = document.createElement("img");
image4.setAttribute("src", "./images0/annie.jpeg");
image4.setAttribute("alt", "culprit4");
image4.setAttribute("name", "Annie");
image4.addEventListener("click", checkCulp);

let img_arr = [image1, image2, image3, image4];
let temp_arr = [];
let culprits_HTML = document.getElementById("display-culprits");
let culp_num;

let shuffle;

function stopShuffle(){
    setTimeout(function(){
        clearInterval(shuffle)
    },2000);
};

function shuffleImg(){
    for(let j = 0; j < 4; j++){
        let img_index = getRandomInt(img_cnt);
        img_cnt--;
        culprits_HTML.appendChild(img_arr[img_index]);
        temp_arr.push(img_arr[img_index]);
        img_arr.splice(img_arr.indexOf(img_arr[img_index]), 1);
    }
    img_cnt = 4;
    img_arr = temp_arr;
    stopShuffle();
    culp_num = getRandomInt(4)+1;
}

let start_guessing_game = document.getElementById("start-guessing-game");
start_guessing_game.addEventListener("click", startGame);
let victim_HTML = document.getElementById("display-victim");
let countdown_html = document.createElement("p");
let strikes_count = 3;

function startGame(){
    let victim_img = document.createElement("img");
    victim_img.setAttribute("src", "./images0/robschneider.jpg");
    victim_img.setAttribute("alt", "victim");
    victim_HTML.appendChild(victim_img);
    countdown_html.setAttribute("id", "countdown");
    countdown_html.innerHTML = '[ ' + strikes_count + ' ]' + ' STRIKES';
    victim_HTML.appendChild(countdown_html);
    shuffleImg();
    shuffle = setInterval(shuffleImg, 800);
    start_guessing_game.style.display = "none";
}

let guess_count = 0;
function checkCulp(e){
    let culp_str = e.target.getAttribute("alt");
    let culp_int = parseInt(culp_str.slice(-1));
    if(culp_int == culp_num){
        let jail = document.createElement("img");
        jail.setAttribute("src", "./images0/jail.png");
        jail.setAttribute("id", "jail");
        culprits_HTML.appendChild(jail);
        e.target.setAttribute("id", "caught");
        let culprit_name = document.createElement("p");
        culprit_name.setAttribute("id", "culprit-name");
        culprit_name.innerHTML = 'CONGRATS YOU\'VE CAPTURED ' + (e.target.getAttribute("name")).toUpperCase() + ' AS THE CULPRIT!';
        culprits_HTML.appendChild(culprit_name);
        console.log('Congrats you found the culprit!');
        image1.removeEventListener("click", checkCulp);
        image2.removeEventListener("click", checkCulp);
        image3.removeEventListener("click", checkCulp);
        image4.removeEventListener("click", checkCulp);
    } else {
        e.target.setAttribute("id", "shake");
        console.log('Culprit is still at large...');
        guess_count += 1;
        strikes_count -= 1;
        countdown_html.innerHTML = '[ ' + strikes_count + ' ]' + ' STRIKES';
        if(guess_count == 3){
            console.log('Tough luck, the culprit escaped.');
            image1.removeEventListener("click", checkCulp);
            image2.removeEventListener("click", checkCulp);
            image3.removeEventListener("click", checkCulp);
            image4.removeEventListener("click", checkCulp);
        }
    }
}