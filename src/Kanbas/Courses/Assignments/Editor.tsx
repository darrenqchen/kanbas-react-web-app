import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input id="wd-name" className="form-control mb-3" value="A1 - ENV + HTML" />
      <textarea id="wd-description" className="form-control mb-3" rows={10} cols={45}>
        The assignment is available online. Submit a link to the landing page of your Web application running on
        Netlify. The landing page should include the following: Your full name and section links to each of the lab
        assignments, link to the Kanbas application, links to all relevant source code repositories. The kanbas
        application should include a link to navigate back to the landing page.
      </textarea>

      <div className="row mb-3">
        <div className="col-2">
          <label htmlFor="wd-points" className="form-label float-end">
            Points
          </label>
        </div>
        <div className="col-10">
          <input id="wd-points" className="form-control" value={100} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-2">
          <label htmlFor="wd-group" className="float-end">
            Assignment Group
          </label>
        </div>
        <div className="col-10">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-2">
          <label htmlFor="wd-display-grade-as" className="float-end">
            Display Grade as
          </label>
        </div>
        <div className="col-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage" selected>Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-2">
          <label htmlFor="wd-submission-type" className="float-end">
            Submission Type
          </label>
        </div>
        <div className="col-10">
          <div className="border border-1 rounded-3 border-gray p-3">
            <select id="wd-submission-type" className="form-select mb-3">
              <option value="Online" selected>Online</option>
            </select>
            <b>Online Entry Options</b>
            <div className="form-check my-3">
              <input type="checkbox" id="wd-text-entry" className="form-check-input col-1"/>
              <label htmlFor="wd-text-entry" className="form-check-label col-11">Text Entry</label>
            </div>
            <div className="form-check my-3">
              <input type="checkbox" id="wd-website-url" className="form-check-input col-1"/>
              <label htmlFor="wd-website-url" className="form-check-label col-11">Website URL</label>
            </div>
            <div className="form-check my-3">
              <input type="checkbox" id="wd-media-recordings" className="form-check-input col-1"/>
              <label htmlFor="wd-media-recordings" className="form-check-label col-11">Media Recordings</label>
            </div>
            <div className="form-check my-3">
              <input type="checkbox" id="wd-student-annotation" className="form-check-input col-1"/>
              <label htmlFor="wd-student-annotation" className="form-check-label col-11">Student Annotation</label>
            </div>
            <div className="form-check my-3">
              <input type="checkbox" id="wd-file-upload" className="form-check-input col-1"/>
              <label htmlFor="wd-file-upload" className="form-check-label col-11">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-2">
          <label htmlFor="wd-assign-to" className="float-end">
            Assign
          </label>
        </div>
        <div className="col-10">
          <div className="border border-1 rounded-3 border-gray p-3">
            <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label>
            <input id="wd-assign-to" className="form-control mb-3" value="Everyone"/>
            <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
            <input id="wd-due-date" className="form-control mb-3" type="date" value="2024-05-13"/>
            <div className="row">
              <div className="col-6">
                <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
                <input id="wd-available-from" className="form-control mb-3" type="date" value="2024-05-06"/>
              </div>
              <div className="col-6">
                <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                <input id="wd-available-until" className="form-control mb-3" type="date" value="2024-05-20"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div>
          <hr />
          <button className="btn btn-danger float-end">Save</button>
          <button className="btn btn-secondary float-end me-1">Cancel</button>
        </div>
      </div>
      {/* <table>
        <tr>
        <tr>
            <td colSpan={3}>
                <hr/>
            </td>
        </tr>
        <tr>
            <td colSpan={3} align="right">
                <button>Cancel</button> <button>Save</button>
            </td>
        </tr>
    </table> */}
    </div>
  );
}
