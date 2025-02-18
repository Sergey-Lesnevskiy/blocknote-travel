const dataBlocknote = JSON.parse(localStorage.getItem("dataBlocknote"));

const data = dataBlocknote.dataTravels[dataBlocknote.keyTravel].dataNotes[dataBlocknote.keyNote];
const title = dataBlocknote.dataTravels[dataBlocknote.keyTravel].title;

console.log(dataBlocknote.keyNote);

{/* <div class="note">
        <h3 class="note-title">Название</h3>
        <div class="note_images">
          <img src="../assets/img/image (3)-fotor-bg-remover-20250215153649 (1).png" alt="">
          <img src="../assets/img/image (3)-fotor-bg-remover-20250215153649 (1).png" alt="">
          <img src="../assets/img/image (3)-fotor-bg-remover-20250215153649 (1).png" alt="">
          <img src="../assets/img/image (3)-fotor-bg-remover-20250215153649 (1).png" alt="">
        </div>
        <p class="note_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci
          natus dolorum excepturi consectetur perferendis maxime minus totam a quisquam voluptatum voluptas repudiandae,
          commodi aliquam esse est veniam deserunt. Porro!</p>
      </div> */}

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
// function createListTravel(data) {
//   data.forEach((element, i) => {
//     createTravel(element, i)
//   });
// }
// createListTravel(data.dataTravels);
