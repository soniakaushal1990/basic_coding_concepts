class MerchanShop{
    constructor(){
        this.inventory=new Map();
    }

    // Intialize the inventory

    buildInventory(){

        this.inventory.set('Toronto',{ "J": 5, "H": 0, "S": 0 });
        this.inventory.set('Vancouver',{ "J": 10, "H": 2, "S": 6 });
        this.inventory.set('Montreal',{ "J": 3, "H": 5, "S": 5 });
        this.inventory.set('Calgary',{ "J": 1, "H": 18, "S": 2 });
        this.inventory.set('Halifax',{ "J": 28, "H": 2, "S": 12 });
        
    }

    // Given an order return list of locations that can fulfill orders

    getLocationsThatCanFulfillOrder(order){
            let locations = [];

        for(let [key,value] of this.inventory.entries()){

            if(order["J"] <= value["J"] && order["H"] <= value["H"] && order["S"] <= value["S"]){
                    locations.push(key);
            }
        }

        return locations;

    }
}

let merchantshop = new MerchanShop();
merchantshop.buildInventory();
console.log(merchantshop.getLocationsThatCanFulfillOrder({J:28 ,"H":2 ,"S":4}));