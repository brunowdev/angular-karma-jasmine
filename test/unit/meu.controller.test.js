describe('calculator', function () {

    beforeEach(module('minhaApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('sum', function () {

        it('1 + 1 deve ser igual 2', function () {
            var $scope = {};
            var controller = $controller('MeuController', { $scope: $scope });
            controller.x = 1;
            controller.y = 2;
            controller.sum();
            expect(controller.z).toBe(3);
        });

        it('z deve iniciar com zero', function () {
            var $scope = {};
            var controller = $controller('MeuController', { $scope: $scope });
            expect(controller.z).toBe(0);
        });
    });

});