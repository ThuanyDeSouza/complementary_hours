import React from 'react'
import './styles.css'
import {CgEnter} from 'react-icons/cg'
import {ImImage} from 'react-icons/im'
import DropDownOpt from '../DropDownOpt'

const formatDate = (d) => {
    return [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes()].join(':');
}
export default function Card({Title, date, type, hours, id}) {
    const dateVal = date? new Date(date) : new Date();

    if(!type)
        type = "User"

    if(type === "User")
        return (
            <div className='Card'>
                <div className='Left'>
                    <h1>{Title}</h1>
                    <p>{formatDate(dateVal)}</p>
                </div>
                <div className='Right'>
                    <a className='anchorImage' href='/certificates'>
                        <CgEnter size={50}/>
                    </a>
                </div>
            </div>
        )
        if(type === "Certificate")
        return (
            <div className='Card'>
                <div className='LeftCertificate'>
                    <a onClick={()=> {alert("download image")}}>
                        <ImImage size={50}/>
                    </a>
                    <div>
                        <h1>{Title}</h1>
                        <p>{formatDate(dateVal)}</p>
                    </div>
                </div>
                <div className='Right'>
                    <DropDownOpt options={[
                        ['Approved', ()=>{alert('approved')}],
                        ['Invalid Hours', ()=>{alert('Invalid Hours')}],
                        ['Certificate Already Used', ()=>{alert('Certificate Already Used')}]
                        ]}/>
                        <div className='Hours'>
                            <p>{hours}h</p>
                        </div>
                </div>
            </div>
        )
}