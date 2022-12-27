var emp={
    empname:"khaja",
    empsal:1000000,
    empaddress:{dr:323,street:"kphb",}
};
for(E in emp)
{
    console.log(`${E} is ${emp[E]}`);
}


var student={
    stdname:"khaja",
    stdid:786,
    stdaddress:{city:"nellore",pincode:524234,}
};
for(std in student)
{
console.log(`${std} is ${student[std]}`);
}

var  family={
    fname:'md rafi',
    fmname:'muntaj',
    address:{village:'velagapdu',pincode:524234,street:'masid'}
};  
for (fname in family)
{
    console.log(`${name}  ${family[fname]}`);
}

var std={
    fname:"md",
    lname:"rafi",
    fullname:function()
    {
        console.log(this.fname+this.lname);
    }
}
std.fullname()