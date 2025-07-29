//2번 : const 상수(var.js, let.js랑 같이 보기)

//console.log(data1); // 호이스팅은 되지만 초기화 전에는 접근 불가능 ReferenceError
// 선언 자체는 위로 끌어올려지지만 일시적 사각지대(TDZ Temporal Dead Zone)에 갇혀있어서 초기화 전에는 접근하면 안됨
const data1 = 10;
console.log(data1,typeof data1);