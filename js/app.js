let oneLine = document.querySelector(".one");
let twoLine = document.querySelector(".two");
let threeLine = document.querySelector(".three");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let mobileNav = document.querySelector(".mobile-nav");
let page = document.querySelector(".page");
// let pageSubMenu = document.querySelector(".page-sub-menu");
// let blogSubMenu = document.querySelector(".blog-sub-menu");
// let shopSubMenu = document.querySelector(".shop-sub-menu");
// let pageSubMenuArr = ["about us","what we offer","our team","pricing list","testimonials"];
// let blogSubMenuArr = ["grid blog","blog list","blog post"];
// let shopSubMenuArr = ["grid shop","shop list","single product","cart page","checkout"];
let ourContactUsContainer = document.querySelector(".our-contact-us-container");
let open = document.getElementById("open");
let close = document.getElementById("close");
let crossOne = document.querySelector(".cross-1");
let crossTwo = document.querySelector(".cross-2");
let slider = document.querySelector(".slider");
let aTag =document.querySelectorAll(".about-us-menu span");
let input = document.querySelector(".input");
let searchInputContainer = document.querySelector(".search-input-container");
let searchBtn = document.querySelector("#search");
let closeBtn = document.querySelector("#x-circle");
// let inputSearchParent = document.querySelector(".input-search-parent");
let buttonGroup = document.querySelector(".button-group");
let span = document.querySelectorAll('.button-group button span');
let progressBar = document.querySelector(".progressBar");


open.addEventListener("click",()=>{
    ourContactUsContainer.style.width = "400px";
    setTimeout(()=>{
        crossOne.style.width ="25px";
    },200);
    setTimeout(()=>{
        crossTwo.style.width ="25px";
    },400);
})
close.addEventListener("click",()=>{
    ourContactUsContainer.style.width = 0;
    setTimeout(()=>{
        crossOne.style.width ="0";
    },200);
    setTimeout(()=>{
        crossTwo.style.width ="0";
    },400);
})

// listMenu(pageSubMenuArr,pageSubMenu);
// listMenu(blogSubMenuArr,blogSubMenu);
// listMenu(shopSubMenuArr,shopSubMenu);
//
// function listMenu (liTag,menu){
//
//     liTag.forEach(element=>{
//         let liTag = document.createElement("li");
//         let content = document.createTextNode(element);
//         liTag.append(content);
//         menu.append(liTag);
//     })
// }


let animateHamburgerMenu = ()=>{
    if ( twoLine.style.opacity === "0"){
        twoLine.style.opacity = "1";
        oneLine.style.transform = "rotate(0) translate(0)";
        threeLine.style.transform = "rotate(0) translate(0)";
        mobileNav.style.width = "0";
    }else{
        twoLine.style.opacity = "0";
        oneLine.style.transform = "rotate(45deg) translate(4px,7px)";
        threeLine.style.transform = "rotate(-45deg) translate(4px,-7px)";
        mobileNav.style.width = "300px";
    }

};
let activeMenu =(e)=>{
    let current = e.target;
    let currentOffsetWidth = current.offsetWidth;
    let currentOffsetLeft = current.offsetLeft;
    slider.style.width = `${currentOffsetWidth}px`;
    slider.style.transform = `translateX(${currentOffsetLeft}px)`;
}

hamburgerMenu.addEventListener("click",animateHamburgerMenu);


aTag.forEach((el,index)=>{
    if (index === 0){
        slider.style.width = el.offsetWidth + "px";
    }
    el.addEventListener('mouseover',activeMenu)
})

let divTag = document.querySelectorAll(".about-us-menu li div[id]");
// console.log(divTag)



for(let i = 0; i < aTag.length; i++){
    for (let i = 0; i < divTag.length; i++){

        if (i === 0) {
            aTag[i].classList.add("active-menu");
            divTag[i].classList.add("div-show");

        }
        aTag[i].addEventListener("click",()=>{
            aTag[i].classList.add("active-menu");
            divTag[i].classList.add("div-show");
            for (let i = 0; i < aTag.length; i++){
                aTag[i].classList.remove("active-menu");
                for (let i = 0; i < divTag.length; i++){
                    divTag[i].classList.remove("div-show");
                }
            }
            aTag[i].classList.add("active-menu");
            divTag[i].classList.add("div-show");
        });
    }
}
searchBtn.addEventListener("click",()=>{

    searchInputContainer.style.display = "block";
    setTimeout(()=>{
        input.style.width = "70%";
    },200)

})
closeBtn.addEventListener('click',()=>{

    setTimeout(()=>{
        input.style.width = 0;
    })
    setTimeout(()=>{
        searchInputContainer.style.display = "none";
    },200);
});

let filterMenu = (e)=>{
    let currentTag = e.target;
    let currentOffsetWidthTag = currentTag.offsetWidth;
    let currentOffsetLeftTag = currentTag.offsetLeft;
    progressBar.style.width = `${currentOffsetWidthTag}px`;
    progressBar.style.transform = `translateX(${currentOffsetLeftTag}px)`;
};

for (let i = 0; i < span.length; i++){
    if (i === 0){
        progressBar.style.width = span[i].offsetWidth + "px";
        span[i].classList.add("active-menu");
    }
    span[i].addEventListener("mouseover",filterMenu)
    span[i].addEventListener("click",(e)=>{
        span[i].classList.add("active-menu");
        for (let i = 0; i < span.length; i++){
            span[i].classList.remove("active-menu");
        }
        span[i].classList.add("active-menu");
    })
}

