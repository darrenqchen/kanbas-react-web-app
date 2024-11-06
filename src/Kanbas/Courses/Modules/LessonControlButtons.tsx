import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import ProtectedButtons from "../../ProtectedButtons";
import { FaTrash } from "react-icons/fa";
export default function LessonControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
