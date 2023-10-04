let menuContainer = document.getElementById('menu-group');

let items = menuContainer.getElementsByClassName("menu-item");

let iLength = items.length;

console.log(iLength)

for (let i= 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className +=" active";
    });
}