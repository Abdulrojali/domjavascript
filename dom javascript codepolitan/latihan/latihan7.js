let input=document.querySelector('.input')
let ouput=document.querySelector('.ouput')
let click=document.querySelector('.click')

// key ini bisa digunakan hanya apabila keyboard di click
// input.addEventListener('keydown',function(){
//     console.log('keyboard di click')
// })
// input.addEventListener('keyup',function(){
//     console.log('keyboard di click')
// })


//key input dan change
input.addEventListener('change',()=>{
    console.log(input.value)
})
input.addEventListener('keyup',()=>{
    ouput.innerHTML=input.value
})



// perbedaan antara input,change dengan kedown dan keyup adalah saat input tidak menggunakan keyboard
// maka keydown dan keyup tidak bisa di gunakan sebaliknya input dan change akan mengembalikan ouput baik  itu hasil dari 
// copy paste maupun hasil dari ketikan keyboard