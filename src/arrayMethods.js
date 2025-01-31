function mySlice(arr, start = 0, end = arr.length) {
    let result = [];
    start = start < 0 ? Math.max(arr.length + start, 0) : Math.min(start, arr.length);
    end = end < 0 ? Math.max(arr.length + end, 0) : Math.min(end, arr.length);
    
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

function myIndexOf(arr, item, from = 0) {
    from = from < 0 ? Math.max(arr.length + from, 0) : from;
    
    for (let i = from; i < arr.length; i++) {
        if (Object.is(arr[i], item)) return i;
    }
    return -1;
}

function myIndexOfJSON(arr, item, from = 0) {
    from = from < 0 ? Math.max(arr.length + from, 0) : from;
    
    for (let i = from; i < arr.length; i++) {
        if (Object.is(arr[i], item)) return i;
        if (typeof arr[i] === 'object' && arr[i] !== null && typeof item === 'object' && item !== null) {
            if (JSON.stringify(arr[i]) === JSON.stringify(item)) return i;
        }
    }
    return -1;
}

function myIncludes(arr, item, from = 0) {
    from = from < 0 ? Math.max(arr.length + from, 0) : from;
    
    for (let i = from; i < arr.length; i++) {
        if (Object.is(arr[i], item)) return true;
    }
    return false;
}
console.log(mySlice([1, 2, 3, 4, 5], 1, 4));
console.log(mySlice([1, 2, 3, 4, 5], -3));

console.log(myIndexOf([1, 2, NaN, 4], NaN));
console.log(myIndexOf([{a: 1}, {b: 2}], {b: 2}));

console.log(myIndexOfJSON([1, 2, NaN, 4], NaN));
console.log(myIndexOfJSON([{a: 1}, {b: 2}], {b: 2}));


console.log(myIncludes([1, 2, NaN, 4], NaN));
console.log(myIncludes([{a: 1}, {b: 2}], {b: 2}));
