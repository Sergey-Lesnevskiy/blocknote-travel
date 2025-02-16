const list = document.querySelector('.note_list');
const newTravel = document.querySelector('.new_travel');
const main = document.querySelector('.notes_main');
// const changeNote = document.querySelector('.note_button');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup_container');
const closePopup = document.querySelector('.close_popup');
const saveNote = document.querySelector('.button_popup');

const imgNote = document.querySelector('.input_file');
const dateNote = document.querySelector('.input_date');
const textNote = document.querySelector('#text');

let symbolsLength = 84;

const body = document.querySelector('body');

const data = [
  {
    img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', date: '02.02.03', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
  },

]
let img = '';

list.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('note_link') || e.target.classList.contains('bold') || e.target.classList.contains('arrow')) {
    if (!e.target.parentNode.dataset.item) {
      console.log(e.target.parentNode.parentNode.dataset.item);
      // сохраняем номер заметки
    } else {
      console.log(e.target.parentNode.dataset.item);
      // сохраняем номер заметки
    }
  }
  if (e.target.classList.contains('delete_note')) {
    console.log(e.target.dataset.item);
  }
  if (e.target.classList.contains('note_button')) {
    console.log(e.target.dataset.item);
  }
})
newTravel.addEventListener('click', (e) => {
  setTimeout(() => {
    popupContainer.classList.toggle('show');
  }, 200)
  popup.classList.toggle('show');
  body.classList.toggle('lock');
})
function closePopupButton() {
  popup.classList.toggle('show');
  popupContainer.classList.toggle('show');
  body.classList.toggle('lock');
}
closePopup.addEventListener('click', closePopupButton)

imgNote.onchange = e => {
  img = URL.createObjectURL(e.target.files[0]);
};

saveNote.addEventListener('click', (e) => {
  data.push({
    img: img, date: dateNote.value, description: textNote.value
  })
  createNote(data[data.length - 1], data.length - 1);
  clearInputs();
  closePopupButton();
})
function clearInputs() {
  dateNote.value = '';
  textNote.value = '';
  imgNote.value = '';
}

function createListNotes(data) {
  let ul = document.createElement('ul');
  ul.classList.add('note_list');
  main.append(ul);
  data.forEach((element, i) => {
    createNote(element, i)
  });
}
createListNotes(data);
function createNote(data, index) {
  console.log(data.description);
  let correctSymbolsLength = data.description.length > symbolsLength ? data.description.substring(0, symbolsLength) : data.description;
  let element = document.createElement('li');
  element.classList.add('note_item');
  element.innerHTML = `
  <div class="delete_note" data-item="${index}">&times;</div>
          <img src="${data.img}" alt="" class="note_img" alt="">
          <p class="note_item-data">
            <span class="note_data">${data.date}</span>
          </p>
          <p class="note_desc">${correctSymbolsLength}
          </p>
          <a
              href="/" class="note_link" data-item="${index}">
              <b class="bold">Читать подробнее<span class="arrow">&darr;</span></b>
              </a>
          <button class="button note_button" data-item="${index}">Изменить заметку</button>
  `
  list.append(element);
}