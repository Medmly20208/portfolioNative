const navIcon = document.getElementsByClassName("nav_icon")
const mobileNav = document.getElementsByClassName("mobile_nav")
const backdrop = document.getElementsByClassName("backdrop")

navIcon[0].onclick = ()=>{
    mobileNav[0].style.display="block"
}

backdrop[0].onclick = ()=>{
    mobileNav[0].style.display="none"
}
