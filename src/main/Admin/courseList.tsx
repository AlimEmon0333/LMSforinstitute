import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Add, Get } from "../../config/firebaseMethods";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}


export default function CourseList() {
    let [CourseList, setCourseList] = useState<any>([])
    let [openModal, setOpenModal] = useState<boolean>(false)

    const getCourselist = () => {
        setOpenModal(true)
        Get('courses')
            .then((res) => {
                setCourseList([...res])
                setOpenModal(false)
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }

    let navigate = useNavigate()
    useEffect(() => { getCourselist() }, [])

    //  states for course table


    return (
        <>
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
                        <h3 className="text-white fs-1 fw-bold" style={{}}>Course <span className="" style={{ color: "#fba77d", fontWeight: "lighter", borderBottom: "3px solid #fba77d " }}> List</span> </h3>
                    </div>
                    <div className="text-end ms-5">
                    </div>
                </div>
            </div>
            <div className="">
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course duration</th>
                            <th>Course fee</th>
                            <th>Course teacher</th>
                        </tr>
                    </thead>
                    {CourseList ? (CourseList.map((x: any, i: any) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>{x.courseName}</td>
                                        <td>{x.courseDuration}</td>
                                        <td>{x.courseFee}</td>
                                        <td>{x.courseTeacher}</td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })) : ("No any course is added")}
                </table>
            </div>
        </>
    )

}