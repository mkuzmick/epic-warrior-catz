const MyBox = ({ bg }) => {
    return (
        <div style = {{
            width: "100px",
            height: "100px",
            backgroundColor: bg,
            color: "white",
            margin: "5px",
            borderRadius: "10px",
            display: "inline-flex"
        }}></div>
    )
}

export default MyBox