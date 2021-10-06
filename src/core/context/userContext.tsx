import { createContext } from "react";
import { session } from "../../features/auth/domain/services/session";

const UserContext = createContext(session.getUser());

export default UserContext;
