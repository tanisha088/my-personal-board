const zoomin=document.querySelector(".zoom-in");
const zoomout=document.querySelector(".zoom-out");

zoomin.addEventListener("click",function(e){

    ctx.scale(1.1,1.1);
   // ctx.translate(-50,0);
    redraw();
})
zoomout.addEventListener("click",function(){
    
    ctx.scale(0.9,0.9);
  //  ctx.translate(50,0)
    redraw();
})
