const canvas = new Canvas()
var colorPicker
var strokeSize
var isDrawing = false


window.onload = function () {
    strokeSize = document.getElementById("strokeElement").value
    document.getElementById("strokeValue").innerText = strokeSize
}

function setup() {
    noCursor()
    createCanvas(windowWidth, windowHeight)
    
    colorPicker = createColorPicker("#000000")
    colorPicker.parent("colorElement")
}

function mousePressed(){
    element = new Element(strokeSize, colorPicker.color());
    element.points.push(new Point(mouseX, mouseY))
    canvas.elements.push(element)
}

function mouseDragged(){
    canvas.elements[canvas.elements.length - 1].points.push(
        new Point(mouseX, mouseY)
    )
}

function strokeChanged(value) {
    strokeSize = value;
    document.getElementById("strokeValue").innerText = strokeSize
}
  
function draw() {
    background(255)

    fill(colorPicker.color())
    stroke(colorPicker.color())
    canvas.draw()

    noFill()
    stroke(colorPicker.color())
    strokeWeight(strokeSize)
    point(mouseX, mouseY)
}

function removeDraw() {
    canvas.eraseCanvas()
}