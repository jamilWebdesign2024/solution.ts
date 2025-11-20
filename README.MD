

## **১. TypeScript এ `interface` এবং `type` এর মধ্যে পার্থক্য**

TypeScript এ `interface` এবং `type`—দুটোই object-এর কাঠামো বা shape নির্ধারণ করতে ব্যবহৃত হয়। তবে এদের ব্যবহারের উদ্দেশ্য ও শক্তি আলাদা।

### **Interface**

`interface` মূলত object, class এবং structure সংজ্ঞায়ন করতে ব্যবহৃত হয়। ভবিষ্যতে এটিকে সহজেই **extend** করা বা **implement** করা যায়।

```ts
interface User {
  name: string;
  age: number;
}
```

### **Type**

`type` আরও flexible। এটি object ছাড়াও—

* union
* intersection
* tuple
* primitive alias

এসব তৈরিতে ব্যবহৃত হয়।

```ts
type ID = string | number;
```

### **পার্থক্য সংক্ষেপে**

| বিষয়           | interface              | type                             |
| -------------- | ---------------------- | -------------------------------- |
| Extending      | সহজ                    | করা যায়, কিন্তু সিনট্যাক্স ভিন্ন |
| Union support  | নেই                    | আছে                              |
| Merge করা      | সম্ভব                  | সম্ভব নয়                         |
| প্রধান ব্যবহার | object/class structure | flexible type design             |

### **উপসংহার**

Object/class structure এর জন্য `interface`, আর flexible টাইপ ডিফাইন করার জন্য `type` বেশি উপযোগী।

---

## **২. TypeScript এ `any`, `unknown`, এবং `never` এর পার্থক্য**

### **any — সবচেয়ে শিথিল টাইপ**

`any` টাইপ চেকিং বন্ধ করে দেয়। ফলে যেকোনো ভ্যালু এতে রাখা যায় এবং ব্যবহার করাও যায়।

```ts
let value: any = 10;
value = 'Hello';
value = true;
```

➡️ এটি অসতর্ক ব্যবহারে বাগ তৈরি করতে পারে।

---

### **unknown — নিরাপদ any**

`unknown` এ যেকোনো ভ্যালু রাখা যায়, কিন্তু ব্যবহার করার আগে অবশ্যই টাইপ চেক করতে হয়।

```ts
let data: unknown = 'World';

if (typeof data === 'string') {
  console.log(data.toUpperCase());
}
```

➡️ এটি any-এর তুলনায় অনেক বেশি নিরাপদ।

---

### **never — এমন টাইপ যা কখনো ঘটে না**

এটি এমন function এর রিটার্ন টাইপ যা কখনোই return করে না (যেমন error throw করা বা infinite loop)।

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

➡️ এটি সবচেয়ে strict এবং কমন নয় এমন টাইপ।

---

### **পার্থক্য সংক্ষেপে**

| টাইপ        | ব্যাখ্যা                                       |
| ----------- | ---------------------------------------------- |
| **any**     | যেকোনো ভ্যালু; টাইপ চেক নেই                    |
| **unknown** | যেকোনো ভ্যালু; ব্যবহার করার আগে টাইপ চেক দরকার |
| **never**   | কখনো return করে না; কোনো ভ্যালু থাকে না        |

---