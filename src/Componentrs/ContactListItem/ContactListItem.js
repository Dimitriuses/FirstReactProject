import React from "react";

const ContactListItem = () => {
  return (
            <li>
                <div class="media">
                    <div class="media-left align-self-center">
                        <img class="rounded-circle" src="https://randomuser.me/api/portraits/women/50.jpg"/>
                    </div>
                    <div class="media-body">
                        <h4>Camila Terry</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                    <div class="media-right align-self-center">
                        <a href="#" class="btn btn-default">Contact Now</a>
                    </div>
                </div>
            </li>
        
  );
};

export default ContactListItem;