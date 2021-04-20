import { Button, FormControl, InputLabel, makeStyles, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import FirstQuater from './FirstQuater';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(0),
        minWidth: 513,
        border: "none"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ComposeTeam = ({ setFinal, players, final, obj, setplayers, setfPos, setpropbtn, propbtn }) => {
    const classes = useStyles();
    const [show, etShow] = useState(false)
    const AnimatedComp = makeAnimated();
    const regexp = /^[0-9\b]+$/
    const [err1, seterr1] = useState(false)
    const [err2, seterr2] = useState(false)
    const [err3, seterr3] = useState(false)
    const [err4, seterr4] = useState(false)

    const saveData = (e) => {
        // debugger
        if (players.fname === "" && players.lname === "" && players.height === "" && players.position === "") {
            seterr1(true)
            seterr2(true)
            seterr3(true)
            seterr4(true)
        }
        else {
            seterr1(false)
            seterr2(false)
            seterr3(false)
            seterr4(false)
            if (players.fname !== "") {
                seterr1(false)
                seterr2(false)
                seterr3(false)
                seterr4(false)
                if (players.lname !== "") {
                    seterr2(false)
                    if (players.height !== "" && regexp.test(players.height) && players.height > 162 && players.height < 305) {
                        seterr3(false)
                        if (players.position !== "") {
                            seterr4(false)
                            e.preventDefault();
                            setFinal(oldarr => [...oldarr, players]);
                            localStorage.setItem('final', JSON.stringify(final));
                            setplayers(obj)
                            // debugger
                            if (final.length == 4) {
                                setpropbtn(false)
                                console.log("if (final.length == 5) {setpropbtn(false)} ", propbtn);
                            }
                        } else {
                            seterr4(pre => !pre)
                        }
                    } else {
                        seterr3(pre => !pre)
                    }
                } else {
                    seterr2(pre => !pre)
                }
            } else {
                seterr1(pre => !pre)
            }
        }
    }
    const options = [
        { value: "Point Guard (PG)", label: "Point Guard (PG)" },
        { value: "Shooting Guard (SG)", label: "Shooting Guard (SG)" },
        { value: "Small Forward (SF)", label: "Small Forward (SF)" },
        { value: "Power Forward (PF)", label: "Power Forward (PF)" },
        { value: "Center (C)", label: "Center (C)" },
    ]
    console.log("Players", players);

    const handleChange = (e) => {
        setplayers((prestate) => ({
            ...prestate,
            [e.target.name]: e.target.value,
        }));

    };
    const handleChangeselect = (e) => {
        console.log(e);
        players.position = e
        setfPos(e)
    }
    // console.log('Position', fPos);
    console.log('final', final);
    return (
        <div className="cTeam">
            <TextField className="standard-basic" onChange={handleChange} value={players.fname} name="fname" id="standard-basic" label="First Name" />
            <br></br>
            <br></br>
            {err1 ? <lable className="error">[**First Name Required**]</lable> : null}
            <br></br>
            <TextField className="standard-basic" onChange={handleChange} value={players.lname} name="lname" id="standard-basic" label="Last Name" />
            <br></br>
            <br></br>
            {err2 && <lable className="error">[**Last Name Required**]</lable>}
            <br></br>
            <TextField onChange={handleChange} className="standard-basic" value={players.height} name="height" id="standard-basic" label="Height (cm)" />
            <br></br>
            <br></br>
            {err3 && <lable className="error">[**Height is Required (A Valid Number and Greater ther 162cm and Less then 305cm)**]</lable>}
            <br></br>
            <FormControl className={classes.formControl}>
                {/* <InputLabel id="demo-simple-select-label">Position</InputLabel> */}
                <Select
                    name="position"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={players.position}
                    onChange={handleChangeselect}
                    isMulti
                    options={options}
                    components={AnimatedComp}
                />
                {err4 && <lable className="error">[**Position is Required**]</lable>}
                <br></br>
                {final.length > 0 && <lable>Congrats {final.length} Playes has been added</lable>}
            </FormControl>
            <br></br>
            <lable className="label">(Position can be more then one)</lable>
            <br></br>
            <div>
                <Button variant="contained" color="primary" disabled={final.length > 4} onClick={saveData}>Save</Button>
            </div>
            <p className="last">After Entering player details please select First Quater (players can be 5 in a Team)</p>
            {show && <FirstQuater final={final} />}
        </div>
    )
}

export default ComposeTeam
