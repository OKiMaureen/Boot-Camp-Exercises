module.exports={
    
    countWords:(str)=>{
    // check if input is empty string
    if(str===""){
     return "enter a string"

    }
    //check if input is not a string
    if(typeof str !== "string"){
    return "enter a string"
   }
   

     //string divides to words
       let words= str.split(" ");
       
       let finalResult ={};
       
       for(let value of words){
        //    let reg = new RegExp(value,'gi');
        //    let output=str.match(reg);
        finalResult[value.toLowerCase()] = finalResult[value.toLowerCase()] + 1 || 1;
       }

         return finalResult;

}

}

   