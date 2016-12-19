//Write your function calls below this line
function setColor(row, col, color) {
    var cell = $('#t')[0].rows[row].cells[col];
    cell.style.backgroundColor = color;
}

setColor(0,0, "green");
setColor(0,9, "purple");
setColor(9,9, "pink");
setColor(9,0, "red");
setColor(2,3, "yellow")
setColor(2,6, "yellow")
setColor(6,3, "yellow")
setColor(6,4, "yellow")
setColor(6,5, "yellow")
setColor(6,6, "yellow")
setColor(5,2, "yellow")
setColor(4,1, "yellow")
setColor(5,7, "yellow")
setColor(4,8, "yellow")