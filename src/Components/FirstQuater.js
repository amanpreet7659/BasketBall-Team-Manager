import { Button, TextField } from '@material-ui/core'
import React from 'react'
import Select from 'react-select'

const FirstQuater = (props) => {
    // console.log("Final", props.final);
    const options = [
        props.final[0].position.map((i) => { console.log('value ', i.value); return { value: i.value, label: i.label } })]
    return (
        <div>
            <div className="Form">
                <div style={{ borderRight: "2px black solid", width: "50%" }}>
                    <TextField value={props.final[0].fname + props.final[0].lname} label="First Player" className="First_Quater"></TextField>
                    {/* <TextField value={props.final[1].fname+props.final[1].lname} label="Second Player" className="First_Quater"></TextField>
                    <TextField value={props.final[2].fname+props.final[2].lname} label="Third Player" className="First_Quater"></TextField>
                    <TextField value={props.final[3].fname+props.final[3].lname} label="Forth Player" className="First_Quater"></TextField>
                    <TextField value={props.final[4].fname+props.final[4].lname} label="Fifth Player" className="First_Quater"></TextField> */}
                </div>
                <div style={{ borderLeft: "2px black solid", width: "50%" }}>
                    { }
                    {/* <Select
                        options={[props.final[0].position.map((i) => { console.log('value ', i.value); return { value: i.value, label: i.label } })]}
                        // value={options}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select" />
                    <Select />
                    <Select />
                    <Select />
                    <Select /> */}
                    <select>
                        <option hidden disabled selected value="Select...">Select...</option>
                    </select>
                </div>
            </div>
            <div style={{ width: "50%", float: "right", margin: "auto" }}>
                <Button className="Next" variant="contained" color="primary">Next</Button>
            </div>
        </div>
    )
}

export default FirstQuater
