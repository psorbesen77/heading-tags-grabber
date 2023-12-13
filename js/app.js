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
            const parser = new DOMParser();
            // Parse the HTML content into a DOM document 
            const doc = parser.parseFromString(html, "text/html");
            
            

        })

}