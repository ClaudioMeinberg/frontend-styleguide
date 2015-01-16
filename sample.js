/**
 * @module foo-module
 * @requires bar, baz, some-other-stuff
 */

/**
 * @filter double
 */
function doubleFilter() {
	return function(number) {
		return number * 2;
	};
}

/**
 * @directive imageCropper
 */
function imageCropperDirective() {
	return {
		restrict: 'E',
		templateUrl: 'image-cropper.html',
		scope: true,
		link: linker
	};

	function linker($scope, $element, $attrs) {
		$scope.fooBar = $scope.$eval($attrs.src);
	}
}

/**
 * @service DomainService
 */
function DomainService() {
	function methodOne() {

	}

	return {
		methodOne: methodOne
	};
}

/**
 * @controller DomainEditController
 */
function DomainEditController($log, DomainService) {
	var vm = this;

	vm.save = save;

	function save() {
		var model = vm.model;
		DomainService.update(model).then(function() {
			$log.info('MESSAGE_ITEM_UPDATED');
		});
	}
}

$module.factory('DomainService', DomainService);
$module.directive('imageCropper', imageCropperDirective);
$module.filter('doubleFilter', doubleFilter);
$module.controller('DomainEditController', DomainEditController);
