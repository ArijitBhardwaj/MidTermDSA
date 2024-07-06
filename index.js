

    function missingNumber(array){
        for (let i of array){
            let size = array.length;
            let i = 1;
           while(array.indexOf(i) && i<= size ){
                i++;
                }
                return i;
            }
        }
    // Time complexity = O(n) (Worst Case scenario - iterating through all elements once)
    
    
        function sumOfTwo (array, target){
            let answer = [];
            for ( let i in array){
                if( array[i] < target){
                    let diff = target - array[i];
                    if(j = indexOf(diff)){
                        answer.push(j);
                        answer.push(i);
                        return answer;
                    }
                }
            }
        }

 // Time complexity = O(n) (Worst Case scenario - iterating through all elements once)


 function findPermutations(str) {
    if (str.length === 0) return "";
    if (str.length === 1) return str;
    let result = [];
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      const remainingCharsPermuted = findPerms(remainingChars);// this step happens (n-1)! times
      for (let j = 0; j < remainingCharsPermuted.length; j++){ 
        const permutation = currentChar + remainingCharsPermuted[j]// this step happens (n-1) times because of the j loop
        result.push(permutation)
      }
    }
    return (result);
  }

  //Time Complexity = O ( (n-1)*(n-1)!) There are (n-1)! permutations for every string remainingChars in string, takes O(1) time to push every permutation in result and the pushing happens (n-1) times for every character

  class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
  }

  class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    prepend(data){
        newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        size++;

    }


    checkIfCycleExists(headNode){
        if(size ===0){return "List is Empty";}
        if(size === 1){return "List has single element";}
        let current = this.head.next;
        while(current.next){
            if (current.data === headNode.data){
                return true;
            }
            current = current.next;
        }
    }
  }

  // Time Complexity is O(n) - traversing in a linked list


  function isStrValid(str){
    if(str === ''){
        return true;
    }

    let map = {')' : '(', '}' : '{', ']' : '['};
    var check = [];

    for (var c in str){
        if (c in '({['){
            check.push(c);

        }

        else {
            if (map[c] in check){
                check.filter(function (letter){
                    return letter !==map[c];
                });
            } 
        }
    }

    return !check.length;
  }

  //Time Complexity - O(n) since it will iterate through every character of the string 