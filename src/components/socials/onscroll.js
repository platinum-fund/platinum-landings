export default (onscroll = () => {
  const elements = document.getElementsByClassName('socials__sidebar')
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

    if (parentTop <= 0 && !sidebar.classList.contains('fixed')) {
      sidebar.classList.add('fixed')
    } else if (parentTop > 0 && sidebar.classList.contains('fixed')) {
      sidebar.classList.remove('fixed')
    }
  }
})
