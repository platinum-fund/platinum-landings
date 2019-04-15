const onscroll = () => {
  const elements = document.getElementsByClassName('socials_sidebar')
  if (elements.length > 0) {
    let sidebar = elements[0]
    let parent = sidebar.parentElement

    if (parent.offsetTop == 0) {
      const nextParent = parent.nextElementSibling
      if (nextParent !== null) {
        parent.removeChild(sidebar)
        sidebar = nextParent.appendChild(sidebar)
        parent = nextParent
      }
    }

    const parentTop = parent.getBoundingClientRect().top

    const classNameFixed = 'socials_sidebar--fixed'
    if (parentTop <= 0 && !sidebar.classList.contains(classNameFixed)) {
      sidebar.classList.add(classNameFixed)
    } else if (parentTop > 0 && sidebar.classList.contains(classNameFixed)) {
      sidebar.classList.remove(classNameFixed)
    }
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', onscroll)
}

export default onscroll
