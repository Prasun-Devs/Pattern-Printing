let n=4;

for (let i=0;i<n;i++){
    let bag="";
    for (let j=0;j<n;j++){
        if(i==j||j==0||j==n-1){
            bag=bag+"*";
        }else{
          bag=bag+" ";
        }
    }
    console.log(bag)
}