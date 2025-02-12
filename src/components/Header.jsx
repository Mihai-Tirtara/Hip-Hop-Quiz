import headerImage from '../assets/header.png' 

export default function Header(){
    return(
        <header class="w-full bg-white">
            <div class="container mx-auto justify-center flex">
                <img src={headerImage} alt="Header Image" class="w-64 mx-auto  object-contain"></img>
           </div>
        </header>
    )
}