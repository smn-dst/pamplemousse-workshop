import AbstractPage from "./abstract-page.js";

export default class Sample extends AbstractPage {
  onEnter() {
    super.onEnter();

    this.intro();
  }

  intro() {
    console.log("Sample intro");
  }

  addEvents() {
    super.addEvents();
  }

  onScroll(event) {
    super.onScroll(event);
  }

  onResize(event) {
    super.onResize(event);
  }

  raf(time) {
    super.raf(time);
  }

  destroy() {}
}
