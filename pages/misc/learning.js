const TheCode = ({object}) => (<pre>{JSON.stringify(object, null, 4)}</pre>) 

export default () => {

    const myObject = {
        name: "Zibby",
        age: 9,
        favoriteAnimal: "Cat",
        state: "Eating"
    }

    console.log(myObject)


    return (
        <div style={{
            width: "300px",
            height: "300px",
            backgroundColor: "yellow",
            margin: "20px",
            padding: "20px"
        }}>
            <h1>{myObject.name}</h1>
            <p>Zibby is {myObject.state}</p>
            <p>Zibby is  {myObject.age} years old.</p>
            <TheCode object={myObject} />
        </div>
    )
}