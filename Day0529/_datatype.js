// 14-2. 자료형 이해하기
// 자바 자료형 : byte, char, Int, Float, Boolean, Double, String, ...
// Primitive Type : number(Float,Double), string, boolean, array, object(array, function) + @ (class, Symbol),
// Complex Type : object(array, function) + @(class, Symbol),
// null, undefined : 특수 자료형

let var1;
console.log(var1);

// 숫자형 (number), 자바에서는 Float, Double 처럼~
// 자바스크립트에서도 BigInt 타입이 있긴한데, ..실제로 사용X

// 자바스크립트 데이터 유형 자동 변환 ==> 동적 변수 시스템 vs 자바 변수시스템 : 정적 변수 시스템

let score = 100; //점수
let name = "홍길동"; // 이름
let isDone = false; // 완료 여부
let season = ["봄","여름","가을","겨울"];

// let score = new number(100); // 생성자 방식 --> 길고, 귀찮고..

console.log(typeof 변수명);

// 쉽다, 유연하다 vs 느슨하다, 오류가 발생될 여지가 있다 ==> 타입 시스템 추가 : Type Script
// TypeScript = JavaScript + 정적 타입 시스템 ==> 타입스크립트가 타입 체크(컴파일러)
// Node.js에 tsc (type script compiler 설치), ts-node 설치해서 사용함
// 타입스크립트 https://www.typescriptlang.org/

// let 