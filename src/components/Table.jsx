import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const TableContainer = styled.div`
    cursor: pointer;
    border-radius: 0px 0px 10px 10px;
    font-size: 0.75em;
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

const Col= styled.td`
    padding: 5px 10px;
`;

function Table({ tableData }) {
    console.log(tableData);
    return (
        <TableContainer>
            <table>
                <thead>
                        {tableData ? tableData.slice(0, 1).map((row, x) => {
                            return (<Row first={true} key={'row' + x}>
                                { row.map((each, i) => <HeadCol key={each + i} >{each} </HeadCol>) }
                            </Row>)
                        })
                        : null}
                </thead>
                <tbody>
                    {tableData ? tableData.slice(1).map((row, x) => {
                        return (<Row key={'row' + x + 1}>
                            {row.map((each, i) => <Col key={each + i + 1} >{each}</Col>)}
                        </Row>);
                    }) : null}
                </tbody>
            </table>
        </TableContainer>
    )
}

function mapStateToProps({ tableData }) {
    return {
        tableData
    }
}

export default connect(mapStateToProps)(Table);