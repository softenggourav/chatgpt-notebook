// document.addEventListener('load', () => {

function sendLinks(){
console.log("sending links from content script");

// Select all anchor elements on the page
const anchorElements = document.querySelectorAll('a');

// Filter anchor elements whose href attribute starts with "/c/"
const chatAnchorElements = Array.from(anchorElements).filter(anchor => {
    const href = anchor.getAttribute('href');
    return href && href.startsWith('/c/');
});

// Extract text content of chat anchor elements to obtain chat titles
const chatTitles = chatAnchorElements.map(anchor => anchor.textContent);

// sending to background.js
chrome.runtime.sendMessage({ chatTitles }, (response) => {
    console.log('Message sent to background script');
});
}


// triggering after 5 seconds, waitnig for page to load (use page load event instead)
setTimeout(sendLinks, 5000);


// });
