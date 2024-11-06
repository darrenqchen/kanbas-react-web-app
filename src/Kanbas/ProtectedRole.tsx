import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRole({ role, children }: { role: String, children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === role) {
    return children;
  } else {
    return "";
}}
