import { NavLink } from 'react-router-dom';

const Navigation = ({navState, setNavState}) => {
    // const [ navState, setNavState] = useState(true);
    console.log(navState)
    const handleIsTrue = () => {
        if(navState){
            setNavState(false);
        }
        else{
            setNavState(true);
        }
    }

    return (
        <div className="flex flex-col justify-between h-screen bg-gray-700">
            <div className="">
                <ul>
                    <NavLink to="home" ><li className="truncate p-2 hover:bg-gray-400 text-white">{ navState ? "Home" :  <i className='far fa-question-circle' ></i>}</li></NavLink>
                    <NavLink to="about" ><li className="truncate p-2 hover:bg-gray-400 text-white">{ navState ? "About Us" :  <i className='far fa-question-circle' ></i>}</li></NavLink>
                </ul>
            </div>
            <div  onClick={handleIsTrue} className="border-2">
                 <button className="text-xl text-white"><li>&#8644;</li></button>
            </div>
        </div>
    );
};

// className="truncate p-2 hover:bg-gray-400 text-white"
export default Navigation;