function loadInclude(file, target) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load ${file}`);
            }
            return response.text();
        })
        .then(data => document.getElementById(target).innerHTML = data)
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadInclude("header.html", "header");
    loadInclude("footer.html", "footer");
});
