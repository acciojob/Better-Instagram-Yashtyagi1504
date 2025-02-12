let divs = document.querySelectorAll(".image");
let count = 1;
divs.forEach(div=>{
    div.id = "div" + count;
    count++;
    div.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("text",div.id);
    })
});
let arr = ["dragover","dragenter","drop"];

arr.forEach(event =>{
    body.addEventListener(event,(e)=>{
        e.preventDefault();
        if(event == "drop"){
            let movingImage = document.querySelector("#" + e.dataTransfer.getData("text"));
            body.append(movingImage)
        }
    })
})
