// 練習Function Expression, First-Class Function

// function statement
	function apple(){
		console.log('hi');
	}
	apple();

// function expression
	var banana = function(){
		console.log('hi, apple!!');
	};
	banana();

// it's first-class
	fruit(apple);

// functions are first-class
	function fruit(e){
		e();
	}
	fruit(apple);
	fruit(banana);

// use a function expression to create a function on the fly
	fruit(function(){
		console.log('orange')
	});