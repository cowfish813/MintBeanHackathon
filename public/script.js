let menu = document.getElementById('help')
let readme = document.getElementById('readme')


document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    readme.style.display = "none"
  }
})

menu.onclick = function () {
  if (readme.style.display === "none" || readme.style.display === "") {
    readme.style.display = "block"
  } else {
    readme.style.display = 'none'
  };
};