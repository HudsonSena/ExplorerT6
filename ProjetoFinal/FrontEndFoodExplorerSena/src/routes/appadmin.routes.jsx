import { Routes, Route } from "react-router-dom";

import { CreateFood } from "../pages/CreateFood";
import { UpdateFood } from "../pages/UpdateFood";
import { DetailsAdmin } from "../pages/DetailsAdmin";
import { HomeAdmin } from "../pages/HomeAdmin";

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/createfood" element={<CreateFood />} />
      <Route path="/updatefood/:id" element={<UpdateFood />} />
      <Route path="/detailsadmin/:id" element={<DetailsAdmin />} />
    </Routes>
  );
}
