import React , { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import './filterBar.css'

const FilterBar = () => {
    const {query , setQuery , handleFilter , name , setName } = useContext(GlobalContext)

    function handleChange(e){
        setQuery(e.target.value)
    }
    return (
        <>
        <section id='search__bar' className='bg-white px-32 py-7 flex justify-start lg:justify-between items-end flex-wrap'>
            <div className='text-left'>
                <h1 className='font-bold text-2xl mb-1'>Learners</h1>
                <p style={{color:'#777777'}} className='text-sm'>Partners/ Learners</p>
            </div>
            <div className='mx-2'>
                <button id="add__learner" className=' rounded text-white text-sm grid place-content-center'>+Add Learner</button>
            </div>
            <div style={{color:'#777777'}}>
                OR
            </div>
            <form onSubmit={(e)=>handleFilter(e , query , name)}>

            <div id='inputs' className='flex md:justify-between  justify-start items-center flex-wrap text-sm'>
                <div id='name' className='m-2 ml-0 lg:m-0'>
                    <input type="text" placeholder='Search by name' value={name} onChange={(e)=>setName(e.target.value.toLowerCase())} />
                </div>
                <div id='email' className='m-2 ml-0 lg:m-0'>
                    <input type="email" placeholder='Search by email' />
                </div>
                {/* <div id='case__manager'>
                    <select name="" id="" placeholder='Search by case manager'>
                        <option value=""></option>
                    </select>
                </div> */}

                <div id='status' className='m-2 ml-0 lg:m-0'>
                    <select 
                     value={query}
                     onChange={(e)=>handleChange(e)} 
                     id="select__status" 
                     placeholder={'Status...'}
                     className='text-sm'
                     >
                        <option value='All'>All</option>

                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                    </select>
                </div>
                
               <button type='submit'  id='search' className='py-3 px-4 rounded text-white flex justify-center items-center font-bold m-2 ml-0 lg:m-0'>

                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                    Search
                </button>


            </div>
            </form>

        </section>
        </>
    )
}

export default FilterBar