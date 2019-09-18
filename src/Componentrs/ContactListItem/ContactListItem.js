import React from "react";

class ContactListItem extends React.Component{

    state = {
        btnChange: false,
        btnText: "Contact Now"
    }

    onBtnClick = () => {
        if(this.state.btnChange){
            this.setState({
                btnChange:false,
                btnText: "Contact Now"
            });
        }
        else{
            this.setState({
                btnChange:true,
                btnText: "X"
            });
        }
    }

    render() {
        const {id ,name, description, gender, image} = this.props;
        
        let btnStyle = "";
        if(this.state.btnChange){
            btnStyle = "btn btn-danger"
        }
        else{
            btnStyle = "btn btn-default"
        }
        
        console.log(this.props);
        let link ="https://randomuser.me/api/portraits/"+gender+"/"+image+".jpg";
        return (
            <li>
                <div class="media">
                    <div class="media-left align-self-center">
                        <img class="rounded-circle" src={link}/>
                    </div>
                    <div class="media-body">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                    <div class="media-right align-self-center">
                        <a href="#" class={btnStyle} onClick={this.onBtnClick}>
                            {this.state.btnText}
                        </a>
                    </div>
                </div>
            </li>
        
        );
    };
    
}
export default ContactListItem;
