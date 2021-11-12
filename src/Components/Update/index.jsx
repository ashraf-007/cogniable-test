import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Datepicker from '../../../node_modules/@themesberg/tailwind-datepicker/js/Datepicker';
import alert from '../../assets/alert-circle.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import back from '../../assets/back-icon.png'
import upload from '../../assets/upload.png'
import './update.css'
import { updateData } from '../../data'

const Update = () => {
    const [ tab , setTab ] = useState(0)
    const [ schedualTab , setSchedualTab ] = useState(null)
    const [ open , setOpen ] = useState(false)
    const helpDesk =['','','']
    function handleShow(t){
        switch (t) {
            case 0: return <General /> 
            case 1 : return <Personal />
            case 2 : return <Gaurdian />
            default: return null
        }
    }
    function handleToggle(i){
        setSchedualTab(i)
        setOpen(!open)
    }
    useEffect(() => {
       const dPicker = document.getElementById('picker')
       new Datepicker(dPicker, {
        // options
    }); 
    }, [])
    return (
        <>
        <div className="">
        <div id='bar' className="h-24 p-2 text-sm px-5 bg-white w-full flex justify-between items-center">
            <Link to='/profile'>
        <div>
            <div className='flex justify-start items-center'>
            <img className='h-4 w-4 mr-2' src={back} alt="" /> 
            <h1 className='font-bold text-lg'>Update Info</h1>
            </div>

            <p>Partners/ Learners/Settings</p>
        </div>
        </Link>

        <div id='btns' className='flex justify-start items-center'>
            <button>Update</button>
            <button>Assetments</button>
            <button>Programs</button>
            <button>Sessions</button>
        </div>
        </div>

        <section id="main" className='p-9 text-sm'>
            <div className='left'>
                <h1 className='text-lg font-bold'>Update learners info</h1>
                <div className=''>
                {updateData.map((item , index)=>(
                    <div  onClick={()=>setTab(index)} key={index} className={`flex rounded-md justify-between items-center p-2 my-2 w-3/5 mx-auto cursor-pointer ${tab === index && ' is__selected opacity-100'} opacity-50`}>
                    <span id='bullet' className={`${tab === index && 'bg-blue-700 opacity-100'} bg-gray-700 opacity-50`}></span>
                     <p>{item.text}</p>
                     <span>&rarr;</span>
                    </div>
                ))}
                </div>

            </div>
        {/* Middle Elements */}
<div className='middle bg-white rounded w-full h-full p-4 px-9' >
            { handleShow(tab)}
</div>
            <div className='right pr-9'>
                <div className='flex justify-between items-center '>
                <h1 className='text-lg font-bold'>Help Desk</h1>
                <img src={alert} alt="" />
                </div>
                <div id='scheduals' className='text-left'>
                    { helpDesk.map((el , index)=>(
                    <div onClick={()=>{handleToggle(index)}} key={index} id='schedual' className={`my-2 cursor-pointer ${open && schedualTab === index && 'schedual__selected'} `}>
                    <div className='flex justify-between items-start w-full '>
                    <p className={`text-gray-500 hover:underline mb-2 ${open && schedualTab === index && 'text-indigo-700 font-bold' } `}>How to create a schedual?</p>
                    <img className={` ${open && schedualTab === index && 'mt-2'} `} src={open && schedualTab === index ? minus : plus} alt="" />
                    </div>
                    <p style={{display: open && schedualTab === index ? 'block' : 'none'}} className=''>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to/</p>
                    </div>
))}

</div>
</div>
        </section>
    
</div>
        </>
    )
}

export default Update


// General Info Component

const General = () => (
    <>

                <h1 className="text-lg font-bold text-left mb-3">Edit basic information</h1>
                <section id='form__1'>
                    <div id='drag_and_drop' className='drag grid place-content-center'>
                        <div className='flex justify-center items-center flex-wrap'>

                    <img className='mr-2' src={upload} alt="" />
                    <div>
                        <h1 className='font-bold'>Drag and drop to upload logo</h1>
                        <p>JPEG, PNG, Pdf etc</p>
                    </div>
                    </div>
                    </div>
                    <div id='form__elements' className='grid grid-cols-1 lg:grid-cols-2 gap-3 text-left my-4'>
                        <div id='element' className=''>
                        <label htmlFor="firstname" className='font-bold my-2'>First Name</label>
                        <input type="text"  id='firstname' placeholder='First name'/>
                        </div>
                        <div id='element' className=''>
                        <label htmlFor="lastname" className='font-bold my-2'>Last Name</label>
                        <input type="text"  id='lastname' placeholder='Last name'/>
                        </div>
                        <div id='element' className=''>
                        <label htmlFor="c_id" className='font-bold my-2'>Client id</label>
                        <input type="text"  id='c_id' placeholder='Client id'/>
                        </div>
                        <div id='element' className=''>
                        <label htmlFor="em" className='font-bold my-2'>Email</label>
                        <input type="text"  id='em' placeholder='Email'/>
                        </div>
                        <div id='element' className=''>
                        <label htmlFor="cell_no" className='font-bold my-2'>Cell No</label>
                        <input type="text"  id='cell_no' placeholder='cCell no'/>
                        </div>
                        <div className="relative ">
                            <label htmlFor="picker" className='font-bold my-2'>Date of Birth</label>
                            <div className="absolute top-7 right-1  flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input id='picker' datepicker datepicker-autohide datepicker-format="mm/dd/yyyy" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " placeholder="Select date" />
                        </div>
                    

                    </div>
                       
                    <div  className='flex justify-start w-full font-bold '>
                           <p className='mr-6 font-bold'>Gender</p>
                           <div className='flex justify-start  w-full'>

                           <div className='flex justify-start items-center mr-4 flex-wrap '>

                           <input className='w-4' type="radio" id="male" />
                           <label className='ml-2' htmlFor="male">Male</label>
                           </div>

                            <div className='flex justify-start items-center mr-4 '>
                           <input className='w-4' type="radio"  id='female'/>
                           <label className='ml-2' htmlFor="female">Female</label>
                           </div>

                            <div className='flex items-center justify-start mr-4'>

                           <input className='w-4' type="radio" id='other' name='other' />
                           <label className='ml-2' htmlFor="other">Other</label>
                           </div>
                           </div>

                       </div>
                    <div className='text-left'>

                    <h1 className='font-bold my-3 '>Add Location </h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

                    <div id='element' className='mr-3 my-3'>
                        <label htmlFor="city" className='font-bold my-2'>City</label>
                        <select name="city" className='w-full' id="city">
                            <option value=""></option>
                        </select>
                        </div>

                        <div id='element' className='mr-3 my-3'>
                        <label htmlFor="state" className='font-bold my-2'>State</label>
                        <select name="state" className='w-full' id="state">
                            <option value=""></option>
                        </select>
                        </div>
                         <div id='element' className='mr-3 my-3'>
                        <label htmlFor="country" className='font-bold my-2'>Country</label>
                        <select name="country" className='w-full' id="country">
                            <option value=""></option>
                        </select>
                        </div>

                        </div>
                        <div id='element' className='mr-3 my-3 w-2/4'>
                        <label htmlFor="zip" className='font-bold my-2 '>ZIP Code</label>
                        <input type="text"  id='zip' placeholder='zip'/>
                        </div>
                            <div className='flex justify-end items-center'>
                                <button className='font-bold'>Close</button>
                                <button id='update__btn' className='save font-bold ml-6'>Save and Update</button>
                            </div>
                        </div>

                </section>
            </>
)


// Personal Info Component
const Personal = () =>(
<>
                <h1 className="text-lg font-bold text-left mb-3">Edit Personal information</h1>
                <section id='form__1'>
                    
                    <div id='form__elements' className=' text-left my-4'>
                        <div id='element' className='my-3'>
                        <label htmlFor="allergic" className='font-bold my-2'>Allergic to:</label>
                        <input type="text"  id='allergic' placeholder='Allergic to'/>
                        </div>
                        <div id='element' className='my-3'>
                        <label htmlFor="height" className='font-bold my-2'>Height in inch</label>
                        <input type="text"  id='height' placeholder='Height'/>
                        </div>
                        <div id='element' className='my-3'>
                        <label htmlFor="weight" className='font-bold my-2'>Weight in lb</label>
                        <input type="text"  id='weight' placeholder='Weight'/>
                        </div>
                        <div id='element' className='my-3'>
                        <label htmlFor="ssn" className='font-bold my-2'>SSN</label>
                        <input type="text"  id='ssn' placeholder='First name'/>
                        </div>
                        <div id='element' className='my-3 w-full'>
                        <label htmlFor="language" className='font-bold'>Select language</label>
                        <select name="" id="language" className='w-full'>
                            <option value="english">English</option>
                            <option value="german">German</option>
                            <option value="french">French</option>
                        </select>
                        </div>
                       
                    </div>
                    <div className='flex justify-end items-center'>
                        <button className='font-bold'>Close</button>
                        <button id='update__btn' className='save font-bold ml-6'>Save and Update</button>
                    </div>
                </section>
            </>
)



// Gaurdian Info Component

const Gaurdian = ()=>(
    <>
    <h1 className="text-lg font-bold text-left mb-3">Update Gaurdian info</h1>
    <section id='form__1'>
        
        <div id='form__elements' className=' grid grid-cols-1 lg:grid-cols-2 gap-3 text-left my-4'>
            <div id='element' className='my-3'>
            <label htmlFor="gname" className='font-bold my-2'>Guardian Name:</label>
            <input type="text"  id='gname' placeholder='Guardian Name'/>
            </div>
            <div id='element' className='my-3'>
            <label htmlFor="gcell" className='font-bold my-2'>Guardian Cell no</label>
            <input type="text"  id='gcell' placeholder='Guardian Cell no'/>
            </div>
            <div id='element' className='my-3'>
            <label htmlFor="fname" className='font-bold my-2'>Father's Name</label>
            <input type="text"  id='fname' placeholder='Father Name'/>
            </div>
            <div id='element' className='my-3'>
            <label htmlFor="fcell" className='font-bold my-2'>Father's Cell no</label>
            <input type="text"  id='fcell' placeholder='First cell'/>
            </div>
            <div id='element' className='my-3'>
            <label htmlFor="mname" className='font-bold my-2'>Mother's Name</label>
            <input type="text"  id='mname' placeholder='Mother name'/>
            </div>
            <div id='element' className='my-3'>
            <label htmlFor="mcell" className='font-bold my-2'>Mother's Cell no</label>
            <input type="text"  id='mcell' placeholder='Mother Cell'/>
            </div>
        </div>

        <div className='flex justify-end items-center'>
            <button className='font-bold'>Close</button>
            <button id='update__btn' className='save font-bold ml-6'>Save and Update</button>
        </div>
    </section>
</>
)
