const list = document.querySelector('.note_list');
const newTravel = document.querySelector('.new_travel');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup_container');
const closePopup = document.querySelector('.close_popup');
const saveNote = document.querySelector('.button_popup');

const imgNote = document.querySelector('.input_file');
const dateNote = document.querySelector('.input_date');
const textNote = document.querySelector('#text');
const body = document.querySelector('body');

let symbolsLength = 50;

const dataBlocknote = JSON.parse(localStorage.getItem("dataBlocknote"));

const data = dataBlocknote.dataTravels[dataBlocknote.keyTravel].dataNotes

function dateSort(data){
  return data.sort((a, b) => new Date(a.date) - new Date(b.date));
}

let img = '';

let numberNote;
let openPopupInterface = 'add' || 'correct';

list.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('note_link') || e.target.classList.contains('bold') || e.target.classList.contains('arrow')) {
    if (e.target.parentNode.parentNode.dataset.item || e.target.parentNode.dataset.item) {
      numberNote = e.target.parentNode.parentNode.dataset.item ? e.target.parentNode.parentNode.dataset.item : e.target.parentNode.dataset.item;
      dataBlocknote.keyNote = numberNote;
      saveSession();
      window.location.href = "/pages/notes.html";
    }
  }
  if (e.target.classList.contains('delete_note')) {
    data.splice(e.target.dataset.item, 1);
    saveSession();
    dateSort(data);
    rerenderingList(data);
  }
  if (e.target.classList.contains('note_button')) {
    openPopupInterface = 'correct'
    openPopup(openPopupInterface, e.target.dataset.item);
    numberNote = e.target.dataset.item;
  }
})
function saveSession() {
  dataBlocknote.dataTravels[dataBlocknote.keyTravel].dataNotes = data;
  localStorage.setItem('dataBlocknote', JSON.stringify(dataBlocknote));
}
// popup
newTravel.addEventListener('click', () => {
  openPopup();
})

function openPopup(openPopupInterface, number) {
  if (openPopupInterface === 'correct') {
    setTimeout(() => {
      popupContainer.classList.toggle('show');
      dateNote.value = data[number].date;
      textNote.value = data[number].description;
      imgNote.value = data[number].img;
    }, 200)
    popup.classList.toggle('show');
    body.classList.toggle('lock')
  } else {
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

closePopup.addEventListener('click', closePopupButton);
//popup

imgNote.onchange = e => {
  img = URL.createObjectURL(e.target.files[0]);
};

function defaultValues() {
  openPopupInterface = 'add';
  dateNote.value = '';
  textNote.value = '';
  imgNote.value = '';
}

saveNote.addEventListener('click', () => {
  const arrayInputs = [
    dateNote, textNote, imgNote
  ]
  if (isValidationPopup(dateNote) && isValidationPopup(textNote) && isValidationPopup(imgNote)) {
    removeClassValid();
    if (openPopupInterface === 'correct') {
      data[numberNote] = {
        img: img, date: dateNote.value, description: textNote.value,
        imageAll: [URL.createObjectURL(imgNote.files[0])],
      };
      dateSort(data);
      rerenderingList(data);
      closePopupButton();
      defaultValues();
      saveSession();
    } else {
      data.push({
        img: img, date: dateNote.value, description: textNote.value, imageAll: [img]
      })
      createNote(data[data.length - 1], data.length - 1);
      defaultValues();
      closePopupButton();
      saveSession();
    }
  } else {
    addClassValid(arrayInputs);
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
          <p class="note_desc">${correctSymbolsLength}...
          </p>
          <a
              href="/" class="note_link" data-item="${index}">
              <b class="bold">Читать подробнее<span class="arrow">&darr;</span></b>
          </a>
          <button class="button note_button" data-item="${index}">Изменить заметку</button>
  `
  list.append(element);
}

function rerenderingList(data) {
  list.innerHTML = '';
  createListNotes(data);
}
function isValidationPopup(element) {
  if (!element.value.trim()) {
    return false;
  }
  return true;
}
function addClassValid(array) {
  array.forEach((el) => {
    isValidationPopup(el) ?
      el.classList.remove('no-valid') :
      el.classList.add('no-valid')
  })
}
function removeClassValid() {
  popup.querySelectorAll('.no-valid').forEach(el=>{el.classList.remove('no-valid')})
}
