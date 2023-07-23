

let text=document.querySelector('.text')

// text.addEventListener('keydown',handlerClick)
// function handlerClick(){
//     console.log(this.target)
// }
text.addEventListener('keydown',function(){
    console.log(text.currentTarget)
    if(text>10){
        alert('this input maxx')
    }
})