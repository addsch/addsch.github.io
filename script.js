let doc = document.getElementById("textWrite");
doc.innerHTML = ">&#8203;";
let i = 0;
let str = "Hi there!";

const typeTimer = setInterval(function () {
    i = i + 1;
    doc.innerHTML = "> " + str.slice(0, i) + "|";
    if (i === str.length) {
        clearInterval(typeTimer);
        doc.innerHTML = "> " + str;
        i = 0;
        setInterval(function () {
            if (i === 0) {
                doc.innerHTML = "> " + str + "|";
                i = 1;
            } else {
                doc.innerHTML = "> " + str;
                i = 0;
            };
        }, 500);
    };
}, 250);
