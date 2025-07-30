const button = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

button.addEventListener("click", function () {
  let ment = prompt('추가할 할일을 입력하세요');
  if (ment.length > 0) {
    let newLi = document.createElement('li');
    // 태그 추가
    newLi.setAttribute('class', 'list-li');
    newLi.innerHTML = "<div class='bottom-line'><input type='checkbox' id='list-checkbox' onclick='bgGreen()'> " + ment +
      "<button type='button' class='btn-delete'>삭제</button></div>";
    taskList.appendChild(newLi);
  }
});



function bgGreen(){
  let myDiv = document.querySelector('.list-checkbox');
  let parent = myDiv.parentElement;
  let parent2 = parent.parentElement;
  parent2.style.backgroundColor = 'green';
}