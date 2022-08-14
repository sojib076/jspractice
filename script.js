
const h1List = document.querySelectorAll('p');
for (let i = 0; i < h1List.length; i++) {
    const element = h1List[i];
    element.style.color = 'red';

}
document.getElementById("backpack").style.backgroundColor = "tomato";
const cardlist = document.getElementsByClassName("card")
for (let i = 0; i < cardlist.length; i++) {
    const element = cardlist[i];
    element.style.borderRadius = "30px";
}

// const now =document.getElementsByClassName("buy-now-button");
// for (let i=0; i< now.length; i++) {
//     const element = now[i];
//    element.addEventListener("click", function(event) {
//     event.target.remove();
//     });
// }
// const submit = document.getElementById("input").addEventListener("keyup", function(event) {
//     const input =event.target.value;
//     const btn = document.createElement("submit");
//     if (input === "email") {
//        btn.removeAttribute("disabled");
//        alert("Thank you for subscribing!");
//        console.log("Thank you for subscribing!");
//     } else {
    
//         btn.setAttribute("disabled", true);
//     }
// });
// document.getElementById("input").addEventListener("keyup",(event)=>{

//     const text = event.target.value;
//     const btndlt= document.getElementById("submit")
//     if(text==='email'){
//         btndlt.removeAttribute("disabled")
//     }else{
//         btndlt.setAttribute("disabled",true)
//     }
   
// })
document.getElementById("input").addEventListener('keyup',(event)=>{
    const input =event.target.value;
    const btn = document.getElementById("submit");
    if(input==='email'){
       btn.removeAttribute("disabled");
    }else{
        btn.setAttribute("disabled",true);
    }
})
const subscribe = document.querySelector("#subscribe")
subscribe.addEventListener('dblclick',()=>{
    subscribe.style.backgroundColor = "tomato";
    console.log("Thank you for subscribing!");
})
