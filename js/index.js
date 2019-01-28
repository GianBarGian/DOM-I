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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//I still prefer to declare all vars at begenning, but sometimes it's necessary to declar them as you go, specially if you add things to the html and need to select the new elemnets inside your nodes.
//nav
const nav = document.querySelector('nav');
const newNavAnchor = document.createElement('a');
newNavAnchor.href = "#";
newNavAnchor.textContent = "New created link";
const copyOfNNA = newNavAnchor.cloneNode(true);
nav.prepend(newNavAnchor);
nav.appendChild(copyOfNNA);
const navAnchors = nav.querySelectorAll('a');
navAnchors[1].textContent = "Services";
navAnchors[2].textContent = "Product";
navAnchors[3].textContent = "Vision";
navAnchors[4].textContent = "Features";
navAnchors[5].textContent = "About";
navAnchors[6].textContent = "Contact";
navAnchors.forEach(element => element.style = "color: green");

//cta
const ctaImg = document.querySelector('#cta-img');
const cta = document.querySelector('.cta');
const h1 = document.querySelector('h1');
const ctaButton = cta.querySelector('button');
ctaImg.src = "img/header-img.png";
h1.style = 'white-space: pre';
h1.textContent = "DOM\r\n Is\r\n Awesome";
//h1.innerHTML = "DOM<br> Is<br> Awesome"; //With this we use innerHTML, bad!
ctaButton.textContent = "Get Started";
let ctaButtonEvent = event => {
  return event.target.style ="background: blue";
}
ctaButton.addEventListener('click', ctaButtonEvent);

const h4s = document.querySelectorAll('h4');
const paragraphs = document.querySelectorAll('p');
//top section
h4s[0].textContent = "Features";
paragraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
h4s[1].textContent = "About";
paragraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//middle img
const middleImg = document.querySelector('.middle-img');
middleImg.src = "img/mid-page-accent.jpg";


//bottom section
h4s[2].textContent = "Services";
paragraphs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
h4s[3].textContent = "Product";
paragraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
h4s[4].textContent = "Vision";
paragraphs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//contact
h4s[5].textContent = "Contact";
paragraphs[5].style = 'white-space: pre';
paragraphs[5].textContent = "123 Way 456 Street\r\nSomewhere, USA";
//paragraphs[5].innerHTML = "123 Way 456 Street<br>Somewhere, USA"; //With this we use innerHTML, bad!
paragraphs[6].textContent = "1 (888) 888-8888";
paragraphs[7].textContent = "sales@greatidea.io";

//footer
paragraphs[8].textContent = "Copyright Great Idea! 2018";