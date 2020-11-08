import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'

const video = document.querySelector("video")

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();


const player = new MediaPlayer({ 
  el: video, 
  plugins:[new AutoPlay(), new AutoPause()]
});
//button.onclick = () => player.play();

// if ('serviceWorker' in navigator){
//   navigator.serviceWorker.register('/sw.js').catch(error => {
//     console.log(error.message)
//   })
// }

if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}


