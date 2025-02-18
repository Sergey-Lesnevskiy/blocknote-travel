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

const list = document.querySelector('.travel_list');

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