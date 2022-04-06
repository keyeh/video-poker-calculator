import { TCard, IDeck } from "./types";

export default class Deck implements IDeck {
  card_list: TCard[];

  constructor() {
    // Kevin's custom order
    this.card_list = [
      39, 13, 0, 26, 40, 14, 1, 27, 41, 15, 2, 28, 42, 16, 3, 29, 43, 17, 4, 30,
      44, 18, 5, 31, 45, 19, 6, 32, 46, 20, 7, 33, 47, 21, 8, 34, 48, 22, 9, 35,
      49, 23, 10, 36, 50, 24, 11, 37, 51, 25, 12, 38,
    ];
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
    for (
      let j, x, i = arr.length;
      i;
      j = Math.floor(Math.random() * i),
        x = arr[--i],
        arr[i] = arr[j],
        arr[j] = x
    );
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
}
