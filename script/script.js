let interviewArray = [];
let rejectedArray = [];
let currentStatus = 'all-filter-btn'
//  btn selectors
const buttons = document.querySelectorAll('#nav-btn-container button ');
const allBtn = document.getElementById('all-filter-btn');
const interviewBtn = document.getElementById('interview-filter-btn');
const rejectedBtn = document.getElementById('rejected-filter-btn');


// total selectors
const cardContainer = document.getElementById('card-container');
const totalHeading = document.getElementById('total-heading');
const totalSide = document.getElementById("total-side");
const interviewTotal = document.getElementById('interview-total');
const rejectedTotal = document.getElementById('rejected-total');
const interviewTotalSideFull = document.getElementById('interview-total-side-full');
const interviewTotalSide = document.getElementById('interview-total-side');
const rejectedTotalSideFull = document.getElementById('rejected-total-side-full');
const rejectedTotalSide = document.getElementById('rejected-total-side');

// section selectors
const allSection = document.getElementById('card-container');
const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');
const mainContainer = document.getElementById('main');
function toggle(id) {

    removeColor(allBtn);
    removeColor(interviewBtn);
    removeColor(rejectedBtn);
    addColor(allBtn);
    addColor(interviewBtn);
    addColor(rejectedBtn);

    const selected = document.getElementById(id);

    selected.classList.remove('bg-base-100', 'text-black/50');
    selected.classList.add('bg-primary', 'text-base-100');
    addHidden(allSection);
    addHidden(interviewSection);
    addHidden(rejectedSection);
    addHidden(interviewTotalSideFull);
    addHidden(rejectedTotalSideFull);

    if (id == 'all-filter-btn') {
        removeHidden(allSection);

    } else if (id == 'interview-filter-btn') {
        removeHidden(interviewSection);
        removeHidden(interviewTotalSideFull);

    } else if (id == 'rejected-filter-btn') {
        removeHidden(rejectedSection);
        removeHidden(rejectedTotalSideFull);

    }


}

function calculateCountTotal() {
    const totalCount = cardContainer.children.length;
    totalHeading.innerText = totalCount;
    totalSide.innerText = totalCount;
    let interviewTotalCount = interviewArray.length;
    interviewTotal.innerText = interviewTotalCount;
    interviewTotalSide.innerText = interviewTotalCount;
    let rejectedTotalCount = rejectedArray.length;
    rejectedTotal.innerText = rejectedTotalCount;
    rejectedTotalSide.innerText = rejectedTotalCount;
}
calculateCountTotal()
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-interview')) {

        const target = event.target;
        const targetParent = target.parentNode.parentNode;
        const companyName = targetParent.querySelector('.company-name').innerText;
        const position = targetParent.querySelector('.position').innerText;
        const type = targetParent.querySelector('.type').innerText;
        const salary = targetParent.querySelector('.salary').innerText;
        let status = targetParent.querySelector('.present-status').innerText;
        const description = targetParent.querySelector('.description').innerText;

        status = 'interview';
        targetParent.querySelector('.present-status').innerText = 'interview';
        targetParent.querySelector('.present-status').classList.add('uppercase', 'bg-green-500', 'text-base-100');
        const cardInfo = {
            companyName,
            position,
            type,
            salary,
            status,
            description
        }
        const isIn = interviewArray.find(item => item.companyName == cardInfo.companyName);
        if (!isIn) {
            interviewArray.push(cardInfo);
        }

        rejectedArray = rejectedArray.filter(item => item.companyName != cardInfo.companyName);

        // if (currentStatus == 'rejected-total') {
        //     renderRejected()
        // }
        renderInterview()
        renderRejected()
        calculateCountTotal();


    } else if (event.target.classList.contains('btn-rejected')) {

        const target = event.target;
        const targetParent = target.parentNode.parentNode;
        const companyName = targetParent.querySelector('.company-name').innerText;
        const position = targetParent.querySelector('.position').innerText;
        const type = targetParent.querySelector('.type').innerText;
        const salary = targetParent.querySelector('.salary').innerText;
        let status = targetParent.querySelector('.present-status').innerText;
        const description = targetParent.querySelector('.description').innerText;

        status = 'rejected';
        targetParent.querySelector('.present-status').innerText = 'rejected';
        targetParent.querySelector('.present-status').classList.add('uppercase', 'bg-red-500', 'text-base-100');
        const cardInfo = {
            companyName,
            position,
            type,
            salary,
            status,
            description
        }
        const isIn = rejectedArray.find(item => item.companyName == cardInfo.companyName);
        if (!isIn) {
            rejectedArray.push(cardInfo);
        }

        interviewArray = interviewArray.filter(item => item.companyName != cardInfo.companyName);
        // if (currentStatus == 'rejected-total') {
        //     renderInterview()
        // }
        renderRejected()
        renderInterview()
        calculateCountTotal();

    } else if (event.target.classList.contains('btn-delete')) {
        const target = event.target;
        const targetParent = target.parentNode.parentNode.parentNode;
        cardContainer.removeChild(targetParent)
        calculateCountTotal();
    }

})

function renderInterview() {
    interviewSection.innerHTML = '';
    if (interviewArray.length === 0) {
        interviewSection.innerHTML = `
            <div class="flex flex-col items-center justify-center py-16 bg-base-100 rounded-2xl">
                <img src="assets/jobs.png" alt="No jobs" class="w-24 h-24 mb-4">
                <h3 class="text-2xl font-bold text-gray-700">No jobs available</h3>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }
    interviewArray.forEach(element => {
        let div = document.createElement('div');
        div.className = "card p-6 space-y-5 bg-base-100 rounded-2xl  hover:shadow-2xl transition duration-300 text-left"
        div.innerHTML = `
                <div class="flex justify-between">
                    <div class="space-y-2">
                        <p class="company-name text-[18px] font-semibold">${element.companyName}</p>
                        <p class="position text-gray-500">${element.position}</p>
                    </div>
                    <div>
                        <p
                            class="btn-delete btn border-none px-4 py-2 flex items-center justify-center text-red-500 border-red-500 rounded hover:bg-red-500 hover:text-base-100">
                            <i class="fa-solid fa-trash-can "></i>
                        </p>

                    </div>
                </div>

                <div class="text-gray-500 flex flex-col  sm:flex-row gap-2 sm:gap-0">
                    <span class=" type">${element.position}</span>
                    <span class="salary">${element.salary}</span>

                </div>
                <div class="grid gap-2">
                    <span
                        class="present-status uppercase w-30 px-4 py-2 bg-green-500 text-base-100 border-none rounded drop-shadow-lg">${element.status}</span>
                    <p class="description text-gray-500">${element.description}</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-2">
                    <button
                        class="btn-interview btn uppercase px-4 py-2 text-green-500 border-green-500 rounded hover:bg-green-500 hover:text-base-100">interview</button>
                    <button
                        class="btn-rejected btn uppercase px-4 py-2 bg-base-100 text-red-500 border-red-500 rounded hover:bg-red-500 hover:text-base-100">Rejected</button>
                </div>
        `
        interviewSection.append(div)
    });
}


function renderRejected() {

    rejectedSection.innerHTML = ''
    if (rejectedArray.length === 0) {
        rejectedSection.innerHTML = `
            <div class="flex flex-col items-center justify-center py-16 bg-base-100 rounded-2xl">
                <img src="assets/jobs.png" alt="No jobs" class="w-24 h-24 mb-4">
                <h3 class="text-2xl font-bold text-gray-700">No jobs available</h3>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }
    rejectedArray.forEach(element => {
        let div = document.createElement('div');
        div.className = "card p-6 space-y-5 bg-base-100 rounded-2xl  hover:shadow-2xl transition duration-300 text-left"
        div.innerHTML = `
                <div class="flex justify-between">
                    <div class="space-y-2">
                        <p class="company-name text-[18px] font-semibold">${element.companyName}</p>
                        <p class="position text-gray-500">${element.position}</p>
                    </div>
                    <div>
                        <p
                            class="btn-delete btn border-none px-4 py-2 flex items-center justify-center text-red-500 border-red-500 rounded hover:bg-red-500 hover:text-base-100">
                            <i class="fa-solid fa-trash-can "></i>
                        </p>

                    </div>
                </div>

                <div class="text-gray-500 flex flex-col  sm:flex-row gap-2 sm:gap-0">
                    <span class=" type">${element.position}</span>
                    <span class="salary">${element.salary}</span>

                </div>
                <div class="grid gap-2">
                    <span
                        class="present-status  uppercase w-30 px-4 py-2 bg-red-500 text-base-100 border-none rounded drop-shadow-lg">${element.status}</span>
                    <p class="description text-gray-500">${element.description}</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-2">
                    <button
                        class="btn-interview btn uppercase px-4 py-2 text-green-500 border-green-500 rounded hover:bg-green-500 hover:text-base-100">interview</button>
                    <button
                        class="btn-rejected btn uppercase px-4 py-2 bg-base-100 text-red-500 border-red-500 rounded hover:bg-red-500 hover:text-base-100">Rejected</button>
                </div>
        `
        rejectedSection.append(div)
    });
}
