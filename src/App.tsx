import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 
         Common Header or Sidebar could go here. 
         For now, we just render the child routes.
       */}
      <Outlet />
    </div>
  );
}

export default App;
