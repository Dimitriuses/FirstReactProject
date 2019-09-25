import React from "react";
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
                        <a onClick={this.onSubmit} class="btn btn-danger">Add New Item</a>
                    </div>

                </div>
            </div>
        )
    }
}
export default AddNewItem;