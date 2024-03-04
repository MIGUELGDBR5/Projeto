function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light')

    // pegar a tag image
    const img = document.querySelector('#profile img')

    // substituir a imagem 
    // se tiver light mode adicionar light
    if(html.classList.contains('light')) {
      img.setAttribute('src', 'https://pbs.twimg.com/profile_images/1556761716041605120/SRNCDSHV_400x400.jpg')
    
      img.setAttribute('alt', '"Foto de Mayk Brito sorrindo, usando óculos escuros, de jaqueta preta, e fundo colorido com roxo e azul."')
    } else {
        img.setAttribute('src', 'https://steamuserimages-a.akamaihd.net/ugc/1814365766212573958/04B7867DCE7F7DC885EF9D2B31FCDC9EF2D03443/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')

        img.setAttribute('alt', '"Foto de Mayk Brito sorrindo, usando óculos, de camisa preta, barba e fundo amarelo."')
    }


}