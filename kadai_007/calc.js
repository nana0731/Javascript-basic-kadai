let num =5;
const multiple3=3;
const multiple5=5;
const multiple15=15;

if(num%multiple15==0){
	console.log(multiple3+'と'+multiple5+'の倍数です');
}else if(num%multiple3==0){
	console.log(multiple3+'の倍数です');
}else if(num%multiple5==0){
	console.log(multiple5+'の倍数です');
}else{
	console.log(num);
}