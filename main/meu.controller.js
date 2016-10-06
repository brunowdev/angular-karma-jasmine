(function () {
    'use strick';

    angular
        .module('minhaApp')
        .controller('MeuController', MeuController);

    MeuController.$inject = ['$scope'];

    function MeuController($scope) {

        var vm = this;
        vm.z = 0;
        vm.x = $scope.x;
        vm.y = $scope.y;
        vm.sum = sum;

        function sum() {
            vm.z = vm.x + vm.y;
        }

    }
})();