import Deck from "./deck";
import { TCard } from "./types";
import { combinations, convertCardToObject, getICardString } from "./util";

const oldDeck = ["CA", "DA", "HA", "SA", "C2", "D2", "H2", "S2", "C3", "D3", "H3", "S3", "C4", "D4", "H4", "S4", "C5", "D5", "H5", "S5", "C6", "D6", "H6", "S6", "C7", "D7", "H7", "S7", "C8", "D8", "H8", "S8", "C9", "D9", "H9", "S9", "CT", "DT", "HT", "ST", "CJ", "DJ", "HJ", "SJ", "CQ", "DQ", "HQ", "SQ", "CK", "DK", "HK", "SK"]
let newDeck = [];
for (let i = 0; i < 52; i++) {
  newDeck.push(getICardString(convertCardToObject(i as any)));
}
console.log({oldDeck,newDeck})
console.log(oldDeck.map(c => newDeck.indexOf(c)));
