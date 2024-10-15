// Add event listeners to all images within the #image-container
document.querySelectorAll('#image-container img').forEach(image => {
    image.addEventListener('click', function() {
        const site = this.getAttribute('data-site');
        if (site) {
            loadContent(site);
        }
    });
});

function loadContent(site) {
    const windowDiv = document.getElementById("window");
    
    // Map the data-site attribute values to the corresponding HTML files
    const siteFiles = {
        'sys_call': 'call.html',
        
    };

    const file = siteFiles[site];

    // Fetch and load the content from the external file
    fetch(file)
        .then(response => response.text())
        .then(data => {
            windowDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the file:', error);
        });
}
