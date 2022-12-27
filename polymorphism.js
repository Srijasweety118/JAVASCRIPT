class Person
{
    personName;
    Age;
    constructor(pname,page)
    {
        this.personName=pname;
        this.Age=page;
    }
    pgetDetails()
    {
        return `personname:${this.personName},age:${this.Age}`
    }
}
class Teacher extends Person
{
    mainSubjects;
    constructor(msubjects,pname,page)
    {
        super(pname,page);
        this.mainSubjects=msubjects;
    }
    cgetDetails()
    {
        return `${super.pgetDetails()},mainsubjects:${this.mainSubjects}`;
    }
}
let person1=new Person('khaja',22);
console.log(person1)
console.log(person1.pgetDetails())
let person2=new Teacher('maths','khaja',22)
console.log(person2)