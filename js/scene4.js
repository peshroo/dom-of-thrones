function scene4() {

   // Setup Stage
   stage = document.querySelector('#stage')
   kingsLanding = document.querySelector('#kings-landing')
   kingsLandingImgSrc = kingsLanding.getAttribute('src')
   stageImg = stage.querySelector('#stage-img')
   stageImg.setAttribute('src', kingsLandingImgSrc)

   // Setup Cast

   // Rob
   var robContainer = document.createElement('div')
   robContainer.id = 'rob-container'
   stage.append(robContainer)
   robContainer.style.position = 'absolute'
   robContainer.style.width = '8%'
   robContainer.style.height = '31%'
   robContainer.style.top = '28%'
   robContainer.style.left = '59%'

   rob = document.querySelector('#rob')
   robContainer.append(rob)
   rob.style.width = '70%'
   rob.style.position = 'absolute'
   rob.style.left = '10%'

   blackLeather = document.querySelector('#black-leather')
   robContainer.append(blackLeather)
   blackLeather.style.position = 'absolute'
   blackLeather.style.bottom = 0

   // Catelyn
   var catelynContainer = document.createElement('div')
   catelynContainer.id = 'catelyn-container'
   stage.append(catelynContainer)
   catelynContainer.style.position = 'absolute'
   catelynContainer.style.width = '8%'
   catelynContainer.style.height = '31%'
   catelynContainer.style.top = '26%'
   catelynContainer.style.left = '79%'

   catelyn = document.querySelector('#catelyn')
   catelynContainer.append(catelyn)
   catelyn.style.width = '70%'
   catelyn.style.position = 'absolute'
   catelyn.style.left = '10%'

   redDress = document.querySelector('#red-dress')
   catelynContainer.append(redDress)
   redDress.style.position = 'absolute'
   redDress.style.bottom = 0

   // Jon
   var jonContainer = document.createElement('div')
   jonContainer.id = 'jon-container'
   stage.append(jonContainer)
   jonContainer.style.position = 'absolute'
   jonContainer.style.width = '10%'
   jonContainer.style.height = '34%'
   jonContainer.style.top = '30%'
   jonContainer.style.left = '90%'

   jon = document.querySelector('#jon')
   jonContainer.append(jon)
   jon.style.position = 'absolute'
   jon.style.width = '55%'
   jon.style.top = 0
   jon.style.left = '13%'

   furs = document.querySelector('#furs')
   jonContainer.append(furs)
   furs.style.position = 'absolute'
   furs.style.bottom = '-5%'
   furs.style.transform = 'rotateY(150deg)'

   // Setup Props

   // Prop 1

   // Prop 2

   // Action!
   // Dancing together on the lake
   // Start Stage direction
   frame(function() {
     robContainer.style.top = '28%'
     robContainer.style.left = '59%'
     catelynContainer.style.top = '26%'
     catelynContainer.style.left = '79%'
     jonContainer.style.top = '30%'
     jonContainer.style.left = '90%'
   })

   // Middle stage frames
   frame(function() {
     robContainer.style.top = '30%'
     robContainer.style.left = '55%'
     catelynContainer.style.top = '30%'
     catelynContainer.style.left = '73%'
     jonContainer.style.top = '35%'
     jonContainer.style.left = '80%'
   })

   frame(function() {
     robContainer.style.top = '32%'
     robContainer.style.left = '50%'
     catelynContainer.style.top = '34%'
     catelynContainer.style.left = '65%'
     jonContainer.style.top = '40%'
     jonContainer.style.left = '75%'
   })

   frame(function() {
     robContainer.style.top = '33%'
     robContainer.style.left = '50%'
     catelynContainer.style.top = '33%'
     catelynContainer.style.left = '63%'
     jonContainer.style.top = '36%'
     jonContainer.style.left = '82%'
   })

   frame(function() {
     robContainer.style.top = '30%'
     robContainer.style.left = '55%'
     catelynContainer.style.top = '33%'
     catelynContainer.style.left = '61%'
     jonContainer.style.top = '34%'
     jonContainer.style.left = '75%'
   })

   frame(function() {
     robContainer.style.top = '25%'
     robContainer.style.left = '61%'
     catelynContainer.style.top = '33%'
     catelynContainer.style.left = '52%'
     jonContainer.style.top = '32%'
     jonContainer.style.left = '70%'
   })

   frame(function() {
     robContainer.style.top = '32%'
     robContainer.style.left = '63%'
     catelynContainer.style.top = '35%'
     catelynContainer.style.left = '46%'
     jonContainer.style.top = '38%'
     jonContainer.style.left = '72%'
   })

   frame(function() {
     robContainer.style.top = '38%'
     robContainer.style.left = '62%'
     catelynContainer.style.top = '40%'
     catelynContainer.style.left = '47%'
     jonContainer.style.top = '44%'
     jonContainer.style.left = '73%'
   })

   frame(function() {
     robContainer.style.top = '44%'
     robContainer.style.left = '60%'
     catelynContainer.style.top = '48%'
     catelynContainer.style.left = '47%'
     jonContainer.style.top = '51%'
     jonContainer.style.left = '75%'
   })

   frame(function() {
     robContainer.style.top = '49%'
     robContainer.style.left = '58%'
     catelynContainer.style.top = '54%'
     catelynContainer.style.left = '49%'
     jonContainer.style.top = '58%'
     jonContainer.style.left = '74%'
   })

   frame(function() {
     robContainer.style.top = '58%'
     robContainer.style.left = '63%'
     catelynContainer.style.top = '62%'
     catelynContainer.style.left = '45%'
     jonContainer.style.top = '65%'
     jonContainer.style.left = '74%'
   })

   frame(function() {
     robContainer.style.top = '64%'
     robContainer.style.left = '62%'
     catelynContainer.style.top = '70%'
     catelynContainer.style.left = '44%'
     jonContainer.style.top = '74%'
     jonContainer.style.left = '75%'
   })

   frame(function() {
     robContainer.style.top = '72%'
     robContainer.style.left = '62%'
     catelynContainer.style.top = '79%'
     catelynContainer.style.left = '46%'
     jonContainer.style.top = '82%'
     jonContainer.style.left = '73%'
   })

   frame(function() {
     robContainer.style.top = '80%'
     robContainer.style.left = '61%'
     catelynContainer.style.top = '88%'
     catelynContainer.style.left = '45%'
     jonContainer.style.top = '91%'
     jonContainer.style.left = '72%'
   })

   frame(function() {
     robContainer.style.top = '90%'
     robContainer.style.left = '60%'
     catelynContainer.style.top = '99%'
     catelynContainer.style.left = '42%'
     jonContainer.style.top = '100%'
     jonContainer.style.left = '70%'
   })
   // End Stage direction 3

   frame(function() {
     robContainer.style.top = '100%'
     robContainer.style.left = '60%'
     catelynContainer.style.top = '100%'
     catelynContainer.style.left = '42%'
     jonContainer.style.top = '100%'
     jonContainer.style.left = '70%'
   })

 }
