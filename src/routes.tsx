import { Routes, Route, Outlet } from 'react-router-dom'
import { TeamManagement } from './pages/TeamManagement/TeamManagement'
import { CardSale } from './pages/CardSale/CardSale'
import { AppDrawer }  from './layout/AppDrawer';

const MainSection = () => {
  return (
    <div>
      <AppDrawer children={<Outlet />}/>
    </div>
  );
}

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainSection />}>
            <Route path="/" element={<TeamManagement />} />
            <Route path="/cardSale" element={<CardSale />} />
        </Route>
    </Routes>
  )
}
