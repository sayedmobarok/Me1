const benefit = document.querySelector('.benefitwrap')

let benefitarr =[
    {
        img:"assets/images/1.webp",
        heading:"Buy Once, Use Forever",
        heading2:"Free lifetime updates"
    },
    {
        img:"assets/images/2.webp",
        heading:"XD Files Included",
        heading2:"Get source files for free"
    },
    {
        img:"assets/images/3.webp",
        heading:"6 Months of Premium Support",
        heading2:"Get professional tech support"
    },
    {
        img:"assets/images/4.webp",
         heading:"Premium Plugins",
        heading2:"Bundled with the theme"
    },
    {
        img:"assets/images/5.webp",
        heading:"FAQ & Video Tutorials",
        heading2:"Versatile helpful tutorials"
    },
    {
        img:"assets/images/6.webp",
        heading:"Theme & Child Theme",
        heading2:"More options to experiment"
    },
]

benefit.innerHTML= benefitarr.map((item) =>{
    return` <div class="singlebenefit">
    <img src="${item.img}" alt="">
    <h3>${item.heading}</h3>
    <h4>${item.heading2}</h4>
  </div>`
}).join("")


const singleboxleft = document.querySelector(".singleboxleft")

let boxarr1 =[
    {
        img:"assets/images/1.svg"
    },
    {
        img:"assets/images/2.svg"
    },
    {
        img:"assets/images/3.svg"
    },
]

singleboxleft.innerHTML=boxarr1.map((item) =>{
    return`
     <div class="singlebox">
        <img src="${item.img}" alt="">
    </div>
    `
}).join("")

const singleboxmiddle = document.querySelector(".singleboxmiddle")


let boxarr2 = [
    {
        img:"assets/images/4.svg"
    },
    {
        img:"assets/images/5.svg"
    },
    {
        img:"assets/images/6.svg"
    },
    {
        img:"assets/images/7.svg"
    },
]

singleboxmiddle.innerHTML=boxarr2.map((item) =>{
    return`
      <div class="singlebox">
        <img src="${item.img}" alt="">
    </div>
    `
}).join("")



const singleboxright = document.querySelector(".singleboxright")


let boxarr3 = [
    {
        img:"assets/images/8.svg"
    },
    {
        img:"assets/images/9.svg"
    },
    {
        img:"assets/images/10.svg"
    },
]
    singleboxright.innerHTML=boxarr3.map((item) =>{
    return`
      <div class="singlebox">
        <img src="${item.img}" alt="">
    </div>
    `
}).join("")


const Featureswrap = document.querySelector(".Featureswrap")

let FeaturesArr =[
    {
        img:"assets/images/1 (2).svg",
        dec:"Multilingual Support",
        text:"Full WPML compatibility and RTL support allow you to create a powerful multilanguage website.",
    },
    {
        img:"assets/images/2 (1).svg",
        dec:"Cookie Notice",
        text:"Comply with EU GDPR cookie law and CCPA regulations by informing visitors that your site uses cookies.",
    },
    {
        img:"assets/images/3 (1).svg",
        dec:"GDPR Compliance",
        text:"Make your site GDPR compliant with privacy checkboxes, cookie pop-ups and WordPress built-in tools.",
    },
    {
        img:"assets/images/4 (1).svg",
        dec:"Flexible Theme Options",
        text:"Customize every essential aspect of your site in theme options, without touching a single line of code.",
    },
    {
        img:"assets/images/5 (1).svg",
        dec:"Detailed Docs",
        text:"Online documentation helps to discover all the features and uses of the product in no time.",
    },
    {
        img:"assets/images/6 (1).svg",
        dec:"Excellent Support",
        text:"Our qualified Tech Support team is your advantage. Save your time and effort.",
    },
    {
        img:"assets/images/7 (1).svg",
        dec:"Lifetime Updates",
        text:"Update any skin or bundled plugins automatically directly in the admin dashboard.",
    },
    {
        img:"assets/images/7 (1).svg",
        dec:"Power Elite Author",
        text:"Created by a Power Elite author, the theme meets the highest standards of product quality and customer service",
    },
]


Featureswrap.innerHTML = FeaturesArr.map((item) =>{
    return`
       <div class="singleFeatures">
                <div class="Featimages">
                  <img src="${item.img}" alt="">
                </div>
                <h4>${item.dec}</h4>
                <p>${item.text}</p>
            </div>
    `
}).join("")


function showNavber(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}