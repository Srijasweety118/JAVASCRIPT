class Person
{
    //properties
    #PersonName;
    #Age;
    //setpersonName()
    setPersonName(value)
    {
        if(value==null || value==undefined)
        {
            console.error("value will be error");
        }
        else
        {
            if(value>=20)
            {
                console.error("more than 20 characters it will show an error")
            }
            else
            {
             this.#PersonName=value;
            }

         }
    }

//getPersonName()
getPersonName()
{
   return this.#PersonName;
}
//setAge()
    setAge( value)
{
    if(value>=0 && value<=20)
    {
        this.#Age=value;
    }
}
//getAge()
getAge()
{
    return this.#Age;
}
}
var person1=new Person("john",45)
console.log(person1);
person1.setPersonName('john')
console.log(person1.getPersonName());
person1.setAge(18)
console.log(person1.getAge());
