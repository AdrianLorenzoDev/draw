class Canvas {
    constructor() {
        this.elements = []
    }
    
    eraseCanvas() {
        this.elements = []
    }

    draw() {
        this.elements.forEach(element => {
            element.draw()
        })
    }
}
  