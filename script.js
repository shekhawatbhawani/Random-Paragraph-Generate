const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.",
    "Donec lobortis risus a elit. Etiam tempor.",
    "Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
    "Maecenas fermentum consequat mi. Donec fermentum.",
    "Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.",
    "Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.",
    "Cras mollis scelerisque nunc. Nullam arcu.",
    "Aliquam erat volutpat. Nulla facilisi.",
    "Cras vehicula magna a est. Maecenas feugiat.",
    "Proin dapibus, lectus ut bibendum tincidunt, nulla lorem condimentum quam, vel scelerisque nunc turpis at elit.",
    "Nam eget dui. Etiam rhoncus.",
    "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    "Nunc feugiat mi a tellus consequat imperdiet."
];



let button = document.querySelector("button")
let container = document.querySelector(".container")

button.addEventListener("click", ()=>{
    let input = document.querySelector("input").value
    container.innerHTML = "";
    console.log(input)
   if(input <= 0 || input > 20){
    let h1 = document.createElement("h1");
    h1.textContent = "Invalid Number";
    container.append(h1)
   }
   else{
    for(let i = 0 ; i< input ; i++){
        let p = document.createElement('p');
        p.textContent = paragraphs[i];
        container.append(p)
    }
   }
})
