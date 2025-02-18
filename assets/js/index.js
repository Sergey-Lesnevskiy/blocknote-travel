const data ={
  dataTravels: [
  {
    title:'Несвиж',
    timeStart: '01.01.01',
    timeEnd: '01.01.01',
    dataNotes:[
      {
        img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
        ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
      },
      {
        img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
        ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
      },
      {
        img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
        ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
      },
    ]
  },
  {
    title:'Мир',
    timeStart: '01.01.01',
    timeEnd: '01.01.01',
    dataNotes:[
      {
        img: '../assets/img/image (3)-fotor-bg-remover-20250215153649 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
        ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
      },
      {
        img: '../assets/img/image (3)-fotor-bg-remover-20250215153649 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
        ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
      },
      {
        img: '../assets/img/image (3)-fotor-bg-remover-20250215153649 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
        ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
      },
    ]
  }
],
keyTravel:null,
keyNote:null,
}
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup_container');
const closePopup = document.querySelector('.close_popup');
const saveNote = document.querySelector('.button_popup');
const list = document.querySelector('.travel_list');
const body = document.querySelector('body');
// const dataFile = document.querySelector('.input_file');
const containerFieldsNote = document.querySelector('.containerFieldsNote');
const addedNote = document.querySelector('.added-note');

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
  data.forEach((element, i) => {
    createTravel(element, i)
  });
}
createListTravel(data.dataTravels);

list.addEventListener('click',(e)=>{
  data.keyTravel = e.target.dataset.item
  localStorage.setItem('dataBlocknote', JSON.stringify(data))
  window.location.href = "/pages/traveling.html";
})

// popup
const newTravel = document.querySelector('.new_travel-main')
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

closePopup.addEventListener('click', closePopupButton);

// dataFile.addEventListener('change', (event) => {
//   const fileList = event.target.files;
//   console.log(fileList.length);
//   if(fileList.length>1){

//   }else{

//   }
// });
let noteNum = 1
function createfieldsNote(){
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
addedNote.addEventListener('click',()=>{
  createfieldsNote();
})


saveNote.addEventListener('click', (e) => {
  // console.log(dataFile.value);

  // console.log(popup.querySelector('.containerFieldsNote'));
  const data = {
    img: popup.querySelector(`.input_file-${noteNum}`).value,
    date: popup.querySelector(`.input_date-${noteNum}`).value,
    description: popup.querySelector(`.new-note-description-${noteNum}`).value,
  }   
  console.log(data);
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
  // {
  //   title:'Несвиж',
  //   timeStart: '01.01.01',
  //   timeEnd: '01.01.01',
  //   dataNotes:[
  //     {
  //       img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
  //       ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
  //     },
  //     {
  //       img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
  //       ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
  //     },
  //     {
  //       img: '../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png', allImage:['../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png','../assets/img/image (2)-fotor-bg-remover-20250215153238 (1).png'
  //       ], date: '2025-02-05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, omnis illo quos rerum tenetur sint odio quaerat aspernatur consequuntur ratione. Necessitatibus optio dolor illo, harum sit inventore possimus cumque.'
  //     },
  //   ]
  // },


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