// js for game page
document.addEventListener('DOMContentLoaded', function () {
var images = [
    './assests/Dora.png',
    './assests/monkey.png',
    './assests/boots-dora.png',
    './assests/simba.png',
    './assests/sniper.png',
];
    // declairing varab;les
    var clickSound = new Audio('click3.mp3'); // click sound URL
    var score = 0;
    var scoreElement = document.getElementById('score');
    var timeLimit = 20; // 20 seconds
    var timerElement = document.getElementById('timer');
// setting tiime limit to 20 seconds
    var timerId = setInterval(function () {
        timeLimit--;
        timerElement.textContent = timeLimit + ' seconds';
    let message;
// for alert message
    if (score < 3) {
        // on loss
        message = 'You score is less than 3 :'; 
    } else {
        //on win
        message = 'You win and score is : ';
    }
        // when 20 seconds completed
        if (timeLimit === 0) {
            clearInterval(timerId);
            alert(message + score);
            // updating score in local storage
            localStorage.setItem('finalScore', score);
            window.location.href = 'score.html'; // Redirect to score.html
        }
        // with delay of interval of 1 second
    }, 1000);
// To give sound on click and removing image from Html body
    document.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            // if th clicked element is an imge
            clickSound.play();
            // increasing score on click
            score++;
            scoreElement.textContent = score;
            document.body.removeChild(event.target);
            // Calling random image on removal of previous image
            spawnRandomImage();
        }
    });

    function spawnRandomImage() {
        var randomImage = new Image();
        var randomIndex = Math.floor(Math.random() * images.length);
        randomImage.src = images[randomIndex];

        // Setting the image positions so that image will not spawn in non-visible portions of display
        var maxWidth = window.innerWidth * 0.8; // 60vw
        var maxHeight = window.innerHeight * 0.7; // 70vh

        randomImage.style.position = 'absolute';
        randomImage.style.left = Math.random() * (maxWidth - 100) + 'px';
        randomImage.style.top = Math.random() * (maxHeight - 100) + 'px';

        document.body.appendChild(randomImage);
    }
    
    // Initial image spawn
    spawnRandomImage();
});

