import React, {useState} from 'react'

import { Link } from 'react-router-dom'
import './Navbar.css'
import './Dropdown.css'
import { MenuSearch } from '../pages/MenuSearch'

function DropdownSearch(){
const[click, setClick] = useState(false)
const handleClick = () => setClick(!click)

    return(
        <>
        <ul onCLick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuSearch.map((item, index)=> {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default DropdownSearch;