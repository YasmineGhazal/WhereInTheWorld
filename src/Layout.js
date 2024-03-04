import { Suspense } from 'react';
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';

function Layout() {
    return (<>
        <Navbar />
        <div className='content'>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    </>
    );
}

export default Layout;
