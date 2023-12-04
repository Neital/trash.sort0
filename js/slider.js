//Autor - Natalja Frantikova

let responsiveSlider = function() {
    let slides = document.querySelectorAll(".slide")
    let index = 0
    let prev = document.getElementById("left-arrow")
    let next = document.getElementById("right-arrow")
    let timerId = setTimeout(function() {nextSlide()}, 5000)
    function resetTimer() {
      clearTimeout(timerId)
      timerId = setTimeout(function() {nextSlide()}, 5000)
    }
    function prevSlide(){
      index-=1
      changeSlide()
      resetTimer()
    }
    function nextSlide(){
      index+=1
      changeSlide()
      resetTimer()
    }
    changeSlide()
    function changeSlide(){
      if(index>slides.length-1)
        index=0
      if(index<0)
        index=slides.length-1
        for(let i=0;i<slides.length;i++){
          slides[i].style.display = "none"
        }
        slides[index].style.display = "block"
    }
    next.addEventListener("click", function() {
      nextSlide()
    })
    prev.addEventListener("click", function() {
      prevSlide()
    })
}

window.onload = function() {
    responsiveSlider()
  }