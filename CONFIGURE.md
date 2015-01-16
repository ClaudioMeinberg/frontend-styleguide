# Instalation

	On any project, open the root folder and paste these two config files:

	- https://github.com/contentools/frontend-styleguide/blob/master/.jshintrc
	- https://github.com/contentools/frontend-styleguide/blob/master/.jsbeautifyrc

	On Sublime Text 3, install the `HTML-CSS-JS Prettify` plugin. Then do these steps:

	- Open the folder where packages are installed
	- Go to `HTML-CSS-JS Prettify/scripts/node_modules`
	- Remove the `js-beautify` folder
	- Clone this repository in replacement: `https://github.com/beautify-web/js-beautify.git`
	- Open the plugin options and change these settings:

	```
		"format_on_save": true
		"format_selection_only": false

	```

	There's a little discrepancy between the GH version and NPM version of this package that will mess up the SCSS files