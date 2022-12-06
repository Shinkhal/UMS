function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="12213952" & password=="123456")
    {
        alert("login Sucessfully")
        return false;
    }
    else
    {
        alert("Wrong password");
    }

}