const buttons = document.querySelectorAll(".month");
const sections = document.querySelectorAll(".month-section");   

buttons.forEach(button => {
    button.addEventListener("click", handleMonthClick);          
});

function handleMonthClick(event) {
    const curButton = event.target;

    if (curButton.classList.contains("active")) {
        return;
    }

    buttons.forEach(button => button.classList.remove("active"));

    curButton.classList.add("active");

    sections.forEach(section => {
        if (section.id === curButton.dataset.month) {            
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}