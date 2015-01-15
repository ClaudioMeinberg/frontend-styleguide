# Single Responsibility
	- One component per file
	- One responsibility per component (SOLID)

# IIFE
	Not necessary. A gulp task will do

# Modules
	One module per application domain, one top module to join all the other modules

# Controllers
	- Naming: `Domain/ActionController`. Always PascalCase
	- Use controllerAs syntax
	- Bindables on top
	- Use functions to group implementation details

```
$module.controller('Domain/ListController', Domain_ListController);

function Domain_ListController(DomainService) {
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
	- Naming: `DomainService`
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
	- Always use prefixes
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

# Application Structure LIFT Principle

# Application Structure

# Modularity

# Startup Logic

# Angular $ Wrapper Services

# Testing

# Animations

# Comments

# Constants
