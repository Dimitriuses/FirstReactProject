import React from "react";

const ContactListItem = ({name, description, gender, image}) => {
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
                        <a href="#" class="btn btn-default">Contact Now</a>
                    </div>
                </div>
            </li>
        
  );
};

export default ContactListItem;
