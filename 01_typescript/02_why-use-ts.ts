// 기능 정의: 전달되는 Todo(할일) 객체의 상태를 반전시킨 새로운 Todo 객체를 반환하는 함수
// 타입스크립트의 경우
type Todo = {
  id: number;
  text: string;
  done: boolean;
};

function toggleTodo(todo: Todo): Todo {
  // 컴파일 시점에서 타입 오류를 발견할 수 있음
  return {
    ...todo,
    done: !todo.done,
  };
}
// 테스트 (given(테스트할 데이터), when(실행할 함수), then(기대하는 결과))
// given
const todo = {
  id: 1,
  text: '우유 사기',
  done: false,
};

// when
const updated = toggleTodo(todo);

// then
console.log('Expected: { id: 1, text: "우유 사기", done: true }');
console.log('Actual: ', updated);
