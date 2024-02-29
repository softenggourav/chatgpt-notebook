console.log("inside background worker")

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
