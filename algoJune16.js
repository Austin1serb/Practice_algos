// let car = {
//     "color": "red",
//     "type": "cabrio",
//     "registration": new Date('2016-05-02'),
//     "capacity": 2
//    }
//    cars.push(car);



/* 
 Given an array of objects / dictionaries to represent new inventory,
 and an array of objects / dictionaries to represent current inventory,
 update the quantities of the current inventory
 
 if the item doesn't exist in current inventory, add it to the inventory

 return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {
    let newInventory = newInv.map((item) => {
        let found = false;
        for (let i = 0; i < currInv.length; i++) {
            if (item.name === currInv[i].name) {
                currInv[i].quantity += item.quantity;
                found = true;
            }
        }
        if (!found) {
            currInv.push(item);
        }
        return currInv;

    });
    return newInventory;
}
console.log(updateInventory(newInv1, currInv1));
console.log(updateInventory(newInv2, currInv2));
console.log(updateInventory(newInv3, currInv3));

// If it exists: We increase the quantity of the found key.
// If it does not exist: append a new key/value pair into the existing inventory. 

// Options:
// Nested For Loops to itterate with dictionaries. 
// Possibly  use any built in object methods in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object



console.log(updateInventory(newInv1, currInv1))