//global counter

var zoo = 0;
var allVar  = () => {
	zoo+=1;
	console.log(zoo);
};
allVar();//1
allVar();//2
allVar();//3

//local counter

var notall = () => {
	var too =0;
	too+=1;
	console.log(too);
};

notall(too);//1
notall(too);//1
notall(too);//1

// closure 1
 var clouse1 = (() => {
 	var hoo =0;
 	return () => {
 	  hoo += 1 ;
 	  console.log(hoo);
 	}
 })();
 clouse1(hoo);//1
 clouse1(hoo);//2
 clouse1(hoo);//3

 // closure 2
 var closure2 = (x) => {
 	return(y) => {
 		console.log(x*y);
 	};
 };

 var closuse3 = closure2(2);
 closuse3(5);//10








