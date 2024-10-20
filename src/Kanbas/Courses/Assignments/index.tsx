import React from "react";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoCaretDown, IoEllipsisVertical } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);
    return (
        <div>
            <AssignmentsControls />

            <ul id="wd-assignments" className="list-group rounded-0">
                <li id="wd-assignments-group" className="list-group-item p-0 mb-5 fs-5 border-gray">
                    <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-3" />
                        <IoCaretDown className="fs-5 me-1" />
                        ASSIGNMENTS
                        <div className="float-end">
                            <span className="border border-dark rounded-5 p-2 fs-6 me-1">40% of Total</span>
                            <BsPlus />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>

                    <ul id="wd-assignment-list" className="list-group rounded-0">
                        {assignments
                            .map((assignment: any) => (
                                <li className="wd-assigment-list-item list-group-item p-3 ps-1">
                                    <div className="row">
                                        <div className="col-1">
                                            <BsGripVertical className="me-1 fs-3" />
                                            <GiNotebook className="text-success fs-4" />
                                        </div>
                                        <div className="col">
                                            <h4>
                                                <a
                                                    className="wd-assignment-link text-reset text-decoration-none"
                                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                    {assignment.title}
                                                </a>
                                            </h4>
                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b>{" "}
                                            May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                                        </div>
                                        <div className="col-1">
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
