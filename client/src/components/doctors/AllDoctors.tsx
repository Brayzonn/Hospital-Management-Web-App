import { CiSearch } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import Table from "../globalComponents/Table";
import { useState } from "react";
import { TableColumn } from 'react-data-table-component';



const AllDoctors = () => {

  const [allDoctorState, updateAllDoctorState] = useState<boolean>(true)
  const [addDoctorState, updateAddDoctorState] = useState<boolean>(false)

  const [searchResults, setSearchResults] = useState<DataRow []>([])
  const [isInputActive, setInputIsActive] = useState<boolean>(false)

  //filter doctor data based off search parameters
  const searchInputValue = (searchValue: string) => {
        const filtered : DataRow[]= data.filter((row) =>
            row.profile.doctorname.toLowerCase().includes(searchValue.toLowerCase())
        );

        setSearchResults(filtered);
  }


  interface DataRow {
          profile: { doctorname: string; doctorImage: string };
          doctorDepartment: string;
          doctorSpecialty: string;
          doctorDegree: string;
          doctorJoinDate: string;
  }

  //data for table
  const columns: TableColumn<DataRow>[] = [
          {
                name: 'Doctor',
                selector: (row) => row.profile.doctorname,
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
                      <button onClick={()=> alert(row.doctorDegree)} className="w-[30px] h-[30px] flex justify-center items-center relative border bg-purpleSubColor border-purpleSubColor rounded-full">
                            <FaChevronRight className = 'text-white' />  
                      </button>
                )
          }
  ];


  const data = [
          {
                profile: {doctorname: 'Esther Howard', doctorImage : ''},
                doctorDepartment: 'Dental',
                doctorSpecialty: 'Dental',
                doctorDegree: 'MBBS, MS',
                doctorJoinDate: '20-10-2024',
          },
          {
                profile: {doctorname: 'Doctor 1', doctorImage : '' },
                doctorDepartment: 'Department 1',
                doctorSpecialty: 'Specialty 1',
                doctorDegree: 'Degree 1',
                doctorJoinDate: 'Date 1',
          },

          {
                profile: {doctorname: 'Doctor 1', doctorImage : ''},
                doctorDepartment: 'Department 1',
                doctorSpecialty: 'Specialty 1',
                doctorDegree: 'Degree 1',
                doctorJoinDate: 'Date 1',
          },

          {
                profile: {doctorname: 'Doctor 1', doctorImage : ''},
                doctorDepartment: 'Department 1',
                doctorSpecialty: 'Specialty 1',
                doctorDegree: 'Degree 1',
                doctorJoinDate: 'Date 1',
          },

          {
                profile: {doctorname: 'Doctor 1', doctorImage : ''},
                doctorDepartment: 'Department 1',
                doctorSpecialty: 'Specialty 1',
                doctorDegree: 'Degree 1',
                doctorJoinDate: 'Date 1',
          },

          {
                profile: {doctorname: 'Doctor 1', doctorImage : ''},
                doctorDepartment: 'Department 1',
                doctorSpecialty: 'Specialty 1',
                doctorDegree: 'Degree 1',
                doctorJoinDate: 'Date 1',
          },
      
  ];
  


  return (
            <div className='w-[75%] shadow-sm p-4 m-6 flex flex-col space-y-6 text-[#161616] bg-white border border-white rounded-[15px] lx:w-[82%]'>
                    <h5 className='font-bold tracking-wide'>Doctors</h5>

                    <div className='w-full min-h-[3rem] flex items-center space-x-[4rem] border-b border-b-[#f1f1f1]'>
                          <button
                              onClick={()=> {
                                updateAddDoctorState(false);
                                updateAllDoctorState(true)
                              }}
                              className={`h-full text-capitalize font-[500] text-[14px] transition-properties  ${allDoctorState && 'border-b-purpleSubColor border-b-[2.5px]'} `}
                          >
                              All Doctors
                          </button>

                          <button
                              onClick={()=> {
                                updateAddDoctorState(true);
                                updateAllDoctorState(false)
                              }}
                              className={`h-full text-capitalize font-[500] text-[14px] transition-properties ${addDoctorState && 'border-b-purpleSubColor border-b-[2.5px]'} `}
                          >
                              Add Doctor
                          </button>
                    </div>

                    {allDoctorState ? 
                            <>  
                                <div className='w-full flex justify-between items-center'>
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
                                            <Table columns={columns} data={data} />
                                            :
                                            <Table columns={columns} data={searchResults} />
                                        }
                                </div>
                            </> 
                            : 
                            <>
                                <div className="">

                                </div>
                            </>
                    }
                    
            </div>
  )
}

export default AllDoctors