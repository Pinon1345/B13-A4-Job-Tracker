// Dashboard elements 

const totalDashboard = document.getElementById("total-dashboard");
// console.log(totalDashboard);
const interviewDashboard = document.getElementById("interview-dashboard");
// console.log(interviewDashboard);
const rejectedDashboard = document.getElementById("rejected-dashboard");
// console.log(rejectedDashboard);
const availableJobs = document.getElementById("available-jobs");
// console.log(availableJobs);
const noJobSection = document.getElementById("no-available-job");
// console.log(noJobSection);



// Job cards
const allJobs = [
    document.getElementById("company-1"),
    document.getElementById("company-2"),
    document.getElementById("company-3"),
    document.getElementById("company-4"),
    document.getElementById("company-5"),
    document.getElementById("company-6"),
    document.getElementById("company-7"),
    document.getElementById("company-8"),
];
// console.log(allJobs);



// Status button (NOT APPLIED)

const statusButtons = [];
for (let i = 0; i < allJobs.length; i++) {
    const buttons = allJobs[i].getElementsByTagName("button");
    statusButtons.push(buttons[0]);
}

// Interview buttons 

const interviewButtons = [];
for (let i = 0; i < allJobs.length; i++) {
    const buttons = allJobs[i].getElementsByTagName("button");
    interviewButtons.push(buttons[1]);
}

// Rejected buttons 

const rejectedButtons = [];
for (let i = 0; i < allJobs.length; i++) {
    const buttons = allJobs[i].getElementsByTagName("button");
    rejectedButtons.push(buttons[2]);
}

// Delete buttons

const deleteBtns = document.getElementsByClassName("delete-btn");
for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i].getElementsByTagName("button")[0];
    btn.addEventListener("click", function () {
        allJobs[i].classList.add("hidden")
        checkNoJobs();
    });
}

// get INTERVIEW click events

for (let i = 0; i < interviewButtons.length; i++) {
    interviewButtons[i].addEventListener("click", function () {
        statusButtons[i].innerText = "APPLIED";
        statusButtons[i].classList.remove("bg-green-300");
        statusButtons[i].classList.add("bg-green-200");
        checkNoJobs();
    })
}

// get REJECTED click events 

for (let i = 0; i < rejectedButtons.length; i++) {
    rejectedButtons[i].addEventListener("click", function () {
        statusButtons[i].innerText = "REJECTED";
        statusButtons[i].classList.remove("bg-red-300");
        statusButtons[i].classList.add("bg-red-200");
        checkNoJobs();
    })
}

// No Jobs Available (show/hidden)

function checkNoJobs() {
    let visible = 0;
    let interviewCount = 0;
    let rejectedCount = 0;


    for (let i = 0; i < allJobs.length; i++) {
        if (!allJobs[i].classList.contains("hidden")) {
            visible++;

            if (statusButtons[i].innerText === "APPLIED")
                interviewCount++;
            if (statusButtons[i].innerText === "REJECTED")
                rejectedCount++;
        }
    }

    totalDashboard.innerText = visible;
    interviewDashboard.innerText = interviewCount;
    rejectedDashboard.innerText = rejectedCount;
    availableJobs.innerText = visible;

    if (visible === 0) {
        noJobSection.classList.remove("hidden")
    }
    else {
        noJobSection.classList.add("hidden")
    }
}

// Dashboard update pawar jnne

    checkNoJobs ();

