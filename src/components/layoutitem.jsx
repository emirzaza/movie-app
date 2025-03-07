import { Link } from "@tanstack/react-router";

function LayoutItem({ icon, text, link }) {
    return (
        <Link 

            to={link}
            className="flex items-center space-x-3 p-2 rounded-lg transition-all text-gray-300 
                hover:text-[#F93E61]">
            <span className="hover:text-red-500">{icon}</span>
            <span className="text-lg hover:text-red-500">{text}</span>
        </Link>
    );
}

export default LayoutItem