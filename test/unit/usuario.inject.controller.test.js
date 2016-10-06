describe('Testando Controller do Usuário', function () {

    beforeEach(module('minhaApp'));

    var $controller, $scope, $controller2, $scope2;

    beforeEach(inject(function (_$controller_, $rootScope) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));

    describe('Testando mecanismo de login', function () {

        it('data de login deve estar undefined antes do login', function () {
            var $scope = {};
            var controller = $controller('UsuarioController', { $scope: $scope });
            expect(controller.dataLogin).toBeUndefined();
        });

        it('data de login deve ficar definida após efetuar login', function () {
            var $scope = {};
            var controller = $controller('UsuarioController', { $scope: $scope });
            controller.login();
            expect(controller.dataLogin).toBeDefined();
        });
    });

});