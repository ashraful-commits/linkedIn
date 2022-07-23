
const setAlert =(msg,type)=>{
    `<h5 class="alert alert-${type} text-center">${msg}</h5>`
}



const setDataLS =(key,value)=>{
let data =[];
if(localStorage.getItem(key)){
    data =JSON.parse(localStorage.getItem(key));
}
data.push(value);
return localStorage.setItem(key,JSON.stringify(data));
}


const getItemLs = (key)=>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }
}


const updateLsData = (key,array) => {
    localStorage.setItem(key,JSON.stringify(array))
}
