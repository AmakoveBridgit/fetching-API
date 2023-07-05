document.getElementById('form').addEventListener('submit', async function (event){
event.preventDefault()

let firstName=document.getElementById('first-Name').value;
let lastName=document.getElementById('last-Name').value;
let age=document.getElementById('age').value;
let data={
    firstName:firstName,
    lastName:lastName,
    age:age,
}
console.log({data});


 let result= await fetch('https://dummyjson.com/users/add',{
     
    


method: 'POST',
headers:{
    'Content-Type': 'application/json'
},
 body:JSON.stringify(data) //converts Js value to Json
})
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)
console.log({result});
 
let success=document.getElementById('success');
result.id ? success.innerHTML='User added successfully':success.innerHTML='User not added'

})