import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const TableContainer = styled.div`
    cursor: pointer;
    border-radius: 0px 0px 10px 10px;
    font-size: 0.75em;
    margin-bottom: 50px;
`;
const Row = styled.tr`
    color: ${props => props.first ? 'white' : 'black'}
    background: ${props => props.first ? '#666' : 'white'};
    transition: background 500ms;
    &:hover {
        background: ${props => props.first ? '#666' : '#CCC'};
    }
`;
const HeadCol = styled.th`
    padding: 5px 10px;
`;

const Col = styled.td`
    padding: 5px 10px;
`;

function Table({ tableData, rowByTen, rowNum }) {
    const [indices, setIndices] = useState([1, 10]);
    useEffect(() => {
        console.log(rowNum, rowByTen);
        if(rowNum < rowByTen) {
            console.log('working on rows')
            setIndices([(rowNum * 10 )+ 1, (rowNum + 1) * 10]);
        }
    }, [rowNum])
    return (
        <TableContainer>
            <table>
                <thead>
                    {tableData ? tableData.slice(0, 1).map((row, x) => {
                        return (<Row first={true} key={'row' + x}>
                            <HeadCol key={'mainindice'+ x} > Index </HeadCol>
                            {row.map((each, i) => <HeadCol key={each + i} >{each} </HeadCol>)}
                        </Row>)
                    })
                        : null}
                </thead>
                <tbody>
                    {tableData ? tableData.slice(indices[0], indices[1]).map((row, x) => {
                        return (<Row key={'row' + x + 1}>
                            <Col key={'indice' + x} >{x + indices[0]}</Col>
                            {row.map((each, i) => <Col key={each + i + 1} >{each}</Col>)}
                        </Row>);
                    }) : null}
                </tbody>
            </table>
        </TableContainer>
    )
}

function mapStateToProps({ tableData, rowNum, rowByTen }) {
    return {
        tableData,
        rowNum, 
        rowByTen
    }
}

export default connect(mapStateToProps)(Table);