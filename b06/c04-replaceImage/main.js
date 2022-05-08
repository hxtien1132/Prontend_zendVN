let infoImg = 'image/4.jpg';
let img = document.getElementsByTagName('img');
for(let i = 0 ; i< img.length ; i++){
    if(img[i].getAttribute('src')==''){
        img[i].setAttribute('src',infoImg);
    }
}
// c2
// let img = document.querySelectorAll('img[src=""]');
// img.forEach(element => {
//     element.setAttribute('src','image/4.jpg');
    
// });