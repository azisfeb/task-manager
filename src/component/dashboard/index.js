import React from 'react';
import axios from 'axios';
import Dashboard from './dasboard';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task: {},
            userId: '',
            userDetail: {},
            idForEdit: '',
            title: '',
            description: '',
            editPhase: false,
        }
    }

    handleChangeTitle = evt => {
        this.setState({
            title: evt.target.value
        })
    }

    handleChangeDescription = evt => {
        this.setState({
            description: evt.target.value
        })
    }

    async handleAddTask(){
        const token = localStorage.getItem('_token');
        console.log(token)
        const data = {
            title: this.state.title,
            description: this.state.description,
            priority: 'normal',
            status: 'open',
            owner: this.state.userId
        }
        
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        await axios.post('https://task-service-api.herokuapp.com/task', data, config)
        .then(response => {
            console.log(response.data)
          this.setState({
              task: [...this.state.task, response.data],
              title: '',
              description: '',
          })
        })
        .catch(err => console.error(err))
    }

    handleLogout(){
        if(window.confirm("Are you sure you want to logout?")){
            localStorage.removeItem('isAuthenticated');
            localStorage.setItem('isAuthenticated', false);
            this.props.history.push('/')
        }
    }

    async handleDeleted(id){
        if(window.confirm("Are you sure you want to delete this task?")){
            const token = localStorage.getItem('_token');
            
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
    
            await axios.delete(`https://task-service-api.herokuapp.com/task/${id}`, config)
            .then(async ress => {
                await axios.get('https://task-service-api.herokuapp.com/task', config)
                .then((response) => {
                    this.setState({
                        task: response.data,
                        userId: localStorage.getItem('userId')
                    })
                })
                .catch((err) => console.error(err))
            })
            .catch(err => {
                if(err.response.status == 403){
                    alert("cannot delete someone else task!")
                }
            })
        }
    }

    async handleEdit(id){
        const token = localStorage.getItem('_token');
            
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
            
        await axios.get(`https://task-service-api.herokuapp.com/task/${id}`, config)
                .then((response) => {
                    this.setState({
                        title: response.data.title,
                        description: response.data.description,
                        editPhase: true,
                        idForEdit: response.data._id,
                    })
                })
                .catch((err) => console.error(err))
    }

    async handleUpdate(id){
        const token = localStorage.getItem('_token');
        console.log(token)
        
        let data = {
            title: this.state.title,
            description: this.state.description,
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        await axios.put(`https://task-service-api.herokuapp.com/task/${id}`, data, config)
        .then(async ress => {
            await axios.get('https://task-service-api.herokuapp.com/task', config)
            .then((response) => {
                this.setState({
                    task: response.data,
                    userId: localStorage.getItem('userId'),
                    editPhase: false,
                    idForEdit: '',
                    title: '',
                    description: ''
                })
            })
            .catch((err) => console.error(err))
        })
        .catch(err => {
            if(err.response.status == 403){
                this.setState({
                    editPhase: false,
                    idForEdit: '',
                    title: '',
                    description: ''
                })
                alert("cannot edit someone else task!")
            }
        })
    }

    async componentDidMount(){
        const token = localStorage.getItem('_token');
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        await axios.get('https://task-service-api.herokuapp.com/task', config)
        .then((response) => {
            this.setState({
                task: response.data,
                userId: localStorage.getItem('userId')
            })
        })
        .catch((err) => console.error(err))

        await axios.get(`https://task-service-api.herokuapp.com/employees/${this.state.userId}`, config)
        .then(response => {
            this.setState({
                userDetail: response.data
            })
        })
        .catch(err => console.error(err))
    }


    render(){
        console.log(localStorage)
        return(
            <Dashboard 
                userdetail={this.state.userDetail} 
                task={this.state.task}  
                handleTitle={this.handleChangeTitle.bind(this)} 
                titleValue={this.state.title}
                handleDescription={this.handleChangeDescription.bind(this)}
                descriptionValue={this.state.description}
                handleAdd={this.handleAddTask.bind(this)} 
                handleLogout={this.handleLogout.bind(this)}
                handleDeleted={this.handleDeleted.bind(this)}
                handleEdit={this.handleEdit.bind(this)}
                idForEdit={this.state.idForEdit}
                editPhase={this.state.editPhase}
                handleUpdate={this.handleUpdate.bind(this)}
            />
        )
    }

}

export default Home;