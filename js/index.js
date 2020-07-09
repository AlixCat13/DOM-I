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

const navMenu = document.querySelectorAll("a");
console.log(navMenu);
const navMenu1 = navMenu[0].textContent = siteContent["nav"]["nav-item-1"];
const navMenu2 = navMenu[1].textContent = siteContent["nav"]["nav-item-2"];
const navMenu3 = navMenu[2].textContent = siteContent["nav"]["nav-item-3"];
const navMenu4 = navMenu[3].textContent = siteContent["nav"]["nav-item-4"];
const navMenu5 = navMenu[4].textContent = siteContent["nav"]["nav-item-5"];
const navMenu6 = navMenu[5].textContent = siteContent["nav"]["nav-item-6"];
navMenu.forEach( a => {
  a.style.color = "green"
})

let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent["cta"]["img-src"]);

const heading = document.getElementsByTagName("h1")
console.log(heading);

const button1 = document.querySelector("button");
console.log(button1);

const codeImg = document.getElementById('middle-img');
codeImg.setAttribute('src', siteContent["main-content"]["img-src"]);

const featuresHead = document.getElementsByTagName("h4")
console.log(featuresHead)
const featuresHead1 = featuresHead[0].textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.getElementsByTagName("p")
console.log(featuresContent);
const featuresContent1 = featuresContent[0].textContent = siteContent["main-content"]["features-content"];

const aboutHead1 = aboutHead.textContent = siteContent["main-content"]["about-h4"];
const aboutContent1 = featuresContent[1].textContent = siteContent["main-content"]["about-content"];


const servicesHead1 = servicesHead.textContent = siteContent["main-content"]["services-h4"];
const servicesContent1 = featuresContent[2].textContent = siteContent["main-content"]["services-content"];

const productHead1 = productHead[3].textContent = siteContent["main-content"]["product-h4"];
const productContent1 = featuresContent[3].textContent = siteContent["main-content"]["product-content"];

const visionHead1 = visionHead[4].textContent = siteContent["main-content"]["vision-h4"];
const visionContent1 = featuresContent[4].textContent = siteContent["main-content"]["vision-content"];

const contactHead = document.getElementsByTagName(".contact-h4")
const contactHead1 = contactHead.textContent = siteContent["contact"]["contact-h4"];


const pageFooter = document.getElementsByTagName("footer")
console.log('this is the footer', pageFooter);