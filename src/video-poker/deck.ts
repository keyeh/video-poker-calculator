import { TCard, IDeck } from "./types";

export default class Deck implements IDeck {
  card_list: TCard[];

  constructor() {
    this.card_list = Deck.createCardList();
  }

  private static createCardList(): TCard[] {
    return Array.from(Array(52).keys()) as TCard[];
  }

  draw() {
    return this.card_list.shift();
  }

  drawMultiple(num: number) {
    return this.card_list.splice(0, num);
  }

  drawRandom() {
    const randomIndex = Math.floor(Math.random() * this.card_list.length);
    return this.card_list.splice(randomIndex, 1)[0];
  }

  drawRandomMultiple(num: number) {
    const cardList: TCard[] = [];
    for (let i = 0; i < num; ++i) {
      const card = this.drawRandom();
      cardList.push(card);
    }
    return cardList;
  }

  shuffle() {
    const arr = this.card_list;
    for (let j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  }

  filterOut(removeTargetCardList: TCard[]) {
    this.card_list = this.card_list.filter(function (targetCard) {
      let isTarget = false;
      for (let i = 0; i < removeTargetCardList.length; ++i) {
        const removeTargetCard = removeTargetCardList[i];
        if (targetCard === removeTargetCard) {
          isTarget = true;
          break;
        }
      }
      return !isTarget;
    });
  }

  static get allPossibleHandList(): TCard[][] {
    const allCardList: TCard[] = Deck.createCardList();
    const handListlist: TCard[][] = [];
    for (let i1 = 0; i1 < allCardList.length - 4; ++i1) {
      for (let i2 = i1 + 1; i2 < allCardList.length - 3; ++i2) {
        for (let i3 = i2 + 1; i3 < allCardList.length - 2; ++i3) {
          for (let i4 = i3 + 1; i4 < allCardList.length - 1; ++i4) {
            for (let i5 = i4 + 1; i5 < allCardList.length; ++i5) {
              handListlist.push([
                allCardList[i1],
                allCardList[i2],
                allCardList[i3],
                allCardList[i4],
                allCardList[i5],
              ]);
            }
          }
        }
      }
    }
    return handListlist;
  }
}
