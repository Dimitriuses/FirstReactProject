import React, {Fragment} from "react";
import "./AddNewItem.css";

class AddNewItem extends React.Component{
    state = {
        name:"",
        description:"",
        gender:"men",
        image:1
    }

    onImage = () =>{
        const newAvatar = Math.floor(Math.random() * 99); 
        console.log(newAvatar);
        this.setState({
          image: newAvatar
        });
      
    }

        onGender = ()=>{
            if(this.state.gender === "men"){
                this.setState({
                    gender:"women"
                })
            }
            else{
                this.setState({
                    gender:"men"
                })
            }
        }
        onSubmit = (e) => {
            e.preventDefault();
        
            this.props.addContact(this.state.name, this.state.description, this.state.gender, this.state.image);
        };
        onName = (e) => {
            //console.log(e.target.value);
            this.setState({name:e.target.value});
        }
        onDescription = (e) => {
            //console.log(e.target.value);
            this.setState({description:e.target.value});
        }
    render(){
        
        let link ="https://randomuser.me/api/portraits/"+this.state.gender+"/"+this.state.image+".jpg";
        return(
            <div>
            <div className="col-md-10 offset-md-1 row-block">
                <div class="media">
                    <div class="media-left align-self-center">
                        <img class="rounded-circle" src={link} onClick={this.onImage}/>
                    </div>
                    <div class="media-body">
                        <input name="Name" className="form-control" placeholder="Name..." onChange={this.onName}/>
                        <input name="Description" className="form-control" placeholder="Description..." onChange={this.onDescription}/>
                        <a class="btn" name="GenderBTN" onClick={this.onGender}>gender - {this.state.gender}</a>
                    </div>
                    <div class="media-right align-self-center">
                        <button onClick={this.onSubmit} type="button" class="btn btn-secondary" data-toggle="snackbar" data-style="toast" data-content="Added Complete">
                            Add New Item
                        </button>
                    </div>

                </div>
            </div>
            {/* <div class="card bg-success">
                <div class="card-body">
                <div class="media">
                    <div class="media-left align-self-center">
                        <img class="rounded-circle" src={link}/>
                    </div>
                    <div class="media-body">
                        <h4>{this.state.name}</h4>
                        <p>{this.state.description}</p>
                    </div>
                    <div class="media-right align-self-center">
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                </div>
                </div>
            </div> */}
            </div>
        )
    }
}
export default AddNewItem;