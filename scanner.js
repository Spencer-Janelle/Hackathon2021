// Test bubble
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
//var thumbs = fetch('./data.json').then((response) => response.json());
document.body.appendChild(bubbleDOM);
keywords = ["coronavirus", "5g", "9/11", "bush", "rigged", "election", "covid"];
var percentUp = 0.0;
var percentDown = 0.0;
var percentMiddle = 0.0;
var total = 0;
// Mouse listener for any move event on the current document.

document.addEventListener('mousemove', function (e) {
    var srcElement = e.srcElement;
    console.log(srcElement);


    if (srcElement.hasAttribute("href") && srcElement.href != "") {
        counter = 0
        test = srcElement.href.toLowerCase();

        // for (i = 0; i < thumbs.length; i++) {
          // if (thumbs[i].site == srcElement.href) {
            // total = thumbs[i].thumbs_up + thumbs[i].thumbs_down + thumbs[i].thumbs_middle;
            // percentUp = thumbs[i].thumbs_up/total;
            // percentDown = thumbs[i].thumbs_down/total;
            // percentMiddle = thumbs[i].thumbs_middle/total;
            // break;
          // }
        // }
        //This is where we would open the popup
        for (i = 0; i < keywords.length; ++i) {
            if (test.includes(keywords[i])) {
                counter += 1
            }
        }
		if (counter > 1 && !test.includes("snopes")) {
			// "THIS HAS BEEN FLAGGED AS POTENTIAL MISINFORMATION!"
			renderBubble(e.clientX + 5, e.clientY, '<object type="text/html" data="hover.html" width="215px", height="120px"></object>')
		}
		// else {
			// renderBubble(e.clientX + 5, e.clientY, "NO MISINFORMATION DETECTED")
		// }
    }
    function renderBubble(mouseX, mouseY, srcElement) {
        bubbleDOM.innerHTML = srcElement;
        bubbleDOM.style.top = mouseY + 'px';
        bubbleDOM.style.left = mouseX + 'px';
        bubbleDOM.style.visibility = 'visible';

    }
});
