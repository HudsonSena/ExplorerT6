import { Routes, Route } from 'react-router-dom';

import { CreateFood } from '../pages/CreateFood';
import { DetailsAdmin } from '../pages/DetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/createFood" element={<CreateFood />} />
            <Route path="/detailsadmin" element={<DetailsAdmin />} />
            <Route path="/homeadmin" element={<HomeAdmin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    )
}