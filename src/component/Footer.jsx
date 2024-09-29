
function Footer() {
    return (
        <div className="h-[30vh] flex flex-col justify-evenly px-[10vw] font-sans ">
            <div className="flex gap-4 items-center justify-between max-md:flex-col" >
                <ul className="flex  items-center">
                <li><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"></img></li>
                </ul>
                <ul className="flex gap-12 items-center max-md:flex-wrap max-md:gap-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Reviews</li>
                    <li>Videos</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex gap-8 items-center ">
                <li><img className="w-5" src="public/icons/youtubep.png"></img></li>
                <li><img className="w-5" src="public/icons/instagramp.png"></img></li>
                <li><img className="w-5" src="public/icons/facebookp.png"></img></li>
                </ul>
            </div>
            <div className="text-slate-500">
                <ul className="flex gap-4 items-center justify-between max-md:flex-col">
                    <li>© 2024 Food Blogger & Influencer</li>
                    <li>Powered by Food Blogger & Influencer</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
