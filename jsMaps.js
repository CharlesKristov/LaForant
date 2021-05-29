window.onload = function() {

    // Get the modal
    
    var modal = document.getElementById("ZoomImage");
    
    var img = document.getElementById("NormalImg");
    var modalImg = document.getElementById("popImg");
    var captionText = document.getElementById("teks");

    
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    var span = document.getElementsByClassName("X");
    
    span[0].onclick = function() { 
      modal.style.display = "none";
    }

    var modal2 = document.getElementById("ZoomImage2");
    
    var img2 = document.getElementById("NormalImg2");
    var modalImg2 = document.getElementById("popImg2");
    var captionText = document.getElementById("teks2");

    
    img2.onclick = function(){
      modal2.style.display = "block";
      modalImg2.src = this.src;
      captionText.innerHTML = this.alt;
    }

    span[1].onclick = function() { 
      modal2.style.display = "none";
    }

    var modal3 = document.getElementById("ZoomImage3");
    
    var img3 = document.getElementById("NormalImg3");
    var modalImg3 = document.getElementById("popImg3");
    var captionText = document.getElementById("teks3");

    
    img3.onclick = function(){
      modal3.style.display = "block";
      modalImg3.src = this.src;
      captionText.innerHTML = this.alt;
    }

    span[2].onclick = function() { 
      modal3.style.display = "none";
    }

    var modal4 = document.getElementById("ZoomImage4");
    
    var img4 = document.getElementById("NormalImg4");
    var modalImg4 = document.getElementById("popImg4");
    var captionText = document.getElementById("teks4");

    
    img4.onclick = function(){
      modal4.style.display = "block";
      modalImg4.src = this.src;
      captionText.innerHTML = this.alt;
    }

    span[3].onclick = function() { 
      modal4.style.display = "none";
    }
};
