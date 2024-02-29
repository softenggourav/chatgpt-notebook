chrome.storage.local.get(['chatTitles'], (result) => {
  const chatTitles = result.chatTitles;
  populateChatTitles(chatTitles);
});

// Function to populate the chat titles
function populateChatTitles(chatTitles) {
  // Get the ul element
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
