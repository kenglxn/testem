describe('Bug', function() {
    beforeEach(function() {
        this.addMatchers({
          notToBlowUpStack : function (expected) {
            this.message = function () {
              var div = document.createElement('div'); 
              return [
                div,
                "Expected not to blow up."
              ];
            };
            return false;
          }
        });
    });
    it('should handle custom messages', function() {
        expect(null).notToBlowUpStack();
    });
});

