let color = '#3aa757';
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
