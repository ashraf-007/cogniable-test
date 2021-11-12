import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar-icon.png'
import dots from '../../assets/dots.png'
import mail from '../../assets/mail-icon.png'
import check from '../../assets/checked.png'
const User = ({ user : {name , email ,login , isActive ,pic , tags } }) => {
    return (
        <>
            <tr className='bg-white m-2'>
                <td>
                    <div id='user__infos' className='flex justify-start items-center w-48'>
                        <img className='mr-2' src={pic} alt="" />
                        <div className='mx-3'>
                        <p className='font-bold' >{name}</p>
                        <p>+8801719441978</p>

                        </div>
                        <img  style={{ opacity: isActive ? '1' : '0.6' }}className='ml-2' src={check} alt="" />

                    </div>
                </td>
                <td>
                    <div id='user__email' className='flex justify-start items-center text-sm'>
                    <img className='mr-2' src={mail} alt="" />
                    <p>{email}</p>
                    </div>
                </td>
                <td>
                    <div className='flex justify-start items-center'>
                    <img className='mr-2' src={avatar} alt="" />
                    <p className="w-48">{login}</p>
                    </div>
                    
                    </td>
                <td>
                    <div className='font-bold w-32' style={{color:'#0B35B3'}}>
                    Livia Carder
                    </div>
                    
                    </td>
                <td>
                    <div className='text-sm flex justify-start items-center w-48'>

                    {tags.map((tag)=>(
                        <p className='mr-2'>{tag}</p>
                    ))}
                    </div>

                </td>
                <td>
                    <div className='flex justify-start items-center'>
                        <Link to='/profile'>
                         <button className='mr-6' id='view__details'>view details</button>

                        </Link>
                    <img src={dots} alt="" />
                    </div>

                </td>
            </tr>

        </>
    )
}

export default User
