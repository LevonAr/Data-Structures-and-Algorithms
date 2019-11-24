const arraySparse = [1,3,,7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element){
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

const items = ['item1', 'item2', 'item3'];

const copy = [];for (let i=0; i<items.length; i++) {

