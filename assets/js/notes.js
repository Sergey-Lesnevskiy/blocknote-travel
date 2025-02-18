const dataBlocknote = JSON.parse(localStorage.getItem("dataBlocknote"));

const data = dataBlocknote.dataTravels[dataBlocknote.keyTravel].dataNotes[dataBlocknote.keyNote];
const title = dataBlocknote.dataTravels[dataBlocknote.keyTravel].title;


const main = document.querySelector('main');

function createAlbum() {
  let div = document.createElement('div');
  div.classList.add('note_images');
  data.allImage.forEach(element => {
    let img = document.createElement('img');
    img.src = element;
    div.append(img);
  });
  return div;
}
console.log(createAlbum());
function createNote(data) {
  let element = document.createElement('div');
  element.classList.add('note');
  element.innerHTML = `
        <h2 class="note-title">${title}</h2>
        <p class="note_description">${data.description}</p>
  `
  main.append(element);
  document.querySelector('.note-title').after(createAlbum());
}

createNote(data);
