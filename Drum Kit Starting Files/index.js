 let n=document.getElementsByClassName("drum").length;
 
 for(var i=0;i<n;i++)
 {
     document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        // console.log(this);
        // this.style.color="white";
        var expressionKey=this.innerHTML;

       makesound(expressionKey);
       makeanimation(expressionKey);

     });

 }


 document.addEventListener("keypress",function(event)
 {
        makeanimation(event.key);
         makesound(event.key);
 });

 function makesound(key)
 {

  switch(key)
  {
    case "w": var audio= new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "a": var audio= new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s": var audio= new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d": var audio= new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j": var audio= new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "k": var audio= new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    
    case "l": var audio= new Audio('sounds/crash.mp3');
    audio.play();
    break;

  }

 }
 
 function makeanimation(presskey)
 {
    var animatekey=document.querySelector("."+presskey);
    // animatekey.style.boxShadow=" 0 3px 4px 0 #DBEDF3";
    // animatekey.style.opacity="0.5";
    animatekey.classList.add("pressed");
    
    setTimeout(function(){
   animatekey.classList.remove("pressed"),1000
    });
    
 }

// document.querySelectorAll("button")[0].addEventListener("click",handleclick);

// function handleclick()
// {
//     alert("i got clickaa");
// }

