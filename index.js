// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function addElementToDOM(elementId, content) {
  const el = document.getElementById(elementId)
  if (el) el.textContent = content
}

function removeElementFromDOM(elementId) {
  const el = document.getElementById(elementId)
  if (el) el.remove()
}

function simulateClick(elementId, content) {
  addElementToDOM(elementId, content)
}

function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId)
  const input = document.getElementById('user-input')
  const error = document.getElementById('error-message')
  const target = document.getElementById(targetId)

  if (input.value.trim() === '') {
    error.textContent = 'Input cannot be empty'
    error.classList.remove('hidden')
  } else {
    target.textContent = input.value
  }
}
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}
