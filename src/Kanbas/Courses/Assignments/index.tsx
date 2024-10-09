import React from "react";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoCaretDown, IoEllipsisVertical } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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
            <li id="wd-assigment-list-item" className="list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1">
                  <BsGripVertical className="me-1 fs-3" />
                  <GiNotebook className="text-success fs-4" />
                </div>
                <div className="col">
                  <h4>
                    <a
                      className="wd-assignment-link text-reset text-decoration-none"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A1
                    </a>
                  </h4>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |{" "}
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
                <div className="col-1">
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li id="wd-assigment-list-item" className="list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1">
                  <BsGripVertical className="me-1 fs-3" />
                  <GiNotebook className="text-success fs-4" />
                </div>
                <div className="col">
                  <h4>
                    <a
                      className="wd-assignment-link text-reset text-decoration-none"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A2
                    </a>
                  </h4>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |{" "}
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
                <div className="col-1">
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li id="wd-assigment-list-item" className="list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1">
                  <BsGripVertical className="me-1 fs-3" />
                  <GiNotebook className="text-success fs-4" />
                </div>
                <div className="col">
                  <h4>
                    <a
                      className="wd-assigment-list-item-link text-reset text-decoration-none"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A3
                    </a>
                  </h4>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
                <div className="col-1">
                  <LessonControlButtons/>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
