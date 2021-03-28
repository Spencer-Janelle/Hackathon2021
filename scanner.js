// Test bubble
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);
keywords = ["coronavirus", "5g", "9/11", "bush", "rigged", "election"]

// Mouse listener for any move event on the current document.

document.addEventListener('mousemove', function (e) {
    var srcElement = e.srcElement;
    console.log(srcElement);


    if (srcElement.hasAttribute("href") && srcElement.href != "") {
        counter = 0
        test = srcElement.href.toLowerCase();
        //This is where we would open the popup
        for (i = 0; i < keywords.length; ++i) {
            if (test.includes(keywords[i])) {
                counter += 1
            }
        }
            if (counter > 1) {
                renderBubble(e.clientX, e.clientY, "THIS HAS BEEN FLAGGED AS POTENTIAL MISINFORMATION!")
            } else {
                renderBubble(e.clientX, e.clientY, "NO MISINFORMATION DETECTED")
            }
    }
    function renderBubble(mouseX, mouseY, srcElement) {
        bubbleDOM.innerHTML = srcElement;
        bubbleDOM.style.top = mouseY + 'px';
        bubbleDOM.style.left = mouseX + 'px';
        bubbleDOM.style.visibility = 'visible';
    }
});
