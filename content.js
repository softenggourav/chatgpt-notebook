// document.addEventListener('load', () => {

function sendLinks(){
console.log("sending links from content script");

// Select all anchor elements on the page
const anchorElements = document.querySelectorAll('a');

const chatLinkData = [];
anchorElements.forEach(anchor => {
  const title = anchor.textContent.trim(); // Extract title and trim any whitespace
  const href = anchor.getAttribute('href');

  //console.log("href inside content.js is", href)

  // If title is not empty, add to the array
  if (title && href && href.startsWith('/c/')) {
    chatLinkData.push({title: title, href: "https://chat.openai.com" + href });
  }
});

// sending to background.js
chrome.runtime.sendMessage({ chatLinkData }, (response) => {
    console.log('chatLinkData sent to background script');
});
}


// triggering after 5 seconds, waitnig for page to load (use page load event instead)
setTimeout(sendLinks, 10000);


// });
