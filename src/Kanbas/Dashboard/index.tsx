import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "../Database";
import ProtectedRole from "../ProtectedRole";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [showAll, setShowAll] = useState(false);
    const dispatch = useDispatch();

    const enroll = (courseId: String) => {
        dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
    };
    const unenroll = (courseId: String) => {
        dispatch(
            deleteEnrollment(
                enrollments.find(
                    (enrollment: { user: string; course: string }) =>
                        enrollment.user === currentUser._id && enrollment.course === courseId
                )
            )
        );
    };
    const isEnrolled = (courseId: String) => {
        const ret = enrollments.filter(
            (enrollment: { user: string; course: string }) =>
                enrollment.user === currentUser._id && enrollment.course === courseId
        );
        return ret.length > 0;
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <ProtectedRole role="FACULTY">
                <h5>
                    New Course
                    <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                        Add
                    </button>
                    <button
                        className="btn btn-warning float-end me-2"
                        onClick={updateCourse}
                        id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                <br />
                <input
                    value={course.name}
                    className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <textarea
                    value={course.description}
                    className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })}
                />
                <hr />
            </ProtectedRole>
            <ProtectedRole role="STUDENT">
                <button className="btn btn-primary float-end" id="wd-show-enrollments-click" onClick={() => setShowAll(!showAll)}>
                    Enrollments
                </button>
                <br />
                <hr />
            </ProtectedRole>
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        // .filter((course) =>
                        //     enrollments.some(
                        //         (enrollment: { user: string; course: string }) =>
                        //             enrollment.user === currentUser._id && enrollment.course === course._id
                        //     )
                        // )
                        .map((course) => {
                            if (!showAll && !isEnrolled(course._id)) {
                                return "";
                            } else {
                                return (
                                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                        <div className="card rounded-3 overflow-hidden">
                                            <Link
                                                to={isEnrolled(course._id) ? `/Kanbas/Courses/${course._id}/Home` : "./"}
                                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                                <img src="/images/reactjs.jpg" width="100%" height={160} />
                                                <div className="card-body">
                                                    <h5 className="wd-dashboard-course-title card-title">
                                                        {course.name}{" "}
                                                    </h5>
                                                    <p
                                                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                                                        style={{ maxHeight: 100 }}>
                                                        {course.description}{" "}
                                                    </p>
                                                    <button className="btn btn-primary"> Go </button>
                                                    <ProtectedRole role="FACULTY">
                                                        <button
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                deleteCourse(course._id);
                                                            }}
                                                            className="btn btn-danger float-end"
                                                            id="wd-delete-course-click">
                                                            Delete
                                                        </button>
                                                        <button
                                                            id="wd-edit-course-click"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                setCourse(course);
                                                            }}
                                                            className="btn btn-warning me-2 float-end">
                                                            Edit
                                                        </button>
                                                    </ProtectedRole>
                                                    <ProtectedRole role="STUDENT">
                                                        {isEnrolled(course._id) ? (
                                                            <div>
                                                                <button
                                                                    className="btn btn-danger mx-2"
                                                                    onClick={(event) => {
                                                                        event.preventDefault();
                                                                        unenroll(course._id);
                                                                    }}>
                                                                    Unenroll
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    className="btn btn-success mx-2"
                                                                    onClick={(event) => {
                                                                        event.preventDefault();
                                                                        enroll(course._id);
                                                                    }}>
                                                                    Enroll
                                                                </button>
                                                            </>
                                                        )}
                                                    </ProtectedRole>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                </div>
            </div>
        </div>
    );
}
