import { BrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './auth.routes';
import { AppAdminRoutes } from './appadmin.routes';
import { AppUserRoutes } from './appuser.routes';

export function Routes() {
    return (
        <BrowserRouter>
            <AppAdminRoutes />
        </BrowserRouter>
    )
}