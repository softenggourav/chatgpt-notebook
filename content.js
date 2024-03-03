
function scrollSmoothly() {
  const section = document.querySelector('div.flex-col.flex-1.transition-opacity.duration-500.-mr-2.pr-2.overflow-y-auto');
  
  const scrollHeight = section.scrollHeight;

  section.scroll({
    top: scrollHeight,
    behavior: 'smooth'
  });
}

(async () => {
  for (let i = 0; i < 15; i++) {
    console.log("digging your history");
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000)); 
    scrollSmoothly();
  }
})();


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


// triggering after 15 seconds, waitnig for page to load (use page load event instead)
setTimeout(sendLinks, 15000);


