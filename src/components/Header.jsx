import headerImage from '../assets/header.png' 

export default function Header(){
    return(
        <header className = "w-full bg-white">
            <div className = "container mx-auto justify-center flex">
           <img src = {headerImage} alt="Header Image" className="w-64 mx-auto  object-contain"></img>
           </div>
        </header>
    )
}