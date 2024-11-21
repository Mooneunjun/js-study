> 자바스크립트의 break와 continue 문은 반복문의 흐름을 조정하는 데 유용하게 사용할 수 있다. break는 반복문을 즉시 종료하고, continue는 특정 조건을 건너뛰며 다음 반복으로 넘어가게 해준다.

---

### Break 문

`break`는 반복문을 완전히 빠져나오고자 할 때 사용한다. 이전에 배운 `switch` 문에서도 특정 `case`를 실행한 후 `break`를 사용해 더 이상 다른 `case`를 실행하지 않게 했던 것처럼, `break`는 반복문 내에서도 동일한 역할을 한다.

```jsx
// 1부터 10까지 출력하는 while 문
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// 실행 결과: 1, 2, 3, ..., 10

// 반복 도중에 break를 사용해 1부터 5까지만 출력하는 예제
i = 1;
while (i <= 10) {
  console.log(i);
  if (i === 5) break; // i가 5일 때 반복문 종료
  i++;
}
// 실행 결과: 1, 2, 3, 4, 5
```

위 예제에서 `i`가 5가 되면 `break` 문에 의해 반복이 즉시 종료된다.

### for 문에서의 Break 문 활용

`for` 문에서도 동일하게 `break`를 사용할 수 있다.

```jsx
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) break; // i가 5일 때 반복문 종료
}
// 실행 결과: 1, 2, 3, 4, 5
```

이렇게 `break` 문을 통해 반복문 전체를 조건에 따라 중간에 빠져나올 수 있다.

---

### Continue 문

`continue` 문은 반복문을 즉시 다음 반복으로 넘겨주며, 현재 반복의 남은 코드들을 실행하지 않고 건너뛴다. 이를 통해 특정 조건에서만 동작을 생략하고 싶은 상황에 유용하게 사용할 수 있다.

```jsx
// 1부터 10까지 홀수만 출력하는 for 문
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // i가 짝수면 이후 코드를 건너뛰고 다음 반복으로
  console.log(i); // 홀수일 때만 출력
}
// 실행 결과: 1, 3, 5, 7, 9
```

위 예제에서 `i % 2 === 0`인 조건이 참일 때 `continue` 문을 만나면, 짝수인 경우에는 `console.log(i);` 부분이 실행되지 않고 다음 반복으로 건너뛴다.

### while 문에서의 Continue 문

`while` 문에서도 동일하게 `continue`를 활용할 수 있다.

```jsx
let i = 1;
while (i <= 10) {
  if (i % 2 === 0) {
    i++; // 조건에 맞으면 미리 i를 증가시키고 다음 반복으로 넘어감
    continue;
  }
  console.log(i);
  i++; // 홀수일 때 i를 증가시킴
}
// 실행 결과: 1, 3, 5, 7, 9
```

`while` 문에서는 `for` 문과 달리 추가 동작 부분이 없기 때문에 `continue` 문을 사용할 때 반복 변수를 수동으로 증가시켜야 한다. 위 코드에서 `i`가 짝수일 때 `continue`가 실행되어 남은 코드를 건너뛰고 조건 부분으로 돌아가며, 반복이 계속 진행된다.

---

### Break와 Continue 요약

> Break: 반복문을 즉시 빠져나가며, 이후 반복되지 않는다.Continue: 특정 조건에서 남은 코드 실행을 생략하고 다음 반복으로 넘어간다.

이 두 가지 문법을 적절히 활용하면 반복문을 더 유연하게 제어할 수 있으며, 필요에 따라 불필요한 연산을 줄여 효율적인 코드를 작성할 수 있다.