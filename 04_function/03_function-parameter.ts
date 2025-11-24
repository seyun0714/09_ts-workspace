export {};

// 1) 기본 매개변수 타입 지정
function getUserInfo(name: string, age: number): string {
  return `${name}은(는) ${age}살 입니다.`;
}

console.log(getUserInfo('박세윤', 25));
// console.log(getUserInfo(25, '박세윤')); // 순서 일치해야함
// console.log(getUserInfo('박세윤')); // 개수 일치해야함

// 2) 옵셔널 매개변수
// 매개변수 명 뒤에 ?를 붙여 인자를 생략할 수 있도록 지정
// 유의사항 : 반드시 필수 매개변수 뒤에 위치해야됨
function getMessage(name: string, msg?: string): string {
  return `${msg || 'Hello'}, ${name}`;
}

console.log(getMessage('Hong', 'Goodbye'));
console.log(getMessage('Hong'));

// 3) 기본값 매개변수
// 유의사항 : 옵셔널? 키워드 작성하면 안됨
function printMessage(msg: string = 'Hi'): void {
  console.log(msg);
}

printMessage('Hello, Everyone');
printMessage();

// 4) 유니온, 리터럴 적용 가능
function setStatus(status: 'SUCCESS' | 'ERROR' | 'PENDING'): void {
  console.log(status);
}

setStatus('ERROR');
// setStatus('NOTHING');

// 5) 나머지 매개변수
//  매개변수명 앞에 ...을 붙여 인자를 배열로 받음
//  유의사항: 필수 매개변수 뒤에 위치해야됨
function joinString(separator: string, ...strings: string[]): string {
  return `${strings.join(separator)}`;
}

console.log(joinString('-', 'Hello', 'World'));
console.log(joinString(' ', 'Hello', 'World', '!'));

// 리액트에서의 실전 예시

// types.ts
interface User {
  name: string;
  age: number;
}

// 사용자의 정보를 전달 받아서 UI를 구성하는 함수형 컴포넌트라고 생각
// props === { user: User타입 객체, color: string }

interface UserDetailProps {
  user: User;
  color: string;
}

function UserDetailComponent({ user, color }: UserDetailProps) {
  console.log(`${user.name}은 ${user.age}살 입니다.`);
}

UserDetailComponent({
  user: { name: '박세윤', age: 25 },
  color: '파랑색',
});

const Component /* : React.FC */ = ({ user, color }: UserDetailProps) => {
  console.log(`${user.name}은 ${user.age}살이고 ${color}색을 좋아합니다.`);
};

Component({
  user: { name: '박세윤', age: 25 },
  color: '파랑색',
});
