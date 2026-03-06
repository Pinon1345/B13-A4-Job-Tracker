// console.log("Hello everyone")

const allBtn = document.getElementById("all-btn");

allBtn.addEventListener("click", function(){
    for (let i = 0; i < allJobs.length; i ++){
        allJobs[i].classList.remove("hidden");
    }
    checkNoJobs ()
})