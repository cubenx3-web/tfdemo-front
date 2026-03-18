import "./PopMsg.css"

type Props = {
    show:boolean;
}

function PopMsg({ show }:Props){


    return(
        <div className={`pop-msg-container ${(show)?"show":""}`}>
            <h4>Missing input!</h4>
        </div>
    )

}

export default PopMsg;