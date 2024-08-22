// Task 9
function Storage(key, value) {
    // save the key and value to localStorage
    localStorage.setItem(key, value);

    // save the key and value to sessionStorage
    sessionStorage.setItem(key, value);

    const getLocalValue = localStorage.getItem(key);
    const getSessionValue = localStorage.getItem(key);

    console.log(`From Local Storage - ${getLocalValue}`);
    console.log(`From Session Storage - ${getSessionValue}`);
}

Storage('name', 'Tahir');
Storage('age', 19);


// Task 10
function clearData() {
    // clear local storage data
    localStorage.clear();
    // 
    sessionStorage.clear();


}

clearData();