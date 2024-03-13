let tl = gsap.timeline({
    repeat: -1, // Repeat indefinitely
    repeatDelay: 1 // Delay between repetitions (adjust as needed)
});

let tl2 = gsap.timeline({
    repeat: -1, // Repeat indefinitely
    repeatDelay: 1 // Delay between repetitions (adjust as needed)
});

function heroBoxesAnimeGsap() {
    tl.to(".row2 .elem-three", {
        opacity: 0,
        // x: "100%",
        x: "115%",  
        duration: 0.5,
    })
    .to(".row2 .elem-two", {
        x: "115%",
        duration: 0.5
    })
    .to(".row2 .elem-one", {
        x: "130%",
        duration: 0.5
    })
    .to(".row1 .box-one", {
        y: "100%",
        duration: 0.5
    })
    .to(".row2 .box-six", {
        y: "-100%",
        duration: 0.5
    })
    .to(".row1 .elem-six", {
        y: "100%",
        duration: 0.5
    })
    .to(".row1 .box-four", {
        y: "100%",
        duration: 0.5
    })
    .to(".row2 .elem-four", {
        y: "-100%",
        scale:1.001,
        duration: 0.5
    })
    .to(".row1 .elem-six", {
        y: "0%",
        duration: 0.5
    })
    .to(".row2 .box-six", {
        y: "0%",
        duration: 0.5
    })
    .to(".row1 .elem-five", {
        y: "100%",
        duration: 0.5
    })
    .to(".row2 .box-five", {
        y: "-100%",
        duration: 0.5
    })
    .to(".row1 .box-one", {
        y: "0%",
        duration: 0.5
    })
    .to(".row2 .elem-one", {
        x: "0%",
        duration: 0.5
    })
    .to(".row2 .elem-two", {
        x: "0%",
        duration: 0.5
    })
    .to(".row2 .elem-three", {
        x: "0%",
        opacity: 1,
        duration: 0.5
    });
}

function headinAnimeGsap(){
    tl2.to(".top-left .capsule", {
        x: "-270%",
        duration: 0.5
    })
    tl2.to(".top-left h2", {
        x: "50%",
        duration: 0.5
    })
    tl2.to(".top-left .capsule", {
        x: "0%",
        duration: 0.5
    })
    tl2.to(".top-left h2", {
        x: "0%",
        duration: 0.5
    })
}

gsap.to("#bottom",{
    scale:1,
    scrollTrigger:{
        target:"#bottom",
        scroller:"#main",
        markers:true
    }
})

headinAnimeGsap();
heroBoxesAnimeGsap();