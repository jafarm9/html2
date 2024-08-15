document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});


const addUserButton = document.getElementById('add-user-button')
addUserButton.addEventListener('click', () => {
  document.querySelector('.add-User-modal').classList.add('show')
  document.querySelector('.add-User-modal-black').classList.remove('dis-none')
});

document.querySelector('.add-User-modal-black').addEventListener('click' , (e) =>{
  document.querySelector('.add-User-modal').classList.remove('show')
  e.target.classList.add('dis-none')
});