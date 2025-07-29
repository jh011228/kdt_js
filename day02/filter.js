// 14번 : filter()
// const 새로운배열명 = 배열명.filter(callback(element[,index[,array]][,thisArgs]));

//1부터 10까지 요소 중 짝수요소만 필터링
const number = [1,2,3,4,5,6,7,8,9,10];

const even = number.filter(function(element){
  return element % 2 === 0;
});

console.log(even); // [2,4,6,8,10]

// 짝수 인덱스의 요소만 출력
const evenIdx = number.filter(function(element,index){
  return index % 2 === 0; //[1,3,5,7,9]
});
console.log(evenIdx);

// 배열의 짝수요소를 두배로 만든 새로운 배열 생성
const evenArr = number.filter((element) => {
  element % 2 === 0;
}).map((element) => {
   element * 2;
});
console.log(evenArr);
