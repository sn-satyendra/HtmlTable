import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo); 

configure(require.context('../src/components', true, /\.stories\.js$/));


// function loadStories() {
// 	req.keys().forEach((filename) => req(filename));
// }

// configure(loadStories, module);
