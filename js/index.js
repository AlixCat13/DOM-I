const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navMenu = document.getElementsByTagName('a')
navMenu[0].textContent = 'Services'
navMenu[1].textContent = 'Product'
navMenu[2].textContent = 'Vision'
navMenu[3].textContent = 'Features'
navMenu[4].textContent = 'About'
navMenu[5].textContent = 'Contact'

navMenu[0].style.color = "green"
navMenu[1].style.color = "green"
navMenu[2].style.color = "green"
navMenu[3].style.color = "green"
navMenu[4].style.color = "green"
navMenu[5].style.color = "green"

const newNavItem = document.createElement('a')
newNavItem.textContent = 'Careers'
newNavItem.marginLeft = '20px'

const parentElement = document.querySelector('a')
parentElement.prepend(newNavItem);

const newNavItem2 = document.createElement('a')
newNavItem2.textContent = 'Log In'

const childElement = document.querySelector('a')
childElement.appendChild(newNavItem2);


//Found a better way to do this. 
// const navMenu = document.querySelectorAll("a");
// console.log(navMenu);
// const navMenu1 = navMenu[0].textContent = siteContent["nav"]["nav-item-1"];
// const navMenu2 = navMenu[1].textContent = siteContent["nav"]["nav-item-2"];
// const navMenu3 = navMenu[2].textContent = siteContent["nav"]["nav-item-3"];
// const navMenu4 = navMenu[3].textContent = siteContent["nav"]["nav-item-4"];
// const navMenu5 = navMenu[4].textContent = siteContent["nav"]["nav-item-5"];
// const navMenu6 = navMenu[5].textContent = siteContent["nav"]["nav-item-6"];


const heading = document.querySelector("h1")
heading.innerHTML = 'DOM <br>Is</br> Awesome';

const button1 = document.querySelector(".cta button");
button1.innerText = 'Get Started'
button1.fontSize = '16px'
console.log(button1);

let headImg = document.getElementById("cta-img");
headImg.src = "img/header-img.png";

const topHeads = document.querySelectorAll('.top-content h4');
topHeads[0].textContent = 'Features'
topHeads[1].textContent = 'About'

const topContent = document.querySelectorAll('.top-content p');
topContent[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topContent[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

const middleImg = document.getElementById('middle-img');
middleImg.src = "img/mid-page-accent.jpg"

const bottomHeads = document.querySelectorAll('.bottom-content h4');
bottomHeads[0].textContent = 'Services'
bottomHeads[1].textContent = 'Product'
bottomHeads[2].textContent = 'Vision'

const bottomContent = document.querySelectorAll('.bottom-content p')
bottomContent[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContent[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContent[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = 'Contact'
const contactText = document.querySelectorAll('.contact p')
contactText[0].innerHTML = '123 Way 456 Street<br></br>Somewhere, USA'
contactText[1].textContent = '1 (888) 888-8888'
contactText[2].textContent = 'sales@greatidea.io'


const pageFooter = document.querySelector('footer')
pageFooter.textContent = 'Copyright Great Idea! 2018'