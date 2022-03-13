function myFun(date){
    const d=new Date(date);
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[d.getDay()];
    
}
