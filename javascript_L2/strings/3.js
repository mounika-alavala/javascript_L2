function myFun(name){

    const arr=name.split("");

    let res='';

    for(let i=0;i<name.length;i++){

        let n=name.charCodeAt(i);

        if(n>=97 && n<=123){

            arr[i]=char(n-32);

            res=res+arr[i];

        }

        else if(n>=65 && n<=91){

            arr[i]=char(n+32);

            res=res+arr[i];

        }

    }

    return res;

}
