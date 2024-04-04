
let string ="";
let buttons = document.querySelectorAll(`.button ` );
let buttons1 = document.querySelectorAll(`.button1 ` );

Array.from(buttons).forEach((button )=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML === "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === "c"){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === "←"){
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }

    })
})
Array.from(buttons1).forEach((button1 )=>{
    button1.addEventListener("click", (e)=>{

        if(e.target.innerHTML === "c"){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }

    })
})