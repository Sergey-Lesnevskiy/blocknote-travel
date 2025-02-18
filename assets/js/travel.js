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

// const data = [
//   {
//     img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
//   },
//   {
//     img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
//   },
//   {
//     img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
//   },
// ]
const dataBlocknote = JSON.parse(localStorage.getItem("dataBlocknote"));

const data = dataBlocknote.dataTravels[dataBlocknote.keyTravel].dataNotes;
let img = '';

let numberNote;
let openPopupInterface = 'add' || 'correct';

console.log(openPopupInterface);
list.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('note_link') || e.target.classList.contains('bold') || e.target.classList.contains('arrow')) {
    if (e.target.parentNode.parentNode.dataset.item || e.target.parentNode.dataset.item) {
      numberNote = e.target.parentNode.parentNode.dataset.item? e.target.parentNode.parentNode.dataset.item:e.target.parentNode.dataset.item;
      dataBlocknote.keyNote = numberNote;
      localStorage.setItem('dataBlocknote', JSON.stringify(dataBlocknote));
      window.location.href = "/pages/notes.html";
    }
  }
  if (e.target.classList.contains('delete_note')) {
    data.splice(e.target.dataset.item, 1);
    rerenderingList(data);
  }
  if (e.target.classList.contains('note_button')) {
    openPopupInterface = 'correct'
    openPopup(openPopupInterface, e.target.dataset.item);
    numberNote = e.target.dataset.item;
  }
})

newTravel.addEventListener('click', () => {
  openPopup();
})

function openPopup(openPopupInterface, number){
  if(openPopupInterface === 'correct'){
    setTimeout(() => {
      popupContainer.classList.toggle('show');
      dateNote.value = data[number].date;
      textNote.value =  data[number].description;
      // imgNote.value =  data[number].img;
    }, 200)
    popup.classList.toggle('show');
    body.classList.toggle('lock')
  }else{
    setTimeout(() => {
      popupContainer.classList.toggle('show');
    }, 200)
    popup.classList.toggle('show');
    body.classList.toggle('lock')
  }
}

function closePopupButton() {
  popup.classList.toggle('show');
  setTimeout(() => {
    popupContainer.classList.toggle('show');
  }, 200)
  body.classList.toggle('lock');
  defaultValues();
}

closePopup.addEventListener('click', closePopupButton)

imgNote.onchange = e => {
  img = URL.createObjectURL(e.target.files[0]);
};

function defaultValues(){
  openPopupInterface = 'add';
  dateNote.value = '';
  textNote.value = '';
  imgNote.value = '';
}

saveNote.addEventListener('click', () => {
  if(openPopupInterface === 'correct'){
    data[numberNote]={
      img: img, date: dateNote.value, description: textNote.value
    };
    rerenderingList(data);
    closePopupButton();
    defaultValues();
  }else{
    data.push({
      img: img, date: dateNote.value, description: textNote.value
    })
    createNote(data[data.length - 1], data.length - 1);
    defaultValues();
    closePopupButton();
  }
})

function createListNotes(data) {
  data.forEach((element, i) => {
    createNote(element, i)
  });
}

createListNotes(data);

function createNote(data, index) {
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

function rerenderingList(data){
  list.innerHTML = '';
  createListNotes(data);
}