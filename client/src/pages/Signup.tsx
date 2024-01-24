import { Link } from 'react-router-dom';
import  { useState } from 'react';
import googleicon from '../images/googleimage.png'
import signupillustration from '../../src/images/sigupillustration.svg';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { IoIosCheckmark } from "react-icons/io";
import UseScreenWidth from '../assets/components/UseScreenWidth';



const Signup = () => {

    const screenWidth = UseScreenWidth();


    //password input field data
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPasswordtwo, setShowPasswordtwo] = useState<boolean>(false);
    const [passwordActive, updatePasswordActive] = useState<boolean>(false)


    // interface checkPasswordStrengthObjectSchema{
    //     sixchars: boolean,
    //     onenumber: boolean,
    //     specialChar: boolean,
    //     upperCase: boolean,
    //     lowerCase: boolean
    // }

    // const [checkPasswordStrengthObject, updateCheckPasswordStrengthObject] = useState<checkPasswordStrengthObjectSchema>({
    //     sixchars: false,
    //     onenumber: false,
    //     specialChar: false,
    //     upperCase: false,
    //     lowerCase: false
    // })

    interface allPasswordRequirements {
        text: string,
        status: boolean

    }
    const [allPasswordRequirements, updateAllPasswordRequirements] =  useState<allPasswordRequirements[]>([
        { text: "6 characters minimum", status: false },  {text: 'one number',  status: false}, {text: "one special character",  status: false}, {text: "One uppercase",  status: false}, {text: "one lower case" , status:false}
    ])

    const checkPasswordStrength = (targetValue: string) =>{
                // Check if password char >= 6
                if (targetValue.length >= 6) {
          
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "6 characters minimum" ? { ...requirement, status: true } : requirement));
                    });
                }
                if (targetValue.length < 6) {
              
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "6 characters minimum" ? { ...requirement, status: false } : requirement));
                    });
                }

                // Check if password contains at least one number
                if (/\d/.test(targetValue)) {
                   
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "one number" ? { ...requirement, status: true } : requirement));
                    });
                }
                if (!/\d/.test(targetValue)) {
                  
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "one number" ? { ...requirement, status: false } : requirement));
                    });
                }

                // Check if password contains at least one special character
                if (/[^A-Za-z0-9]/.test(targetValue)) {
                 
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "one special character" ? { ...requirement, status: true } : requirement));
                    });
                }
                if (!/[^A-Za-z0-9]/.test(targetValue)) {
             
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "one special character" ? { ...requirement, status: false } : requirement));
                    });
                }

                // Check if password contains at least one uppercase letter
                if (/[A-Z]/.test(targetValue)) {
              
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "One uppercase" ? { ...requirement, status: true } : requirement));
                    });
                }
                if (!/[A-Z]/.test(targetValue)) {
            
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "One uppercase" ? { ...requirement, status: false } : requirement));
                    });
                }

                // Check if password contains at least one lowercase letter
                if (/[a-z]/.test(targetValue)) {
                   
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "one lower case" ? { ...requirement, status: true } : requirement));
                    });
                }
                if (!/[a-z]/.test(targetValue)) {
         
                    updateAllPasswordRequirements((prevRequirements) => {
                        return prevRequirements.map((requirement) => (requirement.text === "one lower case" ? { ...requirement, status: false } : requirement));
                    });
                }
        
    }


    //sign up logic
    interface SignupFormFieldDataSchema {
        email: string,
        fullName: string,
        password: string, 
        confirmPassword: string
    }

    const [signupFormFieldData, updateSignupFormFieldData] = useState<SignupFormFieldDataSchema>({
        email: '',
        fullName: '',
        password: '', 
        confirmPassword: ''
    });



    //if not desktop screen, display error message
    if(screenWidth < 891 ){

        return (
                <div className='relative w-full h-screen flex flex-col justify-center items-center'>
                        
                        <p className='text-center text-[20px] font-[550]'>Please load app on desktop</p>
                        <div className='text-[25px]'>🙂</div>

                </div>
        )
    }else{

            return (
                <div className="absolute min-h-[100vh] w-full flex flex-col justify-start items-start overflow-hidden bg-white">
                        <div className="relative h-full w-full overflow-x-hidden flex flex-col justify-start items-start text-black">              
                                                    
                                <div className="relative w-full h-full flex flex-start justify-center space-x-4 p-4 ">
                                            
                                            {/* illustration box */}
                                            <div className='w-[50%] flex justify-start items-center  min-h-screen'>
                                                    
                                                    <div className='bg-purpleSubColor px-[1rem] w-full h-full flex flex-col justify-center items-center border border-purpleSubColor rounded-[15px]'>
                                                                <h3 className='text-white font-bold text-[35px] text-center tracking-wider'>Welcome to Medata!</h3>
                                                                <h3 className='text-white font-bold text-[35px] text-center tracking-wider max-w-[500px]'>Create your <span className='underline'>Medata</span> account</h3>
                                                                <p className='py-[2rem] text-[#dcdcdc] font-[450] text-[15px] text-center max-w-[500px]'>Join us to access and manage your hospital data with ease. Stay connected and in control of your medical information.</p>


                                                                <img src = {signupillustration}  className = 'w-[400px] h-auto object-cover' alt='logo' />
                                                    </div>

                                            </div>



                                            {/* signup box */}
                                            <div className='w-[50%] flex flex-col justify-center items-center space-y-4'>
                                                    
                                                    <div>
                                                        <p className='text-[25px] font-[550]'>medata</p>
                                                    </div>

                                                    <div className=" flex flex-col justify-center items-center space-y-2 w-[400px] min-h-[420px] pb-3 px-6">
                                                                <h5 className='text-[20px] pt-[1rem] font-[550] tracking-wide'>Create your account</h5>
                                                                <p className='text-[14.40px] pb-[1.3rem] text-[#3c3b3b]'>Enter the fields below to get started</p>
                                                                <button className='shadow-md bg-white border-[#e1e1e1] border-[1px] rounded-[5px] w-full min-h-[42px] flex items-center justify-center space-x-2 hover:bg-[#f1f1f1]'>
                                                                        <img src={googleicon} alt='google-icon' className='w-[20px] h-[20px]'/>
                                                                        <p className='text-black font-bold text-[14px]'> Sign in with Google</p>
                                                                </button>

                                                                <div className="flex w-full items-center my-4">
                                                                        <div className="flex-1 w-full h-[1px] bg-gray-300"></div>
                                                                        <span className="mx-4 text-gray-500">or</span>
                                                                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                                                                </div>



                                                                <div className='w-full flex flex-col space-y-[1rem]'>

                                                                            <div className='flex flex-col space-y-2'>
                                                                                    <label className='text-[15px] text-[#636363]'>Full name*</label>
                                                                                    <input type="text" name='fullName' 
                                                                                            placeholder='Enter name'
                                                                                            onChange={(e)=>{ updateSignupFormFieldData({...signupFormFieldData, fullName: e.target.value })}}
                                                                                            className='bg-inherit px-2 border-[#e1e1e1] border-[1px] rounded-[5px] w-full h-[42px] text-black text-[16px] focus:border-greyMainBackground focus:bg-greyMainBackground focus:outline-none' 
                                                                                    />
                                                                            </div>

                                                                            <div className='flex flex-col space-y-2'>
                                                                                    <label className='text-[15px] text-[#636363]'>Email*</label>
                                                                                    <input type="email" name='email' 
                                                                                            placeholder='Enter email'
                                                                                            onChange={(e)=>{ updateSignupFormFieldData({...signupFormFieldData, email: e.target.value })}}
                                                                                            className='bg-inherit px-2 border-[#e1e1e1] border-[1px] rounded-[5px] w-full h-[42px] text-black text-[16px] focus:border-greyMainBackground focus:bg-greyMainBackground focus:outline-none' 
                                                                                    />
                                                                            </div>

                                                                            <div className='flex flex-col space-y-2 relative'>
                                                                                    <label className='text-[15px] text-[#636363]'>Password*</label>
                                                                                    <div className='relative'>
                                                                                        <input
                                                                                            type={showPassword ? 'text' : 'password'}
                                                                                            name='password'
                                                                                            placeholder='Enter password'
                                                                                            onClick={()=>updatePasswordActive(true)}
                                                                                            onChange={(e)=>{ updateSignupFormFieldData({...signupFormFieldData, password: e.target.value }); checkPasswordStrength(e.target.value)}}
                                                                                            className='bg-inherit px-2 border-[#e1e1e1] border-[1px] rounded-[5px] w-full h-[42px] pr-[30px] text-black text-[16px] focus:border-greyMainBackground focus:bg-greyMainBackground focus:outline-none'
                                                                                        />
                                                                                        <div
                                                                                            className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                                                                            onClick={()=> setShowPassword(!showPassword)}
                                                                                        >
                                                                                            {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                                                                                        </div>
                                                                                    </div>
                                                                            </div>

                                                                            <div className='flex flex-col space-y-2 relative'>
                                                                                    <label className='text-[15px] text-[#636363]'>Confirm password*</label>
                                                                                    <div className='relative'>
                                                                                        <input
                                                                                            type={showPasswordtwo ? 'text' : 'password'}
                                                                                            name='password2'
                                                                                            placeholder='Enter password'
                                                                                            onChange={(e)=>{ updateSignupFormFieldData({...signupFormFieldData, confirmPassword: e.target.value })}}
                                                                                            className='bg-inherit px-2 border-[#e1e1e1] border-[1px] rounded-[5px] w-full h-[42px] pr-[30px] text-black text-[16px] focus:border-greyMainBackground focus:bg-greyMainBackground focus:outline-none'
                                                                                        />
                                                                                        <div
                                                                                            className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                                                                            onClick={()=> setShowPasswordtwo(!showPasswordtwo)}
                                                                                        >
                                                                                            {showPasswordtwo ? <RiEyeOffLine /> : <RiEyeLine />}
                                                                                        </div>
                                                                                    </div>
                                                                            </div>

                                                                            
                                                                            
                                                                            <div className={`${passwordActive ? 'opacity-100 grid' : 'opacity-0 hidden' } transition-properties w-full min-h-[2rem]  grid-cols-2 gap-4`}>
                                                                                    {allPasswordRequirements.map((requirement, index) => (
                                                                                                <div key={index} className='flex space-x-2 justify-start items-center'>
                                                                                                        <div className={`w-[15px] h-[15px]  ${requirement.status  ? 'bg-green-600' : 'bg-[#e1e1e1]'} flex justify-center items-center border border-inherit rounded-full`}>
                                                                                                             <IoIosCheckmark color = 'white'/> 
                                                                                                        </div>
                                                                                                        <p className='text-[14px]'>{requirement.text}</p>
                                                                                                </div>

                                                                                    ))}        
                                                                            </div>
                                                                            
                                                                </div>
    

                                                                <div className='py-[1rem]'></div>
                                                                

                                                                <button className='bg-purpleSubColor px-2 text-white border-purpleSubColor border-[1px] rounded-[5px] w-full h-[45px] transition-properties hover:bg-[#181762]'>Sign up</button>

                                                                <div className='py-[1rem] text-[#3c3b3b] text-[14px]'>Have an account? <Link className='text-black font-bold' to = '/signin'>Sign in</Link></div>
                    
                                                    </div>

                                            </div>                       
                                </div>
                        </div>
                </div>
            )
    }
}

export default Signup