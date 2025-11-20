📝 Blog Post

১. TypeScript এ Interface এবং Type এর পার্থক্য

TypeScript এ Interface এবং Type—দুটোই object বা structure-এর ধরন নির্ধারণ করতে ব্যবহার হয়। তবে এদের উদ্দেশ্য ও ক্ষমতা আলাদা।

Interface:

Object বা class-এর shape নির্ধারণে ব্যবহার হয়।

পরবর্তীতে সহজে extend বা implement করা যায়।

সাধারণত class-এর সাথে বেশি ব্যবহার হয়।

interface User {
  name: string;
  age: number;
}


Type Alias:

আরও flexible।

শুধু object নয়, union, intersection, tuple, primitive alias তৈরিতেও ব্যবহার হয়।

type ID = string | number;
type UserWithRole = User & { role: 'admin' | 'user' };


পার্থক্য সংক্ষেপে:

বিষয়	Interface	Type
Extending	সহজ	করা যায়, সিনট্যাক্স ভিন্ন
Union support	নেই	আছে
Declaration Merge	সম্ভব	সম্ভব নয়
প্রধান ব্যবহার	Object/Class structure	Flexible type design

উপসংহার:

Class বা object structure-এর জন্য Interface।

Flexible বা complex type design-এর জন্য Type বেশি সুবিধাজনক।

২. TypeScript এ keyof keyword ব্যবহার

ব্যবহার:

Object type-এর সকল property নামকে type হিসেবে বের করতে ব্যবহার হয়।

Type-safe কোডে সাহায্য করে।

উদাহরণ:

type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User; 
// UserKeys = "name" | "age"

const key: UserKeys = "name"; // সঠিক
// const wrongKey: UserKeys = "email"; // compile-time error

৩. TypeScript এ any, unknown, এবং never টাইপের পার্থক্য

any — সর্বাধিক শিথিল টাইপ

যেকোনো value রাখা যায়।

TypeScript type-checking এ bypass করে।

let value: any = 42;
value = 'Hello';
value = true;


➡️ অসতর্ক ব্যবহারে বাগ তৈরি হতে পারে।

unknown — নিরাপদ any

Value ধরতে পারে, কিন্তু ব্যবহার করার আগে type check করা প্রয়োজন।

let data: unknown = 'World';

if (typeof data === 'string') {
  console.log(data.toUpperCase());
}


➡️ any-এর তুলনায় বেশি নিরাপদ।

never — কোনো value রাখে না

Function যা কখনো return করে না, যেমন error throw করা বা infinite loop।

function throwError(msg: string): never {
  throw new Error(msg);
}


➡️ খুব strict এবং rare ব্যবহৃত হয়।

পার্থক্য সংক্ষেপে:

টাইপ	ব্যাখ্যা
any	যেকোনো value; type-checking বন্ধ
unknown	যেকোনো value; ব্যবহার আগে type-checking প্রয়োজন
never	কখনো return করে না; কোনো value থাকে না
৪. TypeScript এ enums ব্যবহার

ব্যবহার:

Named constants group করতে enum ব্যবহার হয়।

Numeric বা string enum হতে পারে।

উদাহরণ:

// Numeric enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// String enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

৫. Union এবং Intersection Type উদাহরণ

Union (|): value একাধিক type হতে পারে।

Intersection (&): multiple type একত্রিত করে।

উদাহরণ:

type A = { name: string };
type B = { age: number };

// Intersection
type AB = A & B;
const person: AB = { name: "Jamil", age: 25 };

// Union
type ID = number | string;
let myId: ID;
myId = 123;
myId = "ABC123";