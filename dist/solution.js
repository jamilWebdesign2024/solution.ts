"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    return value;
};
console.log(formatValue('jamil'));
console.log(formatValue(10));
//# sourceMappingURL=solution.js.map