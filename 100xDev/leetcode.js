// let nums = [1,2,3];

// function test(nums){
//     let maxNum = 0;
//     let numSet = new Set(nums);
//     for (let num of nums){
//         if (num > maxNum) maxNum = num;
//     }
//     for (let i = 0; i <= maxNum + 1; i++){
//         if (!numSet.has(i)) return i;
//     }
// };

// console.log(test(nums));

// let nums1 = [1,2,2,1];
// let nums2 = [2,2]

// function equalVal(nums1, nums2){
//     let set1 = new Set(nums1);
//     let set2 = new Set(nums2);
//     let common = [];
//     for (let val of set1.values()){
//         if (set2.has(val))
//             common.push(val);
//     }
//     return common;
// }

// console.log(equalVal(nums1, nums2));

// !! NEED to execute this in Linked List
// l1 = [0];
// l2 = [0]

// function addTwoNum(l1, l2){
//     newL1 = l1.reverse().join('');
//     newL2 = l2.reverse().join('');
//     let total = Number(newL1) + Number(newL2);
//     return final = String(total).split('').reverse();
// }

// console.log(addTwoNum(l1, l2));

// s = "aacc";
// t = "ccac";

// function check(s,t){
//     objS = {};
//     objT = {};
//     // counting char of s string 
//     for (let i of s) {
//         objS[i] = s.count(i);
//     }
//     for (let i of t) {
//         objT[i] = t.count(i);
//     }
//     console.log(objS);
//     console.log(objT);
// }

// console.log(check(s,t));

// def isAnagram(self, s: str, t: str) -> bool:
//     self.s = s
//     self.t = t
//     countS = {}
//     countT = {}
//     # counting char of S string
//     for i in s:
//     countS[i] = s.count(i)

//     # counting char of T string
//     for i in t:
//     countT[i] = t.count(i)

//     if (countS.items() == countT.items()):
//     return True

// const numbers = [1,2,3,4];

// const output = move(numbers, 1, 0);

// console.log(output);

// function move(array, index, offset) {
//     let newArray = [];
//     if (index > array.length || offset > array.length)
//         return console.error("Invalid offset");
//     else {
//         newArray = array.

//     }
// }

// let list1 = [1,2,4];
// let list2 = [1,3,4];

// var mergeTwoLists = function(list1, list2) {
//     if (list1 === null && list2 === null) {
//         return null; // Both lists are null, return null
//     } else if (list1 === null) {
//         return list2; // List1 is null, return list2
//     } else if (list2 === null) {
//         return list1; // List2 is null, return list1
//     }
//     let mergeList = [];
//     let maxLen = Math.max(list1.length, list2.length);
//     for (let i = 0; i < maxLen; i++) {
//         if (i < list1.length)
//             mergeList.push(list1[i])
//         if (i < list2.length)
//             mergeList.push(list2[i])
//     }
//     console.log(mergeList);
//     // return mergeList;
// };

// mergeTwoLists(list1, list2);

// let t = "ttt";
// let s = "catt";

// let s1 = {};

// for (let i of s) {
//     s1[i] = (s1[i] || 0) + 1;
// }

// console.log(s1);

// list1 = [1,2,4];
// list2 = [1,3,4];

// var mergeTwoLists = function(list1, list2) {
//     if (list1 === null && list2 === null) {
//         return null; // Both lists are null, return null
//     } else if (list1 === null) {
//         return list2; // List1 is null, return list2
//     } else if (list2 === null) {
//         return list1; // List2 is null, return list1
//     }
//     let mergeList = [...list1,...list2];
//     console.log(mergeList.sort());
// };


// mergeTwoLists(list1, list2);

// l1 = [1,3,6,4,9,11,19,21];

// console.log(l1);

// console.log(l1.sort());

address = "1.1.1.1";


let newAdd = address.replace(".", "[.]");
// return newAdd;
console.log(newAdd);

