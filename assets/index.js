import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();


const player = new MediaPlayer({ el: video, plugins:[new AutoPlay()]});
button.onclick = () => player.play();