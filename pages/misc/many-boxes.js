import RickyAst from "../../components/RickyAst"
import MyAwesomeH1 from "../../components/MyAwesomeH1"
import MyBox from "../../components/MyBox"

const Test = () => {
    const someElements = []
    for (let index = 0; index < 100; index++) {
        const element =  <div style= {{
            backgroundColor: `rgba( 0, 10, 236, ${1-index/200})`,
            width: "5px",
            margin: "1px",
            height: index*3,
            display: "inline-flex",
            borderRadius: "2px"
        }} />
        someElements.push(element)
    }
    return (
        <div style={{
            width: "80%",
            margin: "auto"
        }}>
            {someElements}
            <MyBox bg="rgba( 199, 130, 76, 0.9)" />
            <MyBox bg="rgba( 233, 199, 199)" />
            <MyBox bg="rgba( 89, 189, 54, 0.9)" />
            <MyBox bg="rgba( 100, 34, 23, 0.9)" />
            <MyBox bg="rgba( 263, 167, 45, 0.9)" />
            <MyBox bg="rgba( 78, 71, 199, 0.9)" />
            <MyBox bg="rgba( 67, 245, 188, 0.9)" />
            <MyBox bg="rgba( 78, 71, 199, 0.9)" />
            <MyBox bg="rgba( 263, 167, 45, 0.9)" />
            <MyBox bg="rgba( 89, 189, 54, 0.9)" /> 
            <MyBox bg="rgba( 199, 130, 76, 0.9)" />
            <MyBox bg="rgba( 233, 199, 199)" />
            <MyBox bg="rgba( 263, 167, 45, 0.9)" />
            <MyBox bg="rgba( 100, 34, 23, 0.9)" />
            <MyBox bg="rgba( 67, 245, 188, 0.9)" />
            <MyBox bg="rgba( 263, 167, 45, 0.9)" />
            <MyBox bg="rgba( 78, 71, 199, 0.9)" />
            <MyBox bg="rgba( 89, 189, 54, 0.9)" />
            <MyBox bg="rgba( 233, 199, 199)" />
            <MyBox bg="rgba( 100, 34, 23, 0.9)" /> 
            <MyBox bg="rgba( 199, 130, 76, 0.9)" />
            <MyBox bg="rgba( 67, 245, 188, 0.9)" />
            <MyBox bg="rgba( 67, 245, 188, 0.9)" />
            <MyBox bg="rgba( 89, 189, 54, 0.9)" />
            <MyBox bg="rgba( 263, 167, 45, 0.9)" />
            <MyBox bg="rgba( 78, 71, 199, 0.9)" />
            <MyBox bg="rgba( 233, 199, 199)" />
            <MyBox bg="rgba( 100, 34, 23, 0.9)" />
            <MyBox bg="rgba( 89, 189, 54, 0.9)" />
            <MyBox bg="rgba( 67, 245, 188, 0.9)" /> 
           <RickyAst />
        </div>
    )
}

export default Test
