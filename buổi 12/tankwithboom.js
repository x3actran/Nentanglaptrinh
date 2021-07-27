function moveUp() {
    let top = parseInt(document.getElementById("tank").style["top"]);

    document.getElementById("tank").style["top"] = top - 19 + "px";
}

function moveLeft() {
    let left = parseInt(document.getElementById("tank").style["left"]);

    document.getElementById("tank").style["left"] = left - 19 + "px";
}

function moveRight() {
    let left = parseInt(document.getElementById("tank").style["left"]);

    document.getElementById("tank").style["left"] = left + 19 + "px";
}

function moveDown() {
    let top = parseInt(document.getElementById("tank").style["top"]);

    document.getElementById("tank").style["top"] = top + 19 + "px";
}