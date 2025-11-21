export {};

/*
  📌 any 타입
  1. 모든 타입을 허용할 때 사용
  2. 컴파일러의 타입 검사를 하지 않음 
  3. 타입스크립트의 안정성을 포기하는 개념이므로 특별한 경우 외에 권장하지 않음
*/

let anything: any; // any 타입으로 명시적 선언
anything = 10;
console.log(typeof anything);
anything = 'hello';
console.log(typeof anything);
anything = [1, 2, 3];
console.log(typeof anything);

// console.log(anything.length); // 런타임 시점에 오류 발생 가능
// console.log(anything.do()); // 런타임 시점에 오류 발생 가능

// any = 타입 검사가 엄격하지 않음 (타입 체크 없이 무분별하게 프로퍼티 접근 및 연산 가능)

/*
  📌 unknown 타입
  1. any 타입과 유사하게 모든 타입을 허용하지만 더 안전한 타입
  2. 타입 검사가 엄격함
     → typeof 연산자 또는 타입 검사를 위한 함수를 사용하여  
       타입을 체크한 후 프로퍼티 접근 또는 연산을 수행할 수 있음 
  3. 주로 API 데이터같이 타입을 모를 때 임시 타입으로 사용 
*/

let unknownVar: unknown; // unknown 타입으로 명시적 선언
unknownVar = 10;
console.log(typeof unknownVar);
unknownVar = 'hello';
console.log(typeof unknownVar);
unknownVar = [1, 2, 3];
console.log(typeof unknownVar);

unknownVar = 'typescript';
// unknown 타입은 타입 검사를 유도해야함
if (typeof unknownVar === 'string') {
  console.log(unknownVar.length); // 올바른 접근
}

// console.log(unknownVar.length); // 오류: 'unknown' 타입에는 'length' 프로퍼티가 없음
// console.log(unknownVar.do()); // 오류: 'unknown' 타입에는 'do' 프로퍼티가 없음
// unknown = 타입 검사가 엄격함  console.log(unknownVar.length); // 올바른 접근

unknownVar = [1, 2, 3];

// if (typeof unknownVar === 'array') { // 잘못된 예시
//   console.log(unknownVar.length);
// }

// array 타입 검사
if (Array.isArray(unknownVar)) {
  console.log(unknownVar.length); // 올바른 접근
}
