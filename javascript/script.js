function clear(){
    document.getElementById("myForm").reset();
}


function show(){
    var s = document.getElementById("suggestion").value.trim();
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var mname = document.getElementById("mname").value.trim();
    
    if(s==""||fname==""||lname=="") 
        alert("Please Fill all the details");
    
    else{
        var para = document.createElement("P");
        para.innerHTML = s;
        var user = document.createElement("h5");
        if(mname==""){
            user.innerHTML='--'+fname+' '+lname;
        }
        else{
            user.innerHTML='--'+fname+' '+mname+' '+lname;
        }
        para.style.padding="0px 0px 5px 0px";
        user.style.textAlign="right";
        document.getElementById("feedback").appendChild(para);
        document.getElementById("feedback").appendChild(user);
        user.style.padding="0px 0px 30px 0px";
        clear();
    }
}

