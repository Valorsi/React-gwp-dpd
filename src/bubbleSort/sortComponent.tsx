import { link } from 'fs';
import {observer} from 'mobx-react';
import React from 'react';
import bubbleSort from './bubbleSort';
import './bubbleSort.css';

const numberArray = new bubbleSort();

function SortComponent()
{
    return(
        <>

        <button type='button' onClick={() => numberArray.sortNumbers()}>Sortieren</button>
        <div className='array-container'>
        
            { 
                numberArray.values.map((value, index) => {
                    
                    return(
                        <div className='array-bar' key={index} style={{height: `${value}px`}}>
                        </div>
                    );
                }) 
            }
            
        </div>

        </>

    );
    
}

export default observer(SortComponent);
