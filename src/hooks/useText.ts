import { useContext } from "react";
import Context from "providers/text/context";

// ----------------------------------------------------------------------

const useText = () => useContext(Context);

export default useText;
