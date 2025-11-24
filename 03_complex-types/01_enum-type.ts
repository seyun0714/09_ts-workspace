export {};

/*
  📌 enum 타입
  1. 연관된 상수 값 집합을 그룹화하여 재사용 및 가독성 향상
  2. 특정 값 집합 중 하나로 변수 타입을 제한 (타입 안정성이 높아 오직 지정된 값만 허용)
  3. 값의 집합이 고정되어 있거나 서로 밀접하게 연관된 값들을 명확하게 표현하고자 할 경우 주로 사용
     ex) 역할, 권한, 방향, 상태 
  4. 숫자 또는 문자열 집합에 이름을 부여해 관리 
  5. 타입 선언 작성법 
    1) 숫자형 enum
        enum 타입명 {
         상수1,
         상수2,
         상수3,
       }
    2) 명시적 할당
        enum 타입명 {
         상수1 = 값1,
         상수2 = 값2,
         상수3 = 값3,
       }
    3) 문자열형 enum
        enum 타입명 {
         상수1 = "값1",
         상수2 = "값2",
         상수3 = "값3",
       }
*/

enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}

console.log(Color);
console.log(Color.Red); // 0

// - 타입 사용
let col: Color;
col = Color.Green;
col = Color.Blue;
col = Color.Red;
console.log(col); // 0
// col = Color.YELLOW; // 오류: 'YELLOW'는 'Color'에 존재하지 않음

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

console.log(Role);
console.log(Role.ADMIN); // 'ADMIN'

let user: {
  name: string;
  age: number;
  role: Role;
};

user = {
  name: '홍길동',
  age: 30,
  role: Role.USER,
};

console.log(user);

if (user.role === Role.USER) {
  console.log('일반 사용자입니다.');
}

// union + 리터럴로 대체가능
