function Register()
{
    var jname=document.form1.name.value;
    var jemail=document.form1.email.value;
    var jpassword=document.form1.password.value;
    var jcontact=document.form1.contact.value;
    var jcity=document.form1.city;
    var comments=document.form1.comments.value;

    if(jname=="")
    {
        window.alert("please enter your name");
        return false;
    }
    if(jemail=="")
    {
        window.alert("please enter your email");
        return false;
    }

    if(jpassword=="")
    {
        window.alert("please enter your password");
        return false;
    }
    if(jcontact=="")
    {
        window.alert("please enter your contact details");
        return false;
    }
    if(jcity.selectedIndex<1)
    {
        window.alert("please select your city");
        return false;
    }
    if(comments=="")
    {
        window.alert("please enter your comments");
        return false;
    }
    alert("form submitted successfully")
    return true;
}
