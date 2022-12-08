import React from 'react'
import './styles.css'


let Options = []
let _options;

const change = (i) => {
    _options[i.target.value][1]();
}

/**
 * @param option : [['opção', callback]['opção', callback]]
 */
export default function DropDownOpt({options}) {
    if(Options) {
        Options = []
    }
    _options = options;
    let index = 0;
    for (const o of options) {
        const item = (<option value={index++}>{o[0]}</option>);
        Options.push(
            item
        )
    }
    return (
        <div className='dropDown'>
            <select name="action" onChange={change}>
                {Options}
            </select>
        </div>
    )
}