export default function filter(){
  const ftoShow = '.filter'
  const fPopup = document.querySelector(ftoShow)
  const fTrigger = document.querySelector('.filter-trigger')

  fTrigger.addEventListener('click', () => {
    setTimeout(() => {
      if (!fPopup.classList.contains('show')) {
        fPopup.classList.add('show')
      }
    }, 250)
  })

  document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(ftoShow)
    if(!isClosest && fPopup.classList.contains('show')) {
      fPopup.classList.remove('show')
    }
  })

  const divToShow = '.mini-cart'
  const divPopup = document.querySelector(divToShow)
  const divTrigger = document.querySelector('.cart-trigger')

  divTrigger.addEventListener('click', () => {
    setTimeout(() => {
      if(!divPopup.classList.contains('show')){
        divPopup.classList.add('show')
      }
    }, 250)
  })

  document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divToShow)
    if(!isClosest && divPopup.classList.contains('show')){
      divPopup.classList.remove('show')
    }
  })

}