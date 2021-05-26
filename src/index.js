const faker = require('faker')

const users = new Array(50).fill('-').map( el => faker.helpers.userCard())
//console.log(users)


const userList = document.querySelector('#userList')

userList.innerHTML = users.map( (obj, idx) => 
  const 
  
  `<li id='${idx}'> <a href="#${idx}"> ${obj.name}  </a>
   </li>`).join('')




  window.addEventListener('hashchange', ()=>{
    const locationId = window.location.hash

    // Anothers approach. think how to implement
    // const user = document.getElementById(locationId.slice(1))
    // user.innerHTML = users.map( (obj) => 
    // `<li > ${obj.}</li>`).join(''))
})




// LAST STEP: ADDING DETAILS AFTER CLICKING EACH USER
// Final input below shoule be added in between line 9 and 13

// window.addEventListener('hashchange', () => {
//   const id = parseInt(window.location.hash.slice(1));

//   userList.innerHTML= users.map((c,idx) => {
//     if (idx === id) console.log('equals, id=', idx);

//     const html1 = `<li> <a href='#${idx}'>${c.name}</a>`
//     const html3 = (idx === id) ? `<br>Email: ${c.email}<br>Phone: ${c.phone}<br>User name: ${c.username}` : "";
//     const html2 = '</li>'

//     return html1 + html3 + html2;
//   } ).join('');
// })














  