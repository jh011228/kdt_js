const navLogin = document.querySelector(".nav--login");
const modalBox = document.querySelector(".modal-box");
const xBox = document.querySelector(".x-box");

navLogin.addEventListener('click',()=>{
  modalBox.style.display = 'flex';
});

xBox.addEventListener('click',()=>{
  modalBox.style.display ='none';
});

xBox.addEventListener("mouseover",()=>{
  xBox.style.color="red";
});

xBox.addEventListener("mouseout",function(){
  this.style.color="black";
});