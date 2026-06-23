function openModel(modelName) {
    document.getElementById("modelTitle").textContent = modelName;
    document.getElementById("modelCabinet").classList.remove("hidden");
    document.getElementById("modelCabinet").scrollIntoView({ behavior: "smooth" });

    showTab("start");
}

function closeModel() {
    document.getElementById("modelCabinet").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");
}
