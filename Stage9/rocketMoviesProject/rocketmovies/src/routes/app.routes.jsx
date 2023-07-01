import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MoviePreview } from '../pages/MoviePreview';
import { CreateMovie } from '../pages/CreateMovie';
import { Perfil } from '../pages/Perfil';

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/createmovie' element={<CreateMovie/>} />
            <Route path='/perfil' element={<Perfil/>} />
            <Route path='/moviepreview/:id' element={<MoviePreview/>} />
        </Routes>
    )
}