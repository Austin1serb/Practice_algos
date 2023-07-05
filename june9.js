/* 
    Zip Arrays into Map
    
    
    Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

    Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

    const keys1 = ["abc", 3, "yo"];
    const vals1 = [42, "wassup", true];
    const expected1 = {
        abc: 42,
        3: "wassup",
        yo: true,
    };
    
    const keys2 = [];
    const vals2 = [];
    const expected2 = {};
    
    /**
     * Converts the given arrays of keys and values into an object.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Array<string>} keys
     * @param {Array<any>} values
     * @returns {Object} The object with the given keys and values.
     */
    function zipArraysIntoMap(keys, values) { }
    
    /*****************************************************************************/
    
    
    /* 
        Invert Hash
    
        A hash table / hash map is an obj / dictionary
    
        Given an object / dict,
        return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
    */
    
    const obj_1 = { name: "Zaphod", charm: "high", morals: "dicey" };
    const expected_1 = { Zaphod: "name", high: "charm", dicey: "morals" };
    
    /**
     * Inverts the given object's key value pairs so that the original values
     * become the keys and the original keys become the values.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Object<string, any>} obj
     * @return The given object with key value pairs inverted.
     */
    // function invertObj(obj) { 
    //     for (let i = 0; invertObj.length; i++)

    
    
    /*****************************************************************************/


    function zipArraysIntoMap(keys, values) {
        const map = {};
      
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = values[i];
          map[key] = value;
        }
      
        return map;
      }
      
      const keys1 = ["abc", 3, "yo"];
      const vals1 = [42, "wassup", true];
      const expected1 = zipArraysIntoMap(keys1, vals1);
      console.log(expected1);
      // Output: { abc: 42, '3': 'wassup', yo: true }





      function invertHash(obj) {
        const invertedObj = {};
      
        const keys = Object.keys(obj);
        const values = Object.values(obj);
      
        for (let i = 0; i < keys.length; i++) {
          invertedObj[values[i]] = keys[i];
        }
      
        return invertedObj;
      }
      
      const obj_1 = { name: "Zaphod", charm: "high", morals: "dicey" };
      const expected_1 = { Zaphod: "name", high: "charm", dicey: "morals" };
      
      console.log(invertHash(obj_1));