
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
        const player = new Player(iframe);
    
        player.on('timeupdate', function() {
            console.log('played the video!');
            if (localStorage.getItem('iframe', 'timeupdate')) {
                iframe.currentTime = parseFloat(localStorage.getItem('iframe', 'timeupdate'));
              }
            localStorage.setItem('timeupdate', iframe.currentTime);
        });
    
        player.getVideoTitle().then(function(title) {
            console.log('title:', title);
        });



