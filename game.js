document.addEventListener('DOMContentLoaded', function () {
    var images = ['./assests/Dora.png', './assests/monkey.png', './assests/boots-dora.png', './assests/simba.png','./assests/sniper.png'] //image URLs to this array
    var clickSound = new Audio('click3.mp3'); // click sound URL
    var score = 0;
    var scoreElement = document.getElementById('score');
    var timeLimit = 20; // 20 seconds
    var timerElement = document.getElementById('timer');

    var timerId = setInterval(function () {
        timeLimit--;
        timerElement.textContent = timeLimit + ' seconds';
    let message;
//for alert message
    if (score < 3) {
        message = 'You score is less than 3 :'; 
    } else {
        message = 'You win and score is : ';
    }
        if (timeLimit === 0) {
            clearInterval(timerId);
            alert(message + score);
            // updating score in local storage
            localStorage.setItem('finalScore', score);
            window.location.href = 'score.html'; // Redirect to score.html
        }
    }, 1000);

    document.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            // if th clicked element is an imge
            clickSound.play();
            score++;
            scoreElement.textContent = score;
            document.body.removeChild(event.target);
            spawnRandomImage();
        }
    });

    function spawnRandomImage() {
        var randomImage = new Image();
        var randomIndex = Math.floor(Math.random() * images.length);
        randomImage.src = images[randomIndex];

        // Setting the image position
        var maxWidth = window.innerWidth * 0.6; // 60vw
        var maxHeight = window.innerHeight * 0.7; // 70vh

        randomImage.style.position = 'absolute';
        randomImage.style.left = Math.random() * (maxWidth - 100) + 'px';
        randomImage.style.top = Math.random() * (maxHeight - 100) + 'px';

        document.body.appendChild(randomImage);
    }
    
    // Initial image spawn
    spawnRandomImage();
});

