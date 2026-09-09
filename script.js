fetch("content/pages/index.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("title").textContent = data.title;
        document.getElementById("description").textContent = data.description;
        document.getElementById("openingHours").textContent = data.openingHours;
        document.getElementById("coffeePrice").textContent = data.coffeePrice;
    });