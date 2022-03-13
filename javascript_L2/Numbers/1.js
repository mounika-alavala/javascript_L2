function myFun(temperature,CorF){
    let res=0;
    if(CorF=="C"){
        //convert to celcius
        res=((temperature-32)*(5/9));
    }
    else{
        //convert to farheinheit
        res=(temperature*(9/5))+32;
    }
    return res;
}
