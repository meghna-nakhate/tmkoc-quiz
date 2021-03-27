var readlineSync= require("readline-sync")
var score1=0

var username=readlineSync.question("whats ur name? ")
console.log("welcome to the TMKOC quiz ")
console.log("-----------")
console.log("Sorry,this application is made in JS, freaking case sensitive:/ so please answer in smallcase only!")
console.log("-----------")
console.log("LETs START")

//PLAY FUNC
function play1(que,ans){
  var userans=readlineSync.question(que)

  if(userans===ans)
  {
    console.log("right!")
    score1++
  
  }
  else{
    console.log("wrong!")
  }
  console.log("ur current score is "+score1)
  console.log("----------")
}

play1("what does daya dance to? ","garba")
play1("which business does madhavi do? ","achar papad")
play1("what is the name of abdul's shop? ","all in one general store")
play1("why does jethalal come in balcony everyday? ","to see babita")
play1("which family is mostly shown in this Show ? ", "gada family")
play1("What is the relationship between Bagha and Nattu Kaka? ", "nephew-uncle")

console.log("if ur current score is more than 3, lets jump to level 2!")

if(score1>=3)
{
  console.log("u r eligible gor level 2, YAY!")
   play2()
}
else{console.log("ur score is less")}

play2("does tarak mehta hate his wife for food?","yes")
play2("who does jethalal hate? ","sundar")
play2("daya quotes from whom so much? ","daya ki maa")
play2("what does sodhi own? ","garage")
play2("what do bapuji call jethalal? ","jethya")


function play2(que,ans)
{
  var userans=readlineSync.question(que)
  
    if(userans===ans)
    {
      console.log("right!")
      score1++
    console.log("ur current score is "+score1)
    console.log("----------")
    }
    else
    {
      console.log("wrong!")
    }
    
}
console.log("THIS IS THE END OF THIS QUIZ, THANKS!")
