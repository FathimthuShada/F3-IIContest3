function saveData(){
    let Name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let pwd=document.getElementById("pwd").value;
    let Cpwd=document.getElementById("Cpwd").value;

    let userRecord=new Array();
    userRecord=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    userRecord.push({
        "Name":Name,
        "email":email,
        "password":pwd,
        "Cpassword":Cpwd
    })

    localStorage.setItem("users",JSON.stringify(userRecord));
}