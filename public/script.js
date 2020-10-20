let menu = document.getElementById('help')
let readme = document.getElementById('readme')


menu.onclick = function() {
    if (readme.style.display === "none") {
        readme.style.display = "block";
      } else {
        readme.style.display = "none";
      }
}