function countCharacterOccurrences(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    for (let char in charCount) {
        console.log(`${char}: ${charCount[char]}`);
    }
}

const inputString = "hello world";
countCharacterOccurrences(inputString);

// Task 7
function longestSubstring(str) {
    let n = str.length;
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < n; end++) {
        let char = str[end];

        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(`Length of the longest substring without repeating characters: ${maxLength}`);
    return maxLength;
}

const str = "abcabcbb";
longestSubstring(str);

