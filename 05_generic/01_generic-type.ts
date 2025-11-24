export {};

// 특정 타입의 데이터를 전달했을 때 해당 타입의 데이터를 반환하는 함수를 정의해보기
function getData1(anything: any) {
  console.log(typeof anything);
  return anything;
}

// 반환되는 값은 무조건 any 타입이 됨 === TypeScript에서 타입 정보 잃어버림
// => 코드 제안x, 잘못된 메서드, 프로퍼티 접근 시 컴파일 에러 x
const d1 = getData1(12);
d1.toString();
getData1('string');
getData1(true);
getData1(undefined);
getData1(() => {});
getData1(Symbol('id'));
getData1([2, 2]);

// 각 타입별 함수를 정의하는 방법 => 동일한 로직의 함수가 타입이 다르다는 이유만으로 여러개 정의 => 중복 코드 발생

// 제네릭 맛보기 (제네릭 함수)
function getData2<T>(anything: T): T {
  return anything;
}

const d2 = getData2<number>(10);
d2.toString();
const d3 = getData2<string>('안녕');
d3.toUpperCase();

/*
  📌 제네릭 타입 (Generic Type)
  1. 제네릭 정의 : 타입을 미리 정해두지 않고 사용하는 시점에서 지정할 수 있게 하는 기능 
  2. 즉, 타입을 파라미터로 받아 처리하는 타입
  3. 한가지 타입에만 국한되지 않고, 여러 타입에 대해 동일한 구조나 동작을 보장할 수 있음 
  4. 주로 컬렉션(배열, 객체) 타입에 사용
  5. 작성법
     <T> : 타입 파라미터 (T는 타입 변수, 임의의 타입을 의미)
*/

// 제네릭 타입 별칭(Generic Type Alias)
type Box<T> = {
  value: T;
};

// 문자열 담는 박스
const box1: Box<string> = {
  value: 'abc',
};

const box2: Box<number> = {
  value: 10,
};

// -----------------------------

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

// API 요청 후 응답데이터에 대한 타입 정의
// 상황에 따라 응답 데이터로 담기는 data의 타입은 매번 다름
interface ApiResponse<T> {
  status: 200 | 400 | 404 | 500;
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<User> = {
  status: 200,
  success: true,
  data: {
    id: 1,
    name: '박세윤',
    email: 'test@gmail.com',
    isAdmin: true,
  },
};

const usersResponse: ApiResponse<User[]> = {
  status: 200,
  success: true,
  data: [
    {
      id: 1,
      name: '박세윤',
      email: 'test@gmail.com',
      isAdmin: true,
    },
    {
      id: 2,
      name: '박세연',
      email: 'test@gmail.com',
      isAdmin: false,
    },
  ],
};

// 에러 메시지를 응답하는 ApiResponse
const errorResponse: ApiResponse<{ message: string }> = {
  status: 500,
  success: false,
  data: {
    message: 'Internal Server Error',
  },
};
