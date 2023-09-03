const book = {
    title: "JAVASCRIPT RECAP",
    author: "Ibrahim",
    ISBN: "828282",
    isCheckedOut: true,

    toggleCheckOutStatus: function() {
        this.isCheckedOut = !this.isCheckedOut;
    }


};

console.log("Book Title:", book.title);
console.log("Author:", book.author);
console.log("ISBN:", book.ISBN);
console.log("checked out:", book.isCheckedOut);

book.toggleCheckOutStatus();
console.log("toggle CheckOut Status:", book.isCheckedOut);


//2.

const shoppingCart = {
    items: [],

    addItem(name, price, quantity) {

        const existingItem = this.items.find(item => item.name === name);

        if (existingItem) {

            existingItem.quantity += quantity;

        } else {

            this.items.push({ name, price, quantity });
        }
    },

    removeItem(name) {

        this.items = this.items.filter(item => item.name !== name);
    },

    calculateTotal() {

        let total = 0;
        for (const item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    },
};


shoppingCart.addItem("Shoes", 150, 2);
shoppingCart.addItem("Pants", 200, 3);
shoppingCart.addItem("Shoes", 160, 1);
shoppingCart.removeItem("Pants");

console.log("Cart items:", shoppingCart.items);
console.log("Total price:", shoppingCart.calculateTotal());