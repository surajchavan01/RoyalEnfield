function fun()
{
   var a= document.getElementById("uname"); 
   var b= document.getElementById("pass"); 
   if(a.value.trim()=="" && b.value.trim()=="")
   {
   document.getElementById("unameh6").innerHTML="username is required";
   document.getElementById("passh6").innerHTML="password is required";
   a.style.border="1px solid red";
   b.style.border="1px solid red";
   return false;
   }
   else if(a.value.trim()=="")
   {
    // alert("username is required")
    document.getElementById("unameh6").innerHTML="username is required";
    a.style.border="1px solid red";
    return false;
   }
   else if(b.value.trim()=="")
   {
    // alert("password is required")
    document.getElementById("passh6").innerHTML="password is required";
    return false;
   }
   else if(a.value.trim()=="suraj" && b.value.trim()=="s")
   {
     alert("valid user")
   //  document.getElementById("btnh6").innerHTML="valid user"
    return true;
   }
   else
   {
    document.getElementById("btnh6").innerHTML="invalid user";
    a.style.border="1px solid red";
    b.style.border="1px solid red";
    document.getElementById("btn").style.display="none";
    //document.getElementById("btn").style.background-color="red";
    return false;
   }
// if(a.trim()=="suraj" && b.trim()=="S")
//    {
//     alert("valid user")
//    }
//    else{
//     alert("invalid ")
//    }
 
}