var n=Number(prompt("enter num"));
var final="";
 for(var i=1; i <= n; i++){
  for(var j=1;j<=n-i;j++){
    final +=" ";
  }
  for(var k=0; k<i; k++){
   final+="*"
  }
  final += "\n"
  }
  console.log(final);