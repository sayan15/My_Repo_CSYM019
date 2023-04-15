var timer=0
function timer(){
  var v_val=document.getElementById("circle")
  var opaVal=parseFloat(v_val.style.opacity)
  v_val.style.opacity=opaVal-0.01
}

function loadCircle(){
  
}

function trans(){
  var v_val=document.getElementById("circle")
  v_val.style.opacity=1
  document.addEventListener('keydown',moveObject)
}

function moveRight(){
  var v_val=document.getElementById("circle")
  var leftOffSet=v_val.offsetLeft
  v_val.style.left=leftOffSet+1+'px'
}
function moveLeft(){
  var v_val=document.getElementById("circle")
  var leftOffSet=v_val.offsetLeft
  v_val.style.left=leftOffSet-1+'px'
}

function moveTop(){
  var v_val=document.getElementById("circle")
  var topOffSet=v_val.offsetTop
  v_val.style.top=topOffSet+1+'px'
}

function moveBelow(){
  var v_val=document.getElementById("circle")
  var topOffSet=v_val.offsetTop
  v_val.style.top=topOffSet-1+'px'
}
function moveObject(event){
  console.log(event.keyCode)
  clearInterval(timer)
  if(event.keyCode==39)
  {
    timer=setInterval(moveRight,10)
  }
  else if(event.keyCode==37)
  {
    timer=setInterval(moveLeft,10)
  }
  else if(event.keyCode==38)
  {
    timer=setInterval(moveTop,10)
  }
  else if(event.keyCode==40)
  {
    timer=setInterval(moveBelow,10)
  }

  

}


document.addEventListener("DOMContentLoaded",trans)