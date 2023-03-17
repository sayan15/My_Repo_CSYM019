


function mine(){
    var v_val=document.getElementById('heading');
    v_val.innerHTML="Hi";
}

function afterclick()
{
    var v_val=document.getElementById('heading');
    v_val.addEventListener('click',mine);
}

document.addEventListener('DOMContentLoaded',afterclick);



function clickAnywhere()
{

    var v_val=document.getElementById('firstP');
    v_val.innerHTML="Hi";
    var v_val=document.getElementById('H1');
    v_val.firstChild.nodeValue="Hi";
}



function print5(){
    [1,2,3,4,5].forEach(element => {
        console.log(element.toString());
    });

    var v_val=document.getElementById('H1');
    v_val.firstChild.nodeValue="TestDone";

    document.addEventListener("click",clickAnywhere());
    
}