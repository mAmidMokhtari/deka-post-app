import { useContext } from 'react';

import Context from 'providers/translate/context';

const useTranslate = () => useContext(Context);

export default useTranslate;
