import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        names: [
            { id: 1, name: "Salil", button: false },
            { id: 2, name: "Anmol", button: false },

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
    handleEdit = (name, id) => {
        let nameIndex = this.state.names.findIndex((names => names.id === id))
        let abc = this.state.names;
        abc[nameIndex].name = name
        abc[nameIndex].button = false


        this.setState({
            names: abc
        })
    }
    ShowHideEditForm = (id) => {
        let nameIndex = this.state.names.findIndex((names => names.id === id))
        let abc = this.state.names;
        abc[nameIndex].button = true

        this.setState({
            names: abc
        })


    }
    render() {

        const { names } = this.state;
        const nameList = names.map(name => {
            return (
                <div key={name.id}>
                    <div>{name.name}</div>
                    <button onClick={() => this.handleDelete(name.id)}>Delete</button>
                    <button onClick={() => this.ShowHideEditForm(name.id)}>Edit </button>
                    
                    <div className="col-md-6 col-sm-12 col-lg-6">

                        {name.button ? <FormEdit handleEdit={this.handleEdit} name={name.name} id={name.id} /> : ""}
                    </div>

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

class FormEdit extends Component {
    state = {
        name: this.props.name,
        id: this.props.id
    }
    handleEdit = (e) => {
        e.preventDefault();
        //  console.log(this.state.name);
        this.props.handleEdit(this.state.name, this.state.id);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <div className="form-group">
                        <input type="text" required className="form-control" name="name"
                            value={this.state.name} aria-describedby="emailHelp"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
