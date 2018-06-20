import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link, } from "react-router-dom";
import ReactDOM from 'react-dom';

class LazyLoadComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            size: 18,
            collection: "",


        }

    }

    async componentDidMount() {
        let obj = {}
        obj.page = this.state.page;
        obj.size = this.state.size;
        await this.props.lazyLoad(obj)
        this.setState({ collection: this.props.lazyLoadReply, })
    }
    loadMore() {
        let obj = {}
        obj.page = this.state.page;
        obj.size = this.state.size;
        this.props.lazyLoad(obj)

    }
    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

        if (bottom && this.state.page < 7) {
            this.setState({ page: this.state.page + 1 })
            this.loadMore()

        }
        console.warn("bottom", this.state.page, bottom)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.lazyLoadReply != this.props.lazyLoadReply) {
            this.state.collection = [...this.state.collection, ...nextProps.lazyLoadReply]
            console.warn("inside", this.state.collection)
            this.setState({})
            return true
        }
        return false
    }

    render() {
        console.warn("type....", this.state.collection)
        console.warn("1 loop inside", this.state.collection)

        return (
            <div>
                <div onScroll={this.handleScroll} onScroll={this.handleScroll} style={{ display: "grid", height: "600px" }} >
                    <Table striped bordered condensed hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>

                        {this.state.collection ?
                            this.state.collection.map((dataItem, i) =>
                                <tbody>
                                    <tr>
                                        <td>{i}</td>
                                        <td>
                                            <Link to={{ pathname: '/Product/' + dataItem.id }}>{dataItem.id}</Link>
                                        </td>
                                        <td>{dataItem.mobile}</td>
                                        <td>{dataItem.email}</td>
                                    </tr>
                                </tbody>
                            )
                            : null
                        }

                    </Table>
                </div>
                
            </div>

        );
    }
}


export default LazyLoadComponent;
