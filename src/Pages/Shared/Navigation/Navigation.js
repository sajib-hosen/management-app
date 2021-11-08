import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faHome, faUserCircle, faInfoCircle, faFileMedical, faBook, faShoppingBag, faStoreAlt, faListUl } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({navState, setNavState}) => {
    console.log(navState)
    const handleIsTrue = () => {
        if(navState){
            setNavState(false);
        }
        else{
            setNavState(true);
        }
    }

    const iBook = <FontAwesomeIcon icon={faBook} />
    const iHome = <FontAwesomeIcon icon={faHome} />
    const iUser = <FontAwesomeIcon icon={faUserCircle} />
    const iInfo = <FontAwesomeIcon icon={faInfoCircle} />
    const iCreatFile = <FontAwesomeIcon icon={faFileMedical} />
    const iShoppingBag = <FontAwesomeIcon icon={faShoppingBag} />
    const iList = <FontAwesomeIcon icon={faListUl} />
    const iShop = <FontAwesomeIcon icon={faStoreAlt} />

    return (
        <div className="flex flex-col justify-between h-screen bg-gray-700">
            <div className="">
                <ul>
                    <NavLink to="home" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Home" : iHome}</li></NavLink>
                    <NavLink to="sales" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Sale" : iShop}</li></NavLink>
                    <NavLink to="purchase" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Purchase" : iShoppingBag}</li></NavLink>
                    <NavLink to="creat-file" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Creat File" : iCreatFile}</li></NavLink>
                    <NavLink to="list" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "List(s)" : iList}</li></NavLink>
                    <NavLink to="accounts" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Accounts" : iBook}</li></NavLink>
                    <NavLink to="about" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "About Us" : iInfo}</li></NavLink>
                    <NavLink to="login" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Log In" : iUser}</li></NavLink>
                </ul>
            </div>
            <div  onClick={handleIsTrue} className="border-2">
                 <button className="text-xl text-white"><li>&#8644;</li></button>
            </div>
        </div>
    );
};

export default Navigation;