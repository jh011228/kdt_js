const button = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

button.addEventListener("click", function () {
  let ment = prompt('추가할 할일을 입력하세요');
  let newLi = document.createElement('li');
  // 태그 추가
    newLi.setAttribute('class', 'list-li');
    newLi.innerHTML = "<input type='checkbox' id='list-checkbox'> " + ment +
    "<button type='button' class='btn-delete'>삭제</button>";
    if(ment!=null && ment.length!=0){
      taskList.appendChild(newLi);
    }
  
  
  let delBtn = newLi.querySelector(".btn-delete");
  delBtn.addEventListener('click',function(){
    if(confirm('할일을 삭제하시겠습니까?') ){
      this.parentElement.remove();
    } 
  });

  let check = newLi.querySelector("#list-checkbox");
  check.addEventListener('click',function(e){
    if(e.target.checked){
      this.parentElement.style.backgroundColor='green';
    }
    else{
      this.parentElement.style.backgroundColor='white';
    }
  });
});
