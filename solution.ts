type AllType = string | number | boolean

const formatValue = (value: AllType): AllType => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else { return !value
    }

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



type Products = {
    title: string,
    rating: number
}
type Product = Products[];

const filterByRating = (itmes: Product): Product => {
    return itmes.filter((item) => item.rating >= 4)
}



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



type ArrayofNumber = (string | number)[];

const getUniqueValues = (a: ArrayofNumber, b: ArrayofNumber): ArrayofNumber => {
    let newArray: ArrayofNumber = [];

    for(const value of a){
        if(!newArray.includes(value)){
            newArray.push(value)
        }
    }
    for(const value of b){
        if(!newArray.includes(value)){
            newArray.push(value)
        }
    }

    return newArray
}



interface PriceList {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

type PriceListArr = PriceList[]

const calculateTotalPrice=(products: PriceListArr):number=>{
    if(products.length === 1) return 0

    return products.reduce((total, product)=>{
        const inTotalPrice = product.price * product.quantity;
        
        const discountPrice = product.discount !== undefined ? inTotalPrice -(inTotalPrice * product.discount)/100 : inTotalPrice;
        
       return total + discountPrice;

    }, 0)
}






