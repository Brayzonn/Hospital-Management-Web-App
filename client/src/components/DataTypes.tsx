//global props
//.....
//Input form props
export interface InputFormProps{
        labelName:  string,
        labelSpan?: string,
        inputValue?: string,
        formValue?: string,
        inputName:  string,
        inputType:  string,
        placeholder?: string,
}

//user token data props
export interface DecodedDataInterface {
        UserId: string, 
        role: string, 
        userName:string,
}

export interface DecodedJwt{
        exp : number,
        iat : number,
        id: DecodedDataInterface
}

//dashboard data props
export interface DashboardDataProps {
        patientCount: number,
        doctorCount: number,
        nurseCount: number,
        admittedPatientsCount: number,
        staffCount: number,
} 

//doctor object props
export interface AddDoctorFormInterface {
        doctorSpecialty: string,
        doctorAddress: string,
        doctorPhone: string,
        doctorEmail: string,
        doctorAge: string,
        doctorName: string,
        doctorDegree: string,
        employmentType: string,
        doctorDepartment: string,
        doctorImage: string,
        doctorJoinDate: string,
}

export interface DoctorProps {
        profile: { doctorName: string; doctorImage: string };
        doctorDepartment: string;
        doctorEmail: string,
        doctorSpecialty: string;
        doctorJoinDate: string;
        doctorAddress: string,
        doctorPhone: string,
        doctorAge: string,
        doctorDegree: string,
        employmentType: string,
        doctorID: string,
}

interface DoctorProfileListProps{
        header: string ,
        data: string,
        identifier: string,
}

export interface DoctorProfileProps {
        doctorData: DoctorProfileListProps[],
        updateDoctorProfileState:React.Dispatch<React.SetStateAction<boolean>>,
        setIsConfirmationDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
        isConfirmationDialogOpen: boolean,
        deleteDoctorFunction: (doctorID: string) => void,
        doctorEditState: boolean,
        updateEditDoctorState:React.Dispatch<React.SetStateAction<boolean>>
        activeDoctor: DoctorProps,
        updateButtonLoadingAnimation: React.Dispatch<React.SetStateAction<boolean>>,
        buttonLoadingAnimation: boolean,
        isDoctorProfileVisible: boolean,
        updateProfileVisibility: React.Dispatch<React.SetStateAction<boolean>>,
}

//admissions
export interface AdmissionProps {
        buttonAction?: ()=> void,
        roomNumber: string,
        checkinDate: string,
        roomStatus: string,
        occupantName: string,
}


//nurse
export interface NurseProps {
        profile: { nurseName: string; nurseImage: string };
        nurseAge: string,
        nurseDateOfBirth: string,
        nurseTimeRole: string,
        nurseDegree: string,
        nurseJoinDate: string,
        nurseID: string,
        nurseEmail: string,
        nursePhone: string,
}

export interface NurseFormProps {
        nurseName: string,
        nurseImage: string,
        nurseAge: string,
        nurseDateOfBirth: string,
        nurseTimeRole: string,
        nurseDegree: string,
        nurseJoinDate: string,
        nurseID: string,
        nurseEmail: string,
        nursePhone: string,
}

//patient
export interface PatientProps {
        profile: { patientName: string; patientImage: string };
        patientID: string;
        patientNotes: string [] ;
        patientAge: string;
        patientBloodType: string;
        patientHeight: string;
        patientGenotype: string;
        patientWeight: string;
        patientConditions: string []; 
        patientJoindate: string;
        patientBirthDate: string;
        admissionStatus: boolean;
        patientPhoneNumber: string;
        patientEmail: string;
        patientEMO: string;
}

//staff
export interface StaffProps {
        profile: { staffName: string, staffImage: string },
        staffAge: string,
        staffDateOfBirth: string,
        staffTimeRole: string,
        staffJoinDate: string,
        staffID: string,
        staffEmail: string,
        staffPhone: string,
        staffAddress: string,
}

export interface StaffFormProps {
        staffName: string,
        staffImage: string,
        staffAge: string,
        staffDateOfBirth: string,
        staffTimeRole: string,
        staffDegree: string,
        staffJoinDate: string,
        staffID: string,
        staffEmail: string,
        staffPhone: string,
}

