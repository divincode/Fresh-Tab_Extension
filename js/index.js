function setImage(image) {
    document.body.setAttribute(
      'style',
      `background-image: url(${image.urls.full});`
    );
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the next image object
    chrome.storage.local.get('nextImage', data => {
      if (data.nextImage) {
      //    console.log(data);
        setImage(data.nextImage);
      }
    });
  });
  