import axios from 'axios'
import StudentNav from './StudentNav'

import React, { useEffect, useState } from 'react'

const ViewAll = () => {



    const [isLoading, changeLoading] = useState(true)

    const [studentData, changeData] = useState(
        { "status": "success", "data": [] }

    )

    const FetchDataFromApi = () => {
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response) => {
                changeLoading(false)
                changeData(response.data)
            }
        ).catch(
            (error) => {
                alert("Something Went Wrong")
            }
        )
    }

    useEffect(() => { FetchDataFromApi() }, [])


    return (
        <div>
            <StudentNav />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered table-stripped table-hover table-success ">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Roll No.</th>
                                    <th scope="col">Admission No</th>
                                    <th scope="col">College</th>
                                </tr>
                            </thead>
                            {isLoading ? (<div class="d-flex align-items-center">
                                <strong role="status">Loading...</strong>
                                <div class="spinner-border ms-auto" aria-hidden="true"></div>
                            </div>
                            ) : (<tbody>
                                {studentData.data.map(
                                    (value, index) => {
                                        return (<tr>
                                            <th>{value.name}</th>
                                            <td>{value.roll_number}</td>
                                            <td>{value.admission_number}</td>
                                            <td>{value.college}</td>
                                        </tr>)
                                    }
                                )}
                            </tbody>)}

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll