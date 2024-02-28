document.addEventListener("DOMContentLoaded", function() {
    var thumbnails = document.querySelectorAll(".thumbnail");
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var closeBtn = document.querySelector(".close");
  
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener("click", function() {
        var imgSrc = this.querySelector("img").src;
        modalImg.src = imgSrc;
        modal.style.display = "block";
      });
    });
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });