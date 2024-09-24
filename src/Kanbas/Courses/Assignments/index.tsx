import React from "react";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />&nbsp;
      <button id="wd-add-assignment-group">+ Group</button>&nbsp;
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
            </a><br/>
          <span>Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a className="ws-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
            A2 - CSS + BOOTSTRAP
          </a><br/>
          <span>Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a className="ws-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
            A2 - CSS + BOOTSTRAP
          </a><br/>
          <span>Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
        </li>
      </ul>
    </div>
  );
}
