let Resume = {
    persondet :{
       name: "Meena J",
       age: 28,
       place: "cuddalore",
       gender : " female",
       mailid :"meenajayaraj18@gmail.com",
      },
   skills : ["C" ,"sql","javascript"],
   education:[ 
    {
    degree : "Bachelor of Engineering",
    domain :"electronics and telecommunication",
    college: "karpagam college of engineering",
    year: 2017,
    place:"coimbatore"
    },
{
   year: 2019,
   role : "excecutive",
   domain:"Non-IT",
   place:"chennai"
},
],
};
//console.log(Resume.persondet);
//2.For the given JSON iterate overall for loops(for,for..in,for...of,forEach)
console.log("[Using for...in loop]");
for(let education in Resume){
   console.log(education,Resume[education]);
}
console.log("[using for loop]");
for(i=0;i< Resume.skills.length;i++){
 console.log(`coding language: ${Resume.skills[i]}`);
}
console.log("[Using for...of loop]");
for (let education of Resume.education) {
  console.log(`Year: ${education.year}`,`Branch: ${education.domain}`);
}
console.log("[Using forEach for arrays]");
Resume.education.forEach((education,index)=>{
   console.log(`${index+1}. Domain : ${education.domain}, place : ${education.place}`)
})