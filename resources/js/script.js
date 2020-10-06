import data from './data.js'

for (let i=0; i<data.length; i++) {
    // creates a new div element and gives it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'game'

    let title = document.createElement('h2');
    title.innerText = data[i].title
    newDiv.appendChild(title)

    let img = document.createElement('img');
    img.src = data[i].image
    newDiv.appendChild(img)
}