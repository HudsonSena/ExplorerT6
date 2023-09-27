import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

import { CreateFood } from '../pages/CreateFood';
import { DetailsAdmin } from '../pages/DetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';

export function AppUserRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />

            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />

            <Route path="/homeadmin" element={<HomeAdmin />} />
            <Route path="/detailsadmin" element={<DetailsAdmin />} />
            <Route path="/createfood" element={<CreateFood />} />
        </Routes>
    )
}