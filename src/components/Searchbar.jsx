import React, {useState} from "react";

const Searchbar = (props) => {
    const [search, setSearch] = useState("")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
        if(e.target.value.lenght === 0) {
            onSearch(undefined)
        }
    }

    const onButtonCLickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div>
                <button
                    className="searchbar-btn"
                    onClick={onButtonCLickHandler}>
                        Buscar
                </button>
            </div>
        </div>
    )
}

export default Searchbar;