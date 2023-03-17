
function afterClick(){
    var v_val=document.getElementById("text1");
    var v_val2=document.getElementById("h1");
    v_val2.firstChild.nodeValue="Hello "+v_val.value;
}

function newfunction(){
    var v_val=document.getElementById("text1");
    v_val.addEventListener("keyup",afterClick);
}

document.addEventListener("DOMContentLoaded",newfunction);
