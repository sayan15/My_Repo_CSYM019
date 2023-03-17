function timer(){
  var v_val=document.getElementById("circle")
  var opaVal=parseFloat(v_val.style.opacity)
  v_val.style.opacity=opaVal-0.01
}

function loadCircle(){
  setInterval(timer,1000)
}

function trans(){
  var v_val=document.getElementById("circle")
  v_val.style.opacity=1
  v_val.addEventListener("click",loadCircle)
}


document.addEventListener("DOMContentLoaded",trans)