document.getElementById('toggleHighlight').addEventListener('change', (event) => {
  const isChecked = event.target.checked;
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {toggleHighlight: isChecked});
  });
});
