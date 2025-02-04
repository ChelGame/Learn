function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncateString(str, maxLength) {
    if (str.length + 3 <= maxLength) {
        return str;
    }

    let words = str.split(" ");
    let result = "";

    for (let word of words) {
        if (result.length + word.length + 3 > maxLength) break;
        result += (result ? " " : "") + word;
    }

    result = result.replace(/[\p{P}]+$/u, "") + "...";

    return result;
}

function isSubstring(str1, str2) {
    if (str1.length === str2.length) {
        return str1 === str2;
    }

    let longStr = str1.length > str2.length ? str1 : str2;
    let shortStr = str1.length > str2.length ? str2 : str1;

    return longStr.includes(shortStr);
}
