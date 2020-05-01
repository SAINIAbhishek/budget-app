/**
 * Budget Controller
 */
var budgetController = (() => {

    var Expense = (id, description, value) => {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = (id, description, value) => {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

})();


/**
 * UI Controller
 */
var UIController = (() => {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {

        getInput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        getDOMstrings: () => {
            return DOMstrings;
        }
    };

})();


/**
 * Global App Controller
 */
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = () => {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', (event) => {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = () => {

        // 1. get the filled input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add the item to the budget controller

        // 3. add the item to the UI

        // 4. calculate the budget

        // 5. display the budget on the UI

    }

    return {
        init: () => {
            console.log('Application has started!')
            setupEventListeners();
        }
    }

})(budgetController, UIController);

/**
 * call init
 */
controller.init();