const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", function() {
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
  } else {
    searchInput.style.display = "none";
  }
});
