function isAdmin() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('admin');
}

window.onload = function () {
    fetch('https://api.github.com/repos/j-ghimire/gorkhaarts/contents/photos')
        .then((response) => response.json())
        .then((data) => {
            const photoContainer = document.getElementById('photo-container');
            data.forEach((photo) => {
                const img = document.createElement('img');
                img.src = photo.download_url;
                img.alt = 'Uploaded photo';
                img.style.width = '300px'; // You can adjust the width
                img.style.margin = '10px'; // Add some margin between images
                photoContainer.appendChild(img);
            });
        })
        .catch((error) => console.error('Error fetching photos:', error));
};