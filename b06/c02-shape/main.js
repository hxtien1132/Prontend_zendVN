
let height = 9 ;
let space = "---";
let i= 0 ,j= 0 ;
let tab="";
for(i ;i<=height;i++){
   
    tab = i+ space;
    for(j = i+1;j<= height; j++ ){
        tab += j+ space ;
    }
    tab = tab.substring(0 , tab.length - space.length);
    tab += "<br />";
    document.write(tab);
}
