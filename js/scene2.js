function scene2() {

  // Setup Stage
  stage = document.querySelector('#stage')
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast
  // Ned Stark
  var nedContainer = document.createElement('div')
  nedContainer.id = 'ned-container'
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '70%'
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)

  ned.style.border = 'none'
  leather.style.border = 'none'
  ned.style.position = 'absolute'
  ned.style.top = '-125px'
  ned.style.left = '-30px'
  leather.style.position = 'absolute'
  leather.style.bottom = 0

  // Joffrey
  var joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.position = 'absolute'
  joffContainer.style.width = '8%'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0

  // Setup Props
  // Sword
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Exisiting Start Frame
  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  // New Middle Frames

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  // Existing End Frame

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

  // Joffrey's head spins and falls
  frame(function() {
    joffrey.style.top = 0
    joffrey.style.left = '33%'
    joff.style.transform = 'rotateZ(220deg)'
   })

  frame(function() {
    joffrey.style.top = '17%'
    joffrey.style.left = '90%'
    joff.style.transform = 'rotateZ(140deg)'
   })

  frame(function() {
    joffrey.style.top = '35%'
    joffrey.style.left = '160%'
    joff.style.transform = 'rotateZ(260deg)'
   })

  frame(function() {
    joffrey.style.top = '55%'
    joffrey.style.left = '230%'
    joff.style.transform = 'rotateZ(180deg)'
   })

   frame(function() {
    joffrey.style.top = '75%'
    joffrey.style.left = '300%'
    joff.style.transform = 'rotateZ(100deg)'
   })

}
