type AllType = string | number | boolean

const formatValue = (value: AllType): AllType => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else {
        if (value === true) {
            return false;
        }
        else {
            return true;
        }
    }

    return value;
}




const getLength = (input: string | any[]): number => {
    if (typeof input === 'string') {
        return input.length
    }
    else if (Array.isArray(input)) {
        return input.length
    }
    return input
}





// Problem 3

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    getDetails() {
        console.log(`"Name: ${this.name} Age: ${this.age}"`);
    }
}

const jishan = new Person("Jamil", 22)
const rakib = new Person("Rakib", 22)

jishan.getDetails()
rakib.getDetails()


// Problem 4:

type Products = {
    title: string,
    rating: number
}
type Product = Products[];

const filterByRating = (itmes: Product): Product => {
    return itmes.filter((item) => item.rating >= 4)
}

// Problem 5:
type ActiveUsers = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}
type ActiveUser = ActiveUsers[];

const filterActiveUsers = (users: ActiveUser): ActiveUser => {
    return users.filter(user => user.isActive === true)
}



// Problem 6

interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

const printBookDetails = (bookInfo: Book): void => {
    const varify = bookInfo.isAvailable ? "Yes" : "O";
    return console.log(`Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published:${bookInfo.publishedYear}, Available: ${varify}`);

}


printBookDetails({
    title: "Physics",
    author: "Ainstain",
    publishedYear: 1880,
    isAvailable: true
})


// Problem 7

type ArrayofNumber = number[];

const getUniqueValues = (a: ArrayofNumber, b: ArrayofNumber): number[] => {
    let newArray: number[] = [];

    b.forEach((element) => {
        if (!a.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));












