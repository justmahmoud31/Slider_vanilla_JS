var Close=document.getElementById('close')
var boxitem=document.getElementById('boxitem')
var prev=document.getElementById('prev')
var next=document.getElementById('next')
Close.addEventListener('click',function Showbox(){
    var boxcontainer=document.getElementById('boxcontainer')
     boxcontainer.style.display="none"
})
var src
var items=Array.from(document.getElementsByTagName('img')) // here we used in form of array to get the index of the element we have clicked on 
console.log(items)
var indx=0
   for(var i=0;i<items.length;i++){
    items[i].addEventListener('click',function(e){
       indx=items.indexOf(e.target)
        console.log(indx)
        src= e.target.src
        boxitem.style.backgroundImage=`url(${src})`
        boxcontainer.style.display="flex"
    })
}
// to go to the next element
prev.addEventListener('click',nextitem)
function nextitem(){
    indx--;
    if(indx<0){
        indx=items.length-1
    }
    boxitem.style.backgroundImage=`url(${items[indx].src})`
    boxcontainer.style.display="flex"
}
// to go back to previous element or photo
next.addEventListener('click',previtem)
function previtem(){
    indx++;
    if(indx>=items.length){
      indx=0;
    }
    boxitem.style.backgroundImage=`url(${items[indx].src})`
    boxcontainer.style.display="flex"
}
// to control the box item from keyboard
document.addEventListener('keyup',function(e){
 if(e.key=="ArrowRight"){
    nextitem();
 }
 else if(e.key=="ArrowLeft"){
    previtem();
}
else if(e.key=="Escape"){
    boxcontainer.style.display="none"
}
})
// if we have clicked anywhere else it will close the opened window
boxcontainer.addEventListener('click',function(e) {
    boxcontainer.style.display="none"
    e.stopPropagation()
})
