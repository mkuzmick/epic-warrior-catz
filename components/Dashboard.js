
const PropertySelector = (props) => {
    return (
        <div>PropertySelector goes here.</div>
    )
}


const Dashboard = (props) => {
    <div>
        {props.children}
        <PropertySelector />
    </div>
}

export default Dashboard