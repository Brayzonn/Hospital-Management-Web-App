import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { TableColumn } from 'react-data-table-component';

import {DoctorProps} from '../DataTypes';
import { useGlobalContext } from '../../context/useGlobalContext';
import DoctorProfile from "./DoctorProfile";
import AddDoctor from "./AddDoctor";
import Table from "./Table";



import { CiSearch } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";



const AllDoctors = () => {

      const userToken = sessionStorage.getItem('userToken');
      const {allDoctorData} =  useGlobalContext();

      const [buttonLoadingAnimation, updateButtonLoadingAnimation] = useState<boolean>(false)
      const [allDoctorState, updateAllDoctorState] = useState<boolean>(true);
      const [addDoctorState, updateAddDoctorState] = useState<boolean>(false);
      const [doctorEditState, updateEditDoctorState] = useState<boolean>(false);
      const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);

      const [activeDoctorProfile, updateActiveDoctorProfile] = useState<DoctorProps>({
            profile: { doctorName: '', doctorImage: '' },
            doctorDepartment: '',
            doctorEmail: '',
            doctorSpecialty: '',
            doctorJoinDate: '',
            doctorAddress: '',
            doctorPhone: '',
            doctorAge: '',
            doctorDegree: '',
            employmentType: '',
            doctorID: '',
      })


      const [searchResults, setSearchResults] = useState<DoctorProps[]>([]);
      const [isInputActive, setInputIsActive] = useState<boolean>(false);
      const [isProfileVisible, setProfileVisibility] = useState<boolean>(false);



      //filter doctor data based off search parameters
      const searchInputValue = (searchValue: string) => {
            const filtered = allDoctorData.filter((row) =>
                  row.profile.doctorName.toLowerCase().includes(searchValue.toLowerCase())
            );
            setSearchResults(filtered);
      }

      //doctor information for bio display 
      const [doctorData, updateDoctorData] = useState([
            {header: 'Doctor Department', identifier: 'doctorDepartment', data: ''},
            {header: 'Doctor Specialty', identifier: 'doctorSpecialty', data: ''},
            {header: 'Doctor Degree', identifier: 'doctorDegree', data: ''},
            {header: 'Doctor Join Date', identifier: 'doctorJoinDate', data: ''},
            {header: 'Doctor Phone', identifier: 'doctorPhone', data: ''},
            {header: 'Doctor Address', identifier: 'doctorAddress', data: ''},
            {header: 'Doctor ID', identifier: 'doctorID', data: ''},
            {header: 'Employment Type', identifier: 'employmentType', data: ''},
      ])

      //fetch selected doctor data from table and display doctor bio
      const fetchDoctor = (doctorID: string) => {
            const filtered = allDoctorData.find((row) => row.doctorID === doctorID);
  
            if (filtered) {
                  updateActiveDoctorProfile({
                        profile: { ...filtered.profile },
                        doctorDepartment: filtered.doctorDepartment,
                        doctorEmail: filtered.doctorEmail,
                        doctorSpecialty: filtered.doctorSpecialty,
                        doctorJoinDate: filtered.doctorJoinDate,
                        doctorAddress: filtered.doctorAddress,
                        doctorPhone: filtered.doctorPhone,
                        doctorAge: filtered.doctorAge,
                        doctorDegree: filtered.doctorDegree,
                        employmentType: filtered.employmentType,
                        doctorID: filtered.doctorID,
                  });

                  sessionStorage.setItem('activeDoctorProfile', JSON.stringify(filtered))

                  updateDoctorData((prevDoctorData) =>
                        prevDoctorData.map((item) => ({
                              ...item,
                              data: (filtered[item.identifier as keyof DoctorProps] as string) || '',
                        }))
                  );
            
                  setProfileVisibility(true);
            }
      }; 

      const deleteDoctorFunction = async (doctorID: string) =>{
            try {
                  updateButtonLoadingAnimation(true)
                  const deleteDoctorApiCall = await axios.delete(`/api/user/deletedoctor/${doctorID}`,
                  {
                        headers: {
                              Authorization: `Bearer ${userToken}`,
                        },

                        data: {
                              doctorID
                        },
                  });

                  const deleteDoctorErrorResponseData = deleteDoctorApiCall.data.errorMessage;
                  const deleteDoctorResponseStatus: boolean =  deleteDoctorApiCall.data.status;

                  if(deleteDoctorResponseStatus === false){
                          toast.error(deleteDoctorErrorResponseData)
                  }
                  else{
                          toast.success('Doctor deleted successfully')
                  }        
                  updateButtonLoadingAnimation(false)
                  setIsConfirmationDialogOpen(false)
            } catch (error) {
                  console.log(error)  
            } 
            
      }

      //doctor table
      const columns: TableColumn<DoctorProps>[] = [
            {
                  name: 'Doctor',
                  selector: (row) => row.profile.doctorName,
            },
            {
                  name: 'Department',
                  selector: (row) => row.doctorDepartment,
            },

            {
                  name: 'Specialty',
                  selector: (row) => row.doctorSpecialty,
            },

            {
                  name: 'Degree',
                  selector: (row) => row.doctorDegree,
            },

            {
                  name: 'Join Date',
                  selector: (row) => row.doctorJoinDate,
            },

            {
                  name: 'Action',
                  cell: (row) =>(
                        <button onClick={()=> {fetchDoctor(row.doctorID); window.scrollTo(0, 400); }} className="w-[30px] h-[30px] flex justify-center items-center relative border bg-gradient-to-r from-slate-500 to-slate-800 border-white rounded-full">
                              <FaChevronRight className = 'text-white' />  
                        </button>
                  )
            }
      ];


  return (
            <div className='overflow-hidden relative w-[75%] shadow-sm mt-[100px] mb-4 py-4 px-[2rem] mx-6 flex flex-col space-y-6 text-[#161616]  bg-gradient-to-r from-slate-50 to-slate-100border border-white rounded-[15px] lx:w-[82%]'>
                    <h5 className='font-bold tracking-wide text-[14px]'>Doctors</h5>

                    <div className='w-full min-h-[3rem] flex items-center space-x-[4rem] border-b border-b-[#f1f1f1]'>
                          <button
                                onClick={()=> {
                                        updateAddDoctorState(false);
                                        updateAllDoctorState(true)
                                }}
                                className={`h-full text-capitalize font-[500] text-[14px] transition-properties  ${allDoctorState && 'border-b-[#1e293b] border-b-[2.5px]'} `}
                          >
                              All Doctors
                          </button>

                          <button
                                onClick={()=> {
                                        updateAddDoctorState(true);
                                        updateAllDoctorState(false)
                                }}
                                className={`h-full text-capitalize font-[500] text-[14px] transition-properties ${addDoctorState && 'border-b-[#1e293b] border-b-[2.5px]'} `}
                          >
                              Add Doctor
                          </button>
                    </div>

                    {allDoctorState ? 
                            <>  
                                <div className='relative w-full flex justify-between items-center'>
                                        <p className='text-[14px] font-bold'>All Doctors</p>

                                        <div className="relative w-[300px] h-[45px]">
                                            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <input 
                                                type='text'
                                                name='searchdoctors'
                                                onBlur={()=> setInputIsActive(false) }
                                                onChange={(e)=> {searchInputValue(e.target.value); setInputIsActive(true)}}
                                                placeholder='Search'
                                                className='pl-8 bg-[#f3f3f8] px-2 border-white border-[1px] rounded-[5px] w-[300px] h-[45px] text-black text-[16px] focus:border-greyMainBackground focus:bg-greyMainBackground focus:outline-none'
                                            />
                                        </div>
                                </div>

                                <div className="min-h-[10rem] w-full flex flex-col justify-center items-center space-y-[2rem]">
                                        {!isInputActive ?
                                            <Table columns={columns} data={allDoctorData} />
                                                :   
                                            <Table columns={columns} data={searchResults} />
                                        }
                                        < DoctorProfile  buttonLoadingAnimation = {buttonLoadingAnimation} updateButtonLoadingAnimation={updateButtonLoadingAnimation} deleteDoctorFunction = {deleteDoctorFunction} setIsConfirmationDialogOpen ={setIsConfirmationDialogOpen} isConfirmationDialogOpen ={isConfirmationDialogOpen} updateEditDoctorState ={updateEditDoctorState} activeDoctor = {activeDoctorProfile} doctorEditState={doctorEditState} updateDoctorProfileState = {setProfileVisibility} doctorData={doctorData} isDoctorProfileVisible={isProfileVisible} updateProfileVisibility={setProfileVisibility}/> 
                                </div>
                            </> 
                            : 
                                <AddDoctor />
                    }
                   
                  
            </div>
  )
}

export default AllDoctors