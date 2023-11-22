
function postPhoto() {
    console.log('Button clicked!');
    const photoInput = document.getElementById('photo');
    const descriptionInput = document.getElementById('description');
  
    const photo = photoInput.files[0];
    const description = descriptionInput.value;
  
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('description', description);
  
    fetch('https://api.github.com/repos/j-ghimire/gorkhaarts/contents/photos/' + photo.name, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer YOUR_PERSONAL_ACCESS_TOKEN',
      },
      body: JSON.stringify({
        message: 'Upload photo',
        content: formData.get('photo'),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Photo uploaded successfully:', data);
        // Redirect or update UI as needed
      })
      .catch((error) => {
        console.error('Error uploading photo:', error);
        alert('Error uploading photo. Please try again.');
      });
  }
  
