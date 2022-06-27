import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext);
    const logoImg = "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
    
    return (
        <>
            <nav>
                <div>
                    <img
                        alt="pokedex-logo"
                        src= {logoImg}
                        className="navbar-img"
                    />
                </div>
                <div>
                    {favoritePokemons.length}❤️
                </div>
            </nav>
        </>
    )
}

export default Navbar;