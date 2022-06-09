class ListElement{
    constructor(id, title, quantity, unitMeasurement){
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.unitMeasurement = unitMeasurement;
    }
}

class ShoppingList{
    nameList = 'Products list';
    authorList = 'Dvurechenskij Yevhenii';
    maxListElements = 4;
    shoppingListArray = [];
    count = 0;
    addItem(title, quantity, unitMeasurement){
        try{
            let id = ++this.count;
            let shoppingList = new ListElement(id, title, quantity, unitMeasurement);
            if(this.count < 6){
                if(shoppingList.title !== ``){
                    if(shoppingList.quantity > 0){
                            this.shoppingListArray.push(shoppingList);
                            let strShoppingList = `${shoppingList.title}: ${shoppingList.quantity } ${shoppingList.unitMeasurement}. - успішно добавлено. Id обєкта: ${id}`;
                            return strShoppingList;
                    }
                    else{
                        throw new Error(`${shoppingList.title}: ___ ${shoppingList.unitMeasurement}. - Не добавлено. Причина невірно вказана кількість товару`);
                    }
                }
                else{
                    throw new Error(`_____ : ${shoppingList.quantity } ${shoppingList.unitMeasurement}. - Не добавлено. Причина невказана назва продукту`);
                }
            }
            else{
                throw new Error(`${shoppingList.title}: ${shoppingList.quantity } ${shoppingList.unitMeasurement}. - Не добавлено. Причина неможливо добавити быльше 5 товарів`);
            }
        }
        catch(error){
            return error.message;
        }
    }
    removeItem(id){
        let index = this.shoppingListArray.indexOf(this.shoppingListArray.find(item => item.id === id));
        this.shoppingListArray[index] = ``;
        return this.shoppingListArray = this.shoppingListArray.filter(item => item !== ``);
    }
}
const shop = new ShoppingList();


console.log(shop.addItem(`title1`, 1, `kg`));
console.log(shop.addItem(`title2`, 2, `mg`));
console.log(shop.addItem(`title3`, 3, `g`));
console.log(shop.addItem(`title4`, 0, `kg`));
console.log(shop.addItem(`title5`, 5, `mg`));
console.log(shop.addItem(`title6`, 6, `g`));
console.log(shop.addItem(`title7`, 7, `kg`));
shop.removeItem(1);
shop.removeItem(3);
shop.removeItem(7);

console.log(shop.shoppingListArray);

