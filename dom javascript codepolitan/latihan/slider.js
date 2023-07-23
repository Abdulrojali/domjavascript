let index=0;
let img=document.querySelector('header img')
function handlerLeft(){
    index++
    img.setAttribute('src',`gambar${index}.jpg`)
    if(index>=3){
        img.setAttribute('sr',`gambar${index=0}.jpg`)
    }
    console.log(index)
}
function handlerRight(){
    index--
    img.setAttribute('src',`gambar${index}.jpg`)
    if(index==0){
        img.setAttribute('src',`gambar${index=3}.jpg`)
    }
    console.log(index)
}