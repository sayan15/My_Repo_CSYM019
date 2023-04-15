var xhr; // declare xhr variable
function makeAjaxRequest(){


    if(window.XMLHttpRequest)
    {
        xhr=new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(xhr){
        xhr.open("GET","counties.json",true);
        xhr.send();
        xhr.onreadystatechange=showContents

    }
    else{
        document.getElementById("updatemessage").innerHTML="Error"
    }
}

function showContents(){
    if(xhr.readyState==4){
        if(xhr.status=200){
            console.log(xhr.readyState)
            let response=JSON.parse(xhr.responseText);
            let txt="";
            for(let i=0 ;i<response.counties.length;i++){
                
                    txt+="<tr><td>"+response.counties[i].name+"</td></tr>"
                      
            }
            document.getElementById("countrylist").innerHTML=txt;
        }
        else{
            document.getElementById("updatemessage").innerHTML="Error"
        }
    }
}

document.addEventListener("DOMContentLoaded",makeAjaxRequest)