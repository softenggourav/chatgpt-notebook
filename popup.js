console.log("teting popus.js")
// Retrieve chatTitles array from local storage
chrome.storage.local.get('chatTitles', (data) => {
    const chatTitles = data.chatTitles || [];
    // Call function to populate chat titles in popup
    populateChatTitles(chatTitles);
  });
  
  // Function to populate the chat titles
  function populateChatTitles(chatTitles) {
    // Get the ul element where chat titles will be displayed
    const chatList = document.getElementById('chatList');
  
    // Clear existing content
    chatList.innerHTML = '';
  
    // Populate the chat titles
    chatTitles.forEach(title => {
      const listItem = document.createElement('li');
      listItem.textContent = title;
      chatList.appendChild(listItem);
    });
  }
  