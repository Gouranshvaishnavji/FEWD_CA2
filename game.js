
// function musicPlay() {
//     var audio = new Audio('./click3.mp3');
//     audio.play();
// }
// ['itachi.ico', 'Dora.png', 'monkey.png', 'santa.png', 'boots-dora.png']
// function musicStop() {
//     var audio = document.getElementById("audio");
//     audio.pause();
// }
// play.addEventListener("onlick", musicPlay)
// play.addEventListener("click", musicStop)
document.addEventListener('DOMContentLoaded', function () {
    var images = ['Dora.png', 'monkey.png', 'boots-dora.png', 'simba.png','sniper.png'] //image URLs to this array
    var clickSound = new Audio('click3.mp3'); // click sound URL
    var score = 0;
    var scoreElement = document.getElementById('score');
    var timeLimit = 20; // 20 seconds
    var timerElement = document.getElementById('timer');

    var timerId = setInterval(function () {
        timeLimit--;
        timerElement.textContent = timeLimit + ' seconds';
    let message;

    if (score < 3) {
        message = 'You score is less than 3 :'; 
    } else {
        message = 'You win and score is : ';
    }
        if (timeLimit === 0) {
            clearInterval(timerId);
            alert(message + score);
            localStorage.setItem('finalScore', score);
            window.location.href = 'score.html'; // Redirect to score.html
        }
    }, 1000);

    document.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            // If the clicked element is an image
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

        // Set the image position
        randomImage.style.position = 'absolute';
        randomImage.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        randomImage.style.top = Math.random() * (window.innerHeight - 100) + 'px';

        // Append the image to the body
        document.body.appendChild(randomImage);
    }
    
    // Initial image spawn
    spawnRandomImage();
});
// document.addEventListener('DOMContentLoaded', function () {
//     // Retrieve the score from local storage
//     var finalScore = localStorage.getItem('finalScore');

//     // Display the score on the page
//     var finalScoreElement = document.getElementById('finalScore');
//     finalScoreElement.textContent = 'Score: ' + finalScore;

//     // Clear the score from local storage
//     localStorage.removeItem('finalScore');
// });