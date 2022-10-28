
const editor = document.getElementById("editor");

/**
 * @param {ClipboardEvent} event
 */
editor.onpaste = (event) => {
    const text = event.clipboardData.getData("text");
    console.log("onpaste:", text);

    editor.value = text
        .replace(/\r?\n/g, " ")
        .replace(/\.\s+/g, ".\n");

    editor.style.height = `${editor.scrollHeight}px`;

    event.preventDefault();
};