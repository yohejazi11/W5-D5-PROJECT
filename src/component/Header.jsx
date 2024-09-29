
function Header() {
    return (
        <div className="  flex items-center justify-between absolute top-[5vh] w-[100%] px-[10%] z-[99999]">
            <ul className="flex items-center text-[.75rem] gap-5 font-sans font-bold">
                <li><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"></img></li>
                <li className="max-md:hidden">HOME</li>
                <li  className="max-md:hidden">ABOUT</li>
                <li  className="max-md:hidden">REVIEWS</li>
                <li  className="max-md:hidden">VIDEOS</li>
                <li  className="max-md:hidden">CONTACT</li>
            </ul>
            <ul className="flex items-center justify-center gap-x-8 max-md:hidden">
                <li><img className="w-5" src="public/icons/youtube.png"></img></li>
                <li><img className="w-5" src="public/icons/instagram.png"></img></li>
                <li><img className="w-5" src="public/icons/facebook.png"></img></li>
                <li><button className="hover:bg-white hover:text-black border-[1px] border-white w-32 h-10 font-sans text-xs tracking-widest font-bold text-white" >LET'S TALK</button></li>
            </ul>
        </div>
    )
}

export default Header
