function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage')
  desert = document.querySelector('#desert')
  desertImgSrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', desertImgSrc)

  // Setup Cast
  // Danerys
  var danerysContainer = document.createElement('div')
  danerysContainer.id = 'danerys-container'
  stage.append(danerysContainer)
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.width = '10%'
  danerysContainer.style.height = '34%'
  danerysContainer.style.left = '15%'
  danerysContainer.style.top = '55%'

  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  danerys.style.position = 'absolute'
  danerys.style.width = '48%'
  danerys.style.left = '10%'
  danerysContainer.style.top = 0

  blueDress = document.querySelector('#blue-dress')
  danerysContainer.append(blueDress)
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0

  // Drogo
  var drogoContainer = document.createElement('div')
  drogoContainer.id = 'drogo-container'
  stage.append(drogoContainer)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.width = '8%'
  drogoContainer.style.height = '31%'
  drogoContainer.style.left = '60%'
  drogoContainer.style.top = '55%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.position = 'absolute'
  drogo.style.width = '75%'
  drogo.style.left = '10%'

  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0

  // Setup Props
  // Egg
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '80%'
  egg.style.left = '38%'
  egg.style.height = '18%'
  egg.style.transform = 'rotate(30deg)'

  // Action!
  // Stage direction 1
  frame(function() {
    egg.style.top = '80%'
    egg.style.left = '38%'
    danerysContainer.style.top = '55%'
    danerysContainer.style.left = '15%'
    drogoContainer.style.top = '55%'
    drogoContainer.style.left = '60%'
    egg.style.transform = 'rotate(30deg)'
  })

  // Stage direction 2
  frame(function() {
    egg.style.top = '77%'
    egg.style.left = '35%'
    danerysContainer.style.top = '50%'
    danerysContainer.style.left = '17%'
    drogoContainer.style.top = '50%'
    drogoContainer.style.left = '55%'
    egg.style.transform = 'rotate(-30deg)'
  })

  frame(function() {
    egg.style.top = '70%'
    egg.style.left = '36%'
    danerysContainer.style.top = '52%'
    danerysContainer.style.left = '21%'
    drogoContainer.style.top = '50%'
    drogoContainer.style.left = '40%'
    egg.style.transform = 'rotate(50deg)'
  })

  frame(function() {
    egg.style.top = '68%'
    egg.style.left = '40%'
    danerysContainer.style.left = '23%'
    egg.style.transform = 'rotate(40deg)'
  })

  frame(function() {
    egg.style.top = '66%'
    egg.style.left = '50%'
    danerysContainer.style.left = '27%'
    drogoContainer.style.left = '50%'
    egg.style.transform = 'rotate(42deg)'
  })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '60%'
    danerysContainer.style.left = '31%'
    drogoContainer.style.left = '60%'
    egg.style.transform = 'rotate(44deg)'
  })

  frame(function() {
    egg.style.left = '70%'
    danerysContainer.style.left = '35%'
    drogoContainer.style.left = '70%'
    egg.style.transform = 'rotate(42deg)'
  })

  frame(function() {
    egg.style.left = '80%'
    danerysContainer.style.left = '38%'
    drogoContainer.style.left = '80%'
  })

  frame(function() {
    egg.style.left = '90%'
    danerysContainer.style.left = '40%'
    drogoContainer.style.left = '90%'
  })

  // End Stage direction 3
  frame(function() {
    egg.style.left = '100%'
    danerysContainer.style.left = '42%'
    drogoContainer.style.left = '100%'
    egg.style.transform = 'rotate(10deg)'
  })

}
