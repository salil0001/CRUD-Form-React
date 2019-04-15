import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        names: [
            { id: 1, name: "Salil" },
            { id: 2, name: "Anmol" },

        ],
        name: ""

    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })


    }
    handleSubmit = (e) => {
        e.preventDefault();
        let abc = {
            name: this.state.name,
            id: Math.random()

        }
        let updateName = [...this.state.names, abc]
        this.setState({
            names: updateName,
            name: ""
        })
    }
    handleDelete = (id) => {
        let names = this.state.names.filter(name => {
            return name.id !== id
        })
        this.setState({
            names: names
        })

    }
    handleEdit = (id) => {
        let names = this.state.names.filter(name => {
            return name.id !== id
        })
        let namesList = this.state.names.find(name => {
            return name.id === id
        })
        this.setState({
            names:names,
            name:namesList.name,
            id:id
        })

    }
    render() {

        const { names } = this.state;
        const nameList = names.map(name => {
            return (
                <div key={name.id}>
                    <div>{name.name}</div>
                    <button onClick={() => this.handleDelete(name.id)}>Delete</button>
                
                </div>
            )
        })

        return (
            <div className="col-md-6  offset-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" required className="form-control" value={this.state.name} aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>

                {nameList}

            </div>

        )
    }
}
