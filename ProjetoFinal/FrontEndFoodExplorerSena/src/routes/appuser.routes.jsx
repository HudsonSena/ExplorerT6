import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

export function AppUserRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    )
}