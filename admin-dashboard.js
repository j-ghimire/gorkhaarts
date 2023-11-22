function postPhoto() {
    console.log('Button clicked!'); // Add this line
    const photo = document.getElementById('photo').value;
    const description = document.getElementById('description').value;

    // Simulate posting photo (replace with server-side logic)
    if (photo && description) {
        // Successful post, redirect to post-photo.html
        window.location.href = 'post-photo.html';
    } else {
        alert('Please choose a photo and provide a description.');
    }
}