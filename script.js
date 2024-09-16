document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            fetchContent(link.getAttribute("href"));
        });
    });

    function fetchContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const section = doc.querySelector("section");
                document.getElementById("content").innerHTML = section.innerHTML;
            })
            .catch(error => {
                console.error('Error loading the page: ', error);
            });
    }
});
