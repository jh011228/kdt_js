// 9번 : 문자열 연결하기
// 문자열을 표현하는 방법 : "", '', ``

let subject = '자바스크립트';
const time = 5;
console.log(subject, typeof subject);
console.log(time, typeof time);

//지금은 자바스크립트 공부중입니다.
console.log(`지금은 
  ${subject}
   공부중입니다.
  ${time}일동안 배울 예정입니다`);
console.log("지금은 "+subject+" 공부중 입니다."
  +"\n "+time+"일동안 배울 예정입니다.");