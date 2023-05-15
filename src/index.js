import { addHomeContent } from "./home";
import { addMenuContent } from "./menu";
import { addContactContent } from "./contact";
import './style.css'

const content = document.getElementById('content');

const header = document.createElement('div')
header.classList.add('header')

const headerContent = document.createElement('div')
headerContent.classList.add('header-content')

const home = document.createElement('div')
home.classList.add('tab')
home.setAttribute('id','home')
home.textContent = 'Home'

const menu = document.createElement('div')
menu.classList.add('tab')
menu.setAttribute('id','menu')
menu.textContent = 'Menu'

const contact = document.createElement('div')
contact.classList.add('tab')
contact.setAttribute('id','contact')
contact.textContent = 'Contact'

headerContent.append(home,menu,contact)
header.appendChild(headerContent)
content.appendChild(header)

const footer = document.createElement('div')
footer.classList.add('footer')
const link1 = document.createElement('div')
link1.textContent = 'Image by '
const a1 = document.createElement('a')
a1.href = 'https://www.freepik.com/free-photo/cupcake-plate-surrounded-by-fruits_3356754.htm#query=food%20white%20background&position=24&from_view=search&track=ais'
a1.textContent = 'Freepik'
link1.appendChild(a1)
const a2 = document.createElement('a')
a2.href = 'https://www.flaticon.com/free-icons/phone'
a2.title = 'phone icons'
a2.textContent = 'Phone icons created by Freepik - Flaticon'
const a3 = document.createElement('a')
a3.href = 'https://www.flaticon.com/free-icons/black'
a3.title = 'black icons'
a3.textContent = 'Black icons created by Freepik - Flaticon'


footer.append(link1,a2,a3)
content.appendChild(footer)

home.style.backgroundColor = '#d4d4d8';
content.style.gridGap = '0px';
let prev = home;

const openMenu = ()=>{
    content.removeChild(document.querySelector(`.${prev.getAttribute('id')}Content`))
    addMenuContent();
    content.style.gridGap = '50px';
    menu.style.backgroundColor = '#d4d4d8';
    if(prev!=menu)
        prev.style.backgroundColor = '#f4f4f5';
    prev = menu;
}

addHomeContent();


menu.addEventListener('click',openMenu);

home.addEventListener('click',()=>{
    content.removeChild(document.querySelector(`.${prev.getAttribute('id')}Content`))
    addHomeContent()
    content.style.gridGap = '0px';
    home.style.backgroundColor = '#d4d4d8';
    if(prev!=home)
        prev.style.backgroundColor = '#f4f4f5';
    prev = home;

})

contact.addEventListener('click',()=>{
    content.removeChild(document.querySelector(`.${prev.getAttribute('id')}Content`))
    addContactContent();
    content.style.gridGap = '50px';
    contact.style.backgroundColor = '#d4d4d8';
    if(prev!=contact)
        prev.style.backgroundColor = '#f4f4f5';
    prev = contact;
})

export {openMenu}