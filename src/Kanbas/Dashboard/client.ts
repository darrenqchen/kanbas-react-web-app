import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;


export const enrollUserInCourse = async (userId: String, courseId: String) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};
export const findEnrollmentsForUser = async (userId: String) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return response.data;
};
export const deleteEnrollment = async (enrollmentId: String) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
    return response.data;
};
