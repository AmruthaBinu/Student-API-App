import React, { useState } from 'react';
import StudentNav from './StudentNav';

const Login = () => {
    const [studentData, changeData] = useState({
        username: "",
        password: ""
    });

    const inputHandler = (event) => {
        changeData({ ...studentData, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        console.log(studentData);
    };

    return (
        <div>
            <StudentNav />
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card shadow rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
                    <img
                        src="https://img.freepik.com/premium-vector/beautiful-school-nature_99326-94.jpg?w=360"
                        className="card-img-top rounded-top"
                        alt="Welcome"
                        style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-center">WELCOME STUDENT APP</h5>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" value={studentData.username} onChange={inputHandler}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={studentData.password} onChange={inputHandler}
                            />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" onClick={readValues}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
