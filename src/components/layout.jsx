import { IconHome, IconEye, IconHeart, IconChartLine, IconClock, IconCalendar, IconThumbUp, IconSettings } from "@tabler/icons-react";
import LayoutItem from "./layoutitem";

function Layout () {
    return (
        <div className="w-64 h-screen bg-[#211F41] text-white p-5 flex flex-col fixed">
             <div className="flex items-center space-x-2 mb-5">
                <span className="flex items-center space-x-2 mb-3 text-red-500 text-3xl hover:scale-110 transition">🎥</span>
                <h1 className="text-2xl font-bold">ReactFlix</h1>
             </div>

             <nav className="flex flex-col space-y-4">
             <LayoutItem icon={<IconHome size={24} />} text="Home" link="/"/>
             <LayoutItem icon={<IconEye size={24} />} text="Watchlist" link="/watchList"/>
             <LayoutItem icon={<IconHeart size={24} />} text="Favorites" link="/favorites"/>
             <LayoutItem icon={<IconChartLine size={24} />} text="Trending" link="/person"/>
             <LayoutItem icon={<IconClock size={24}/>} text="New Releases" link="/"/>
             <LayoutItem icon={<IconCalendar size={24}/>} text="Coming Soon" link="/"/>
             <LayoutItem icon={<IconThumbUp size={24} />} text="Find Movies Like" link="/"/>
             <LayoutItem icon={<IconSettings size={24}/>} text="Settings" link="/"/>

             </nav>
        </div>      
    );
};

 
export default Layout