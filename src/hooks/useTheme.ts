import { useContext } from "react";

import context from "providers/theme/context";

const useTheme = () => useContext(context);

export default useTheme;
