//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것
function ageCheck(age){
  let result = '';
  age>=19 ? result = '입장가능' : result = '입장불가';
  return result;
}
function eventCheck(age){
  let result = '';
  age===10 ? result = '당첨' : result = '다음 기회에';
  return result;
}
const name = '최장현';
const age = '25';
//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력
console.log(`${name}님은 ${age}살 입장 가능 여부는 ${ageCheck(age)} 이벤트 당첨 여부는 ${eventCheck(age)}`)
//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정
const stuName = '짱구';
const stuScore = 70;
function scoreCheck(score){
  if(score>=60)return '합격';
  else{return '불합격'};
}
console.log(`${stuName}님의 점수는 ${stuScore}점으로 ${scoreCheck(stuScore)}입니다.`);
//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F
function gradeCheck(name,score){
  if(score>=90)return name+'님의 학점은 : A';
  else if(score>=80)return name+'님의 학점은 : B';
  else if(score>=70)return name+'님의 학점은 : C';
  else{return name+'님의 학점은 F'};
}
console.log(gradeCheck(stuName,stuScore));
//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력
const num = [];
function sum(){
  for(let i=1;i<=100;i++){
    if(i%3===0){
      num[i] = i;
    }else if(i%6===0 && i%3!=0){
      num[i] = i;
    }else if(i%9===0 && i%3!=0 && i%6!=0){
      num[i] = i;
    }
  }
  let total = 0;
  for(let i=1;i<=100;i++){
    if(num[i] != undefined){
      total += num[i];
    }
  }
  return total;
}
console.log(`1부터 100까지 3,6,9의 배수의 합은 ${sum()}입니다`);

