
let box = document.getElementsByClassName("box");
let maxHeight = 0;
for(let i = 0 ; i < box.length ;i++){
    let currentHeight = box[i].offsetHeight ;
    maxHeight = (currentHeight >= maxHeight)? currentHeight : maxHeight ;
}
for(let i = 0 ; i<box.length ; i++){
let backgroundColor = "yellow";
box[i].style.height = maxHeight + "px";
if(i % 2 == 0) backgroundColor ="red";
box[i].style.backgroundColor = backgroundColor ;
}

