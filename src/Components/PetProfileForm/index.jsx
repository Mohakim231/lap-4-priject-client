import React from "react";

import "./style.css";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img htmlFor="photo-upload" src={src} />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

const Name = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxLength="25"
      value={value}
      placeholder="Pet Name"
      required
    />
  </div>
);
const Species = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="species">Species</label>
    <input
      id="species"
      type="text"
      onChange={onChange}
      maxLength="25"
      value={value}
      placeholder="Pet Species"
      required
    />
  </div>
);
const Age = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="Age">Age</label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxLength="25"
      value={value}
      placeholder="Pet Age"
      required
    />
  </div>
);

const SpecialInfo = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="specialInfo">Special Instructions</label>
    <textarea
      id="specialInfo"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="Special Instructions"
      required
      cols="23"
      rows="2"
    />
    {/* <input
      id="specialInfo"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="Special Instructions"
      required
    /> */}
  </div>
);

const Profile = ({ onSubmit, src, name, specialInfo }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Your Pet Profile</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap">
          <img htmlFor="photo-upload" src={src} />
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="specie">{species}</div>
      <div className="age">{Age}</div>
      <div className="specialInfo">{specialInfo}</div>
      <button type="submit" className="edit">
        Edit Profile{" "}
      </button>
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Your Pet Profile</h1>
      {children}
      <button type="submit" className="save">
        Save{" "}
      </button>
    </form>
  </div>
);

class CardProfile extends React.Component {
  state = {
    file: "",
    imagePreviewUrl: "",
    name: "",
    species: "",
    age: "",
    specialInfo: "",
    active: "edit",
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  editName = (e) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };
  editAge = (e) => {
    const age = e.target.value;
    this.setState({
      age,
    });
  };
  editSpecies = (e) => {
    const specie = e.target.value;
    this.setState({
      age,
    });
  };
  editStatus = (e) => {
    const specialInfo = e.target.value;
    this.setState({
      specialInfo,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };

  render() {
    const { imagePreviewUrl, name, species, age, specialInfo, active } =
      this.state;
    return (
      <div>
        {active === "edit" ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            <Name onChange={this.editName} value={name} />
            <Species onChange={this.editAge} value={age} />
            <Age onChange={this.editSpecies} value={species} />
            <SpecialInfo onChange={this.editStatus} value={specialInfo} />
          </Edit>
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            species={species}
            age={age}
            specialInfo={specialInfo}
          />
        )}
      </div>
    );
  }
}
export default CardProfile;
