const items = [
    "Blue",
    "Cam",
    "Cam",
    "Game",
    "Game",
    "Game",
    "Cam",
    "Cam",
    "Blue",
    "Blue",
  ];

  const max_map = {
      'L': {
          'Cam':2,
          'Game': 2,
          'Blue':1
      },
      'M': {
          'Cam':1
      }

  }

  class PackageManager {
      constructor(items){
          this.items = items;
          this.itemsCountMap = new Map();
      }

      calulateBoxesForItems(){

        for(let item of this.items){
            this.itemsCountMap.set(item,this.itemsCountMap.get(item)+1 || 1);
          }   

        let output = [];

        for(let [obj,qty] of this.itemsCountMap){
            if(obj == 'Cam'){

                while(qty !== 0){

                    if(qty >= max_map['L']['Cam']){
                            output.push(`[L: ["Cam", "Cam"]`);
                            qty-=2;
                    }
                    else{
                        output.push(`[L: ["Cam"]`);
                        qty--;
                    }
                }

            }else if(obj == 'Game'){
                while(qty !== 0){

                    if(qty >= max_map['L']['Game']){
                            output.push(`[L: ["Game", "Game"]`);
                            qty-=2;
                    }
                    else{
                        output.push(`[L: ["Game"]`);
                        qty--;
                    }
                }

            } else if(obj == 'Blue'){
                while(qty !== 0){
                    output.push('[L: ["Blue"]');
                    qty--;
                }

            }else{
                continue;
            }
        }
        return output;
      }




  }

  let list = new PackageManager(items);
  console.log(list.calulateBoxesForItems());

 


