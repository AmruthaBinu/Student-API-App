import React, { useState } from 'react'
import StudentNav from './StudentNav'
import axios from 'axios'

const AddStudent = () => {



    const [input, changeData] = useState(
        {
            name: "",
            roll_number: "",
            admission_number: "",
            college: ""
        }
    )


    const inputHandler=(event)=>{
        changeData({...input,[event.target.name]:event.target.value})
    }


    const readValues=()=>{
        console.log(input)
        axios.post("http://18.144.111.41/student_api.php",input).then(
            (Response)=()=>{
                alert("Submitted Successfully")
            }
        ).catch()
    }


return (
    <div>
        <StudentNav />
        <br />
        <div className="container">
            <div className="row">
                <h3 className="text-center text-primary">Add Student Details</h3>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Roll No.</label>
                            <input type="text" className="form-control" name="roll_number" value={input.value} onChange={inputHandler} />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Admission No.</label>
                            <input type="text" className="form-control" name="admission_number" value={input.admission_number} onChange={inputHandler} />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name="college" value={input.college} onChange={inputHandler} />

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValues}>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default AddStudent