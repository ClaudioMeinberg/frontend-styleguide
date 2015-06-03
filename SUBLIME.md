# Sublime Text 3

These tips and tricks will make the coding life a lot easier!

## Plugins

	- SublimeLinter
	- SublimeLinter-jshint
	- AutoPEP8
	- SASS
	- SASS Snippets
	- AngularJS Snippets
	- Javascript & NodeJS Snippets
	- Dracula Color Theme
	- DocBlockr
	- Emmet
	- GitGutter
	- HTML-CSS-JS Prettify

## Snippets

Add the `Snippets` folder of this repo to your `User` folder under ST3 installation.
You can find it by opening ST3, going to menu `Preferences > Browse packages`

## Configuration

Some little improvements you may like:

### Key bindings

	- f8 toggles the console
	- f9 toggles the sidebar
	- Ctrl+Shift+X removes the current line
	- Ctrl+Shift+J shows the erros found by SublimeLinter

```json
	[
		{ "keys": ["f8"], "command": "show_panel", "args": {"panel": "console", "toggle": true} },
		{ "keys": ["f9"], "command": "toggle_side_bar" },
		{ "keys": ["ctrl+shift+x"], "command": "run_macro_file", "args": {"file": "res://Packages/Default/Delete Line.sublime-macro"} },
		{ "keys": ["ctrl+shift+j"], "command": "sublimelinter_show_all_errors" }
	]
```

### User settings

	- Always show whitespaces
	- Never copy with an empty selection
	- Highlight tabs with unsaved changes

```json
{
	"copy_with_empty_selection": false,
	"draw_white_space": "all",
	"font_size": 9,
	"highlight_modified_tabs": true,
	"trim_trailing_white_space_on_save": true,
	"rulers": [ 72, 80, 120 ]
}
```

