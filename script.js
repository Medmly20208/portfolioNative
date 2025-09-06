const navIcon = document.getElementsByClassName("nav_icon");
const mobileNav = document.getElementsByClassName("mobile_nav");
const mobileNavContent = document.getElementsByClassName("mobile_nav_content");
const closeNavBtn = document.getElementsByClassName("close_icon_btn");
const lists = document.getElementsByClassName("section_link mobile");
const downlaodBtn = document.getElementById("download_resume");
const header = document.getElementsByTagName("header");
const fileLinks = document.getElementsByClassName("file_download");
const currentYearWrapper = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();

navIcon[0].onclick = () => {
  mobileNavContent[0].style.left = "0px";
};

window.onscroll = () => {
  if (window.scrollY != 0) {
    return header[0].classList.add("header_shadow");
  }
  header[0].classList.remove("header_shadow");
};

console.log(typeof lists);
Object.values(lists).map((list) => {
  list.onclick = () => {
    mobileNavContent[0].style.left = "-100vw";
  };
  return;
});

closeNavBtn[0].onclick = () => {
  mobileNavContent[0].style.left = "-100vw";
};
downlaodBtn.onclick = () => {
  fileLinks[0].click();
  fileLinks[1].click();
};
