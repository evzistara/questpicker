import swords from '../assets/swords.png';

function Header(){
    return(
        <header className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white py-30 gap-4">
            <img src={swords} alt="two crossing fantasy swords" className="h-30"/>
            <h1 className="text-5xl font-bold">Quest picker</h1>
        </header>
    )
}
export default Header;