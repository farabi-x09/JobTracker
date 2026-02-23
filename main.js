let selectedJobs = [];
let rejectedJobs = [];

// total count---------
const cardContainer = document.getElementById("card_container");
const  totalCount =  document.getElementById("total_count_for");
totalCount.innerText = cardContainer.children.length ;
document.getElementById("available_count").innerText = totalCount.innerText;



// avaliable jobs btn

const allBtn = document.getElementById("all_btn");
const interviewBtn = document.getElementById("interview_btn");
const rejectedBtn = document.getElementById("rejected_btn");

allBtn.classList.remove('bg-white');
allBtn.classList.add('bg-blue-500', 'text-white');

// toggle 


function toggle(id) {


    allBtn.classList.remove('bg-blue-500', 'text-white');
    interviewBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedBtn.classList.remove('bg-blue-500', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    const cards = document.querySelectorAll(".card");
    const noJobsMsg = document.getElementById("no_jobs_msg");

    let visibleCount = 0;  

    cards.forEach (card => {

        const status = card.querySelector('span.inline-block').innerText;

        if (id === "all_btn") {

            card.style.display= "block";


            visibleCount++;
        }
else if (id === "interview_btn") {

            if (status ==="Interview") {
                card.style.display ="block";

                visibleCount++;
            }
             else 
                {
                card.style.display = "none";
            }

        }
else if (id === "rejected_btn") {

            if (status === "Rejected") {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        }
    });

    // jodi count 0 hoy
    if (visibleCount === 0) {
        noJobsMsg.classList.remove("hidden");
    } else {
        noJobsMsg.classList.add("hidden");
    }

    // all tha dheaka be
    document.getElementById("available_count").innerText = visibleCount;
}


// interviwe btn



function handleInterview(event) {
    const btn = event.target;
    const card = btn.closest('.card');
    const companyName = card.querySelector('h2').innerText;

    if (selectedJobs.includes(companyName)) {
        return;
    }

    if (rejectedJobs.includes(companyName)) {
        rejectedJobs = rejectedJobs.filter(job => job !== companyName);
        const rejCount = document.getElementById('rejected_count_for');
        rejCount.innerText = parseInt(rejCount.innerText) - 1;
    }

    selectedJobs.push(companyName);

    const countDisplay = document.getElementById("interview_count_for");

    countDisplay.innerText = parseInt(countDisplay.innerText) + 1;

    const statusLabel = card.querySelector('span.inline-block');

    statusLabel.innerText = "Interview";

    statusLabel.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'bg-red-100', 'text-red-700');

    statusLabel.classList.add('bg-green-100', 'text-green-700');


    const activeTab = document.querySelector('.btn.bg-blue-500').id;
    if (activeTab === "rejected_btn") {
        card.style.display = "none";
        updateAvailableCountAfterAction();
    }   

    
}



// rejected ar part

function handleRejected(event) {
    const btn = event.target;
    const card = btn.closest('.card');
    const companyName = card.querySelector('h2').innerText;

   
    if (rejectedJobs.includes(companyName)) {
        return;
    }

    
    if (selectedJobs.includes(companyName)) {
        selectedJobs = selectedJobs.filter(job => job !== companyName);
        const intCount = document.getElementById("interview_count_for");
        intCount.innerText = parseInt(intCount.innerText) - 1;
    }

    
    rejectedJobs.push(companyName);
    const rejCount = document.getElementById("rejected_count_for");
    rejCount.innerText = parseInt(rejCount.innerText) + 1;


    const statusLabel = card.querySelector('span.inline-block');

    statusLabel.innerText = "Rejected";

    statusLabel.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'bg-green-100', 'text-green-700');

    statusLabel.classList.add('bg-red-100', 'text-red-700');


    const activeTab = document.querySelector('.btn.bg-blue-500').id;

    if (activeTab === "interview_btn") {

        card.style.display = "none";
        updateAvailableCountAfterAction();
    }
    
}

// delete
function handleDelete(event){
    const icon = event.target;
    const card  = icon.closest(".card");
    const companyName = card.querySelector('h2').innerText;


    card.remove();

    const totalCount = document.getElementById("total_count_for");
    totalCount.innerText = parseInt(totalCount.innerText)- 1;

    if(selectedJobs.includes(companyName)){
        selectedJobs= selectedJobs.filter(job => job !== companyName);
        const intCount = document.getElementById("interview_count_for");
        intCount.innerText= parseInt(intCount.innerText)- 1;
    }

    if(rejectedJobs.includes(companyName)){
        rejectedJobs= rejectedJobs.filter(job => job !== companyName);
        const rejCount = document.getElementById("rejected_count_for");
        rejCount.innerText = parseInt(rejCount.innerText) - 1;
    }
document.getElementById("available_count").innerText = totalCount.innerText;

}


function updateAvailableCountAfterAction() {
    const cards = document.querySelectorAll(".card");
    let visibleCount = 0;
    cards.forEach(card => {
        if (card.style.display !== "none") visibleCount++;
    });

    document.getElementById("available_count").innerText = visibleCount;
    
    const noJobsMsg = document.getElementById("no_jobs_msg");
    if (visibleCount === 0) {
        noJobsMsg.classList.remove("hidden");
    } else {
        noJobsMsg.classList.add("hidden");
    }
}


