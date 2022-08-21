/**
 * CAM: 1M 2L
 * GAME: 2L
 * BLUE" 1L
 */

 const items = [
    "Cam",
    "Cam",
    "Cam",
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
  
  
  class PackageMatcher {
    constructor(items) {
      this.items = items;
    }
  
    matchAndCalculate() {
      let map = new Map(),
        output = [];
      for (let item of this.items) {
        map.set(item, map.get(item) + 1 || 1);
      }
      for (let [obj, qty] of map.entries()) {
       
        if(obj == "Cam") {
            while (qty !== 0) {
              if (qty >= max_map['L']['Cam']) {
                output.push(`L:["Cam", "Cam"]`);
                qty -= 2;
              } else {
                output.push(`M:["Cam"]`);
                qty--;
              }
            }
        }
        if(obj == "Game") {
            while (qty !== 0) {
              if (qty >= max_map['L']['Game']) {
                output.push(`L:["Game", "Game"]`);
                qty -= 2;
              } else {
                output.push(`L:["Game"]`);
                qty--;
              }
            }
        }
        if(obj == "Blue"){
            while (qty !== 0) {
              output.push(`L:["Blue"]`);
              qty--;
            }
            
        }
      }
      return output;
    }
  }
  const myPackageMatcher = new PackageMatcher(items);
  
  console.log(myPackageMatcher.matchAndCalculate());

//   //UNIT TESTS
//   describe("Package Matcher Output", () => {
//     test("output of package matcher", () => {
//       expect(myPackageMatcher.matchAndCalculate()).toEqual([
//         'L:["Cam", "Cam"]',
//         'L:["Cam", "Cam"]',
//         'M:["Cam"]',
//         'L:["Game", "Game"]',
//         'L:["Blue"]',
//         'L:["Blue"]',
//       ]);
//     });
//   });