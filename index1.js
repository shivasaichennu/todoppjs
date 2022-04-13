function addelement(){
    document.getElementById("listbox").style.display="block";
    document.getElementById("para").style.display="none"


}

const task = []

function Addbox(){
    
    document.getElementById("listbox").style.display= "none";

    const cat = document.getElementById("content").value;
    console.log(cat);

    const Object={

        firstName:cat
    }
    task.push(Object)
    console.log(task);

    call()
    

}


function call (){

    const element = document.createElement("div")
    element.setAttribute("id","child")

    element.innerText=task[task.length-1].firstName;
    const dog = document.getElementById("parent")

    dog.appendChild(element)
}

