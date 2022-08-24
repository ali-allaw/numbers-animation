let nums = document.querySelectorAll(".nums .num");
let arrNums = Array.from(nums)
let section = document.querySelector(".three");
let started = false // function started ? no

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 150) {
        if (!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal) // WE divised the duration on the goal to make the time of each num ends togother
}
startCount(nums)