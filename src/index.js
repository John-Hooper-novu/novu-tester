'use strict';
// var req = require.context('./', true);
// req.keys().forEach(req);

// import input from './components/input/index.js'
// import button from './components/buttons/index.js'
// var components = {...input, ...button}
let components ={};
function importComp(component){
	// import('./components/'+component+'/index.js').then(comp => Object.assign(components, comp))
	Object.assign(components, require('./components/'+component+'/index.js').default)
}
importComp('buttons');
importComp('input');

// function importAll (r, hash) {
//   r.keys().forEach(key => hash[key] = r(key));
// }
// importAll(require.context('./components/', true, /\index.js/), components)

// var tester = require('./tester.css'); 
import tester from './tester.scss';
// console.log('in bundle:', tester)
/* if you wanted to export multiple modules... */
const log = () => console.log('logging from bundle');
export {
	tester,
	components,
	log,
}

export default components;

// module.exports = fancyButton;