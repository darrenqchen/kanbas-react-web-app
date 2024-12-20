import React from "react";
import * as db from "../../Database";
import { Link, useParams } from "react-router-dom";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((assignment: any) => assignment._id === aid)
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="form-label"> Assignment Name </label>
            <input id="wd-name" className="form-control mb-3" value={assignment?.title} />
            <textarea id="wd-description" className="form-control mb-3" rows={10} cols={45}>
                {assignment?.description}
            </textarea>

            <div className="row mb-3">
                <div className="col-2">
                    <label htmlFor="wd-points" className="form-label float-end">Points</label>
                </div>
                <div className="col-10">
                    <input id="wd-points" className="form-control" value={assignment?.points} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-2">
                    <label htmlFor="wd-group" className="float-end">Assignment Group</label>
                </div>
                <div className="col-10">
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-2">
                    <label htmlFor="wd-display-grade-as" className="float-end">Display Grade as</label>
                </div>
                <div className="col-10">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="Percentage" selected>Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-2">
                    <label htmlFor="wd-submission-type" className="float-end">Submission Type</label>
                </div>
                <div className="col-10">
                    <div className="border border-1 rounded-3 border-gray p-3">
                        <select id="wd-submission-type" className="form-select mb-3">
                            <option value="Online" selected>Online</option>
                        </select>
                        <b>Online Entry Options</b>
                        <div className="form-check my-3">
                            <input type="checkbox" id="wd-text-entry" className="form-check-input col-1" />
                            <label htmlFor="wd-text-entry" className="form-check-label col-11">Text Entry</label>
                        </div>
                        <div className="form-check my-3">
                            <input type="checkbox" id="wd-website-url" className="form-check-input col-1" />
                            <label htmlFor="wd-website-url" className="form-check-label col-11">Website URL</label>
                        </div>
                        <div className="form-check my-3">
                            <input type="checkbox" id="wd-media-recordings" className="form-check-input col-1" />
                            <label htmlFor="wd-media-recordings" className="form-check-label col-11">Media Recordings</label>
                        </div>
                        <div className="form-check my-3">
                            <input type="checkbox" id="wd-student-annotation" className="form-check-input col-1" />
                            <label htmlFor="wd-student-annotation" className="form-check-label col-11">Student Annotation</label>
                        </div>
                        <div className="form-check my-3">
                            <input type="checkbox" id="wd-file-upload" className="form-check-input col-1" />
                            <label htmlFor="wd-file-upload" className="form-check-label col-11">File Uploads</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-2">
                    <label htmlFor="wd-assign-to" className="float-end">Assign</label>
                </div>
                <div className="col-10">
                    <div className="border border-1 rounded-3 border-gray p-3">
                        <label htmlFor="wd-assign-to" className="form-label">
                            <b>Assign to</b>
                        </label>
                        <input id="wd-assign-to" className="form-control mb-3" value="Everyone" />
                        <label htmlFor="wd-due-date" className="form-label">
                            <b>Due</b>
                        </label>
                        <input id="wd-due-date" className="form-control mb-3" type="date" value={assignment?.dueDate} />
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="wd-available-from" className="form-label">
                                    <b>Available from</b>
                                </label>
                                <input
                                    id="wd-available-from"
                                    className="form-control mb-3"
                                    type="date"
                                    value={assignment?.availableFromDate}
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="wd-available-until" className="form-label">
                                    <b>Until</b>
                                </label>
                                <input
                                    id="wd-available-until"
                                    className="form-control mb-3"
                                    type="date"
                                    value={assignment?.availableUntilDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div>
                    <hr />
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger float-end">Save</Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary float-end me-1">Cancel</Link>
                </div>
            </div>
        </div>
    );
}
