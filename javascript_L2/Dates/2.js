function myFun(date){
    const d=new Date(date);
    let year=d.getFullYear();
    let time1=d.getTime();
    const d2=new Date(year,0,1);
    let time2=d2.getTime()
    return Math.ceil((time1-time2+1)/(1000*60*60*24));
}