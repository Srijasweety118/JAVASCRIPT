function sum1()
{
    var a=10;
    var b=20;
    console.log(a+b);
}
sum1();

function sum()
    {
        console.log('India')
    }
    sum();
    var d=100;
    console.log(d)
    function sum2(a,b)
    { 
        var a=10;b=20;
        var c=a+b;
        console.log(c);
    }
    sum3();
    function sum3(a,b)
    {
        var c=a+b;
        console.log(c);
    }
    sum3(10,100);
    function mul(a,b)
    {
        var c=a+b;
        console.log(c);
        console.log(arguments[3]);
        console.log(arguments[4]);
    }
    mul(10,20,30,40,50); 


    function add(x,y)
    {
        var z=x+y;
        return z;
    }
    // var result=add(25,25);
    // console.log(result);
    console.log(add(25,35));

    // function expression
    var test2=function(a)
    {
        return a;
    
    }
    console.log(test2(200));
/// arrow function
    var test3=a=>a;
    console.log(test3(100));
     
    var sum=a=>a;
    console.log(sum(100));

    var khaja=a=>a;
    console.log(khaja(786));

    var test4=(s,t)=>{return s+t;};
    console.log(test4(100,200));


     var subbu=(a,b,c,d)=>{return a+b+c+d;}
    //  console.log(arguments[5]);// we cannot access the arguments globally..since return keyword is used the entre values will be consider as globally.  
     console.log(subbu(10,20,30,40,50,60));

     function add(a,b)
     {
        var x=a+b;
        return x;
     }
    //  var result=add(10,20);
    //  console.log(result);

console.log(add(10,20));

function add(a,b)
{
    return a;
}
console.log(add(10,20));

function add(a,b,c)
{
    x=a+b-c;
    return x;
}
console.log(add(10,20,30));

var khaja =function(a)
{
    return a;

}
console.log(khaja(786));
var sum=function(b)
{
    return b;
}
console.log(sum(30+30));

var test1=a=>a;
console.log(test1(20+30));
//
var mul=b=>b;
console.log(mul(10*9));
//
var add=(a,b)=>{return a+b}
console.log(add(10,20));
//
var mul=(a,b)=>{return a*b}
console.log(mul(20,300));
//
var div=(a,b)=>{return a/b}
console.log(div(10,2));
//
var rem=(a,b)=>{return a%b}
console.log(rem(100,3));