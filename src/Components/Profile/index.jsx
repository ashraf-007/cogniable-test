import React from 'react'
import { userProfileData } from '../../data'
import { Link } from 'react-router-dom'
import back from '../../assets/back-icon.png'
import './profile.css'
import image from '../../assets/image.png'
import check from '../../assets/check-icon.png'
const Profile = () => {
    return (
        <>
        <section id='profile__page' className='text-left p-12 text-sm w-full mx-auto' >
            <Link to='/'>
                <div className='flex justify-start items-center font-bold text-lg'>
                    <img className='w-4 h-4 mr-2' src={back} alt="" />
                    <p>Back to home</p>
                </div>
            </Link>

            <div id='layout' className=''>
                <section id='left' className='my-3 w-full'>
                    <div id='user__group' className='flex justify-start items-start my-3 flex-wrap'>
                        <img className='mr-4' src={image} alt="" />
                        <div id='user__informations' className='flex flex-col justify-between items-start h-full'>
                            <h1 className='text-lg font-bold  mb-1'>Name</h1>
                              <p style={{color:'#777777'}}>28638947298798</p>
                              <p style={{color:'#777777'}} className='my-1'>@zdnkdn</p>

                                <div className='flex justify-start items-center my-1'>
                                    <p style={{color:'#777777'}} className='mr-2'>DOB:</p>
                                    <p className='my-1'>@zdnkdn</p>
                                </div>
                                <div className='flex justify-start items-center  my-1'>
                                    <p style={{color:'#777777'}} className='mr-2'>Gender:</p>
                                    <p> Male</p>
                                </div>
                                <div className='flex justify-start items-center  mt-1'>
                                    <p style={{color:'#777777'}} className='mr-2'>Address:</p>
                                    <p> 3/B, 4th Floor, Plot, Rd 16/A, Dhaka 1212</p>
                                </div>
                        </div>
                    </div>

                    <div id='more__informations' className='bg-white w-full h-auto p-5 rounded-md'>
                        <div id='labels' className='flex justify-start items-center flex-wrap'>
                            <div id='label' className='border py-1 px-2 rounded-full mb-2 flex justify-start items-center inline-block mr-4'>
                                <p className='mr-2'>Peak</p>
                                <div id='label__img' className='grid place-content-center bg-green-700'>
                                <img src={check} alt="" />
                                </div>
                            </div>
                            <div id='label' className='border py-1 px-2 mb-2 rounded-full flex justify-start items-center inline-block mr-4'>
                                <p className='mr-2'>Cognible</p>
                                <div id='label__img' className='grid place-content-center bg-green-700'>
                                <img src={check} alt="" />
                                </div>
                            </div>
                            <div id='label' className='border py-1 px-2 mb-2 rounded-full flex justify-start items-center inline-block mr-4'>
                                <p className='mr-2'>Research Participant</p>
                                <div id='label__img' sytle={{background:'red'}} className='grid place-content-center bg-green-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                </div>
                            </div>

                        </div>
                        <div id='records' className='my-3 text-xs '>
                            <h1 className='text-lg font-bold'>Records</h1>
                            { userProfileData.records.map((profile )=>(
                                <div id='record' className='flex justify-between items-center mb-5'>
                                <div className='flex justify-start items-center'>
                                <div id='dot' className='  mr-2'></div>
                                <p style={{color:'#777777'}}>{profile.name}</p>
                                </div>
                                    <p className='font-bold'>{profile.description}</p>
                                </div>
                            ))}
        
                        </div>
                        <div id='gaurdians__infos'>
                        <h1 className='text-lg font-bold mb-4'>Gaurdian Infos</h1>
                        {userProfileData.gaurdian.map((info)=>(
                        <div id='info' className='flex justify-start items-center mb-3 ml-2'>
                        <p style={{color:'#777777'}} className='mr-2'>{info.name}</p>
                            <p className='font-bold'>{info.description}</p>
                        </div>
                        ))}
                        </div>

                    </div>
                    </section>

                    <section id='right' className=''>
                    <div className='flex  items-center justify-start md:justify-end flex-wrap md:flex-nowrap' >

                        <div className='flex justify-start items-center mr-9 mb-2 md:mb-0'> 

                        <h1 className='text-lg font-bold mr-2'>Status</h1>
                            <div id='status__infos' className='border  p-2 flex justify-center items-center w-24'>
                            <div id='label__img' style={{background:'#32BEA6' , height:'16px', width:'16px'}} className='grid place-content-center bg-green-700 mr-2 '>
                                <img src={check} alt="" />
                                </div>
                                <p>active</p>
                            </div>
                            </div>
                            <Link to='/update'>
                            <button className='text-white font-bold text-sm' id='update__infos'>
                                Update Info
                            </button>
                            </Link>

                            </div>
                    <div id='general__infos' className='bg-white p-5 my-4 rounded'>
                        <h1 className='text-lg font-bold mb-4'>General Infos</h1>
                        { userProfileData.general.map((info)=>(
                            <div id='info' className='flex justify-between items-center mb-3'>
                            <p style={{color:'#777777'}} className='mr-2'>{info.name} </p>
                                <p className='font-bold'>{info.name}</p>
                            </div>
                        ))}
                      
                        
                    </div>
                    <div id='staff__assigned' className='bg-white p-5 my-4 rounded'>
                        <h1 className='text-lg font-bold mb-4'>Staff assigned</h1>
                        { userProfileData.staff.map((info)=>(
                        <div id='info' className='flex justify-between items-center mb-3'>
                        <p style={{color:'#777777'}} className='mr-2'>{info.name} </p>
                            <p className='font-bold'>{info.description}</p>
                        </div>
                        ))}
                            </div>
                            <div id="views" >
                                <div className='bg-white px-4 py-2 mb-2 flex justify-between items-center text-base rounded font-bold text-indigo-700'>
                                    <p className=''>View or add insurance</p>
                                    <div className=' flex justify-start items-center text-lg'>
                                        <p className='text-black'>03</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                    </div>
                                </div>
                                <div className='bg-white px-4 py-2 mb-2 flex justify-between items-center text-base rounded font-bold'>
                                    <p className=''>View or add document</p>
                                    <div className=' flex justify-start items-center text-lg'>
                                        <p className=''>03</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                    </div>
                                </div>
                                <div className='bg-white px-4 py-2 mb-2 flex justify-between items-center text-base rounded font-bold'>
                                    <p className=''>View or add Appointment</p>
                                    <div className=' flex justify-start items-center text-lg'>
                                        <p className=''>03</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                                    </div>
                                </div>

                            </div>
                    </section>

                </div>

        </section>
            
        </>
    )
}

export default Profile
