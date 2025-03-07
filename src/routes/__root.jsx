import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Layout from '../components/layout'
import SearchBar from '../components/searchBar';


export const Route = createRootRoute({
  component: () => (
    <>
    <div className='flex flex-col min-h-screen'>
        <div>
          <SearchBar></SearchBar>
        </div>
        <div className='flex flex-grow bg-[#2F2D51]'  >
            <Outlet />
        </div>
    </div>
      <TanStackRouterDevtools />
    </>
  ),
})