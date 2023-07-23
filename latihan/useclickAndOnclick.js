function handlerClick(){
    console.log('use onclick')
}

let submit=document.querySelector('.submit')
submit.addEventListener('click',function(){
    console.log('user event click')
})