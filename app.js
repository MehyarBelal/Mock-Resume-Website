let btn = document.querySelector('button');
let message_box = document.querySelector('.message');
const close_btn = document.getElementById('close');


close_btn.addEventListener("click", function(){

message_box.classList.add('close');

})

btn.addEventListener("click", showdiv);



function showdiv(){
  message_box.classList.remove('close')
  gsap.to(".message", {
    // start the animation when ".box" enters the viewport (once)
    x: 0,
    
  });


}


gsap.from(".left", {
    scrollTrigger: ".left", // start the animation when ".box" enters the viewport (once)
    x: -500,
    opacity: 0
  });


  gsap.from(".right", {
    scrollTrigger: ".right", // start the animation when ".box" enters the viewport (once)
   
   duration: 1.4,
    x: 500,

    opacity: 0
  });

  gsap.from(".box", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    y: 100,
    opacity:0
  });
  

  gsap.from(".up", {
    scrollTrigger: ".up", // start the animation when ".box" enters the viewport (once)
    y: 200,
    opacity: 0
  });
  
  

  gsap.from(".pic1", {
    scrollTrigger: ".pic1", // start the animation when ".box" enters the viewport (once)
    y: 200,
    
    opacity: 0
  });
  
  
  gsap.from(".pic2", {
    scrollTrigger: ".pic2", // start the animation when ".box" enters the viewport (once)
 
    y: 200,
   duration: 1.2,
    opacity: 0
  });
  
  
  gsap.from(".pic3", {
    scrollTrigger: ".pic3", // start the animation when ".box" enters the viewport (once)
    y: 200,
    duration: 1.3,
    opacity: 0
  });
  
  

  gsap.from(".mehyar", {

  
    scrollTrigger: ".mehyar", // start the animation when ".box" enters the viewport (once)
    x: -300
 
  });
  
  
  gsap.from(".socials", {
    scrollTrigger: ".socials", // start the animation when ".box" enters the viewport (once)
    y: 100,
    opacity:0,
    duration:.7,
 
  });
  