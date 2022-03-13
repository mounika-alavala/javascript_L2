function myFun(date){
    let res=""
    const d=new Date(date);
    if(d.getDay()==0 || d.getDay()==6){
        res="weekend";
    }
    else{
        res="not weekend";
    }
    return res;
}
