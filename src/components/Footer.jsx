import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
const Footer = () => {
    return ( 
        <div className='social-container'>
            <div className='social'>
                <FaFacebookF size={20}/>
            </div>
            <div className='social'>
                <FaTwitter size={20}/>
            </div>
            <div className='social'>
                <FaInstagram size={20}/>
            </div>
        </div>
     );
}
 
export default Footer;