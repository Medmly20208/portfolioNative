const navIcon = document.getElementsByClassName("nav_icon")
const mobileNav = document.getElementsByClassName("mobile_nav")
const backdrop = document.getElementsByClassName("backdrop")
const downlaodBtn = document.getElementById("download_resume")
const fileLinks = document.getElementsByClassName("file_download")




navIcon[0].onclick = ()=>{
    mobileNav[0].style.display="block"
}

backdrop[0].onclick = ()=>{
    mobileNav[0].style.display="none"
}

downlaodBtn.onclick =()=>{
    fileLinks[0].click()
   

}