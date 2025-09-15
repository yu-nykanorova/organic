import { NavLink } from "react-router-dom";

export const UnderConstruction = () => {
  return (
    <div className="under-construction">
        <div className="under-construction__title">Sorry, page is under construction</div>
        <NavLink className="under-construction__link" to="/">Back to HOME page</NavLink>
    </div>
  )
}
