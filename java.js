let Product=document.getElementById("Product");
let dropdown_Product  =document.getElementById("dropdown-Product");

let Company=document.getElementById("Company"); 
let dropdown_Company = document.getElementById("dropdown-Company");

let connect  = document.getElementById("connect");
let dropdown_Connect= document.getElementById("dropdown-Connect");

let icon_arrow_light =document.querySelectorAll(".icon-arrow-light");
let icon_arrow_dark  =document.querySelectorAll(".icon-arrow-dark");

function CloseAllDrops(){
    // dropdown_Product.style.display= "none"; 
    // dropdown_Company.style.display= "none"; 
    // dropdown_Connect.style.display= "none"; 

    let dropdowns=[dropdown_Product,dropdown_Company,dropdown_Connect];
    dropdowns.forEach(dropdown=>{
        dropdown.style.display="none";
    });
  
    icon_arrow_light.forEach(icon=>{
        icon.style.transform="rotate(0deg)"
    });

    icon_arrow_dark.forEach(icon=>{
        icon.style.transform="rotate(0deg)"
    });

}
Product.addEventListener('click' , function(){
    // dropdown_Product.style.display= dropdown_Product.style.display==='none'||dropdown_Product.style.display===""?"flex":"none";  
    if(dropdown_Product.style.display==='none'||dropdown_Product.style.display===""){
        event.stopPropagation();
        CloseAllDrops();
        dropdown_Product.style.display= "flex";  
        icon_arrow_light[0].style.transform= "rotate(180deg)";
        icon_arrow_dark[0].style.transform= "rotate(180deg)";
    }
    else{
        dropdown_Product.style.display= "none"; 
        icon_arrow_light.src="images/icon-arrow-light.svg"; 
         icon_arrow_light[0].style.transform= "rotate(0deg)" 
         icon_arrow_dark[0].style.transform= "rotate(0deg)";
    }
});

Company.addEventListener('click' , function(){
    if(dropdown_Company.style.display==='none'||dropdown_Company.style.display===""){
        event.stopPropagation();
        CloseAllDrops();
        dropdown_Company.style.display= "flex";  
        icon_arrow_light[1].style.transform= "rotate(180deg)";
        icon_arrow_dark[1].style.transform= "rotate(180deg)";

    }
    else{
        dropdown_Company.style.display= "none"; 
        icon_arrow_light.src="images/icon-arrow-light.svg"; 
        icon_arrow_light[1].style.transform= "rotate(0deg)" 
        icon_arrow_dark[1].style.transform= "rotate(0deg)";

    }
});

connect.addEventListener('click' , function(){
    if(dropdown_Connect.style.display==='none'||dropdown_Connect.style.display===""){
        event.stopPropagation();
        CloseAllDrops();
        dropdown_Connect.style.display= "flex";  
        icon_arrow_light[2].style.transform= "rotate(180deg)";
        icon_arrow_dark[2].style.transform= "rotate(180deg)";

    }
    else{
        dropdown_Connect.style.display= "none"; 
        icon_arrow_light.src="images/icon-arrow-light.svg"; 
        icon_arrow_light[2].style.transform= "rotate(0deg)" 
        icon_arrow_dark[2].style.transform= "rotate(0deg)";

    }
});

document.addEventListener("click",()=>{
CloseAllDrops();
});



let menu = document.getElementById("menu");
let Nav = document.querySelector(".nav");

menu.addEventListener("click" , ()=>{
Nav.classList.toggle("active");
if (Nav.classList.contains("active")) {
    menu.src = "images/icon-close.svg";
  } else {
    menu.src = "images/icon-hamburger.svg";
  }
});

