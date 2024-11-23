import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, actions) => {
            state.enrollments = actions.payload;
        },
        addEnrollment: (state, { payload: enrollment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, newAssignment] as any;
        },
        deleteEnrollment: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.filter((m: any) => m._id !== enrollment._id);
        },
    },
});
export const { setEnrollments, addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
