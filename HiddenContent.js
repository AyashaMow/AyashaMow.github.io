document.getElementById("readMoreLink").addEventListener("click", function() {
    var hiddenContent = document.getElementById("hiddenContent");
    var link = document.getElementById("readMoreLink");
    
    if (hiddenContent.style.display === "none") {
      hiddenContent.style.display = "block";
      link.textContent = "Read Less";
    } else {
      hiddenContent.style.display = "none";
      link.textContent = "Read More";
    }
  });
      