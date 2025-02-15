document.addEventListener("DOMContentLoaded", () => {
    const navList = document.querySelector(".nav-list");
    const toggleMenu = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    // fetching the nav items from the JSON file : nav-items.json
    fetch("nav-items.json")
        .then((response) => response.json())
        .then((data) => {
            const navItems = data.navItems;
            // console.log(navItems)
            navList.innerHTML = navItems
                .map(
                    (item) =>
                        `<li><a href="${item.link}" class="hover:text-blue-500">${item.label}</a></li>`
                )
                .join("");
            mobileMenu.innerHTML = navList.innerHTML; // Populate dropdown menu with the same items
        })
        .catch((error) => console.error("Error loading nav items:", error));

    // toggle the dropdown menu for mobile screens
    toggleMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});
