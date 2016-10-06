Projeto de exemplo para testes unitários e E2E com AngularJS.

Para rodar este projeto:

npm install -g karma-cli
npm install -g protractor

webdriver-manager update

webdriver-manager start // Roda o Selenium HUB


Rodar os testes unitários:

karma start

Rodar os testes de integração (Também chamados de Smoke Teste ou Testes Funcionais):

// Configuração de exemplo do protractor
protractor conf.js