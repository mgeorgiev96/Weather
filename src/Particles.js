import React from 'react'


function Particles() {

    const createStar =()=>{
        let body = document.querySelector('body')
        let div = document.createElement('div')
        div.classList.add('stars')
        div.style.top = -3 + '%'
        div.style.left = (Math.random()*100) + '%'
        body.appendChild(div)
        setTimeout(() => {
            body.removeChild(div)  
        }, 4000);

}
const createStarSecond =()=>{
    let body = document.querySelector('body')
    let div = document.createElement('div')
    div.classList.add('stars')
    div.style.top = -3 + '%'
    div.style.left = (Math.random()*5) + '%'
    body.appendChild(div)
    setTimeout(() => {
        body.removeChild(div)  
    }, 4000 );

}
const createStarThird =()=>{
    let body = document.querySelector('body')
    let div = document.createElement('div')
    div.classList.add('stars')
    div.style.top = (Math.random()*100) + '%'
    div.style.left = 1 + '%'
    body.appendChild(div)
    setTimeout(() => {
        body.removeChild(div)  
    }, 4000);

}
    setInterval(() => {
        createStar()
        createStarSecond()   
        createStarThird()
    }, 1000);
    return (
      <>
      </>
    )
}
export default  Particles;