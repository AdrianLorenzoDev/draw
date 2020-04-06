class Element {
    constructor(strokeSize, elementColor) {
        this.points = []
        this.strokeSize = strokeSize
        this.elementColor = elementColor
    }

    draw() {
        strokeWeight(this.strokeSize)
        stroke(this.elementColor)
        
        if (this.points.length == 1) {
            point(this.points[0].x, this.points[0].y)
        }

        for (let i = 0; i < this.points.length - 1; i++) {
            const lastPoint = this.points[i]
            const pt = this.points[i+1]
            line(lastPoint.x, lastPoint.y, pt.x, pt.y)
        }
    }
}
  