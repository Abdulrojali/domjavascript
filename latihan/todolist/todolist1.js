// toggle
let active=()=>{
    document.querySelector('.headerlinks').classList.toggle('active');
}
let toggle=document.querySelector('div .headertoggle i').addEventListener('click',active)



// validation todolist
function createElement(){
let input=document.querySelector('.todolist').value
    let content=`<h3>${input}<span onclick='handlerClick()'>-</span><h3>`
    let section=document.createElement('section');
    section.setAttribute('id','content');
    section.innerHTML=content;
    document.querySelector('.nav-content-output').appendChild(section)
}
// input todolist
let submit=document.querySelector('.submit').addEventListener('click',createElement)


// validation handlerclick
function handlerClick(){
    let col=document.querySelectorAll('section')
    col.forEach(el=>{
        el.addEventListener('click',function(){
            el.remove()
        })
    })
}