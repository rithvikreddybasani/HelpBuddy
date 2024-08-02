
document.addEventListener("DOMContentLoaded", function() {
    var dashboardContent = document.querySelector(".content");
    var addCounselorContent = document.getElementById("counselor-form"); // Updated to match the add counselor content
    var dashboardLink = document.querySelector(".sidebar a[href='#']");

    var dashboardButton = document.querySelector(".sidebar a.active");
    var addCounselorButton = document.getElementById("addCounselorBtn");
    

    // Function to toggle the visibility of the dashboard and add counselor sections
    function toggleSections(showDashboard) {
        if (showDashboard) {
            dashboardContent.style.display = "block";
            addCounselorContent.style.display = "none";
            dashboardLink.classList.add("dashboard-active");
            dashboardButton.classList.add("active");
            addCounselorButton.classList.remove("active");
        } else {
            dashboardContent.style.display = "none";
            addCounselorContent.style.display = "block";
            dashboardLink.classList.remove("dashboard-active");
            dashboardButton.classList.remove("active");
            addCounselorButton.classList.add("active");
        }
    }

    // Initial state: Show dashboard content, hide add counselor content
    toggleSections(true);

    // Add event listener to the "Dashboard" link to toggle to dashboard content
    dashboardLink.addEventListener("click", function(event) {
        event.preventDefault();
        toggleSections(true);
    });

    // Add event listener to the "Add Counselor" link to toggle to add counselor content
    addCounselorButton.addEventListener("click", function(event) {
        event.preventDefault();
        toggleSections(false);
    });
});
