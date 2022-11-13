let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let safari = document.querySelector('.safari');

window.onscroll=function(){
    let value = scrollY;
    stars.style.left= value +'px';
    moon.style.top= value *4 +'px';
    mountains3.style.top= value*2+'px';
    mountains4.style.top= value*1.5+'px';
    river.style.top= value +'px';
    boat.style.top= value +'px';
    boat.style.left= value*3.5 +'px';
    safari.style.fontSize= value +'px';
    if (scrollY>=40){
        safari.style.fontSize=40 +'px';
       safari.style.position = 'fixed';

       
        if(scrollY>=385){
            safari.style.display= 'none';
        }


    }else{
        safari.style.display= 'block';
    }
    



}







var fullImgBox= document.getElementById("fullImgBox")
var fullImg= document.getElementById("fullImg")

function openfullImg(pic){
    fullImgBox.style.display="flex";
    fullImg.src=pic;  

}

function closefullImg(){
    fullImgBox.style.display="none";
    
}

