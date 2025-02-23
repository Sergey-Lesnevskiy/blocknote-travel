let data = {

}
// const main = document.querySelector('main');

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup_container');
const closePopup = document.querySelector('.close_popup');
const saveNote = document.querySelector('.button_popup');
const list = document.querySelector('.travel_list');
const body = document.querySelector('body');
// const dataFile = document.querySelector('.input_file');
const containerFieldsNote = document.querySelector('.containerFieldsNote');
const addedNote = document.querySelector('.added-note');


const titlePopup = popup.querySelector(`.input_title`);
const startTimePopup = popup.querySelector(`.input_start`);
const endTimePopup = popup.querySelector(`.input_end`);

let isValid = true;

function isSessionEmpty() {
  let dataSession = JSON.parse(localStorage.getItem("dataBlocknote"));
  if (dataSession) {
    data = dataSession;
    console.log(data);
  } else {
    console.log('tam');
    data = {
      dataTravels: [
        {
          title: null,
          timeStart: null,
          timeEnd: null,
          dataNotes: [
          ]
        },
      ],
      keyTravel: null,
      keyNote: null,
    };
  }
}
function saveSession() {
  localStorage.setItem('dataBlocknote', JSON.stringify(data));
}

function createTravel(data, index) {
  let element = document.createElement('li');
  element.classList.add('travel_item');
  element.innerHTML = `
    <h3 class="travel_item-title">${data.title}</h3>
        <p class="travel_item-data">
          <span class="data-start">${data.timeStart}</span> /
          <span class="data-end">${data.timeEnd}</span>
        </p>
        <button class="button button_link" data-item="${index}">
          Посмотреть записки
        </button>
  `
  list.append(element);
}
function createListTravel(data) {
  if (data.dataTravels[0].title) {
    data.dataTravels.forEach((element, i) => {
      createTravel(element, i)
    });

  } else {
    let element = document.createElement('li');
    element.classList.add('emptyList');
    element.innerHTML = `<h2>
  Cоздайте поездку первую поездку;
  </h2>
  `;
    list.prepend(element);
  }
}
isSessionEmpty();
createListTravel(data);

function rerenderingListTravel(data) {
  list.innerHTML = '';
  createListTravel(data);
}

list.addEventListener('click', (e) => {
  data.keyTravel = e.target.dataset.item
  // localStorage.setItem('dataBlocknote', JSON.stringify(data))
  saveSession();
  window.location.href = "/pages/traveling.html";
})

// popup
const newTravel = document.querySelector('.new_travel-main')
newTravel.addEventListener('click', () => {
  openPopup();
})

function openPopup(openPopupInterface, number) {
  if (openPopupInterface === 'correct') {
    setTimeout(() => {
      popupContainer.classList.toggle('show');
      dateNote.value = data[number].date;
      textNote.value = data[number].description;
      // imgNote.value =  data[number].img;
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
  // defaultValues();
  removeClassValid();
  saveSession();
}

closePopup.addEventListener('click', closePopupButton);

// dataFile.addEventListener('change', (event) => {
//   const fileList = event.target.files;
//   console.log(fileList.length);
//   if(fileList.length>1){

//   }else{

//   }
// });
let noteNum = 1
function createFieldsNote() {
  noteNum++;
  let element = document.createElement('li');
  element.classList.add('fieldsNote');
  element.innerHTML = `
        <h3 class="popup_title">
          Заметка ${noteNum}
        </h3>
        <label>Выберите фото:
          <input type="file" class="input_file-${noteNum}">
        </label>
        <label>
          Выберите дату:
          <input type="date" class="input_date-${noteNum}">
        </label>
        <label class="textarea-label label">Введите текст заметки:
          <textarea id="text" name="text" class="new-note-description-${noteNum}" rows="5" cols="33"></textarea>
        </label>
        `
  containerFieldsNote.append(element);
}
addedNote.addEventListener('click', () => {
  createFieldsNote();
})

function validNote(){
  for (let i = 1; i <= noteNum; i++) {
    const arrayFields = [
    popup.querySelector(`.input_file-${i}`),
    popup.querySelector(`.input_date-${i}`),
    popup.querySelector(`.new-note-description-${i}`),
    ];

    arrayFields.forEach(element => {
      if (!isValidationPopup(element)) {
        console.log('here');
        isValid = isValidationPopup(element);
        addClassValid(arrayFields);
        return
      }
    });
  }
}


function addedDataNote() {
  const array = []
  for (let i = 1; i <= noteNum; i++) {
    const arrayFields = [popup.querySelector(`.input_file-${i}`),
    popup.querySelector(`.input_date-${i}`),
    popup.querySelector(`.new-note-description-${i}`),
    ];

    arrayFields.forEach(element => {
      if (isValidationPopup(element)) {
        isValid = isValidationPopup(element);
        addClassValid(arrayFields);
        return;
      }
    });
    if (isValid) {
      const data = {
        img: popup.querySelector(`.input_file-${i}`).value,
        date: popup.querySelector(`.input_date-${i}`).value,
        description: popup.querySelector(`.new-note-description-${i}`).value,
      }
      array.push(data);
    } else {
      return;
    }
  }
  return array;
}

saveNote.addEventListener('click', (e) => {

  const arrayInputs = [
    titlePopup, startTimePopup, endTimePopup
  ]

  if (isValidationPopup(titlePopup) && isValidationPopup(startTimePopup) && isValidationPopup(endTimePopup)&& validNote()) {
    let newTravel = {
      title: popup.querySelector(`.input_title`).value,
      timeStart: popup.querySelector(`.input_start`).value,
      timeEnd: popup.querySelector(`.input_end`).value,
      dataNotes: addedDataNote()
    }
    data.dataTravels.push(newTravel);
    rerenderingListTravel(data);
    removeClassValid();
    closePopupButton();
  } else {
    validNote();
    addClassValid(arrayInputs);
  }
  //    <label>Выберите фото:
  //   <input type="file" class="input_file-1">
  // </label>
  // <label>
  //   Выберите дату:
  //   <input type="date" class="input_date-1">
  // </label>
  // <label class="textarea-label label">Введите текст заметки:
  //   <textarea id="text" name="text" class="new-note-description-1" rows="5" cols="33"></textarea>
  // </label>



  // if(openPopupInterface === 'correct'){
  //   data[numberNote]={
  //     img: img, date: dateNote.value, description: textNote.value
  //   };
  //   rerenderingList(data);
  //   closePopupButton();
  //   defaultValues();
  // }else{
  //   data.push({
  //     img: img, date: dateNote.value, description: textNote.value
  //   })
  //   createNote(data[data.length - 1], data.length - 1);
  //   defaultValues();
  //   closePopupButton();
  // }
})
// read file
// async function readImageFile(file) {
//   const reader = new FileReader();

//   return new Promise((resolve, reject) => {
//       reader.onload = event => resolve(event.target.result); /* Мы нашли решение. */
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//   });
// }

// document.querySelector('.input_file').onchange = async event => {
//   try {
//       const imageDataUrl = await readImageFile(event.target.files[0]);
//       // document.querySelector('.test').src = imageDataUrl; 
//       // console.log(URL.createObjectURL(imageDataUrl));
//   } catch (error) {
//       console.error("Ошибка при чтении файла", error); /* Я читаю, следовательно, я существую. */
//   }
// }
// read file
//popup

// validation
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
  // array.forEach((el) => {
  //   el.classList.remove('no-valid');
  // })
}

// validation