
function handleKeyPress(event) {
    let audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    let allKeys = document.querySelectorAll('.playing');
    
    if(audio) {
        audio.currentTime = 0;  
        audio.play();

        let key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
        
       
        allKeys.forEach(el => el.classList.remove('playing'));
        key.classList.add('playing');
    }

    function removePlaying(event) {
        if(event.target.classList.contains('playing')) {
            event.target.classList.remove('playing');
        }

    }
    allKeys.forEach(key => key.addEventListener('transitionend',removePlaying));

        
}



document.addEventListener('keydown',handleKeyPress);