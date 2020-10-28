import React from "react"
import { useHistory} from "react-router-dom";
import "./Logout.css"

export const Logout = () => {
    const history = useHistory();

    return (
       <button
       type="button"
       className="cursive logout--button"
       onClick={() => {
           localStorage.clear()
           history.push()
       }}
       >
        logout
       </button>
    )
}