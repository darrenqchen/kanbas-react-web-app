import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoCaretDown, IoEllipsisVertical } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { deleteAssignment } from "./reducer";
import ProtectedRole from "../../ProtectedRole";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const [deleteAid, setDeleteAid] = useState("");

    return (
        <div id="wd-assignments">
            <div className="row mb-4">
                <div className="col-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white rounded-0 border-end-0">
                                <CiSearch className="fs-2" />
                            </span>
                        </div>
                        <input
                            id="wd-search-assignment"
                            className="form-control col-6 rounded-0 border-start-0"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <ProtectedRole role="FACULTY">
                    <div className="col-6">
                        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}>
                            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                Assignment
                            </button>
                        </Link>
                        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Group
                        </button>
                    </div>
                </ProtectedRole>
            </div>

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
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li className="wd-assigment-list-item list-group-item p-3 ps-1">
                                    <div className="row">
                                        <div className="col-1">
                                            <BsGripVertical className="me-1 fs-3" />
                                            <GiNotebook className="text-success fs-4" />
                                        </div>
                                        <div className="col">
                                            <h4>
                                                <Link
                                                    className="wd-assignment-link text-reset text-decoration-none"
                                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                    {assignment.title}
                                                </Link>
                                            </h4>
                                            <span className="text-danger">Multiple Modules</span> |{" "}
                                            <b>Not available until</b> {assignment.availableFromDate} | <b>Due</b>{" "}
                                            {assignment.dueDate} | {assignment.points} pts
                                        </div>
                                        <div className="col-1">
                                            <LessonControlButtons />
                                            <ProtectedRole role="FACULTY">
                                                <FaTrash
                                                    className="text-danger me-2 mt-1 float-end"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#wd-delete-assignment-dialog"
                                                    onClick={() => setDeleteAid(assignment._id)}
                                                />
                                            </ProtectedRole>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>

            <div
                id="wd-delete-assignment-dialog"
                className="modal fade"
                data-bs-backdrop="static"
                data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Are you want you want to remove this assignment?
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            {/* <p>Are you sure you want to remove this assignment?</p> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel{" "}
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(deleteAssignment(deleteAid));
                                }}
                                type="button"
                                data-bs-dismiss="modal"
                                className="btn btn-danger">
                                Delete{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
