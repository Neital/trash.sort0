
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

let responsiveSlider = function() {
    let slides = document.querySelectorAll(".slide")
    let dots = document.querySelectorAll(".dot")
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
          dots[i].classList.remove("active")
        }
        slides[index].style.display = "block"
        dots[index].classList.add("active")
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

  var header = document.getElementById("mySide-box");
  var sticky = header.offsetTop;

  function stickyScroll() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {stickyScroll()};