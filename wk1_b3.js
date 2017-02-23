// function statement
function apple() {
	console.log('hi');
}
apple();

// function expression
var Apple = function(e) {
	console.log('e apple!');
};
Apple(hello);

var Apple = function(e) {
	console.log(e);
    console.log('alan');
    console.log(e + ' alan ');
};
Apple('hello');

var Apple = function(k) {
  
  console.log(2*k);
  
};
Apple(3);
//顯示結果

//"hi"
//"hello"
//"alan"
//"hello alan "
//6

//Arrow Function Expression for ES6
//無參數
Cat = () => console.log('cat');apple();
// hi

// 有參數
Dog = e => console.log(e + 'dog !');Apple(Hi);
//Hi Apple !

//有回傳值
 var one = function(num){return num*num;}; one(1);
 var two = num => {return num*num;}; two(2);
 var three = num => num*num; three(3);
 
//









