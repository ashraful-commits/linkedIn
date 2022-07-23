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
                        aria-expanded="false">...</button>
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
             <span>like</span>
             </div>
             <div>
             <span>comments</span>
             </div>
             <div>
             <span>share</span>
             </div>
             <div>
             <span>like</span>
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


