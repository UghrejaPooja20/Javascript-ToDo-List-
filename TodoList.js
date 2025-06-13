let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    item.appendChild(dltbtn);
    ul.appendChild(item);
    console.log(input.value);
    input.value = "";
});

ul.addEventListener("click" , function(event){
        console.log("event",event);
        console.log("event.target",event.target);
        console.log(event.target.nodeName);

        if(event.target.nodeName == "BUTTON"){
            let ListItem = event.target.parentElement;
            ListItem.remove();
            console.log("Task Deleted..!");
        }
});

// let delbtns = document.querySelectorAll(".delete");

// for(delbtn of delbtns){

//     delbtn.addEventListener("click" , function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//         console.log("element deleted..");
//     });
// }