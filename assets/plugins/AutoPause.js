class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntesection = this.handleIntesection.bind(this);
  }
  run(player){
    this.player = player;
    const  obsever = new IntersectionObserver(this.handleIntesection, {
      threshold: this.threshold
    })
    obsever.observe(this.player.media);
  }
  handleIntesection(entries){
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible){
      this.player.play();
    } else {
      this.player.pause();
    }
    console.log(entry)
  }
}

export default AutoPause;