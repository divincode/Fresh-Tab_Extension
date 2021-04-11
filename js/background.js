// Replace <your unsplash access key> with the Access Key retrieved
// in the previous step.
const UNSPLASH_ACCESS_KEY = '4rEceT6BfT6CTZat-s6eupRiGv4zHbMA_eLBwai1P0s';

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}

async function getRandomPhoto() {
  const endpoint = 'https://api.unsplash.com/photos/random?orientation=landscape';

  // Creates a new Headers object.
  const headers = new Headers();
  // Set the HTTP Authorization header
  headers.append('Authorization', `Client-ID ${UNSPLASH_ACCESS_KEY}`);

  let response = await fetch(endpoint, { headers });
  const json = await validateResponse(response).json();

  return json;
}

async function nextImage() {
  try {
    const image = await getRandomPhoto();
    console.log(image);
  } catch (err) {
    console.log(err);
  }
}

// Execute the `nextImage` function when the extension is installed
chrome.runtime.onInstalled.addListener(nextImage);
