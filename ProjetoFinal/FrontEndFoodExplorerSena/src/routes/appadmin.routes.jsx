import { Routes, Route } from 'react-router-dom';

import { CreateFood } from '../pages/CreateFood';
import { DetailsAdmin } from '../pages/DetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';


export function AppAdminRoutes() {
    return (
        <Routes>
            <Route path="/createfood" element={<CreateFood />} />
            <Route path="/detailsadmin" element={<DetailsAdmin />} />
            <Route path="/homeadmin" element={<HomeAdmin />} />
        </Routes>
    )
}