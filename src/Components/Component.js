import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link, } from "react-router-dom";

import html2canvas from 'html2canvas'
import * as rasterizeHTML from 'rasterizehtml';
let jsPDF = require('jspdf');

require('jspdf-autotable');

class RedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: true,
            csvData: "ac",
        };
    }
    componentDidMount() {
        this.props.loader(true)
        this.props.toggleTodo("simple")

    }
    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.todos != nextState.csvData) {

            this.setState({
                csvData: nextProps.todos,
                next: ''
            })
        }

        return true
    }
    exportCsv() {

        var columns = [
            { title: "ID", dataKey: "id" },
            { title: "Name", dataKey: "name" },
            { title: "Country", dataKey: "country" },

        ];
        var rows = [
            { "id": 1, "name": "Shaw", "country": "Tanzania" },
            { "id": 2, "name": "Nelson", "country": "Kazakhstan" },
            { "id": 3, "name": "Garcia", "country": "Madagascar" }

        ];

        // Only pt supported (not mm or in)
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(columns, rows, {
            styles: { fillColor: [100, 255, 255] },
            columnStyles: {
                id: { fillColor: 255 }
            },
            margin: { top: 60 },
            addPageContent: function (data) {
                doc.text("Header", 40, 30);
            }
        });
        doc.save('table.pdf');

        //         var canvas = document.getElementById("canvas");
        //        let newSet= rasterizeHTML.drawHTML('Some ' +
        //             '<span style="color: green; font-size: 20px;">HTML</span>' +
        //             ' with an image <img src="someimg.png">',
        //             canvas);
        // console.warn(newSet);
        // var A = [['id', 'user', "mobile"]];
        // var re = this.state.csvData;
        // for (var item = 0; item < re.length; ++item) {
        //     A.push([re[item].id, re[item].email, re[item].mobile]);

        // }
        // console.warn("test", A);
        // var csvRows = [];

        // for (var i = 0, l = A.length; i < l; ++i) {
        //     csvRows.push(A[i].join(','));
        // }
        // console.warn("test", csvRows);
        // var csvString = csvRows.join("%0A");
        // var a = document.createElement('a');
        // a.href = 'data:attachment/csv,' + csvString;
        // a.target = '_blank';
        // a.download = 'myFile.csv';

        // document.body.appendChild(a);
        // a.click();

        // var doc = new pdfConverter()
        // doc.text(10, 10, 'This is a test')
        // doc.addHTML()
        // doc.save('autoprint.pdf')

    }
    render() {

        return (
            <div className="App">

                <button className="btn" onClick={() => { this.exportCsv() }} >Export CSV </button>
                {
                    this.state.next
                }
                <div id="canvas"></div>
                <Table striped bordered condensed hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    {this.props.todos.map((dataItem, i) =>

                        <tbody>
                            <tr>
                                <td>{i}</td>
                                <td>
                                    <Link to={{ pathname: '/Product/' + dataItem.id }}>{dataItem.id}</Link>
                                    <button className="btn" onClick={() => { this.props.SpeedMeter(dataItem.id) }} >{dataItem.id}</button></td>
                                <td>{dataItem.mobile}</td>
                                <td>{dataItem.email}</td>
                            </tr>
                        </tbody>
                    )
                    }

                </Table>

            </div>
        );
    }
}

export default RedComponent;




// import React, { Component } from 'react';
// import OtherScreen from './OtherScreen';
// import { ThemeContext, theme } from './theme-context';
// import Container from './Containers/Container';
// import Graph from 'react-graph-vis';
// import ReactSpeedometer from "react-d3-speedometer";
// import { Button, Alert, Navbar, MenuItem, NavDropdown, Nav, NavItem, Header, SplitButton } from 'react-bootstrap';
// NavBar
// // import Button from 'react-bootstrap/lib/Button';


// class App extends Component {
//   render() {

//     console.warn("props")
//     return (
//       <div>

//       </div>

//     );
//   }
// }


// export default App; 
