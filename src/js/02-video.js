import '../css/common.css';
import Player from '@vimeo/player';
import { throttle } from 'lodash';
const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function ({seconds}) {
 
  localStorage.setItem(TIME_KEY, seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
function resumePlayback() {
  const paused = localStorage.getItem(TIME_KEY);
  if (paused === null) {
    return;
  }

  
    player
      .setCurrentTime(paused);
      
  
}
resumePlayback();