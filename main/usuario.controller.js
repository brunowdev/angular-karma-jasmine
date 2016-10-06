(function () {
    'use strick';

    angular
        .module('minhaApp')
        .controller('UsuarioController', UsuarioController);

    function UsuarioController() {

        var vm = this;
        vm.dataLogin = undefined;
        vm.login = login;

        function login() {
            vm.dataLogin = new Date();
        }

    }
})();