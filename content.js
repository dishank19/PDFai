let popupContainer = null;

function showPopup(selectedText, llmResponse) {
  if (!popupContainer) {
    popupContainer = document.createElement('div');
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '10px';
    popupContainer.style.right = '10px';
    popupContainer.style.zIndex = '9999';
    document.body.appendChild(popupContainer);
  }

  popupContainer.innerHTML = `
    <iframe src="${chrome.runtime.getURL('popup.html')}" style="width: 300px; height: 200px; border: none;"></iframe>
  `;

  const iframe = popupContainer.querySelector('iframe');
  iframe.onload = () => {
    iframe.contentWindow.postMessage({ selectedText, llmResponse }, '*');
  };
}

function hidePopup() {
  if (popupContainer) {
    popupContainer.remove();
    popupContainer = null;
  }
}

document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    chrome.runtime.sendMessage(
      { action: 'processSelectedText', selectedText: selectedText },
      (response) => {
        const llmResponse = response.response;
        showPopup(selectedText, llmResponse);
      }
    );
  } else {
    hidePopup();
  }
});