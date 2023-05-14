
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
        const player = new Player(iframe);
    
        player.on('timeupdate', function() {
            // console.log('played the video!');
            // if (localStorage.getItem('videoplayer-current-time')) {
            //     iframe.currentTime = parseFloat(localStorage.getItem('videoplayer-current-time'));
            //   }
            localStorage.setItem('videoplayer-current-time', iframe.currentTime);
            console.log('Hello');
        });
        
        player.getVideoTitle().then(function(title) {
            console.log('title:', title);
        });



