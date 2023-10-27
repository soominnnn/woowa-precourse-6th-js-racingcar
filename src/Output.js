import { Console } from '@woowacourse/mission-utils';
import CarMotion from './CarMotion';

const carMotion = new CarMotion;

class Output {
    constructor(CAR,MOVE_COUNT,TRY) {
        this.CAR = CAR;
        this.MOVE_COUNT = MOVE_COUNT;
        this.TRY = TRY;
    }
    PrintResult() {
        for(let i in this.CAR) {
            Console.print(`${this.CAR[i]} : ${'-'.repeat(this.MOVE_COUNT[i])}`);
        }
        console.log("");
    }
    RunWhileFinish() {
        let IsFinish = false;
        while(!IsFinish){
            this.PrintResult(carMotion.MoveOrStop(this.CAR,this.MOVE_COUNT));
            if(this.MOVE_COUNT.join('').indexOf(this.TRY) != '-1') {
                IsFinish = true;
            }
        }
    }
}