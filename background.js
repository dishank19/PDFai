chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'processSelectedText') {
      const selectedText = request.selectedText;
      // TODO: Integrate with the LLM API to process the selected text
      // and generate questions or answers.
      const llmResponse = 'This is a placeholder for the LLM response.';
      sendResponse({ response: llmResponse });
    }
  });