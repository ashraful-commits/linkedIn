const linkedIn_form = document.getElementById('linkedIn_form');
const msg = document.querySelector('.msg');
const output = document.getElementById('output');
const linkedIn_form_edit = document.getElementById('linkedIn_form_edit');


const getAlldat = () =>{
    const getlsdata= getItemLs('linkedIn');
    let list ="";
    if(!getlsdata || getlsdata == ''){
        list =`
        <li class ="text-center bg-white p-3 rounded rounded-5 border border-secondary"><td  colspan ="3"> <h5>No post found</h5></td></li>
        `
    }
    
    if(getlsdata){
        getlsdata.map((item,index)=>{
            list += `
            <li class ="w-100 bg-white rounded rounded-5 my-2 border border-secondary">
            <div class="d-flex justify-content-between align-items-center px-2 py-2">
            <div class="d-flex">
             <img style="width:48px; height:48px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="img">
             <div class="d-flex flex-column ms-2">
             <span class="d-inline-block p-0 m-0 h6">User name</span>
             <span class="d-inline-block p-0 m-0 text-black-50" >follower</span>
             <span class="d-inline-block p-0 m-0 text-black-50">2h</span>
             </div>
            </div>
            
                <div class="dropdown">
                <button class="btn  dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                      </svg>
                        </button>
                <div class="dropdown-menu target_menu w-100" aria-labelledby="triggerId">
                    <a data-bs-target="#edit_modal" data-bs-toggle="modal" index="${index}" class="dropdown-item edit w-100"   href="#">Edit</a>
                    <a index="${index}" class="dropdown-item delete w-50" href="#">Delete</a>
                </div>
                </div>
            </div>
            <p class="px-2 py-1">${item.text}</p>
            <img class="w-100 h-100" src="${item.image}">

            <div class="d-flex justify-content-between align-items-center px-3 py-2 border border-bottom-2 border-end-0 border-start-0 border-top-0">
            <p class="m-0 p-0">12</p>
            <p class="m-0 p-0">12 comments</p>
            </div>
            <div class="d-flex justify-content-between p-3 align-items-center">
             <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
            </svg>
             <span>like</span>
             </div>
             <div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
            </svg>
             <span>comments</span>
             </div>
             <div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
            </svg>
             <span>share</span>
             </div>
             <div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg>
             <span>send</span>
             </div>
            </div>
            </li>
            
            `
        })
    } 
   output.innerHTML =list;
}
getAlldat();




// get value from form and set value in ls 

linkedIn_form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let form_data = new FormData(e.target);
    let object_data = Object.fromEntries(form_data.entries());

    let { text, image } = object_data;
    if(!text || !image){
        msg.innerHTML = setAlert('All fields are required')
    }else{
        setDataLS('linkedIn',object_data)
        e.target.reset();
        getAlldat();
    }
})

output.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('edit')) {
        let edit_index = e.target.getAttribute('index');
        let edit_data = getItemLs('linkedIn');
        let textArea = document.getElementById('textarea');
        let input_field = document.getElementById('input');

        let data = edit_data[edit_index];
        textArea.value = data.text;
        input_field.value = data.image;
        linkedIn_form_edit.addEventListener('submit',(e)=>{
            e.preventDefault();
          
            let form_data = new FormData(e.target);
            let object_data = Object.fromEntries(form_data.entries());
        
            let { text, image } = object_data;
            if(!text || !image){
                msg.innerHTML = setAlert('All fields are required')
            } else {
                console.log(edit_index)
                console.log(edit_data)
                edit_data[edit_index] = {
                    text,image
                }
        
                updateLsData('linkedIn',edit_data)
                getAlldat();
            }
        })
    }

    if (e.target.classList.contains('delete')) {
        let delete_index = e.target.getAttribute('delete');
        let delet_data = getItemLs('linkedIn');
        delet_data.splice(delete_index, 1)
        updateLsData('linkedIn', delet_data);
        getAlldat()
    }
})


