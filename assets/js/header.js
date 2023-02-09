export default function headerMenu() {
  const copyMenu = () => {
    let dptCategory = document.querySelector(".dpt-cat");
    let dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;
  
    let mainNav = document.querySelector(".header-nav nav");
    let navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;
  
    let topNav = document.querySelector(".header-top .wrapper");
    let topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
  }
  copyMenu();
  
  
  
  const menuButton = document.querySelector('.trigger')
  const closeButton = document.querySelector('.t-close')
  const addClass = document.querySelector('.site')
  
  const subMenu = document.querySelectorAll('.has-child')
  
  const toggleMenu = (menu) => {
    subMenu.forEach((item) => {
      if (item != menu){
        item.classList.remove('expand')
      }
    })
    menu.classList.toggle('expand')
  }
  
  subMenu.forEach((menu) => menu.addEventListener('click',()=>{
    toggleMenu(menu)
  }))
  
  menuButton.addEventListener('click', () => {
    addClass.classList.toggle('showmenu')
  })
  closeButton.addEventListener('click', () => {
    addClass.classList.remove('showmenu')
  })
}