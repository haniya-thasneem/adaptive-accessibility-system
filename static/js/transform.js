let originalText = "";

function splitText() {

    const contentDiv = document.getElementById("content");

    if (originalText === "") {
        originalText = contentDiv.innerHTML;
    }

    let text = contentDiv.innerText;

    let sentences = text.split(/(?<=[.!?])\s+/);

    contentDiv.innerHTML = "";

    sentences.forEach(sentence => {
        if (sentence.trim() !== "") {

            let p = document.createElement("p");
            p.textContent = sentence.trim();
            p.style.marginBottom = "12px";

            contentDiv.appendChild(p);
        }
    });
}

function restoreText() {

    const contentDiv = document.getElementById("content");

    if (originalText !== "") {
        contentDiv.innerHTML = originalText;
    }
}