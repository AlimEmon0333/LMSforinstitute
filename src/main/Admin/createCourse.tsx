import { TextField } from "@mui/material";
import { useState } from "react";
import { Add } from "../../config/firebaseMethods";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function CreateCourse() {
    let [openModal , setOpenModal] = useState<boolean>(false)
    let navigate = useNavigate()
    let [addCourse , setAddCourse] = useState<any>({})
    let fillCourse = (key:string , val:any)=>{
        addCourse[key] = val;
    }
   let addCourseData = () =>{
       Add("courses", addCourse)
           .then((res) => {
               setAddCourse({ ...addCourse })
               setOpenModal(true)
               navigate('/courseList')
               alert('Your Course is added successfully Here is list of your course')
               setOpenModal(false)
           }).catch((err) => {
               console.log(err)
               alert(err)
               setOpenModal(false)
           })
   }
    return (
        <>
            {/* #4a274f it is dark              #fba77d it is light */}
            <div className="container m-2">
                <div>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={openModal}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>
                <div className="container-fluid flex items-center rounded-lg" style={{ backgroundColor: "#4a274f", height: "100px", borderBottom: "5px solid #fba77d" }}>
                    <div className="grid grid-cols-2">
                        <div>
                            <h3 className="text-white fs-1 fw-bold" style={{}}>Course creation <span className="" style={{ color: "#fba77d", fontWeight: "lighter", borderBottom: "3px solid #fba77d " }}>form</span> </h3>
                        </div>
                        <div className="text-end ms-5">
                            <button className="btn mt-2" style={{ backgroundColor: "#fba77d" }} onClick={addCourseData}>Add Course</button>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 rounded-lg" style={{ backgroundColor: "#4a274f", border: "3px solid #fba77d" }}>
                    <div className="grid grid-cols-2  flex justufy-center">
                        <div>
                            <TextField id="filled-basic" label="Course Name" variant="filled" className="m-3 w-75 rounded-lg " color="secondary" sx={{backgroundColor:"#fba77d"}} onChange={(e:any)=>{fillCourse("courseName",e.target.value)}}/>
                        </div>
                        <div>
                            <TextField id="filled-basic" label="Course Duration" variant="filled" className="m-3 w-75 rounded-lg" color="secondary" sx={{ backgroundColor: "#fba77d" }} onChange={(e: any) => { fillCourse("courseDuration",e.target.value)}}/>
                        </div>
                        <div>
                            <TextField id="filled-basic" label="Course Fee" variant="filled" className="m-3 w-75 rounded-lg" color="secondary" sx={{ backgroundColor: "#fba77d" }} onChange={(e: any) => { fillCourse("courseFee",e.target.value)}}/>
                        </div>
                        <div>
                            <TextField id="filled-basic" label="Course Teacher" variant="filled" className="m-3 w-75 rounded-lg" color="secondary" sx={{ backgroundColor: "#fba77d" }} onChange={(e: any) => { fillCourse("courseTeacher",e.target.value)}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}