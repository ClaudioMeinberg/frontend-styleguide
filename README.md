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
	- Avoid as much as possible the `replace` config. It will bite you.
		https://github.com/angular/angular.js/issues/9837
	- Always return the directive configuration on top
	- Restrict to elements and attributes.
	- Use "controller as" syntax within a directive to be consistent with other components

```javascript
// DatePicker.factory.js

(function() {
	$module.factory('DatePicker', function() {
		function DatePicker($element, $attrs) {
			this.date = new Date();
		}

		DatePicker.prototype = {
			constructor: DatePicker,
			previousMonth: previousMonth
			nextMonth: nextMonth
		};

		function previousMonth() {

		}

		function nextMonth() {

		}

		return DatePicker;
	});
})();
```

```javascript
// datepicker.directive.js

(function() {
	function datePickerDirective(DatePicker) {
		return {
			scope: true,
			templateUrl: 'datepicker.html',
			restrict: 'EA',
			require: '?ngModel',
			link: linker
		};

		function linker($scope, $element, $attrs) {
			$scope.datepicker = new DatePicker($element, $attrs);
		}
	}

	$module.directive('datepicker', datePickerDirective);
})();
```

```html
<!-- datepicker.html -->

<div class="datepicker">
	<header>
		<button ng-click="datepicker.previousMonth()"></button>
		<div class="month"></div>
		<button ng-click="datepicker.nextMonth()"></button>
	</header>
</div>
```

# Resolving Promises for a Controller
	- Whenever possible, use route resolvers
	- Always give feedback about what you are doing: updating, updated, error.

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
	/index.html

	/app
		/app.module.js
		/app.config.js
		/app.run.js
		/app.routes.js

		/writer
			/WriterEditController.js
			/WriterEditController.spec.js
			/writer-edit.html
			/writer-edit.scss

	/writer
		/writer.module.js
		/writer.service.js
		/writer.service.spec.js
		/writer-something.filter.js

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
	- Commit messages follow AngularJS pattern (http://bit.ly/1EoiPja)

# Testing
	
Use [our other repo](https://github.com/contentools/angular-unit-testing) as a reference

# Commits

We follow a set of conventions based on [this document](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y)
from AngularJS project.

Each commit message must summarize where things changed, what was changed and what kind of change was made.

The __kinds__ of change can be: `feat, fix, chore, style, test, docs, refactor`

The definition of __what changed__ may be the component/class name, the module changed prefixed by `#` or
a `*` character if the changes apply to several components.

Examples of commit messages:

	feat(ProductEditController): add method to save the product changes

	fix(AuthService): login method now returns the authentication error on failure

	chore: update README file

	style(page-edit.html): change background of primary action buttons to green

	test(ProductService): add missing use case test for saveProduct() method

	docs(UserService): update documentation of getProfile() method

	refactor(OrderService): split placeOrder() method into smaller private methods

	fix(*): add missing translation markers on product related pages

	refactor(#order): replace table markup with grid component on product listing pages
