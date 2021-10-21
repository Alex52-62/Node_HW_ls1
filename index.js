var colors = require('colors');

function primeNumber() {
  x=process.argv[2];
  var primaryNumber = [];
   for (i=+process.argv[3]; i<=x; i++) {
      var flag=0,flag1=0; 
        for (j=2; j<i; j++) {
          if(i%j==0){
            flag=1;
          if(i==x)
            flag1=1;
          }
        }

          if(flag==0){
              primaryNumber.push(i);
              z=primaryNumber.indexOf(i);
                  switch (z%3) {

                    case 0:
                    console.log(colors.green(i));
                    break;

                    case 1:
                    console.log(colors.yellow(i));
                    break;

                    case 2:
                    console.log(colors.red(i));
                    break;
                  }
        }
   }

    if(flag1==0) {
    console.log(colors.green('Its a prime number.'));
    return
    }

    if(flag1==1){ 
      console.log(colors.red('There are no more prime numbers'));
      console.log(colors.cyan('END'));
      return
      }
      
    if(typeof x==='string') 
    console.log(colors.magenta('ERROR: Its not a number.'));
 }

 setTimeout(primeNumber, 1000);













