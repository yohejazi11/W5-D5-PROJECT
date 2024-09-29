
function List(props) {
  return (
    <div>
      <ul className="flex flex-col gap-y-[0.5rem] w-[80%]">
        <li className="flex">
            <img src={props.icon1}></img>
            <div className="flex flex-col">
                <h1 className="font-bold">{props.title1}</h1>
                <p className="text-[1.5rem] font-semibold text-slate-300">{props.info1}</p>
            </div>
        </li>
        <li className="flex">
            <img src={props.icon2}></img>
            <div className="flex flex-col">
                <h1 className="font-bold">{props.title2}</h1>
                <p className="text-[1.5rem] font-semibold text-slate-300">{props.info2}</p>
            </div>
        </li>
        <li className="flex">
            <img src={props.icon3}></img>
            <div className="flex flex-col">
                <h1 className="font-bold">{props.title3}</h1>
                <p className="text-[1.5rem] font-semibold text-slate-300">{props.info3}</p>
            </div>
        </li>

      </ul>
    </div>
  )
}

export default List
