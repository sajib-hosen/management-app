import { Link } from 'react-router-dom';

const Navigation = ({navState, setNavState}) => {
    // const [ navState, setNavState] = useState(true);
    
    const handleIsTrue = () => {
        if(navState){
            setNavState(false);
        }
        else{
            setNavState(true);
        }
    }
    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="border-2">
                <ul>
                    <li><Link to="home" >{ navState ? "Home" : <i className="fa fa-home"></i>}</Link></li>
                    <li><Link to="about" >{ navState ? "About Us" :  <i className='far fa-question-circle' ></i>}</Link></li>
                </ul>
            </div>
            <div className="border-2">
                 <button onClick={handleIsTrue} className="text-xl"><li>&#8644;</li></button>
            </div>
        </div>
    );
};

export default Navigation;