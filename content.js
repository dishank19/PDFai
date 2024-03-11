document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      chrome.runtime.sendMessage(
        { action: 'processSelectedText', selectedText: selectedText },
        (response) => {
          console.log('LLM Response:', response.response);
          // TODO: Display the LLM response in the extension popup or on the page.
        }
      );
    }
  });