// console.log("Hello everyone");

const interviewTab = document.getElementById("interview-btn");

interviewTab.addEventListener("click", function(){
    for (let i = 0; i < allJobs.length; i++){
        if (statusButtons[i].innerText === "APPLIED"){
            allJobs[i].classList.remove("hidden");
        }
        else{
            allJobs[i].classList.add("hidden");
        }
    }
    checkNoJobs ();
})