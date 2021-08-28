let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider .div-img")
    max = images.length;

function nextImage(){

    images[currentImageIndex].classList.remove('selected');

    currentImageIndex++;

    if(currentImageIndex >= max)
        currentImageIndex = 0;

    images[currentImageIndex].classList.add('selected');
};

function start(){
    setInterval(()=>{
        nextImage()
    }, time)
};

window.addEventListener("load", start);

// Categories Mouse over
function changepira(){
    document.getElementById("pira").style.color = '#00ff00';
    document.getElementById('pira').style.textShadow="0px 0px 10px #6cff6c";       
}
function colorback(){
document.getElementById("pira").style.color = "rgb(156, 156, 156)";
document.getElementById('pira').style.textShadow="none";
}

function changeporto(){
document.getElementById('porto').style.color = '#00ff00';
document.getElementById('porto').style.textShadow="0px 0px 10px #6cff6c";
}

function colorbackp(){ 
document.getElementById("porto").style.color = "rgb(156, 156, 156)";
document.getElementById('porto').style.textShadow="none";
}
function changecat(){
document.getElementById('categories').style.color = '#00ff00';
document.getElementById('categories').style.textShadow="0px 0px 10px #6cff6c";
}

function colorbackcat(){ 
document.getElementById("categories").style.color = "rgb(156, 156, 156)";
document.getElementById('categories').style.textShadow="none";
}














