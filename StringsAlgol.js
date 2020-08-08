/**
 * Algorithms on Strings
 */



class StringAlgols {
    /**
     * This Algorithm reverses strings
     * @param {String} string 
     */
    static reverseStr (string) {
        let store = new Array();
        store = string.split('')
        return store.reverse().join('')
     }

     static getVowels (string) {
         const Vowels = ['A', 'E', 'I', 'O', 'U']
         let store = new Array();
         store = string.toUpperCase().split('');
        let a = [];
        let b = [];
        for (const i of store) {
            for (const j of Vowels) {
                if( i == j){
                    a = [...i];
                }
                return null;
            }
        }
        
        return a.join('')
         
     }


}

console.log(StringAlgols.getVowels('hameed'))
