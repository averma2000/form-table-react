const addbtn=document.getElementById('submit-button');
const table=document.querySelector('table');

const inputname = document.querySelector('#name');
const inputphone = document.querySelector('#phone');
const inputemail = document.querySelector('#email');


addbtn.addEventListener('click',()=>{
    const name=inputname.value;
    const phone=inputphone.value;
    const email=inputemail.value;


    const template = `
                    <tr>
                    <td>${name}</td>
                    <td>${phone}</td>
                    <td>${email}</td>
                    </tr>`;
    
    if(name ===""){
        alert(`Enter name`);
    } 
    else if(phone ==="" || phone.length < 10){
        alert(`Enter valid Phone no.`)
    }
    else if(email ==="" || email.includes('@') === false){
        alert(`Enter valid Email`)
    }
    else{
        table.innerHTML += template; 
    }

    inputname.value="";
    inputphone.value="";
    inputemail.value="";

    
});