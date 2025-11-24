export {};

/*
  📌 타입 별칭 (Type Alias)
  1. 복잡하거나 반복되는 타입에 이름을 부여하고자 할 때 사용 (커스텀 타입)
  2. 다양한 타입 조합에 사용
  3. 장점
    1) 타입 중복 정의를 피할 수 있음 (코드 중복 제거)
    2) 타입 변경 시 일괄 수정 가능 (유지보수 용이)
    3) 타입 구조를 명확하게 표현 가능 (가독성 향상)
  4. 작성법
     type 타입별칭 = 타입정의;
  5. 타입별칭은 변수명과의 구분을 위해 대문자로 시작하는걸 권장
*/

// 1) 기본 타입 별칭
type Age = number;
let userAge: Age = 30; // 의미 부여 목적

// 2) 리터럴 타입 별칭
type Name = '홍길동' | '김철수' | '이영희';
let userName: Name;
userName = '홍길동';

type Greeting = `Hello, ${Name}!`; // typescript 4.1부터 지원되는 템플릿 리터럴 타입
let greet: Greeting;
greet = 'Hello, 홍길동!';
// greet = 'Hello, John!'; // 오류: 'John'은 'Name' 타입에 할당할 수 없음

type StatusCode = 200 | 404 | 500;
let responseStatus: StatusCode;
responseStatus = 200;
responseStatus = 404;
// responseStatus = 403; // 오류: '403'은 'StatusCode' 타입에 할당할 수 없음

// 3) 객체 타입 별칭
type User = {
  id: number | string;
  name: Name;
  email: string;
  isAdmin: boolean;
};

let user1: User;
user1 = {
  id: 1,
  name: '김철수',
  email: 'example@test.com',
  isAdmin: false,
};

console.log(user1);

let user2: User = {
  id: 'user_123',
  name: '이영희',
  email: 'lee@test.com',
  isAdmin: true,
};

let users: User[] = [
  { id: 3, name: '홍길동', email: 'hong@test.com', isAdmin: false },
];

type Person = {
  name: string;
  age: number;
  job?: string; // ? : 선택적 프로퍼티
};

let person1: Person = {
  name: '김말똥',
  age: 28,
  job: '개발자',
};

let person2: Person = {
  name: '박사과',
  age: 32,
  // 백수라 직업 없음
};

type ApiKey = {
  apiName: string;
  apiKey: string;
};

let kakaoApi: ApiKey = {
  apiName: 'Kakao',
  apiKey: 'kakao-123456',
};
