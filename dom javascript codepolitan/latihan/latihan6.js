let slideLeft=document.querySelector('.slideone')
let slideRight=document.querySelector('.slidetwo')


function handlerLeft(){
    slideLeft.classList.toggle('active')
}
function handlerRight(){
    slideRight.classList.toggle('active')

}
function handlerOpacity(){
    document.body.classList.toggle('active')
}