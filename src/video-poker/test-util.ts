import {
    TCard,
    IPayTitleMap,
    IPayCalculator,
} from './types';
import Deck from './deck';

export class PayCalculatorTester<K extends IPayCalculator> {
  pay_calculator: K;
  statistics: IPayTitleMap<number>;

  constructor(payCalculator: K) {
    this.pay_calculator = payCalculator;
    const emptyStatistics: IPayTitleMap<number> = {};
    for (let key in this.pay_calculator.pay_table) {
      emptyStatistics[key] = 0;
    }
    this.statistics = emptyStatistics;
  }

  calculatePayForAllPossibleHand() {
    const allPossibleHandList: TCard[][] = Deck.allPossibleHandList;
    console.log("ALL POSSIBLE HAND COUNT: " + allPossibleHandList.length);

    for (let i = 0; i < allPossibleHandList.length; ++i) {
      const hand = allPossibleHandList[i];
      const result = this.pay_calculator.calculateHandResult(hand);
      if (result.pay_title) {
        this.statistics[result.pay_title]++;
      }
    }

    return this.statistics;
  }
}
