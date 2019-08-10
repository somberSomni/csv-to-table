import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const IconButton = styled.div`
    cursor: pointer;
    color: white;
    transtion: opacity 500ms;
    &:hover {
        opacity: 0.6;
    }
`;

function Form({dispatch}) {
    const classes = useStyles();
    const fileRef = useRef(null);
    const [staticReader, setReader] = useState(null);
    const [fileWorker, setWorker] = useState(null);
    useEffect(() => {
        const reader = new FileReader();
        reader.addEventListener('load', handleLoad);
        //workers
        const worker = new Worker('fileWorker.js');
        worker.onmessage = function(e) {
            console.log('Message received from worker');
            dispatch({ type: 'SET_TABLE_DATA', payload: e.data });
        }
        worker.onerror = function(e) {
            console.log('error has occured with worker', e);
        }
        setReader(reader);
        setWorker(worker);
        return () => {
            reader.removeEventListener('load', handleLoad);
            worker.terminate();
        }
    }, [])

    function handleLoad (e) {
        const { result } = e.target;
        const tableData = result.split("\n").map(function(each) { return each.split(',') });
        const rowByTen = Math.floor(tableData.length / 10);
        dispatch({ type: 'SET_TABLE_DATA', payload: { tableData, rowByTen }});
    }

    function handleFile() {
        if (fileRef) {
            const file = fileRef.current.files[0];
            if(window.Worker) {
                console.log("worker running")
                console.log(fileWorker);
                fileWorker.postMessage(file);
            } else {
                staticReader.readAsText(file);
            }
        }
    }

    function rowIncrease() {
        dispatch({ type: 'INCREMENT_ROW'});
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
            <IconButton onClick={rowIncrease}>
                <FontAwesomeIcon 
                    size='2x'
                    icon={['fal', 'arrow-square-up']} />
            </IconButton>
        </div>
    )
}

export default connect()(Form);