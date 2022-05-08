color ="red" ;
function fnBrowserDetect() { 
 if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
{
   color= "green";
}
else if(navigator.userAgent.indexOf("Edg") != -1 )
{
    color= "blue";
}
else if(navigator.userAgent.indexOf("Chrome") != -1 )
{
    color= "yellow";
}
else if(navigator.userAgent.indexOf("Safari") != -1)
{
    color= "pink";
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
{
    color= "white";
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
    color= "brown";
}  
else 
{
    color= "black";
}
document.body.style.backgroundColor = color ;
}
