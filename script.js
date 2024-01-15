var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

var crsrB = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsrB.style.left = dets.x-150+"px"
    crsrB.style.top = dets.y-150+"px"
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:true
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end: "top -80%",
        scrub:2
    }
})