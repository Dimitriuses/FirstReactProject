import React from "react";
import { connect } from "react-redux";

import { toggleFavorite, deleteContact, setAvatar } from "../../store/actions";

const AVATAR_COUNT = 99;

class ContactListItem extends React.Component {
  // Whether this row's button reads "Contact Now" or "X" is nobody else's business,
  // so it stays local state; everything about the contact itself lives in the store.
  state = { contacted: false };

  onContactClick = () => {
    this.setState(state => ({ contacted: !state.contacted }));
  };

  render() {
    const {
      name,
      description,
      gender,
      image,
      favorite,
      onFavoriteClick,
      onDeleteClick,
      onAvatarClick
    } = this.props;
    const { contacted } = this.state;

    const avatar = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;

    return (
      <li>
        <div className="media">
          <div className="media-left align-self-center">
            <img
              className="rounded-circle"
              src={avatar}
              alt={name}
              title="Pick another portrait"
              onClick={onAvatarClick}
            />
          </div>
          <div className="media-body">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="media-right align-self-center">
            <button
              type="button"
              className={contacted ? "btn btn-danger" : "btn btn-default"}
              onClick={this.onContactClick}
            >
              {contacted ? "X" : "Contact Now"}
            </button>
            <i
              className={favorite ? "fa fa-star fa-2x star" : "fa fa-star-o fa-2x star"}
              title={favorite ? "Remove from favorites" : "Add to favorites"}
              onClick={onFavoriteClick}
            />
          </div>
          <div className="media-right align-self-up">
            <button
              type="button"
              className="close"
              aria-label={`Remove ${name}`}
              onClick={onDeleteClick}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  onFavoriteClick: () => dispatch(toggleFavorite(id)),
  onDeleteClick: () => dispatch(deleteContact(id)),
  onAvatarClick: () =>
    dispatch(setAvatar(id, Math.floor(Math.random() * AVATAR_COUNT)))
});

export default connect(null, mapDispatchToProps)(ContactListItem);
