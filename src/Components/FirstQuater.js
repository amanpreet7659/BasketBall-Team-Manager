import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Select from 'react-select'

const FirstQuater = (props) => {
    const [arr, setArr] = useState([])
    let data = ""
    const [positions, setPositions] = useState({
        position1: "",
        position2: "",
        position3: "",
        position4: "",
        position5: "",
    })

    const styles = {
        width: "100%",
        height: "48px",
        fontWeight: "400",
        lineHeight: "1.1876em",
        fontSize: "1rem",
        letterSpacing: "0.00938em",
        border: "none",
        background: "#fff",
        borderBottom: "1px gray solid",
    }
    const handleNext = () => {
        // console.log("Array is ", arr);
        // if(positions.position1===positions.position2)
        // {
        //     debugger
        //     alert("Error")
        // }
        // else
        // {
        //     alert("True")
        // }
        // data=arr.map((i)=>{console.log(i)})

        if (
            positions.position1 !== positions.position2 &&
            positions.position1 !== positions.position3 &&
            positions.position1 !== positions.position4 &&
            positions.position1 !== positions.position5
        ) {
            // debugger
            if (
                positions.position2 !== positions.position1 &&
                positions.position2 !== positions.position3 &&
                positions.position2 !== positions.position4 &&
                positions.position2 !== positions.position5
            ) {
                // debugger
                if (
                    positions.position3 !== positions.position2 &&
                    positions.position3 !== positions.position1 &&
                    positions.position3 !== positions.position4 &&
                    positions.position3 !== positions.position5
                ) {
                    // debugger
                    if (
                        positions.position4 !== positions.position3 &&
                        positions.position4 !== positions.position2 &&
                        positions.position4 !== positions.position1 &&
                        positions.position4 !== positions.position5
                    ) {
                        // debugger

                        if (
                            positions.position5 !== positions.position4 &&
                            positions.position5 !== positions.position3 &&
                            positions.position5 !== positions.position2 &&
                            positions.position5 !== positions.position1
                        ) {
                            // debugger
                            alert("Enjoy Playing")
                        }
                        else {
                            // debugger
                            // alert("Error 5")
                            alert("Silgle player cannot be play at same position")
                        }
                    } else {
                        // debugger
                        alert("Silgle player cannot be play at same position")
                        // alert("Error 4")
                    }
                } else {
                    // debugger
                    alert("Silgle player cannot be play at same position")
                    // alert("Error 3")
                }
            } else {
                // debugger
                alert("Silgle player cannot be play at same position")
                // alert("Error 2")
            }
        } else {
            // debugger
            alert("Silgle player cannot be play at same position")
            // alert("Error 1")
        }
    }
    const handleChange = (e) => {
        setPositions((old) => ({ ...old, [e.target.name]: e.target.value }))
        console.log(e.target.value, e.target.name);
    }
    // console.log("Positions ", positions);
    return (
        <div>
            <div className="Form">
                <div style={{ width: "50%" }}>
                    <TextField value={props.final[0].fname + props.final[0].lname} label="First Player" className="First_Quater"></TextField>
                    <TextField value={props.final[1].fname + props.final[1].lname} label="Second Player" className="First_Quater"></TextField>
                    <TextField value={props.final[2].fname + props.final[2].lname} label="Third Player" className="First_Quater"></TextField>
                    <TextField value={props.final[3].fname + props.final[3].lname} label="Forth Player" className="First_Quater"></TextField>
                    <TextField value={props.final[4].fname + props.final[4].lname} label="Fifth Player" className="First_Quater"></TextField>
                </div>
                <div style={{ borderLeft: "2px black solid", width: "50%" }}>
                    <select onChange={handleChange} style={styles} className="sel" name="position1">
                        <option hidden disabled selected value="">Select...</option>
                        {props.final[0].position.map((i) => { return <option >{i.value}</option> })}
                    </select><br></br>
                    <select onChange={handleChange} style={styles} className="sel" name="position2">
                        <option hidden disabled selected value="">Select...</option>
                        {props.final[1].position.map((i) => { return <option >{i.value}</option> })}
                    </select><br></br>
                    <select onChange={handleChange} style={styles} className="sel" name="position3">
                        <option hidden disabled selected value="">Select...</option>
                        {props.final[2].position.map((i) => { return <option >{i.value}</option> })}
                    </select><br></br>
                    <select onChange={handleChange} style={styles} className="sel" name="position4">
                        <option hidden disabled selected value="">Select...</option>
                        {props.final[3].position.map((i) => { return <option >{i.value}</option> })}
                    </select><br></br>
                    <select onChange={handleChange} style={styles} className="sel" name="position5">
                        <option hidden disabled selected value="">Select...</option>
                        {props.final[4].position.map((i) => { return <option >{i.value}</option> })}
                    </select><br></br>

                </div>
            </div>
            <div style={{ width: "50%", float: "right", margin: "auto" }}>
                <Button className="Next" variant="contained" color="primary" onClick={handleNext}>Next</Button>
            </div>
        </div>
    )
}

export default FirstQuater
