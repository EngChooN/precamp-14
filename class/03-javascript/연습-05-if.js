if(1+1 === 2) {
    console.log("정답입니다")
}else{
    console.log("떙")
}
VM1875:2 정답입니다
undefined
if(true) {
    console.log("정답입니다")
}else{
    console.log("떙")
}
VM1929:2 정답입니다
undefined
if(1+1 === 3) {
    console.log("정답입니다")
}else{
    console.log("떙")
}
VM1942:4 떙
undefined
if(0) {
    console.log("정답입니다")
}else{
    console.log("떙")
}
VM1967:4 떙
undefined
const pw1 = "123"
undefined
const pw2 = "123"
undefined
if(pw1 === pw2){
    alert("비밀번호가 일치합니다")
}else{
    alert("비밀번호가 다릅니다")
}
const profile = {
    name: 철수,
    age: 12,
    school: "다람쥐초등학교",
}
if(profile.age >= 20){
    console.log("성인입니다")
}else if(19 >= profile.age && profile.age >= 8){
    console.log("학생입니다")
}else if(7 >= profile.age && profile.age >= 0){
    console.log("어린이입니다")
}else{
    console.log("나이를 입력해주세요")
}
학생입니다