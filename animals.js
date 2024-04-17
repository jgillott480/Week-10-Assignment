// This method retrieves the form element. While the addEventListener executes 
// when the submit button is pressed.
document.getElementById("animalForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the form from submitting

    // Gets values when text is inputed into the form.
    var name = document.getElementById("name").value;
    var animalClass = document.getElementById("class").value;

    // Create a new table row
    var newRow = `
        <tr>
            <td>${name}</td>
            <td>${animalClass}</td>
        </tr>
    `;

    // This line appends a created row and allowing it to add new rows.
    document.getElementById("animalTable").innerHTML += newRow;

    

    // Clear the form fields when complete to allow additional animals to be added.
    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
});