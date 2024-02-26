function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light')

    // pegar a tag image
    const img = document.querySelector('#profile img')

    // substituir a imagem 
    // se tiver light mode adicionar light
    if(html.classList.contains('light')) {
      img.setAttribute('src', './assets/avatar-light.png')
    
      img.setAttribute('alt', '"Foto de Mayk Brito sorrindo, usando óculos escuros, de jaqueta preta, e fundo colorido com roxo e azul."')
    } else {
        img.setAttribute('src', './assets/avatar.png')

        img.setAttribute('alt', '"Foto de Mayk Brito sorrindo, usando óculos, de camisa preta, barba e fundo amarelo."')
    }


}