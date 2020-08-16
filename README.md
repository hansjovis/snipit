# Snipit

## Developing Snipit

### Prerequisites
Development relies on these tools being available on your computer:
 * [Node (v.10+)](https://nodejs.org/en/).
 * [Yarn](https://yarnpkg.com/) or [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for package management.
 * [Grunt](https://gruntjs.com/) as a build tool.

### Building Snipit
 1. Run `yarn` or `npm` in the root folder to install all required JavaScript packages.
 2. Run `grunt` to build the extension.

### Installing the development version
**Note**: Snipit only supports Chrome at this time, Firefox will soon follow. 
 1. Open Chrome.
 2. Navigate to the `chrome://extensions/` internal page.
 3. Enable _Development mode_ by toggling the switch in the upper-right corner of the page.
 4. Click on the button labeled _Load unpacked_ in the upper-left corner.
 5. Select the cloned repository (e.g. `path/to/snipit/`) and click _open_ or _select_.
