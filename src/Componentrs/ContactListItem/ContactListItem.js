import React from "react";

class ContactListItem extends React.Component{

    state = {
        btnChange: false,
        btnText: "Contact Now",
        image: this.props.image,
        favorite: this.props.favorite
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

    onFavorivteClick = () =>{
        this.setState(() => {
          return {
            favorite: !this.state.favorite
          };
        });
    
        this.props.onFavoriteChange();
      }

      onImage = () =>{
        const newAvatar = Math.floor(Math.random() * 99); 
        console.log(newAvatar);
        this.setState({
          image: newAvatar
        });
      
      }

    render() {
        const {id ,name, description, gender, image, onContactDelete} = this.props;
        
        let btnStyle = "";
        let btnStar = "";
        if(this.state.btnChange){
            btnStyle = "btn btn-danger"
        }
        else{
            btnStyle = "btn btn-default"
        }
        if(this.state.favorite){
            btnStar = "fa fa-star-o fa-2x star";
        }
        else{
            btnStar = "fa fa-star fa-2x star";
        }

        
        console.log(this.props);
        let link ="https://randomuser.me/api/portraits/"+gender+"/"+this.state.image+".jpg";
        return (
            <li>
                <div class="media">
                    <div class="media-left align-self-center">
                        <img class="rounded-circle" src={link} onClick={this.onImage}/>
                    </div>
                    <div class="media-body">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                    <div class="media-right align-self-center">
                        <a href="#" class={btnStyle} onClick={this.onBtnClick}>
                            {this.state.btnText}
                        </a>
                        <i className={btnStar} aria-hidden="true" onClick={this.onFavorivteClick}></i>
                        {/* <i className="fa fa-times fa-2x remove" aria-hidden="true" onClick={onContactDelete}></i> */}
                        
                    </div>
                    <div class="media-right align-self-up">
                        <button onClick={onContactDelete} type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </li>
        
        );
    };
    
}
export default ContactListItem;
