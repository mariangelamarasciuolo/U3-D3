const AddElemList = (SubmitEvent) => {
    SubmitEvent.preventDefault()
    const form = submit.target
    const inputlist = form.elements
    let value;

    const objList = {};
    for (let i = 0; i < inputlist.length; i++) {
        if (inputlist[i].tagName !== "button") {
            objList = inputlist[i].value
        }
    }
    const conferma = confirm ("Lo aggiungo alla lista?")
    if (conferma){
      const box = document.querySelector(".elelist");  
      const li = document.createElement("li");
      li.innerText = `${value}`
      box.appendChild(li)
    } 
    
}
AddElemList()