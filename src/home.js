import { openMenu } from "."
const addHomeContent = ()=>{
    const homeContent =  document.createElement('div')
    homeContent.classList.add('main-content','homeContent')
    const mainChild = document.createElement('div')
    mainChild.classList.add('main-child')
    const h1 = document.createElement('h1')
    h1.textContent = 'ODIN RESTAURANT'
    const titleDesc = document.createElement('div')
    titleDesc.textContent = 'serving the best!'
    titleDesc.classList.add('title-desc')
    const exploreButton = document.createElement('div')
    exploreButton.classList.add('explore')
    exploreButton.addEventListener('click',openMenu);
    const buttonBottom = document.createElement('button')
    buttonBottom.classList.add('button-bottom')
    const buttonTop = document.createElement('span')
    buttonTop.classList.add('button-top')
    buttonTop.textContent = 'Explore food'
    buttonBottom.append(buttonTop)
    exploreButton.append(buttonBottom)
    mainChild.append(h1,titleDesc,exploreButton)
    homeContent.append(mainChild)
    
    content.appendChild(homeContent)
}

export {addHomeContent}