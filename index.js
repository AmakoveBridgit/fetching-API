let userContainer=document.getElementById('users')
const getUsers= ()=>{
   return   fetch('https://dummyjson.com/users')
   .then(res => res.json())
//    .then(console.log);
    .then(response=>response)
    .catch(error =>error.message)
}
getUsers();


const displayUsers=async ()=>{
const users= await getUsers();
console.log(users.users);
users.users.map(item=>{
    let div = document.createElement('div')
    div.className='people';
    
    let img=document.createElement('img')
    let names=document.createElement('h2')
    let username=document.createElement('p')

    img.src= item.image;
    names.innerHTML=`${item.firstName} ${item.lastName}`;
    username.innerHTML=item.username;
    div.appendChild(img);
    div.appendChild(names);
    div.appendChild(username);
    userContainer.appendChild(div)
})


}
displayUsers();