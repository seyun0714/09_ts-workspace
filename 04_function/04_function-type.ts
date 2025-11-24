export {};

/*
  📌 Call Signature (함수 타입 선언 구문)
  1. 함수 타입을 정의할 때 매개변수와 반환값의 타입을 명시적으로 지정하는 방법
  2. 작성법
     (매개변수: 타입) => 반환값 타입;
  3. 재사용을 위해 타입별칭 사용하는 것이 좋음 
*/

// 두 수를 전달 받아서 결과값(숫자)을 반환하는 덧셈, 뺄셈, 곱셈, 나눗셈 함수 정의
// const sum : 함수객체의 타입 = 함수 정의
type Operation = (a: number, b: number) => number;
const sum: Operation = (x, y) => x + y;
const substract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a) => a / 10;
// 매개변수 개수가 많은건 오류
// 매개변수 개수가 적은건 오류나지 않지만, 호출 시 오류남

// 오류
// console.log(divide(120));
// 가능
console.log(divide(120, 20)); // 첫번째 인자만 사용되어도 두번째 인자를 넘겨줘야 오류가 안남
