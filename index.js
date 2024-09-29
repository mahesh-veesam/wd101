let form = document.querySelector("form")
displayAllData();
form.addEventListener("submit", getFormData)

function getFormData(event){
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;
    let dob = document.querySelector("#date").value;

    let object = {
        name : name,
        email : email,
        pass : pass,
        dob : dob
    }

    let data = JSON.parse(localStorage.getItem("userdata")) || [];

    if(!Array.isArray(data)){
        data = [];
    }

    data.push(object)

    localStorage.setItem("userdata",JSON.stringify(data));

    console.log(data)

    displayData();
    form.reset();

}
function displayData(){
    let data = JSON.parse(localStorage.getItem("userdata"))


        let tr = document.createElement("tr")
        let tbody = document.querySelector("tbody") 
    
        let tdn = document.createElement("td");
        let tde = document.createElement("td")
        let tdw = document.createElement("td")
        let tdd = document.createElement("td")
        let tdt = document.createElement("td")
    
        tdn.innerHTML = (data[data.length - 1].name)
        tde.innerHTML = (data[data.length - 1].email)
        tdw.innerHTML = (data[data.length - 1].pass)
        tdd.innerHTML = (data[data.length - 1].dob)       
        tdt.innerHTML = "True"
    
        tbody.appendChild(tr)
        tr.appendChild(tdn)
        tr.appendChild(tde)
        tr.appendChild(tdw)
        tr.appendChild(tdd)
        tr.appendChild(tdt)
}
function displayAllData(){
    let data = JSON.parse(localStorage.getItem("userdata"))

    try{
        data.forEach(element => {
            let tr = document.createElement("tr")
            let tbody = document.querySelector("tbody") 
        
            let tdn = document.createElement("td");
            let tde = document.createElement("td")
            let tdw = document.createElement("td")
            let tdd = document.createElement("td")
            let tdt = document.createElement("td")
        
            tdn.innerHTML = (element.name)
            tde.innerHTML = (element.email)
            tdw.innerHTML = (element.pass)
            tdd.innerHTML = (element.dob)       
            tdt.innerHTML = "True"
        
            tbody.appendChild(tr)
            tr.appendChild(tdn)
            tr.appendChild(tde)
            tr.appendChild(tdw)
            tr.appendChild(tdd)
            tr.appendChild(tdt)
        });
    }
    catch(e){
        console.log(e)
    }
}
let btn = document.getElementById("clear")
btn.addEventListener("click",function(){
    console.log("data cleared")
    localStorage.clear()
    location.reload()
})

