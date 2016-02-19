$(document).on("pageinit", "#explore-page", function() {
    console.log("Explore page initialized");
    $(document).on('click', '#addCat', function() {
        createGoal("QuitSmoking");
        console.log("Goal Added From Explorer initialized");
    });
});