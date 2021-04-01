const score=document.querySelector('.score');
const start=document.querySelector('.start');
const gamearea=document.querySelector('.gamearea')
console.log(gamearea)
start.addEventListener('click', start2)
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);
let keys={ArrowUp : false , ArrowDown:false , ArrowLeft:false , ArrowRight:false}
function keyDown(e){
    e.preventDefault();
    keys[e.key]=true;
    console.log(e.key);
    console.log(keys);
}
function keyUp(e){
    e.preventDefault();
    keys[e.key]=false;
    console.log(keys);
}
function gameplay(){
    console.log("Hey I am clicked")
    window.requestAnimationFrame(gameplay);
}
function start2(){
    window.requestAnimationFrame(gameplay);
}