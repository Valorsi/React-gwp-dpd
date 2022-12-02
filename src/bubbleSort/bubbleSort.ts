import { wait } from "@testing-library/user-event/dist/utils";
import { makeObservable, observable, action } from "mobx";

class bubbleSort {
    values : number[];

    constructor()
    {

        this.values = this.resetNumbersArray();
    
        makeObservable(this, 
        {
            sortNumbers: action,
            resetNumbersArray: action,
            values: observable,
        });

    }

    resetNumbersArray()
    {
        const randomNumberArray = [];

        for(let i = 0; i < 40; i++)
        {
            randomNumberArray.push( Math.floor(Math.random() * 600))
        }

        return randomNumberArray;
    }

    async sortNumbers() 
    {
        let animation = [];
        let auxArray = this.values.slice();

        const length = this.values.length;

        for(let i = 0; i < length; i++)
        {
            for(let j = 0; j < length; j++)
            {
                if(auxArray[j] > auxArray[j + 1])
                {
                    [auxArray[j], auxArray[j + 1]] = [auxArray[j + 1], auxArray[j]]
                    this.values = auxArray;
                    await this.delay(200);   
                }
            } 
        }
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

}

export default bubbleSort;