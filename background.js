console.log("inside background worker")

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Check if the message contains chatTitles data
    if (message.chatLinkData) {
      console.log('Received chatLinkData data in background script:', message.chatLinkData);
      // Store the chatLinkData data in local storage
      chrome.storage.local.set({ chatLinkData: message.chatLinkData }, () => {
        console.log('chatLinkData data stored in local storage');
      });
    }
});
