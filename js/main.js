console.log('hello')
let parent;

setTimeout(slideshow, 2000)

function slideshow() {
  console.log('timer')
  parent = document.getElementById('parent')
  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild)
  }

  let myScript = document.createElement('script')
  myScript.src = 'js/remix1.js'
  parent.appendChild(myScript)
// count what slide you're on
  // add the next slideshow element
}
