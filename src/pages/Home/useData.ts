import { useEffect } from 'react';

import { DASHBOARD_ROUTE } from 'constants/routes';
import { useNavigate } from 'react-router-dom';

export const useData = () => {
    const navigate = useNavigate()
    useEffect(() => {
       navigate(DASHBOARD_ROUTE)
    }, [])

    return {}
}