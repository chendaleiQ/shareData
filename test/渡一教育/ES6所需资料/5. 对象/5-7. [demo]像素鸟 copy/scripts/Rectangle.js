class Rectangle {
    constructor(width, height, left, top, speedX, speedY, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.speedX = speedX;
        this.speedY = speedY;
        this.dom = dom;
    }
    render() {
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.height = this.width + "px";
    }
}
move(duration) {

}