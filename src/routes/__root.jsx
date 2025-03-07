import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Layout from '../components/layout'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className='flex flex-row bg-[#2F2D51] h-max'>
        <div className='basis-64 flex-grow-0 flex-shrink-0'>
            <Layout/>
        </div>
        <div className='flex flex-grow'  >
            <Outlet />
        </div>
    </div>
      <TanStackRouterDevtools />
    </>
  ),
})