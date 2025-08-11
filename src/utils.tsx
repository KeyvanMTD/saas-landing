import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaThreads, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiLightbulb, FiCpu, FiZap, FiLock, FiUsers, FiShield, FiTarget, FiTrendingUp, FiSettings } from "react-icons/fi";

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
    switch (platformName) {
        case 'facebook': {
            return <FaFacebook size={24} className='min-w-fit' />;
        }
        case 'github': {
            return <FaGithub size={24} className='min-w-fit' />;
        }
        case 'instagram': {
            return <FaInstagram size={24} className='min-w-fit' />;
        }
        case 'linkedin': {
            return <FaLinkedin size={24} className='min-w-fit' />;
        }
        case 'threads': {
            return <FaThreads size={24} className='min-w-fit' />;
        }
        case 'twitter': {
            return <FaTwitter size={24} className='min-w-fit' />;
        } 
        case 'youtube': {
            return <FaYoutube size={24} className='min-w-fit' />;
        }
        case 'x': {
            return <FaXTwitter size={24} className='min-w-fit' />;
        }
        default:
            console.log('Platform name not supported, no icon is returned:', platformName);
            return null;
    }

export const getBenefitIconByName = (iconName: string): JSX.Element | null => {
    switch (iconName) {
        case 'FiBrain': {
            return <FiLightbulb size={26} />;
        }
        case 'FiCpu': {
            return <FiCpu size={26} />;
        }
        case 'FiZap': {
            return <FiZap size={26} />;
        }
        case 'FiLock': {
            return <FiLock size={26} />;
        }
        case 'FiUsers': {
            return <FiUsers size={26} />;
        }
        case 'FiShield': {
            return <FiShield size={26} />;
        }
        case 'FiTarget': {
            return <FiTarget size={26} />;
        }
        case 'FiTrendingUp': {
            return <FiTrendingUp size={26} />;
        }
        case 'FiSettings': {
            return <FiSettings size={26} />;
        }
        default:
            console.log('Icon name not supported, no icon is returned:', iconName);
            return null;
    }
}