import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import ProtectedButtons from "../../ProtectedButtons";
import { Link, useLocation, useParams } from "react-router-dom";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
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
                <ProtectedButtons>
                    <div className="col-6">
                        <Link to="./new">
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
                </ProtectedButtons>
            </div>
        </div>
    );
}
