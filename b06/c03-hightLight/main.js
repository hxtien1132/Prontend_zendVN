
 let text = "frontend" ;
 let page = document.body.innerHTML;
 document.body.innerHTML = page.replace(new RegExp(text, "gi"), "<span class='hightlight'>Frontend123</span>");

// c2
 // let elmBox = document.getElementById("box");
// let str = elmBox.textContent;
// str = str.replace(new RegExp(text,"gi"),"<span class='hightlight'>Frontend</span>");
// elmBox.innerHTML = str ;
