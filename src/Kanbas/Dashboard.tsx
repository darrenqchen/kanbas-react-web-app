import React from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" 
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" 
                          to="/Kanbas/Courses/4550/Home">
                        <img src="/images/web_dev.jpg" width={200} />
                        <div>
                            <h5>
                                CS4550 Web Development
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2024
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" 
                          to="/Kanbas/Courses/2310/Home">
                        <img src="/images/digital_design.jpg" width={200} />
                        <div>
                            <h5>
                                EECE2310 Digital Design
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2024
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" 
                          to="/Kanbas/Courses/3315/Home">
                        <img src="/images/advanced_writing.jpg" width={200} />
                        <div>
                            <h5>
                                ENGW3315 Advanced Writing
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2024
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" 
                          to="/Kanbas/Courses/2311/Home">
                        <img src="/images/digital_design_lab.jpg" width={200} />
                        <div>
                            <h5>
                                EECE2311 Lab for EECE2310
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2024
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" 
                          to="/Kanbas/Courses/4520/Home">
                        <img src="/images/mobile_app_dev.jpg" width={200} />
                        <div>
                            <h5>
                                CS4520 Mobile Application Development
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2024
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" 
                          to="/Kanbas/Courses/1210/Home">
                        <img src="/images/prof_dev.jpg" width={200} />
                        <div>
                            <h5>
                                CS1210 Professional Development
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2024
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}