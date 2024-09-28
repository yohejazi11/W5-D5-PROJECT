
function Card(props) {
    return (
        <div className="w-[24vw] flex flex-col gap-y-5 max-md:w-[90vw]">
            <img className="w-full" src={props.image}></img>
            <h1 className="text-[2rem] font-semibold max-md:text-[28px] max-md:font-medium">{props.title}</h1>
            <p className="text-slate-500 font-sans text-[18px]">{props.details}</p>
        </div>
    )
}

export default Card
