import React from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-3">
                    <div className="wd-dashboard-course col" style={{width:"270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                to="/Kanbas/Courses/4550/Home">
                                <img src="/images/web_dev.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4550 Web Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                to="/Kanbas/Courses/2310/Home">
                                <img src="/images/digital_design.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        EECE2310 Digital Design
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                to="/Kanbas/Courses/3315/Home">
                                <img src="/images/advanced_writing.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ENGW3315 Advanced Writing
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                to="/Kanbas/Courses/2311/Home">
                                <img src="/images/digital_design_lab.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        EECE2311 Lab for EECE2310
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                to="/Kanbas/Courses/4520/Home">
                                <img src="/images/mobile_app_dev.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4520 Mobile Application Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                to="/Kanbas/Courses/1210/Home">
                                <img src="/images/prof_dev.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                    CS1210 Professional Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}