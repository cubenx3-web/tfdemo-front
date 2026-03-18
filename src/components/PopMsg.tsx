import "./PopMsg.css"

type Props = {
    show:boolean;
    msg:string;
}

function PopMsg({ show, msg }:Props){


    return(
        <div className={`pop-msg-container ${(show)?"show":""}`}>
            <h4>{msg}</h4>
        </div>
    )

}

export default PopMsg;