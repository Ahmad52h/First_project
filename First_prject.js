// -------------------------- Top Profile Home Section Details --------------------------
const profile = {
    name: "Ahmad dsds",
    age: 25,
    profession: "Software Engineer",
    city: "Amman",
    corprateLevel: "Mid-Level",
    vecationRequest: 19,
    leaveRequests: 56
}

//  Welcom Meesage
const welcomeMessage = `<h2 class="text-body"><b> Welcome ${profile.name}, a ${profile.age} year old ${profile.profession} from ${profile.city}! </b></h2>`;
document.getElementById("welcome-message").innerHTML = welcomeMessage;
document.getElementById("profile-name").textContent = profile.name;
document.getElementById("corprate-level").textContent = profile.corprateLevel;
document.getElementById('vacation-request').textContent = profile.vecationRequest;
document.getElementById('leave-request').textContent = profile.leaveRequests;




// -------------------------- Slider --------------------------
const sliderData = [
    {
        image: "https://t4.ftcdn.net/jpg/03/24/25/39/360_F_324253938_9ajnWEMVZ4TsLbJLeMmK7fyEcZeLlljl.jpg",
        title: "Image 1",
        description: "Best Spots For A Summer VacationCheck out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!",
    },
    {
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/01/coconut-holding-fruit-1200x628-facebook.jpg",
        title: "Image 2",
        description: "Best Spots For A Summer VacationCheck out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!",
    },
    {
        image: "https://img.freepik.com/premium-photo/realistic-image-coconuts-light-background-ai-generated_1034098-663.jpg",
        title: "Image 3",
        description: "Best Spots For A Summer VacationCheck out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!",
    },
    {
        image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        title: "Image 4",
        description: "Best Spots For A Summer VacationCheck out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!",
    }
]

sliderData.forEach((slide, index) => {
    const inner = `
        <div class="carousel-item active" data-bs-interval="10000" style="height: 20em;">
            <img src="${slide.image}" alt="${slide.title}"
                class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${slide.title}</h5>
                <p>${slide.description}</p>
        </div
    `;

    const indicator = `
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="true" aria-label="Slide ${index + 1}"></button>
    `;

    // Class names carousel-indicators
    document.getElementById("carousel-inner").innerHTML += inner;
    document.getElementById("carousel-indicators").innerHTML += indicator;

})


// -------------------------- Search bar --------------------------
const vecationRequests = [
    {
        name: "Ahmad",
        date: "2021-01-01",
        salary: 1000,
        duration: 5,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Ali",
        date: "2021-01-02",
        salary: 2000,
        duration: 10,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Mohammad",
        date: "2021-01-03",
        salary: 3000,
        duration: 15,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",

    },
    {
        name: "Khaled",
        date: "2021-01-04",
        salary: 4000,
        duration: 20,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Omar",
        date: "2021-01-05",
        salary: 5000,
        duration: 25,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Hassan",
        date: "2021-01-06",
        salary: 6000,
        duration: 30,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Hussein",
        date: "2021-01-07",
        salary: 7000,
        duration: 35,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Fadi",
        date: "2021-01-08",
        salary: 8000,
        duration: 40,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Samer",
        date: "2021-01-09",
        salary: 9000,
        duration: 45,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
    {
        name: "Yazan",
        date: "2021-01-10",
        salary: 10000,
        duration: 50,
        image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    },
]

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredRequests = vecationRequests.filter(request => request.name.toLowerCase().includes(searchValue));

        
    let searchResult = "";

    filteredRequests.forEach(request => {
        searchResult += ` <div class="bg-body rounded shadow-sm p-3">
                <div class="d-flex flex-column align-items-center gap-3" style="min-width: 20em;">
                    <img src="${request.image}"
                        alt="Avatar" class="img1">
                    <h4>${request.name}</h4>
                </div>

                <div class="d-flex flex-column align-items-between flex-wrap gap-2">
                    <div>
                        <h6 class="text-secondary m-0 p-0 mt-1">Submitted on:</h6>
                        <span>${request.date}</span>
                    </div>
                    <div>
                        <h6 class="text-secondary m-0 p-0 mt-1">Duration:</h6>
                        <span>${request.duration} days</span>
                    </div>
                    <div>
                        <h6 class="text-secondary m-0 p-0 mt-1">Salary:</h6>
                        <span>${request.salary} JOD</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3 gap-3">
                        <button class="btn btn-outline-success rounded-3 px-3 py-2" style="width: 10em;">Reject</button>
                        <button class="btn btn-success rounded-3 px-3 py-2" style="width: 10em;">Accept</button>
                    </div>
                </div>
            </div>`;
    })

    if(filteredRequests.length === 0) {
        searchResult = `<h4 class="text-secondary">No results found!</h4>`;
    }



    document.getElementById("search-result").innerHTML = searchResult;
})


