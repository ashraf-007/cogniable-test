import pic1 from './assets/1.png'
import pic2 from './assets/2.png'
import pic3 from './assets/10.png'
import pic4 from './assets/4.png'
import pic5 from './assets/5.png'
import pic6 from './assets/6.png'
import pic7 from './assets/7.png'
import pic8 from './assets/8.png'
import pic9 from './assets/9.png'

const usersData = [ {
    id:1,
    pic : pic1,
    name:'Jordyn Vaccaro',
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : true,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
 
} ,
{
    id:2,
    pic : pic2,

    name:'Paityn Rosser',
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : false,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
 
},
{
    id:3,
    name:'Ryan Rosser',
    pic : pic3,

    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : true,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
 
},{
    id:4,
    name:'Talan Lipshutz',
    pic: pic4,
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : false,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
 
},{
    id:5,
    pic:pic5,
    name:'Jaylon Bergson',
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : true,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
 
},{
    id:6,
    name:'Ruben George',
    pic:pic6,
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : false,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
 
},{
    id:7,
    name:'Terry Bator',
    pic:pic7,
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : true,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
}
,{
    id:8,
    name:'Livia Kenter',
    pic:pic8,
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : true,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
},{
    id:9,
    name:'Hanna Curtis',
    pic:pic9,
    email:'+8801719441978',
    login: 'Last login: 12 Jan 2021',
    isActive : true,
    case__manager: 'Livia Carder',
    tags:['Alfonso','Health care']
}
]

const userProfileData={
        records: [ {
            name:'Allergic to:',
            description:'Meat and nuts'
        } ,
        {
            name:'Height:',
            description:'23.5*'
        } ,
        {
            name:'Weight:',
            description:'10.5*'
        } ,
        {
            name:'Diagnoses:',
            description:'No result available'
        }  ,
        {
            name:'Date of Diagnoses:',
            description:'No result available'
        }  ,
        {
            name:'SSN/Adhaar:',
            description:'15544111DDN4F'
        }  ,
        {
            name:'Language',
            description:'English'
        } 
    
    ],
    gaurdian:[ {
            name:'Gaurdians Name:',
            description:'Cristofer'
    } ,
    {
        name:'Gaurdians Cell no:',
        description:'+48247249825487'
} , {
    name:'Fathers Name:',
    description:'Cristofer'
} , {
    name:'Fathers Cell no:',
    description:'+9839475947587'
} , {
    name:'Mothers Name:',
    description:'Cristofer'
} , {
    name:'Mothers Cell no:',
    description:'+394985749857'
} ,

] ,
general : [ {
    name:'Admission No:',
    description:''
},
{
    name:'Admission Date:',
    description:''
},{
    name:'Created at:',
    description:''
},{
    name:'Last Login:',
    description:''
},{
    name:'Clinic location:',
    description:''
},{
    name:'Location categories:',
    description:''
},{
    name:'Joined at:',
    description:''
}
],
staff: [{
    name:'Case Manager:',
    description:'Annie Global'
},{
    name:'Authorised:',
    description:'Samuel John'
},{
    name:'Staff:',
    description:''
}]
}

const updateData = [ {
    text:'General info'
},{
    text:'Personal Info'
},
{
    text:'Gaurdian info'
},
{
    text:'Gaurdian info'
},
{
    text:'Gaurdian info'
},
{
    text:'Gaurdian info'
}
]

export { usersData , userProfileData  , updateData }