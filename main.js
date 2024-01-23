const contactInfo = document.getElementById("contact"),
    scheduleInfo = document.getElementById("schedule"),
    addressInfo = document.getElementById("address");

const page = document.querySelector("html")
const contactPanel = document.getElementById("contact-panel"),
    schedulePanel = document.getElementById("schedule-panel"),
    addressPanel = document.getElementById("address-panel");

contactInfo.onclick = () => {
    schedulePanel.classList.add("hidden")
    addressPanel.classList.add("hidden")
    contactPanel.classList.toggle("hidden")
}
scheduleInfo.onclick = () => {
    contactPanel.classList.add("hidden")
    addressPanel.classList.add("hidden")
    schedulePanel.classList.toggle("hidden")
}
addressInfo.onclick = () => {
    contactPanel.classList.add("hidden")
    schedulePanel.classList.add("hidden")
    addressPanel.classList.toggle("hidden")
}