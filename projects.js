let startTime = new Date().getTime();

function getRandomColors() {
    let letters = "123456789ACDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.Floor(Math.random() * 16)]
    };
    return color;
}

let makeShapeVisible = function(){
    if(Math.random() < 0.3) {
        shape.style.borderRadius = "50%"
    } else if(Math.random() >= 0.3 && (Math.random() <= 0.7)) {
        shape.style.borderRadius = "0%"
        shape.style.bacgroundColor = getRandomColors()
    }
     else if(Math.random() > 0.7) {
        shape.style.borderRadius = "0";
        shape.style.left = "0";
        shape.style.width ="0";
        shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "0"
        shape.style.bacgroundColor = "transparent"
    }
    
    document.getElementById("shape").style.display = "block";
    startTime = new Date().getTime();
}

makeShapeVisible();

document.getElementById("shape").onclick = function() {
    let shape = document.getElementById("shape");
    let top = Math.random() * 500;
    let left = Math.random() * 500;
    let width = Math.random() * 500 + 50;
    shape.style.display = "none"
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = width + "px";
    let finishTime = new Date().getTime();
    document.getElementById("shape").style.display = "none";
    let reactionTime = (finishTime - startTime) / 1000;
    document.getElementById("reactiontime").innerHTML = reactionTime + " seconds ";
    setTimeout(makeShapeVisible, Math.random() * 1000);
    
};

