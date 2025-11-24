export {};

/*
  const [count, setCount] = useState(0); // [초기 상태값, 상태 변경용 함수]

  const [value, setValue] = useState('');
*/

function useState<T>(initialState: T): [T, (newState: T) => void] {
  return [
    initialState,
    (newState: T) => {
      // 상태 업데이트 로직
    },
  ];
}

const [count, setCount] = useState<number>(0);

interface User {
  id: number;
  name: string;
  age: number;
}

const [user, setUser] = useState<User | null>(null);

// useEffect(() => {
//   // 데이터 페칭
//   setUser(조회된 데이터)
// }, [])
