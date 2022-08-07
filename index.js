function writeCards(names, event) {
    
    const messages = [];
   
     for (let i = 0; i < names.length; i++) {
   const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
     }
     return messages;
   
   }

 var countDown=function(i) {
        console.log(i);
        i>0 && countDown(i-1);
    }
        countDown(10);

  