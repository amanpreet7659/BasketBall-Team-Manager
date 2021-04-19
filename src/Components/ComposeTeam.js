import { Button, FormControl, InputLabel, makeStyles, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import FirstQuater from './FirstQuater';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 10,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ComposeTeam = ({setFinal,players,final,obj,setplayers,setfPos}) => {
    const classes = useStyles();
    const [show,etShow]=useState(false)
    const AnimatedComp = makeAnimated();

    const saveData = (e) => {
        // debugger
        e.preventDefault();
        setFinal(oldarr => [...oldarr, players]);
        localStorage.setItem('final',JSON.stringify(final));
        setplayers(obj)
        // debugger
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
        <div>
            <TextField onChange={handleChange} value={players.fname} name="fname" id="standard-basic" label="First Name" />
            <br></br>
            <TextField onChange={handleChange} value={players.lname} name="lname" id="standard-basic" label="Last Name" />
            <br></br>
            <TextField onChange={handleChange} value={players.height} name="height" id="standard-basic" label="Height" />
            <br></br>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
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
                {final.length > 0 && <lable>Congrats {final.length} Playes has been added</lable>}
            </FormControl>
            <lable className="label">(Position can be more then one)</lable>
            <div>
                <Button variant="contained" color="primary" onClick={saveData}>Save</Button>
            </div>
            <p>After Entering player details please select First Quater (players can be 5 in a Team)</p>
            {show && <FirstQuater final={final}/>}
        </div>
    )
}

export default ComposeTeam
