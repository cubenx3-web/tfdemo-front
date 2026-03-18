import "./PopMsg.css"

type Props = {
    show:boolean;
}

function PopMsg({ show }:Props){


    return(
        <div className={`pop-msg-container ${(show)?"show":""}`}>
            <h4>missing input</h4>
        </div>
    )

}

export default PopMsg;