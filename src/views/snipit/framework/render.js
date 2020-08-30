
/**
 * Renders the specified component inside the DOM.
 *
 * @param {HTMLElement} root      The element in which to render the component.
 * @param {Component}   component The component to render.
 * @param {Object}      config    Additional configuration parameters.
 */
function render( root, component, config = { append: false } ) {
  const { append, slot } = config;

  // Create a document fragment and render the block's contents within.
  const template = document.createElement( "template" );
  template.innerHTML = component.render();
  const fragment = template.content;

  // Register the block. E.g. add event listeners etc.
  component.register( fragment );

  if ( slot ) {
    // "Slot" the rendered HTML into the appropriate slot.
    root = root.querySelector( slot );
    if ( !root ) {
      console.error( `Could not render component, cannot find a slot that fits the '${slot}' query.` );
      return;
    }
  }
  if ( append === false ) {
    // Clear the root element's content.
    root.innerHTML = "";
  }

  // Add the rendered block as a child node.
  root.appendChild( fragment );
}

export default render;