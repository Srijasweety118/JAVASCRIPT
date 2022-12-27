class Teacher
{
    teacherName;
    constructor(tname)
    {
        this.teacherName=tname;
    }
}
class PhysicsTeacher extends Teacher
{
    mainSubject;
constructor(msubject,ctname)
{
    super(ctname);
    this.mainSubject=msubject;
}
getDetails()
{
    return `teachername:${this.teacherName},mainsubject:${this.mainSubject}`
}
}
let physicsteacher1=new PhysicsTeacher('physics','johny');
console.log(physicsteacher1);
console.log(physicsteacher1.getDetails())

// class Teacher
// {
//     teacherName;
//     constructor(tname)
//     {
//       this.teacherName=tname;
//     }
// }
// class Student extends Teacher
// {
//     stName;
//     stdAge;
//     constructor(stdage,ctname)
//     {
//         super(ctname);
//         this.stdAge=stdage;
//         this.stName=ctname;
//     }
//     getDetails()
//     {
//         return `teachername:${this.teacherName},stdage:${this.stdAge}`
//     }
// }
// let student1=new Student(22,'khaja')
// console.log(student1);
// console.log(student1.getDetails())






















