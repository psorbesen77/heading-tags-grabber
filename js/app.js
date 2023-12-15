// Create function when button is clicked 
function grabHeader () {

    // Get input element for the id
    const urlInput = document.getElementById("urlInput");
    // Check if url present in the console
    console.log(urlInput);

    // Trimmed value of URL input
    const url = urlInput.ariaValueMax.trim();

    // Check if URL is empty
    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }


    // Fetch the content of the URL using Fetch API
    fetch(url)
        
        //Extract text content from the response 
        .then(response => response.text())
        // Process the HTML content 
        .then(html => {

        
            console.log("HTML content:", html);
            const parser = new DOMParser();
            // Parse the HTML content into a DOM document 
            const doc = parser.parseFromString(html, "text/html");

            // Select all heading tags from the parsed document
            const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

            const resultDiv = document.getElementById("result");

            // Check if not heading are found
            if (headings.length === 0) {
                resultDiv.innerHTML = "<p>No heading found on the page. </p>";
            } else {

                // If heading are found, create a list and display them in the result div
                let resultHTML = "<p>Headers Found: </p><ul>";
                headings.forEach(heading => {
                    resultHTML += `<li>${heading.innerHTML}</li>`;
                });

                resultHTML += "</ul>";
                resultDiv.innerHTML = resultHTML;

            }     
            
        })
        // Handle errors during the fetch operation
        .catch(error => {
            console.error("Error fetching the URL:", error);
            alert("An error occurred while fetching the URL. Please try again.");
        });
}