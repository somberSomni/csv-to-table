import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));
export default function Form() {
    const classes = useStyles();
    const fileRef = useRef(null);
    const [tableData, setTableData] = useState([]);
    function handleFile() {
        console.log('running');
        if (fileRef) {
            console.log(fileRef)
            const file = fileRef.current.files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function (e) {
                const { result } = e.target;
                const data = result.split("\n").map(each => each.split(','));
                setTableData(data);
                console.log(result, typeof result);
            }
            reader.onerror = function (e) {
                console.log(e);
            }
            reader.onabort = function (e) {
                console.log('file reader aborted funcitons');
            }
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
