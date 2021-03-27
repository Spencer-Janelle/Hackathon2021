// Mouse listener for any move event on the current document.

document.addEventListener('mousemove', function (e) {
    var srcElement = e.srcElement;
    console.log(srcElement);


    if (srcElement.href != "") {

        test = srcElement.href.toLowerCase();
        //This is where we would open the popup
        if ((test.includes("5g") && (test.includes("coronavirus")))) {
            srcElement.title = "THIS HAS BEEN FLAGGED AS POTENTIAL MISINFORMATION!";
        } else {
            srcElement.title = "NO MISINFORMATION DETECTED!";
        }
    }
});