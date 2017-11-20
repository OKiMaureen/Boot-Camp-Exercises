 const expect = require('chai').expect;
 const Wrds =require('../src/main.js');

 describe ("words",()=>{
     describe ("handles correct input" ,()=>{
         it("should return {my:2,name:1,is:1,joy:1}",()=>{
             expect(Wrds.countWords("my my name is joy")).to.have.property('my', 2);
         })
         it("should return {mary:3,is:1,a:1,girl:1}",()=>{
            expect(Wrds.countWords("my my name is joy")).to.have.property('joy', 1);
        })

        
     })

     describe ("handles incorrect input",()=>{
    it("should return not string as words for empty string",()=>{
            expect(Wrds.countWords("")).to.eql("enter a string");
        })

     it("should return not string as words for 6",()=>{
            expect(Wrds.countWords(6)).to.eql("enter a string");
        })

    })
    })
    
    
 

 