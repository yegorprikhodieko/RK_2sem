const form = document.getElementById('form');

function recieveData(event){
event.preventDefault();
const fields =document.querySelectorAll('input, select');
const data ={};

fields.forEach(field=>{
const{name, value} = field;
data[name] = value;
});

console.log('test', data);
}

form.addEventListener('submit',recieveData);

