📝 Blog Post

১. TypeScript এ Interface এবং Type-এর মধ্যে পার্থক্য

TypeScript এ Interface এবং Type দুটোই object বা structure-এর ধরন নির্ধারণে ব্যবহৃত হয়। তবে এদের ক্ষমতা ও ব্যবহার ক্ষেত্র আলাদা।

Interface:

Class বা object-এর shape তৈরি করতে ব্যবহার হয়।

সহজেই extend বা অন্য class/Interface দ্বারা implement করা যায়।

Class-এর সাথে যুক্ত হয়ে structure maintain করতে উপযুক্ত।

interface Person {
  firstName: string;
  lastName: string;
}


Type Alias:

আরও flexible।

শুধু object নয়, union, intersection, tuple, বা primitive type-ও define করা যায়।

type Status = 'active' | 'inactive';
type Employee = Person & { status: Status };


মূল পার্থক্য:

বিষয়	Interface	Type
Extending	সহজ	সম্ভব, তবে syntax ভিন্ন
Union support	নেই	আছে
Declaration Merge	সম্ভব	সম্ভব নয়
প্রধান ব্যবহার	Object/Class structure	Complex/Flexible type design

উপসংহার:

Object বা class structure এর জন্য Interface বেশি সুবিধাজনক।

Flexible বা combination type design এর জন্য Type Alias ভালো।

২. TypeScript এ any, unknown এবং never টাইপ

any — সবচেয়ে loose টাইপ

যেকোনো value ধরতে পারে।

TypeScript এর type checking এ bypass করে।

let randomValue: any = 100;
randomValue = 'Hi';
randomValue = false;


➡️ অসতর্ক ব্যবহারে runtime error হতে পারে।

unknown — নিরাপদ any

Value ধরতে পারে, কিন্তু ব্যবহার করার আগে type যাচাই আবশ্যক।

let input: unknown = 'Hello World';

if (typeof input === 'string') {
  console.log(input.toUpperCase());
}


➡️ more type-safe এবং error কম হয়।

never — কোনো value ধারণ করে না

এমন function যা কখনো return করে না, যেমন error throw করা বা infinite loop।

function fail(message: string): never {
  throw new Error(message);
}


➡️ strict এবং rare ব্যবহার হয়।

পার্থক্য সংক্ষেপে:

টাইপ	ব্যাখ্যা
any	যেকোনো value; type-checking বাদ দেয়
unknown	যেকোনো value; ব্যবহার আগে type যাচাই প্রয়োজন
never	কোনো value থাকে না; function return হয় না
৩. keyof keyword ব্যবহার

ব্যবহার:

Object type-এর সকল property নাম type হিসেবে বের করতে ব্যবহৃত হয়।

Type-safe কোড লিখতে সাহায্য করে।

type Product = {
  title: string;
  price: number;
};

type ProductKeys = keyof Product; 
// ProductKeys = "title" | "price"

const key: ProductKeys = "title"; // সঠিক
// const wrongKey: ProductKeys = "id"; // compile-time error

৪. TypeScript এ enums ব্যবহার

ব্যবহার:

Fixed set of constants group করতে ব্যবহার হয়।

Numeric বা string enum হতে পারে।

// Numeric Enum
enum Weekday {
  Monday = 1,
  Tuesday,
  Wednesday
}

// String Enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

৫. Union এবং Intersection Type

Union (|): value একাধিক type হতে পারে।

Intersection (&): একাধিক type একত্রিত করে নতুন type তৈরি করে।

type Name = { name: string };
type Age = { age: number };

// Intersection
type PersonDetails = Name & Age;
const person: PersonDetails = { name: "Jamil", age: 25 };

// Union
type Identifier = number | string;
let id: Identifier;
id = 101;
id = "ABC101";