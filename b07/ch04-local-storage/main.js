

let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
 let phone = document.getElementById('phone');
let job = document.getElementById('job');

// user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

let data = localStorage.getItem('users');
if (data) {
  data = JSON.parse(data); // doc du lieu
  fullname.value = data.name;
  email.value = data.email;
  phone.value = data.phone;
  job.value = data.job;

}

// function saveData() {
//  let user_records =   {
//     name: fullname.value,
//      email: email.value,
//     phone: phone.value,
//     job: job.value,
//   };
//   localStorage.setItem('users', JSON.stringify(user_records));
// }
document.querySelector('#btn-send-contact').addEventListener('click',function(){
  let user_records =   {
    name: fullname.value,
     email: email.value,
    phone: phone.value,
    job: job.value,
  };
  localStorage.setItem('users', JSON.stringify(user_records));
  var storedColors = JSON.parse(localStorage.getItem("users"));
})


document.querySelector('#btn-delete-storage').addEventListener('click',function(){
  localStorage.removeItem('users');
  fullname.value= '';
  email.value = '';
  phone.value= '';
  job.value ='Student';
});