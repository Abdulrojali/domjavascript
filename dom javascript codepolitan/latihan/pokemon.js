// http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container=document.querySelector('.container')
const baseUrl='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for(let i=0; i<500; i++){
    let img=document.createElement('img')
    let paraf=document.createElement('p')

    img.src=`${baseUrl}${[i]}.png`
    paraf.innerHTML=`${baseUrl[i]}`

    container.appendChild(img)
    container.insertAdjacentElement('afterbegin',paraf)
}