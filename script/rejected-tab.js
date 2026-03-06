// console.log("Hello everyone")

const rejectedTab = document.getElementById("rejected-btn");

rejectedTab.addEventListener("click", function(){
    for (let i = 0; i < allJobs.length; i ++){
        if (statusButtons[i].innerText === "REJECTED"){
            allJobs[i].classList.remove("hidden");
        }
        else{
            allJobs[i].classList.add("hidden")
        }
    }
    checkNoJobs ()
})