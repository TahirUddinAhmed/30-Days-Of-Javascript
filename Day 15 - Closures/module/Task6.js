// Task 6: 

const itemManager = function() {
    const itemsArr = [];
    return {
        addItem: function(item) {
            itemsArr.push(item);
            console.log(`${item} is added`);
        },
    
        removeItem: function() {
            const itemName = itemsArr.pop();
            console.log(`${itemName} is removed from the list`);
        },

        listItems: function() {
            for(let i = 0; i <= itemsArr.length; i++) {
                console.log(`${i}. ${itemsArr[i]}`);
            }
        }


    }
    
}

export {itemManager};