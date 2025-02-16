let divs = document.querySelectorAll(".image");
let count = 1;
divs.forEach(div=>{
    div.id = "div" + count;
    count++;
    div.addEventListener("dragstart",(e)=>{
		div.classList.add("selected")
        e.dataTransfer.setData("text",div.id);
    })
});
let arr = ["dragover","dragenter","drop"];
let parent = document.querySelector("#parent");
arr.forEach(event =>{
    parent.addEventListener(event,(e)=>{
        e.preventDefault();
        if(event == "drop"){
			// console.log(e.target.id)
			let droppedDiv = document.querySelector("#" + e.target.id);
			let draggedDiv = document.querySelector("#" + e.dataTransfer.getData("text"));

			let temp = document.createElement("div");
			droppedDiv.replaceWith(temp);
			draggedDiv.replaceWith(droppedDiv);
			temp.replaceWith(draggedDiv);
			draggedDiv.classList.remove("selected")
        }
    })
})
