document.getElementById("countWords").addEventListener('click', ()=>print(" "));
document.getElementById("countChars").addEventListener('click', ()=>print(""));

async function print(separator) {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getText,
    }, res=>{
        let selectedText=res[0].result;
        let num = selectedText.split(separator).length;
        document.getElementById("showText").innerHTML="Counter: "+num;
    });
}
function getText(){
    return window.getSelection().toString();
}