//დავალება 2.1 
let str1='Java'
let str2='Script'
console.log(str1+str2)
//დავალება 2.2
str1=str1.replace('Java','და')
str2=str2.replace('Script','იყო')

  let txt='იყო'+' '+str1+' '+'არა'+' '+str2+' '+'რა';
  console.log(txt)
  //დავალება 2.3
  const word='გიორგი'
  console.log(word.charAt(0))
  //დავალება 2,4
  const text='პარიზი საფრანგეთის დედაქალაქია'
  console.log(text.slice(-1))
  //დავალება 2,5
  let capital='ხპარიზი'
  console.log(capital.substring(1))
 //დავალება 2,6
let name='მარიამ';
name='ქეთი'
name='ლია'
console.log(`გამარჯობა ${name} , როგორ ბრძანდებით?`);
//ცვლადებს რამდენიმე მნიშვნელობა მივანიჭე რომ გამეტესტა ნამდვილად მუჯშაობდა თუ არა 

//დავალება 2,7
let person=prompt("გთხოვთ შეიყვანოთ თქვენი სხელი:")
alert(`გამარჯობა,${person}`)

//დავალება 2,8
let firstName=prompt("დაწერე შენი სახელი:")
let lastName=prompt("დაწერე შენი გვარი:")
alert(`დღევანდელი კონკურსის გამარჯვებულია ${firstName} ${lastName}`)
//დავალება 2,9
let str='თბილისი საქართველოს დედაქალაქია';
console.log(str.startsWith("ამსტერდამი" ))
console.log(str.startsWith("თბილისი"))
// დავალება 2,10
let year=1;
let month=6

let myStudyPeriod=`მე it Step აკადემიაში პროგრამირება უნდა ვისწავლო ${month} თვის განმავლობაში`
console.log(myStudyPeriod)
// დავალება 2,11
let stri='პარიზი საქართველოს დედაქალაქია'  //აქ მეორდებოდა ცვლადის სახელი ამიტომ შევცვალე
let result=stri.replace('პარიზი','თბილისი')
console.log(result)
// დავალება 2,12
let products = 'შოკოლადი, ბანანი, ლიმონათი, ვაშლი';
 let arr=products.split(",")
console.log(arr)
// დავალება 2,13
let string='Hello world, this is string'
let sub=string.substring(0,5)
console.log(sub)
let subs=string.substr(6,5)
console.log(subs)
//დავალება 2,14 არის Regex

