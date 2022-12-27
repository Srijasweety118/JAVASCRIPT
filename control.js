 var x=10;
 if(x=10)
 {
  console.log("x=10")
 }
else if(x<10)
{   
  console.log("x=20")
}
else{
  console.log("x is less than 10")
}

 switch(marks=50)
 {
   case 100: marks="A:100";
   break;
   case 80: marks="B:80";
   break;
   case 70: marks="C:70";
   break;
   case 50: marks="D:50";
   break;
   case 45: marks="Fail";
   break;
   default:marks="invalid";
   break;
 }
 console.log(marks)


 // looping statements
 //while loop
  var i=0;
  while(i<=5)
  {
    console.log("hi",i);
    i++;
  }
  // do while
  var j=0;
  do{
console.log('hello',j);  
j++;
  }
  while(j<=5);
  // for loop
  for(i=0;i<5;i++)
  {
    console.log("welcome",i);
  }

  for(i=1;i<=10;i++)
  {
   console.log("3*",i,"=",3*i);
  }
  