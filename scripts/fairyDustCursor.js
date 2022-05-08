/* 
 * Fairy Dust Cursor.js
 * from: "90's Cursor Effects"
 * by: https://github.com/tholman
 * https://github.com/tholman/cursor-effects/blob/master/src/fairyDustCursor.js
*/ 

function fairyDustCursor(options) {
  let possibleColors = (options && options.colors) || [
    /* original:
    "#D61C59", // red-ish
    "#E7D84B", // yellow-ish
    "#1B8798", // turquoise-ish
    */
    "#64b5f6", // Java         - light blue
    "#1976d2", // SQL          - blue
    "#99e227", // Python       - light green
    "#00bfa5", // CSS          - green
    "#00838f", // HTML         - dark green
    "#ffd54f", // Maven        - yellow
    "#ef6c00", // Git          - orange
    "#f92342", // Linux        - red
    "#8d81ff", // Gradle       - violet
    "#d03ebf", // Intermediate - purple  
  ]

  let hasWrapperEl = options && options.element
  let element = hasWrapperEl || document.body

  let width = window.innerWidth
  let height = window.innerHeight
  const cursor = { x: width / 2, y: width / 2 }
  const lastPos = { x: width / 2, y: width / 2 }
  const particles = []
  const canvImages = []
  let canvas, context

  const char = "*"

  function init() {
    canvas = document.createElement("canvas")
    context = canvas.getContext("2d")
    canvas.style.top = "0px"
    canvas.style.left = "0px"
    canvas.style.pointerEvents = "none"

    if (hasWrapperEl) {
      canvas.style.position = "absolute"
      element.appendChild(canvas)
      canvas.width = element.clientWidth
      canvas.height = element.clientHeight
    } else {
      canvas.style.position = "fixed"
      element.appendChild(canvas)
      canvas.width = width
      canvas.height = height
    }

    context.font = "25px serif" // original: "21px serif"
    context.textBaseline = "middle"
    context.textAlign = "center"

    possibleColors.forEach((color) => {
      let measurements = context.measureText(char)
      let bgCanvas = document.createElement("canvas")
      let bgContext = bgCanvas.getContext("2d")

      bgCanvas.width = measurements.width
      bgCanvas.height =
        measurements.actualBoundingBoxAscent +
        measurements.actualBoundingBoxDescent

      bgContext.fillStyle = color
      bgContext.textAlign = "center"
      bgContext.font = "25px serif" // original: "21px serif"
      bgContext.textBaseline = "middle"
      bgContext.fillText(
        char,
        bgCanvas.width / 2,
        measurements.actualBoundingBoxAscent
      )

      canvImages.push(bgCanvas)
    })

    bindEvents()
    loop()
  }

  // Bind events that are needed
  function bindEvents() {
    element.addEventListener("mousemove", onMouseMove)
    element.addEventListener("touchmove", onTouchMove, { passive: true })
    element.addEventListener("touchstart", onTouchMove, { passive: true })
    window.addEventListener("resize", onWindowResize)
  }

  // unBind events that were added -- hack to make it stop
  function unBindEvents() {
    element.removeEventListener("mousemove", onMouseMove)
    element.removeEventListener("touchmove", onTouchMove, { passive: true })
    element.removeEventListener("touchstart", onTouchMove, { passive: true })
    window.removeEventListener("resize", onWindowResize)
  }

  function onWindowResize(e) {
    width = window.innerWidth
    height = window.innerHeight

    if (hasWrapperEl) {
      canvas.width = element.clientWidth
      canvas.height = element.clientHeight
    } else {
      canvas.width = width
      canvas.height = height
    }
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      for (let i = 0; i < e.touches.length; i++) {
        addParticle(
          e.touches[i].clientX,
          e.touches[i].clientY,
          canvImages[Math.floor(Math.random() * canvImages.length)]
        )
      }
    }
  }

  function onMouseMove(e) {
    window.requestAnimationFrame(() => {
      if (hasWrapperEl) {
        const boundingRect = element.getBoundingClientRect()
        cursor.x = e.clientX - boundingRect.left
        cursor.y = e.clientY - boundingRect.top
      } else {
        cursor.x = e.clientX
        cursor.y = e.clientY
      }

      const distBetweenPoints = Math.hypot(
        cursor.x - lastPos.x,
        cursor.y - lastPos.y
      )

      if (distBetweenPoints > 1.5) {
        addParticle(
          cursor.x,
          cursor.y,
          canvImages[Math.floor(Math.random() * possibleColors.length)]
        )

        lastPos.x = cursor.x
        lastPos.y = cursor.y
      }
    })
  }

  function addParticle(x, y, color) {
    particles.push(new Particle(x, y, color))
  }

  function updateParticles() {
    context.clearRect(0, 0, width, height)

    // Update
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(context)
    }

    // Remove dead particles
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].lifeSpan < 0) {
        particles.splice(i, 1)
      }
    }
  }

  // -- hack to make it stop -------------
  // https://discord.com/channels/238666723824238602/238727576628101122/962529622422065212
  function stopLoop() {
    unBindEvents()
    setTimeout(() => options.turnOff = true, 1000)
  }

  function loop() {
    if (options.turnOff) {
      canvas.remove();
      return;
    }
    // -- end of hack to make it stop ----
    updateParticles()
    requestAnimationFrame(loop)
  }

  function Particle(x, y, canvasItem) {
    const lifeSpan = Math.floor(Math.random() * 30 + 60)
    this.initialLifeSpan = lifeSpan //
    this.lifeSpan = lifeSpan //ms
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: Math.random() * 0.7 + 0.9,
    }
    this.position = { x: x, y: y }
    this.canv = canvasItem

    this.update = function(context) {
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.lifeSpan--

      this.velocity.y += 0.02

      const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0)

      context.drawImage(
        this.canv,
        this.position.x - (this.canv.width / 2) * scale,
        this.position.y - this.canv.height / 2,
        this.canv.width * scale,
        this.canv.height * scale
      )
    }
  }

  init()
  options.stopLoop = stopLoop; // -- hack to make it stop
}
