import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));
function Form({dispatch}) {
    const classes = useStyles();
    const fileRef = useRef(null);
    const [staticReader, setReader] = useState(null);
    useEffect(() => {
        const reader = new FileReader();
        reader.addEventListener('load', handleLoad);
        setReader(reader);
    }, [])

    function handleLoad (e) {
        const { result } = e.target;
        const payload = result.split("\n").map(each => each.split(','));
        dispatch({ type: 'SET_TABLE_DATA', payload });
        console.log(result);
    }

    function handleFile() {
        if (fileRef) {
            console.log(fileRef)
            const file = fileRef.current.files[0];
            staticReader.readAsText(file);
            console.log(file);
        }
    }
    return (
        <div>
            <input
                onChange={handleFile}
                accept=".csv"
                ref={fileRef}
                className={classes.input}
                id="contained-button-file"
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button
                    variant="contained"
                    component="span"
                    className={classes.button}>
                    Upload CSV
                </Button>
            </label>
        </div>
    )
}

export default connect()(Form);