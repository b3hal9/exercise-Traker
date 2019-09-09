
import React, {Component} from 'react';
import DatePicker from 'react-datepicker'
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercises extends Component{
    constructor(props){
        super(props)
        this.onChangeUsername=this.onChangeUsername.bind(this)
        this.onChangeDuration=this.onChangeDuration.bind(this)
        this.onChangeDate=this.onChangeDate.bind(this)
        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.onsubmit=this.onsubmit.bind(this)
        this.state ={
            username: '',
            duration: 0,
            description: '',
            date: new Date(),
            users: []
      }
    }

    componentDidMount(){
        axios.get('http://localhost:50000/user/')
            .then(res=>{
                if(res.data.length>0){
                    this.setState({
                        users: res.data.map(user=>user.username),
                        username: res.data[0].username
                    })
                }
            })
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date: date
        })
    }
    onsubmit(e){
        e.preventDefault()
        const exercise ={
            username:this.state.username,
            description:this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        axios.post('http://localhost:50000/exercise/add',exercise)
            .then(res=>console.log(res.data));
        window.location='/'
      }
 






    render(){
        return(
            <div> 
                <h3>Create New Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput" 
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user){
                                return <option key={user} 
                                value={user}>{user}
                                
                                >
                                </option>

                            })
                        }
                        </select>
                    </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input type="text" 
                            required 
                            className="form-control" 
                            value={this.state.description} 
                            onChange={this.onChangeDescription} />
                        </div>
                        <div className="form-group">
                            <label>Duration: </label>
                            <input type="text" 
                            required 
                            className="form-control" 
                            value={this.state.duration} 
                            onChange={this.onChangeDuration} />
                        </div>
                        <div className="form-group">
                            <label>Date: </label>
                            <DatePicker 
                            selected ={this.state.date} 
                            onChange={this.onChangeDate} />
                        </div>
               

                        <div className="form-group">
                            <input type="submit" 
                            value="Create Exercise"
                            onClick={this.onsubmit} 
                            className="btn btn-primary" />
                        </div>
        </form>
        </div>
        )
    }
}