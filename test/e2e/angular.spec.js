describe('Página inicial do Angular', function () {

  it('Deve dar olá com o nome do usuário', function () {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Júlia');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Júlia!');
  });

  describe('Lista de TODO\'S', function () {
    var todoList;

    beforeEach(function () {
      browser.get('http://www.angularjs.org');
      todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('deveria listar TODO\'', function () {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

  });
});
