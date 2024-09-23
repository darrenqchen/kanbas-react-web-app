import React from "react";

export default function ModuleOptions() {
    return (
        <div id="wd-module-options">
            <button>Collapse All</button>&nbsp;
            <button>View Progress</button>&nbsp;
            <select name="wd-publish">
                <option value="Publish All">Publish All</option>
            </select>&nbsp;
            <button>+ Module</button>&nbsp;
        </div>
    )
}