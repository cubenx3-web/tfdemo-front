import "./PopMsg.css"

type Props = {
    show:boolean;
    msg:string;
    msgType:string;
}

function PopMsg({ show, msg, msgType }:Props){


    return(
        <div className={
            `pop-msg-container 
            ${(show)?"show":""}
            ${msgType}
            `}>
            <h4>{msg}</h4>
        </div>
    )

}

export default PopMsg;