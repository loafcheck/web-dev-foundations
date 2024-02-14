








var arr = [1,2,3];
var newArr = JSON.stringify(arr);
localStorage.setItem('num',newArr);



var trial1 = localStorage.getItem('num');
var trial1Change = JSON.parse(trial1);
var newArr1 = trial1Change.push(4);
var newArr1json = JSON.stringify(newArr1);


localStorage.setItem('num2', newArr1json);
var result = localStorage.getItem('num2');
console.log(result);
var newResult = JSON.parse(result);
console.log(newResult);


/* local storage

local storage 저장시 모든 것이 문자화
object,array 자료형을 유지하고 싶으면 JSON을 사용할것
JSON은 object,array를 문자취급하게 도와주는 자료형
object,array 를 유지한체 문자취급화시켜서 >>
local strage 에 보관하면 object,array유지한체 저장가능!
*/

