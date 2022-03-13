function myFun(string){
    const reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(string)==true){
        return  "Valid";
    }
    else{
        return "Invalid";
    }

}
