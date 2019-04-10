import * as THREE from 'three'

var mouseX = 0,
  mouseY = 0,
  windowHalfX = 0,
  windowHalfY = 0,
  SEPARATION = 200,
  AMOUNTX = 10,
  AMOUNTY = 10,
  camera,
  scene,
  renderer

if (typeof window !== 'undefined') {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2
}

// init();
// animate();

function onWindowResize() {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX - 300
  mouseY = event.clientY - windowHalfY - 300
}

function onDocumentTouchStart(event) {
  if (event.touches.length > 1) {
    event.preventDefault()
    mouseX = event.touches[0].pageX - windowHalfX
    mouseY = event.touches[0].pageY - windowHalfY
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length == 1) {
    // event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX
    mouseY = event.touches[0].pageY - windowHalfY
  }
}

function render() {
  camera.position.x += ((-mouseX + 200 - camera.position.x) / 2) * 0.05
  camera.position.y += ((-mouseY + 200 - camera.position.y) / 2) * 0.05
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
}

export const init = () => {
  var container,
    separation = 100,
    amountX = 50,
    amountY = 50,
    particle

  container = document.querySelector('.section_preface-listing__background')
  // document.body.appendChild( container );

  scene = new THREE.Scene()

  renderer = new THREE.CanvasRenderer({ alpha: true }) // gradient; this can be swapped for WebGLRenderer
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(renderer.domElement)

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )
  camera.position.z = 20

  // particles
  var PI2 = Math.PI * 2
  var material = new THREE.SpriteCanvasMaterial({
    color: 0xffffff,
    program: function(context) {
      context.beginPath()
      context.arc(0, 0, 0.5, 0, PI2, true)
      context.fill()
    }
  })

  var geometry = new THREE.Geometry()

  for (var i = 0; i < 100; i++) {
    particle = new THREE.Sprite(material)
    particle.position.x = Math.random() * 2 - 1
    particle.position.y = Math.random() * 2 - 1
    particle.position.z = Math.random() * 2 - 1
    particle.position.normalize()
    particle.position.multiplyScalar(Math.random() * 10 + 450)
    particle.scale.x = particle.scale.y = 10
    scene.add(particle)
    geometry.vertices.push(particle.position)
  }

  // lines
  var line = new THREE.Line(
    geometry,
    new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5 })
  )
  scene.add(line)

  // mousey
  document.addEventListener('mousemove', onDocumentMouseMove, false)
  document.addEventListener('touchstart', onDocumentTouchStart, false)
  document.addEventListener('touchmove', onDocumentTouchMove, false)

  window.addEventListener('resize', onWindowResize, false)
}

export const animate = () => {
  requestAnimationFrame(animate)
  render()
}
