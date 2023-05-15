import pizza from './pizza.jpg'
import burger from './burger.jpg'
import omelette from './omelette.jpg'
import cake from './cake.jpg'

const addMenuContent = ()=>{
    const menuContent = document.createElement('div')
    menuContent.classList.add('menuContent')
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    const makeMenuItem = (htext,$,itext,imgname)=>{
        const menuItem = document.createElement('div')
        menuItem.classList.add('menu-item')
        const itemHeadline = document.createElement('div')
        itemHeadline.classList.add('item-headline')
        const headlineText = document.createElement('div')
        headlineText.setAttribute('id','headline-text')
        headlineText.textContent = htext
        const price = document.createElement('div')
        price.setAttribute('id','price')
        price.textContent = $
        itemHeadline.append(headlineText,price)
        const itemDesc = document.createElement('div')
        itemDesc.classList.add('item-desc')
        const itemText = document.createElement('div')
        itemText.setAttribute('id','item-text')
        itemText.textContent = itext
        const img = document.createElement('img')
        img.src = imgname
        itemDesc.append(itemText,img)
        menuItem.append(itemHeadline,itemDesc)
        menuContainer.append(menuItem)

    }
    makeMenuItem('Omelette with broccoli, tomatoes and red onions','3$',
                    "Craving for some omelette? Here's your best option with some extras!",
                    omelette)
    makeMenuItem('Raspberry cheesecake','7$',
                "You can never have enough of these",
                cake)
    makeMenuItem('Hamburger','4$',
                "Legend says no one has ever regretted ordering this burger",
                burger)
    makeMenuItem('Pizza','5$',
                "Mario prolly won't like it if you put pinapples on these",
                pizza)

    menuContent.append(menuContainer)
    content.appendChild(menuContent)

}

export {addMenuContent}