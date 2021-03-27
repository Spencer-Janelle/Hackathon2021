let color = '#3aa757';
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
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
