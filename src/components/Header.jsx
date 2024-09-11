import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="w-full h-10 flex justify-between items-center p-10 mb-10 bg-purple">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gênero</NavLink></li>
                   </ul>
                </nav>
            </header>
        </>
    )
}