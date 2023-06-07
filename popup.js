document.addEventListener("DOMContentLoaded", function() {
    const catImage = document.getElementById("catImage");
    const refreshLink = document.getElementById("refreshLink");
  
    function showLoadingState() {
      catImage.style.display = "none";
      refreshLink.style.display = "none";
      catImage.src = "loading.gif";
      catImage.style.display = "block";
    }
  
    function showCatGif(url) {
      catImage.style.display = "block";
      refreshLink.style.display = "inline";
      catImage.src = url;
    }
  
    function loadRandomCatGif() {
      showLoadingState();
  
      fetch("https://cataas.com/cat/gif") // Fetch a random cat GIF
        .then(response => response.blob())
        .then(blob => {
          const imageURL = URL.createObjectURL(blob);
          showCatGif(imageURL);
        })
        .catch(error => console.error("Failed to fetch cat GIF:", error));
    }
  
    loadRandomCatGif(); // Load a random cat GIF when the extension is opened
  
    refreshLink.addEventListener("click", function(event) {
      event.preventDefault();
      loadRandomCatGif();
    });
  });  