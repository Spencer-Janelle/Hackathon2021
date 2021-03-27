// Initialize butotn with users's prefered color
let changeColor = document.getElementById("enable");
links = document.getElementsByTagName('a');

for (i = 0;  i < links.length; i++) { //for every link, create a mouseover event
    links[i].onmouseover = function () {
        //saves default style to oldStyle attribute
        if (this.hasAttribute("oldStyle") == false){ //checks whether oldstyle attribute exists
            var old = this.getAttribute("style");
            this.setAttribute("oldStyle", old);
        }
        //console.log(this.href);
        if (this.href != ""){

          test = this.href.toLowerCase();
          //This is where we would open the popup
          if((test.includes("5g") && (test.includes("coronavirus")))) {
          this.title = "THIS HAS BEEN FLAGGED AS POTENTIAL MISINFORMATION!";
        } else {
        this.title = "NO MISINFORMATION DETECTED!";
        }


        }
    }
}
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});



// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: enableRatingHover,
  });
});

function enableRatingHover() {
  links = document.getElementsByTagName('a');

  for (i = 0;  i < links.length; i++) { //for every link, create a mouseover event
      links[i].onmouseover = function () {
          //saves default style to oldStyle attribute
          if (this.hasAttribute("oldStyle") == false){ //checks whether oldstyle attribute exists
              var old = this.getAttribute("style");
              this.setAttribute("oldStyle", old);
          }
          //console.log(this.href);
          if (this.href != ""){

            test = this.href.toLowerCase();
            //This is where we would open the popup
            if((test.includes("5g") && (test.includes("coronavirus")))) {
            this.title = "THIS HAS BEEN FLAGGED AS POTENTIAL MISINFORMATION!";
          } else {
          this.title = "NO MISINFORMATION DETECTED!";
          }


          }
      }
  }
}

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
