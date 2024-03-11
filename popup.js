window.addEventListener('message', (event) => {
    if (event.data.selectedText && event.data.llmResponse) {
      const selectedTextElement = document.getElementById('selectedText');
      const llmResponseElement = document.getElementById('llmResponse');
      
      selectedTextElement.textContent = event.data.selectedText;
      llmResponseElement.textContent = event.data.llmResponse;
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const questionInputElement = document.getElementById('questionInput');
    const askButtonElement = document.getElementById('askButton');
  
    askButtonElement.addEventListener('click', () => {
      const question = questionInputElement.value.trim();
      if (question) {
        // TODO: Send the question to the background script for processing
        // and update the LLM response element with the response.
      }
    });
  });