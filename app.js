function isAdmin() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('admin');
}

const photosPerPage = 10; // Adjust the number of photos per page

function loadPhotos(page) {
    const startIndex = (page - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;

    fetch('https://api.github.com/repos/j-ghimire/gorkhaarts/contents/photos')
        .then((response) => response.json())
        .then((data) => {
            const photoContainer = document.getElementById('photo-container');
            photoContainer.innerHTML = ''; // Clear existing photos

            // Add photos to the container for the selected page
            for (let i = startIndex; i < endIndex && i < data.length; i++) {
                const photo = data[i];
                const img = document.createElement('img');
                img.src = photo.download_url;
                img.alt = 'Uploaded photo';
                photoContainer.appendChild(img);
            }
        })
        .catch((error) => console.error('Error fetching photos:', error));
}

// Initial load (you can adjust the default page)
loadPhotos(1);

// Function to load a specific page
function loadPage(page) {
    loadPhotos(page);
}
