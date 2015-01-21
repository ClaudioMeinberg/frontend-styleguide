# References

	- http://addyosmani.com/blog/javascript-style-guides-and-beautifiers/
	- https://github.com/rwaldron/idiomatic.js
	- https://github.com/johnpapa/angularjs-styleguide
	- https://github.com/toddmotto/angularjs-styleguide

# Single Responsibility

	- One component per file
	- One responsibility per component (SOLID)

# IIFE - code wrapping

	- Is mandatory

# Controllers

	- Use controllerAs syntax
	- Bindables on top
	- Use functions to group implementation details

```
$module.controller('DomainListController', DomainListController);

function DomainListController(DomainService) {
	var model = this;
	model.update = fetchTheList;
	model.create = createTheItem;

	function fetchTheList() {
		DomainService.findAll().then(function(list) {
			model.list = list;
			// ...
		});
	}

	function createTheItem() {
		DomainService.create(model.newItem).then(function() {
			model.newItem = {};
			// ...
		});
	}
}

```

# Services/Factories

	- Module Reveal Pattern
	- If possible, always return a `Promise`

```
$module.service('DomainService', DomainService);

function DomainService($http, ...) {
	function findOne(id) {
		return $http.get('/domain/' + id);
	}

	function findAll() {
		return $http.get('/domain');
	}

	return {
		findOne: findOne,
		findAll: findAll
	};
}

```

# Directives

	- One directive per file
	- Separate model and business logic from directive's linking
	- Avoid scope isolation. Use child scopes if necessary
	- Always return the directive configuration on top
	- Restrict to elements and attributes.
	- Use controller as syntax with a directive to be consistent with using controller as with view and controller pairings

```
$module.directive('ctDirective', ctDirective);
$module.controller('CtDirectiveController', ctDirectiveController);

function ctDirective() {
	return {
		restrict: 'EA',
		scope: true,
		controller: 'CtDirectiveController',
		controllerAs: 'ctDirective',
		link: linker
	};

	function linker($scope, $element, $attrs) {
		$scope.
	}
}

function ctDirectiveController(DomainService, Domain) {
	var vm = this;

	vm.create = createItem;
	initialize();

	function initialize() {
		resetNewItem();
		setDefaultValues();
	}

	function resetNewItem() {
		vm.newItem = new Domain();
	}

	function createItem() {
		DomainService.create(vm.newItem).then(resetNewItem);
	}

	function setDefaultValues() {

	}
}

```

# Resolving Promises for a Controller
	- Whenever possible, use route resolvers
	- Always give feedback about what you are doing. Loading, updating. updated, error happened.

# Manual Annotating for Dependency Injection
	- Should be avoided. Annotations should be automated in the build process

# Minification and Annotation
	- Will be handled by the build process

# Naming
	- Service/Factory: `DomainService`. Always PascalCase (domain.service.js)
	- Controller: `DomainActionController`. Always PascalCase (domain-action.controller.js)
	- Directive: `ctName`. Always use prefixes, and avoid too broad terms (ct-name.directive.js)
	- Tests: (*.spec.js)
	- Views: (domain-action.html)
	- Styles: (domain-action.scss)

# Application Structure

```
	/app
		/app.module.js
		/app.config.js
		/app.run.js
		/app.routes.js

	/foo
		/foo.service.js
		/foo.service.spec.js
		/foo-something.filter.js

	/bar
		/bar.service.js
		/bar.service.spec.js
		/bar-something.filter.js
```

# Application Structure LIFT Principle

	"L" ocating our code is easy
	"I" dentify code at a glance
	"F" lat structure as long as we can
	"T" ry to stay DRY (Don’t Repeat Yourself) or T-DRY

# Modularity

	- One module per domain with business logic, base components and any reusable logic
	- One top-level module to group all the other modules, plus controllers and views.

# Code maintainance

	- Always work on feature branches
	- Always branch off the dev
	- Always use `--no-ff` to merge branches
	- Commit messages [follow this pattern](http://bit.ly/1EoiPja)