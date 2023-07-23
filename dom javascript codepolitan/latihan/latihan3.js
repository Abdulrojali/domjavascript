// handler click to submit input 
let output=document.querySelector('.contentOutput')
function handlerClick(){
    let div=document.createElement('div')
    div.setAttribute('class','grid')
    element(div)
}
// handler output
function element(div){
    let username=document.querySelector('.username').value
    let keterangan=document.querySelector('.keterangan').value
    let tanggalBulan=document.querySelector('.tanggaldanbulan').value
     if(username =='' || keterangan==''|| tanggalBulan==''){
        alert('please input key!!')
     }
     else{
    let teks=`<i>${tanggalBulan}</i>
    <b class='hover' onclick='handlerDelete()'> X </b>
    <h3>${username}</h3>
     <p class='test'>${keterangan}</p>`
     div.innerHTML=teks
     output.appendChild(div)

     }
}
let testP;
// handler delete
function handlerDelete(){
    let test=document.querySelector('.hover')
    let parent=test.parentElement
     testP=parent.remove()
}