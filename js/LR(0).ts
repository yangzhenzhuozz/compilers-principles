//这里
class Demo {
  state = 0;
  public next() {
    switch (this.state) {
    }
    this.state++;
  }
}
let demo = new Demo();
(document.getElementById("LR_0_next") as HTMLButtonElement).onclick = () => {
  demo.next();
};
