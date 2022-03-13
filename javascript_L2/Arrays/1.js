function myFun(string){
    const arr=string.split(" ");
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length-1;j++){
            if(arr[i].toLowerCase()==arr[j].toLowerCase()){
                arr[j]="";
            }
                
        }
    }
    let res="";
    for(let i=0;i<arr.length;i++){
        if(arr[i]==""){
            continue;
        }
        else{
            res=res+" "+arr[i]
        }
    }
    return res;

}