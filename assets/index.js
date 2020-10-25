import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();


const player = new MediaPlayer({ 
  el: video, 
  plugins:[new AutoPlay(), new AutoPause()]
});
//button.onclick = () => player.play();