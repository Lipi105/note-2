// const  addButton = document.querySelector('#add');

// const updateLSData=()=>{
//     const textAreaData = document.querySelectorAll('textarea');
//     const notes = [];
//     textAreaData.forEach((note)=>{
//         return notes.push(note.value);

//     });

//     localStorage.setItem('notes',JSON.stringify(notes));                    //localstorage takes string so to store array(to convert array into string) we use json.
// }

// const addNewNote=(text ='')=>{
//     const note = document.createElement('div');
//     note.classList.add('note');

//     const htmlData =`
//      <div class="operation">
//        <button class="edit"><i class="fas fa-edit"></i></button>
//        <button class="delete"><i class="fas fa-trash-alt"></i></button>

//        <div class="main ${text?"":"hidden"}"></div>
//        <textarea class="${text?"hidden":""}"></textarea>
//     `;
//     note.insertAdjacentHTML('afterbegin',htmlData);

//     //getting the references:
//     const editButton =note.querySelector('.edit');
//     const delButton =note.querySelector('.delete');
//     const mainDiv =note.querySelector('.main');
//     const textarea =note.querySelector('textarea');

//     //deleting the node:
//     delButton.addEventListener('click',()=>{
//         note.remove();
//         updateLSData();
//     });

//     textarea.value = text;
//     mainDiv.innerHTML = text;

//         editButton.addEventListener('click',()=>{
//         mainDiv.classList.toggle('hidden');
//         textarea.classList.toggle('hidden');
//     });

//     textarea.addEventListener('change',(event)=>{
//         const value = event.target.value;
//         mainDiv.innerHTML=value;
//         updateLSData();


//     });


//     document.body.appendChild(note);
// };

// const notes =JSON.parse(localStorage.getItem('notes'));

// if(notes){ 
//     notes.forEach((note)=>addNewNote(note));
// }

// addButton.addEventListener('click',()=>addNewNote());


const btn=document.querySelector('.btn');

const updateLS =()=>{
    const textAreaData= document.querySelectorAll('textarea');
    const notes =[];
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    });
    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote=(text="")=>{

    const print= document.querySelector('.print');
    const note= document.createElement('div');
    note.classList.add('note');

    const htmlData =`
    <div class="main">
    <div class="back-textarea ${text?"":"hidden"}"></div>
    <textarea class="${text?"hidden":""}"></textarea>
      <div class="icons">
         <button class="edit">  <i class="fa-solid fa-pen-to-square "></i></button>
          <button class="delete"><i class="fa-sharp fa-solid fa-trash "></i></button>
      </div>
  </div>
    `;

    note.insertAdjacentHTML('afterbegin',htmlData);
    print.appendChild(note);

    const edit = note.querySelector('.edit');
    const trash = note.querySelector('.delete');
    const textarea = note.querySelector('textarea');
    const backTextarea = note.querySelector('.back-textarea');

trash.addEventListener('click',()=>{
    note.remove();
    updateLS();
});

textarea.value=text;
backTextarea.innerHTML=text;



edit.addEventListener('click',()=>{
    backTextarea.classList.toggle('hidden');
    textarea.classList.toggle('hidden');

  
});

textarea.addEventListener('change',(event)=>{
    const value = event.target.value;
    backTextarea.innerHTML=value;
    updateLS();
})

};

const notes =JSON.parse(localStorage.getItem('notes'));

if (notes){
    notes.forEach((note)=>addNewNote(note));
}


btn.addEventListener('click',()=>addNewNote());
