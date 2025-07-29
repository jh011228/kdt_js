//  9번 : 객체1

// 객체는 보통 const 로 선언하며, 객체로 사용시 const라도 값 변경이 가능하다
const user = {
  name : "홍길동",
  age : 20,
  address : "서울시 강남구",
  introduce : () => {
    console.log("안녕하세요");
  },
};

console.log(user, typeof user);
console.log(user.introduce); // [Function : introduce]
user.introduce(); // 안녕하세요
console.log(user['address']); // key 값의 규칙성이 필요하다면 [''] 문법을 사용하여 접근할 수 있다
console.log(user.address); //. 직접접근 할 수 있다

//실습
//1. programming 객체 생성

const programming = {
  pro1 : "java",
  pro2 : "dbms",
  pro3 : "html/css",
  pro4 : "javascript"
}
//2. 객체 출력 타입도 같이 출력
console.log(programming, typeof programming);
//3. javascript만 출력
console.log(programming.pro4 , typeof programming.pro4);
console.log(programming['pro4'] , typeof programming['pro4']);

//4. pro의 값을 자바로 변경
programming.pro1 = "자바";
//5. pro5 객체 추가
programming.pro5 = "git";

//6. 객체의 전체 값 하나씩 출력
for(let i in programming){
  console.log(programming[i]);
}

// for ... in
// 객체의 키(프로퍼티 이름)을 순환한다
// 일반 객체나 배열에서 모두 사용가능하다

// for ... of
// 이터러블(iterable) 객체에서만 사용가능 => 배열, 문자열, Map, Set 등, ....
// 순환시 객체의 값(value)를 반환한다
// 일반 객체는 이터러블 객체가 아니므로 사용 불가하다
// [Symbol.iterator] 메소드를 가진 객체를 이터러블 객체라고 한다

// 일반 객체를 for ... of 로 순회하려면 배열로 변환하면 된다
//Object.keys(), Object.values(), Object.entries()를 사용한다
//Object.entries() : [key, value] 쌍의 배열로 반환하는 메소드 

for(let key of Object.keys(programming)){
  console.log(key);
}
for(let value of Object.values(programming)){
  console.log(value);
}
for(let [key,value] of Object.entries(programming)){
  console.log(`${key}의 값 : ${value}`);
}

//객체에 [Symbol.iterator]를 직접 추가
const program = {
  lang1 : "javascript",
  lang2 : "html",
  lang3 : "css",
  [Symbol.iterator] : function* (){
    for(let key in this){
      if(this.hasOwnProperty(key)){
        yield this[key];
      }
    }
  },
};

for(let value of program){
  console.log(value);
}
