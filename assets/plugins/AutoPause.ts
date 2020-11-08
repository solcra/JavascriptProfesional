import MediaPlayer from '../mediaPlayer'
class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handleIntesection = this.handleIntesection.bind(this);
    this.handleVisibityChange = this.handleVisibityChange.bind(this);
  }
  run(player){
    this.player = player;
    const  obsever = new IntersectionObserver(this.handleIntesection, {
      threshold: this.threshold
    })
    obsever.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibityChange)
  }
  private handleIntesection(entries: IntersectionObserverEntry[]){
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible){
      this.player.play();
    } else {
      this.player.pause();
    }
    console.log(entry)
  }

  private handleVisibityChange() {
    const isVisible = document.visibilityState =="visible"
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

}

export default AutoPause;