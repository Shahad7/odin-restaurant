import phone from './phone.png'
import home from './home.png';

const addContactContent = ()=>{
    const contactContent = document.createElement('div')
    contactContent.classList.add('contactContent')
    const contactChild = document.createElement('div')
    const c1 = document.createElement('div')
    const img1 = document.createElement('img')
    img1.src = phone
    img1.alt = 'phone icon'
    const c2 = document.createElement('div')
    const img2 = document.createElement('img')
    img2.src = home
    img2.alt = 'home icon'
    const t1 = document.createElement('div')
    const t2 = document.createElement('div')
    t1.textContent = '(123) 456 789'
    t2.textContent = '420 Empty Street, California, USA'
    c1.append(img1,t1)
    c2.append(img2,t2)
    contactChild.append(c1,c2)
    contactContent.append(contactChild)

    content.append(contactContent)

}

export {addContactContent}