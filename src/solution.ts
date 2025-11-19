// Problem 1:

const formatValue = (value: unknown) => {
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


// Problem 2:

const getLength = (input: unknown): unknown => {
    if (typeof input === 'string') {
        return input.length
    }
    else if (Array.isArray(input)) {
        return input.length
    }
    return input
}


// console.log(getLength('Alhamdulliah'));
// console.log(getLength(["Apple", "komola", 1, true]));

type ItemData = string[];


const filterByRating = (items: ItemData)=>{
    
}


// Create a function filterByRating that accepts an array of items, where each item has the following properties:

// title (string)
// rating (number between 0 and 5)
// The function should return a new array containing only the items with a rating of 4 or more.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Do not mutate the original array.
// Sample Input:
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));
// Sample Output:
// [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book C', rating: 5.0 },
];




















// Problem 6

interface Book {
    title : string,
    author:string, 
    publishedYear: number,
    isAvailable: boolean
}

const printBookDetails = (bookInfo: Book)=>{
   const justify = bookInfo.isAvailable ? "Yes" : "No";
//   console.log(`Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published Year:${bookInfo.publishedYear}, IsAvailable: ${justify}`);
  
  
   
}


printBookDetails({
    title: "Physics",
    author: "Ainstain",
    publishedYear: 1880,
    isAvailable: true
})











