//-----hide and display description information product-----//
document.addEventListener("DOMContentLoaded", function () {
    const descriptionBtn = document.querySelector('.description-btn');
    const descriptionContainer = document.querySelector('.container-description');
    const downIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>';
    const upIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>';

    descriptionBtn.innerHTML = `Description ${upIcon}`; // hiển thị icon up ban đầu

    descriptionBtn.addEventListener('click', function () {
        if (descriptionContainer.style.display === "block") {
            descriptionContainer.style.display = "none";
            descriptionBtn.innerHTML = `Description ${downIcon}`;
        } else {
            descriptionContainer.style.display = "block";
            descriptionBtn.innerHTML = `Description ${upIcon}`;
        }
    });
});
