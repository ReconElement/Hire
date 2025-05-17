import './../../App.css';
type displayProps = {
    text: string,
    data: React.ReactNode
}
const Display = (props:displayProps)=>{
    // const x = <div><p>Hello</p></div>
    return(
        <div>
            <div>
                {props.text}
            </div>
            <div>
                {props.data}
            </div>
        </div>
    )
};

const Iterate = ()=>{
    const x: displayProps[] = [{text: "first", data: <div>Boobaloo</div>}, {text: "second", data:<div>ChewingGum</div>}];
    return(
        <div>
            {x.map((ele)=>)}
        </div>
    )
}

export default Iterate;