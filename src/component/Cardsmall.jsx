
function Cardsmall(props) {
    return (
        <div className="w-[24VW] max-md:w-[90vw]">
            <img className="w-full" src={props.image}></img>
            <h1 className="text-[2rem] font-semibold max-md:text-[28px] max-md:font-medium">{props.title}</h1>
            <p className="text-slate-500 font-sans text-[18px]">{props.details}</p>
            <div className="flex">
            <button className="hover:text-black text-[#be7b68] font-semibold text-xs font-sans tracking-widest read-more">READ MORE</button>
            <img src="src\assets\icons\arrow-right.png"></img>
            </div>

        </div>
    )
}

export default Cardsmall
