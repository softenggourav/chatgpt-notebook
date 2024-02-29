chrome.storage.local.get(['chatLinkData'], (result) => {
  const chatLinkData = result.chatLinkData;
  populatechatLinkData(chatLinkData);

  // Add event listener for search bar
  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase(); // Convert search term to lowercase for case-insensitive matching
    const filteredTitles = chatLinkData.filter(each => each.title.toLowerCase().includes(searchTerm));
    populatechatLinkData(filteredTitles);
  });
});


function populatechatLinkData(chatLinkData) {
  
  // Get the ul element
  const chatList = document.getElementById('chatList');

  // Clear existing content
  chatList.innerHTML = '';

  // Populate the chat titles
  chatLinkData.forEach(each => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.textContent = each.title;
    link.href = each.href;
    link.target = "_blank";
    

    listItem.appendChild(link);
    chatList.appendChild(listItem);
  });
}

