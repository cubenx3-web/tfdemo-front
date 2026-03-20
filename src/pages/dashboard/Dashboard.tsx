
function Dashboard(){

    let token = localStorage.getItem("token");

    return(
        <>
            <h1>DashBoard:</h1>
            <div>token: {token}</div>
        </>
    )
}

export default Dashboard;