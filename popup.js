
// Initialize butotn with users's prefered color
let buttons = document.getElementById("showOrHide");


// When the button is clicked, inject setPageBackgroundColor into current page
buttons.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setVisibility,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setVisibility() {
  buttons.style.display = "none";

}
