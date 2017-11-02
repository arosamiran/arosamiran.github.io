
// Include data for accessing Google APIs
const apiKey = 'AIzaSyCykk3Hu2-fNmR_bktsgnpJKG2JnCWGvaI';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions
async function expandUrl(){
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  let response = await fetch(urlToExpand);
  if (response.ok) {
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  }
  throw new Error('Request failed!');

}

async function shortenUrl() {
  const urlToShorten = $inputField.val();
  const urlWithKey = url + '?key=' + apiKey;  
  try {
    let response = await fetch(urlWithKey, {
      method: 'POST',
      body: JSON.stringify({
        longUrl: urlToShorten
      }),
      headers: { "Content-type": "application/json" }
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      console.log(jsonResponse);
    }

    throw new Error('Request failed!');

  } catch (error) {
    console.log(error);
  }

};

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

$expandButton.click(expand);
$shortenButton.click(shorten);

