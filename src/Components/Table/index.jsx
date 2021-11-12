import React , { useContext  } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import User from '../User'

const Table = () => {
    const { arr  } = useContext(GlobalContext)

    return (
        <>
        <section id='table' className='mt-3 rounded-md max-w-6xl mx-auto my-5'>
            <table className='w-full text-sm '>
                <tr className="h-8 bg-white text-gray-700 font-light">
                <th className=" text-gray-500 text-sm font-normal">User</th>
                <th className=" text-gray-500 text-sm font-normal">Email</th>
                <th className=" text-gray-500 text-sm font-normal">Last Login</th>
                <th className=" text-gray-500 text-sm font-normal w-32">Case Manager</th>
                <th className=" text-gray-500 text-sm font-normal">Tags</th>
                <th className=" text-gray-500 text-sm font-normal">Intervention</th>
                </tr>
                { arr.length ? arr.map((user)=>(
                    <User user={user} />
                )) : ''
                }
            </table>
            {  arr.length ===0 && 
            <div className="w-screen my-9 h-full grid place-content-center place-items-center">

            <div className='bg-white rounded p-5 w-full h-full mx-auto' >
            No user available
            </div>
</div>
}
        </section>
        </>
    )
}

export default Table
