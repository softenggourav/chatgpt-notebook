chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('Received message:', JSON.stringify(message));
    console.log('Sender:', JSON.stringify(sender));
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        console.log('Executing content script in tab:', activeTab.id);
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ['content.js']
        });
      } else {
        console.error('Unable to execute content script: No active tab found.');
      }
    });
  });

console.log("testing background.js")
  
// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Check if the message contains chatTitles data
    if (message.chatTitles) {
      console.log('Received chatTitles data in background script:', message.chatTitles);
      // Store the chatTitles data in local storage
      chrome.storage.local.set({ chatTitles: message.chatTitles }, () => {
        console.log('chatTitles data stored in local storage');
      });
    }
  });
  