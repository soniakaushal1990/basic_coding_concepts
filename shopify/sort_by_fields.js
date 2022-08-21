var data = [{ h_id: "3", city: 'Dallas',  state: "TX", zip: "75201", price: "1" }, 
{ h_id: "4", city: "Bevery Hills", state: "CA", zip: "90210", price: "2" }, 
{ h_id: "6", city: "Dallas", state: "TX", zip: "75000", price: "3" }, 
{ h_id: "5", city: "New York", state: "NY", zip: "00010", price: "4" }
];


data.sort((a, b) =>  {
   return a.city.localeCompare(b.city) || b.price - a.price
});

console.log(data);