/**
 * Queries an HTML element based on the given selector.
 * @param {string} selector - The selector for the HTML element.
 * @returns {T } The queried HTML element or null if not found.
 */
function querySelector<T extends HTMLElement>(selector: string): T {
  return document.querySelector(selector) as T;
}

/**
 * Queries all HTML elements based on the given selector.
 * @param {string} selector - The selector for the HTML elements.
 * @returns {NodeListOf<T>} A list of queried HTML elements.
 */
function querySelectorAll<T extends HTMLElement>(selector: string): NodeListOf<T> {
  return document.querySelectorAll(selector);
}

/**
 * Retrieves an HTML element by its id.
 * @param {string} id - The id of the HTML element.
 * @returns {T } The HTML element with the specified id or null if not found.
 */
function getElementById<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

/**
 * Create an HTML element with the specified tag name and attributes.
 *
 * @param {string} tagName - The HTML tag name of the element to create.
 * @param {Record<string, string>} attributes - An object containing key-value pairs representing attributes to add to the element.
 * @returns {HTMLElement} - The created HTML element.
 */
function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes?: Record<string, string>,
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);

  if (attributes) {
    Object.keys(attributes).forEach((attr) => {
      element.setAttribute(attr, attributes[attr]);
    });
  }

  return element;
}

export { querySelector, querySelectorAll, getElementById, createElement };
