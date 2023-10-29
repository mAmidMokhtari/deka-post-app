import { useContext } from "react";
import Context from "providers/user/context";

const useUser = () => useContext(Context);

export default useUser;
