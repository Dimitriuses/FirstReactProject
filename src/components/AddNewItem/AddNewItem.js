import React from "react";
import { connect } from "react-redux";

import { addContact } from "../../store/actions";

const AVATAR_COUNT = 99;
const TOAST_MS = 3000;

class AddNewItem extends React.Component {
  // The half-filled form is a draft, not application state, so it stays local and
  // only the finished contact is dispatched.
  state = { name: "", description: "", gender: "men", image: 1, toast: false };

  componentWillUnmount() {
    clearTimeout(this.toastTimer);
  }

  onAvatarClick = () => {
    this.setState({ image: Math.floor(Math.random() * AVATAR_COUNT) });
  };

  onGenderClick = () => {
    this.setState(state => ({ gender: state.gender === "men" ? "women" : "men" }));
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    const { name, description, gender, image } = this.state;
    this.props.onAdd({ name, description, gender, image });

    // The 2019 page raised this toast through SnackbarJS and a data-toggle attribute.
    // The plugin builds its container with $("body").append("<div id=snackbar-container/>"),
    // which only works on jQuery < 3.5 — 3.5.0 stopped rewriting self-closing tags, so
    // the id becomes "snackbar-container/" and the toast is never inserted. Rendering it
    // from state costs less than keeping a jQuery on the page to work around that.
    clearTimeout(this.toastTimer);
    this.setState({ name: "", description: "", toast: true });
    this.toastTimer = setTimeout(() => this.setState({ toast: false }), TOAST_MS);
  };

  render() {
    const { name, description, gender, image, toast } = this.state;
    const avatar = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;

    return (
      <div className="col-md-10 offset-md-1 row-block">
        <div id="snackbar-container">
          <div
            className={toast ? "snackbar toast snackbar-opened" : "snackbar toast"}
            role="status"
            aria-hidden={!toast}
          >
            <span className="snackbar-content">Added Complete</span>
          </div>
        </div>
        <div className="media">
          <div className="media-left align-self-center">
            <img
              className="rounded-circle"
              src={avatar}
              alt="Portrait for the new contact"
              title="Pick another portrait"
              onClick={this.onAvatarClick}
            />
          </div>
          <div className="media-body">
            <input
              name="name"
              className="form-control"
              placeholder="Name..."
              aria-label="Name"
              value={name}
              onChange={this.onFieldChange}
            />
            <input
              name="description"
              className="form-control"
              placeholder="Description..."
              aria-label="Description"
              value={description}
              onChange={this.onFieldChange}
            />
            <button
              type="button"
              className="btn"
              name="GenderBTN"
              onClick={this.onGenderClick}
            >
              gender - {gender}
            </button>
          </div>
          <div className="media-right align-self-center">
            <button type="button" className="btn btn-secondary" onClick={this.onSubmit}>
              Add New Item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { onAdd: addContact })(AddNewItem);
