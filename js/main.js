 
     const slides = document.querySelector('.slider').children;
     const prev = document.querySelector(".prev");
     const next = document.querySelector(".next");
     const indicator = document.querySelector(".indicator");

   let index = 0;

       prev.addEventListener("click",function(){
         prevSlide();
         updateCircle();
         resetTimer();
       })
       next.addEventListener("click",function(){
         nextSlide();
         updateCircle();
         resetTimer();
       })


//create indicators
       function circle(){
         for(let i = 0 ; i < slides.length; i++){
           const div = document.createElement("div");
                 div.innerHTML = i + 1;
                div.setAttribute("onclick","indicatorSlide(this)")
                div.id = i;
                if(i==0){
                  div.className = "active";
                }
                indicator.appendChild(div);
         }
       }
       circle();

       function indicatorSlide(element){
            index = element.id;
            changeSlide();
            updateCircle();
            resetTimer();
       }

       function updateCircle(){
         for(let i=0; i<indicator.children.length; i++){
           indicator.children[i].classList.remove("active");
         }
         indicator.children[index].classList.add("active");
       }
      

       function prevSlide(){
        if (index == 0){
            index = slides.length - 1;
        }
        else{
          index--;
        }
        changeSlide();
       }

       function nextSlide(){
         if(index==slides.length - 1){
           index=0
         }
         else{
           index++;
         }
         changeSlide();
       }

       function changeSlide(){
           for(let i=0; i < slides.length; i++){
               slides[i].classList.remove("active");
           }
            slides[index].classList.add("active");
       }

       function resetTimer(){
         clearInterval(timer);
         timer = setInterval(autoPlay, 4000);
       }

   function autoPlay(){
     nextSlide();
     updateCircle();
   }
   
   let timer = setInterval(autoPlay, 4000);