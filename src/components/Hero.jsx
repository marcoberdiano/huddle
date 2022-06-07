import {ReactComponent as Logo} from '../images/logo.svg';
import illustration from '../images/illustration-mockups.svg';


const Hero = () => {
    return ( 
        <div className='hero-container'>
            <div className='hero-left'>
                <Logo className='logo'/>
                <img className='illustration' src={illustration} alt="illustration" />
            </div>

            <div className='hero-right'>
                <div className='hero-heading'>
                    <h1 className='title'>Build The Community Your Fans Will Love</h1>
                    <p className='subtitle'>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                        Create connections with your users as you engage in genuine discussion.
                    </p>
                    <button className='btn'>Register</button>
                </div>
            </div>

        </div>
     );
}
 
export default Hero;