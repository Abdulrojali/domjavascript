let angkaPertama=document.querySelector('.angka-pertama')
let angkaKedua=document.querySelector('.angka-kedua')

let a=document.querySelectorAll('a')
let arrayA=Array.from(a)
arrayA.forEach(el=>{
    el.addEventListener('click',function(){
        let hasil;
        if(el==='+'){
            hasil=el +el
        }
        else if(el=='-'){
            hasil=el-el
        }    
        else if(el=='*'){
            hasil=el*el
        }
        else if(el=='%'){
            hasil=el/el
        }
        else if (el==''){
            hasil=''
        }
        else{
            el=parseInt(el)
        }
        el.preventDefault()
        return hasil;
    })
})