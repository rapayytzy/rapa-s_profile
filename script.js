function scrollToSection(id){
const el = document.getElementById(id)

window.scrollTo({
top: el.offsetTop - 40,
behavior:"smooth"
})
}


const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})
})

document.querySelectorAll("section").forEach((el)=>{
observer.observe(el)
})


const profile = document.querySelector(".profile")

document.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth / 2 - e.pageX) / 25
let y = (window.innerHeight / 2 - e.pageY) / 25

profile.style.transform = `translate(${x}px, ${y}px)`
})


const buttons = document.querySelectorAll("button")

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 40px #38bdf8"

})

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="0 0 0px transparent"

})

})


window.addEventListener("scroll",()=>{

let scroll = window.scrollY

document.querySelector(".bg").style.transform =
`scale(${1 + scroll / 2000})`

})