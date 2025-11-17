const formatValue = (value: string | number | boolean)=>{
    if(typeof value === 'string'){
        return value.toUpperCase()
    }
    else if(typeof value === 'number'){
        return value*10;
    }
    else{
       if(value === true){
            return false;
        }
        else{
            return true;
        }

    }
   
    return value;
}

console.log(formatValue('jamil'));
console.log(formatValue(10));
console.log(formatValue(false));


