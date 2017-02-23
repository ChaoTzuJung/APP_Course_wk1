//練習SCOPE範例，以及比較LET與VAR的不同

(()=>{
	globallVar = 30;//全域
	var localVar =20;//地方
	if(globallVar == 30)localVar = 10;

	console.log(`localVar= {localVar}`);//show localVar = 10
})();


	console.log(`globallVar= {globallVar}`);//show globallVar = 30
	console.log(`localVar= {localVar}`);//show error

var a = 1;
var b = 2;
if(a = 1){
	let a = 3;
	var b = 4;
  console.log(a); //3
  console.log(b); //4
}

  console.log(a); //1
  console.log(b); //4


