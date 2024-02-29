
function sendLinks(){
console.log("sending links from content script");

const anchorElements = document.querySelectorAll('a');

const chatLinkData = [];
anchorElements.forEach(anchor => {
  const title = anchor.textContent.trim();
  const href = anchor.getAttribute('href');

  //console.log("href inside content.js is", href)

  if (title && href && href.startsWith('/c/')) {
    chatLinkData.push({title: title, href: "https://chat.openai.com" + href });
  }
});

chrome.runtime.sendMessage({ chatLinkData }, (response) => {
    console.log('chatLinkData sent to background script');
});
}


// triggering after 10 seconds, waitnig for page to load (use page load event instead)
setTimeout(sendLinks, 10000);


