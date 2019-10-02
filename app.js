document.addEventListener('click', event =>{
    if (event.target.className === 'person') 
    {
        let person = event.target.dataset.person
        
        let url = "https://api.giphy.com/v1/gifs/search?q=${person}&api_key=Ew93dwWn010w0V9pwaDJ0FdsvVaYBNCF&limit=10"
        
        
        fetch(url)
            .then(r => r.json())
            .then(gifs => {
                document.getElementById('gifDisp').innerHTML = ''
                gifs.data.forEach(gif => {
                    let gifElem = document.createElement('img')
                    gifElem.src = gif.images.original.url
                    document.getElementById('gifDisp').append(gifElem)
                })
            })
    }
})

document.getElementById('addPerson').addEventListener('click', event => {
    event.preventDefault()
    let btnElem = document.createElement('button')
    btnElem.textContent = document.getElementById('newPerson').value
    btnElem.dataset.person = document.getElementById('newPerson').value
    btnElem.className = 'person'
    document.getElementById('buttons').append(btnElem)
    document.getElementById('newPerson').value = ''
})









// link app.js to index.html//