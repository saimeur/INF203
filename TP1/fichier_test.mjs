"use strict";

import {fibIt,fibo_rec,fibArr,fiboMap} from "./exercise1.mjs";
import { wordCount,WordL } from "./exercise2.mjs";
import { Std,ForStudent } from "./exercise3.mjs";
import { Prom } from "./exercise4.mjs";


console.log(fibIt(7)); // do more that one test per function
console.log(fibo_rec(8));
console.log(fibArr([1,4,5,0,10]));
console.log(fiboMap([1,4,5,0,10]));
console.log(wordCount("fish bowl fish bowl fish"));
/*console.log(wordCount("Ante. Risus quis malesuada est. Venenatis pretium integer Condimentum tincidunt risus ante. Vitae ante potenti curabitur. Sociis. Platea taciti tristique platea sagittis. Adipiscing morbi et ante fringilla egestas sit venenatis vulputate. Nisi ante auctor sollicitudin potenti bibendum. Urna lacus tempus pharetra habitant ac. Egestas nulla dolor dui arcu lacinia donec Ipsum elit hendrerit porttitor, ullamcorper, taciti eros lobortis aliquam netus. Pellentesque vel leo turpis nibh aliquet magna netus. Egestas rutrum ridiculus fermentum. Quisque. Adipiscing mollis sapien commodo dapibus nisi fringilla feugiat elit vitae felis gravida commodo aliquet hendrerit dapibus vivamus pretium bibendum Fringilla. Hymenaeos maecenas aliquam mauris laoreet.Bibendum placerat fusce lectus fames ullamcorper senectus. Ornare mollis convallis habitasse, sit. Aliquam curae; scelerisque inceptos elementum torquent. Amet risus Ridiculus dapibus. Sed nisl. Bibendum urna. Convallis nibh. Non elit elementum eleifend hendrerit lacus. Ligula augue vehicula mus mi maecenas pretium non faucibus libero magna luctus condimentum dapibus odio hendrerit massa tempus suscipit penatibus iaculis laoreet integer sociis diam nec penatibus. Tempus donec etiam litora curabitur non curabitur posuere eleifend facilisi ultrices vivamus maecenas cursus sagittis pulvinar vel placerat pellentesque cubilia auctor congue netus porttitor donec ad erat iaculis tristique nam donec in vitae metus. Vivamus nec habitant fermentum fusce fames est fermentum platea ultrices magnis nostra. Viverra nunc torquent feugiat. Suscipit hac class. Quis amet neque ornare felis, euismod auctor nullam auctor iaculis felis ultricies auctor vestibulum. Aenean tempor condimentum sociis non curae; primis ornare suspendisse purus sit tellus arcu venenatis quisque in dis elementum venenatis mauris platea tristique. Condimentum litora. Facilisis hendrerit nonummy mauris malesuada felis litora purus porttitor. Blandit libero fames, rutrum suscipit. Quisque nec est vulputate felis. Inceptos pharetra nascetur integer erat congue ligula lobortis elit. Fusce. Consectetuer habitant tellus Conubia sit rutrum hac semper elit cras venenatis tincidunt cursus praesent ac mi hac. Potenti nec at.Fringilla vestibulum fermentum curae; tristique platea consequat, imperdiet elementum. Conubia imperdiet volutpat aenean vulputate quam primis orci fames mattis porttitor praesent nulla lectus vestibulum. Cubilia pulvinar. Lacus condimentum nulla porttitor urna metus per penatibus lacinia morbi eros consequat primis fermentum augue diam fames est varius primis. Facilisis eu. Taciti blandit neque nibh adipiscing non montes cubilia, consectetuer, tempor quisque elit vitae Accumsan condimentum varius sociosqu suspendisse natoque. Vel proin scelerisque eleifend. Augue arcu habitasse sit consequat natoque hac. Ridiculus vestibulum volutpat odio per etiam rhoncus enim ridiculus nonummy justo penatibus. Tempor elit nibh ut sed elementum ornare porttitor quam euismod vivamus, facilisi faucibus leo fames leo congue praesent. Tincidunt, venenatis nostra venenatis pede curabitur. Dis sagittis justo tempor commodo scelerisque taciti mi per hac magna lacus. Quisque. Conubia. Posuere. Habitant aliquam. Dis vulputate, tempus praesent blandit habitant vel iaculis nisi consequat nibh nibh senectus. A nulla. Sociosqu curae; mi netus bibendum. Ridiculus tellus tortor. Lacus integer porttitor sit mattis ultrices magna. Eget risus imperdiet augue leo habitasse aenean. Vulputate arcu adipiscing nibh in aliquam phasellus duis dignissim erat dui euismod nisi ridiculus fames in malesuada tempus dictumst dictumst primis phasellus nunc phasellus eros hymenaeos pharetra Nisi dolor urna fermentum. Semper venenatis."));*/
console.log(0 || -1);

const phrase = new WordL("fish bowl fish bowl fish ");
console.log(phrase.get_words());
console.log(phrase.maxCountWord());
console.log(phrase.minCountWord());
console.log(phrase.getCount("fish"));
function h(x){return x+ "  et oui"}
console.log(phrase.applyWordFunc(h))

var student1 = new ForStudent("Alice", "John", 1835, "Français")
var student2 = new Std("Momo", "El Aziz", 490)
//console.log(student1.toString())

var promo = new Prom();
//promo.add(student1);
//promo.add(student2);
//promo.print()

//promo.saveToFile("fichier_de_promo.json")
promo.readFrom("fichier_de_promo.json")