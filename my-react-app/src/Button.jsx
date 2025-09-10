

function Button(){

    const styles = {
        backgroundColor: "hsla(200, 100%, 50%, 1.00)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "15px",
        border: "none",
        cursor: "pointer",
        fontSize: "3rem",
    }

    return(
        <button style={styles}>Click Me</button>
    )
}

export default Button