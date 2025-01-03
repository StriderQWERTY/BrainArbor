function navigate() {
    const boards = document.getElementById("boards"); // Get the dropdown element
    const selectedValue = boards.value; // Get the value of the selected option
    window.location.href = selectedValue; // Navigate to the selected category's page
}
