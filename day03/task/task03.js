//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력

//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용
//참고 : split(), reverse(), join()
function printStr(str){
  return str.split("");
}
function reverseStr(str,callback){
  callback(str);
}
reverseStr('가나라다',function(str){
  let str1 = printStr(str);
  str1 = str1.reverse();
  str1 = str1.join('');
  console.log(str1);
})



//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기

//함수명 welcomeUser

function welcomeUser(firstName,name){
  let namePlus = [];
  namePlus.push(firstName);
  namePlus.push(name);
  let fullName = namePlus.join('');
  return fullName;
}
console.log(`${welcomeUser('신','짱구')}님 환영합니다`);



//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환

//함수명 isAdult

function isAdult(age){
  if(age >=20)return true;
  else{return false};
}
let age = 5;
console.log(`${welcomeUser('신','짱구')}님의 나이는 ${age}살로 ${isAdult(age) ? '성인' : '성인이 아닙'}니다`);

//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다
const student = [{'이름' : '둘리', '나이' : 5, '점수' : 80},
                 {'이름' : '도우너', '나이' : 6, '점수' : 50},
                 {'이름' : '또치', '나이' : 5, '점수' : 90}
];
student.forEach((stu)=>{  
  console.log(`${stu.이름} : ${stu.점수}`);
});
//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라
let count = 0;

student[0].포인트 = 80;
student[1].포인트 = 50;
student[2].포인트 = 90;

student.forEach((stu)=>{
  count += stu.포인트;
});

console.log(`포인트 총합은 : ${count}`);