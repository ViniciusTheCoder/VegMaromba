const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", function() {
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
  } else {
    searchInput.style.display = "none";
  }
});

let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
  nextImage();
}, 5000)

function nextImage(){
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById('radio'+count).checked = true;

};
