

// loader animation 

const loader = document.querySelector(".loading");
    window.onload = function(){
      setTimeout(function(){
        loader.style.opacity = "0";
        setTimeout(function(){
          loader.style.display = "none";
          document.getElementById("content").style.display="block";
        }, 500);
      },5000);
    }