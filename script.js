function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img

  const img = document.querySelector("#profile img")

  //substuir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-claro.png")
  } else {
    //se tiver light mode, trocar a imagem
    img.setAttribute("src", "./assets/avatar-escuro.png")
  }
}
