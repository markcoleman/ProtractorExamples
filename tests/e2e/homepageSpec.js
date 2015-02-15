describe('go go protractor homepage', function() {
    beforeEach(function(){
        browser.get('http://localhost:8080');
    });
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Go Go Protractor');
    });
    it('should have a jumbotron header', function(){
        expect(element(by.css('.jumbotron h1')).getText()).toBe("Go Go Protractor");
    });
});