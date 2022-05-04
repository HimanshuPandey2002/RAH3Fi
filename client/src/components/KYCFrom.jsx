import React, { useState } from "react";
import "./css/kycform.css";

function KYCFrom({ theme }) {
  const [values, setValues] = useState({
    profile: "",
    fname: "",
    lname: "",
    dob: "",
    phone: "",
    email: "",
    pass: "",
    cpass: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    id_type: "",
    id_num: "",
    id_file: "",
  });

  const [profileSrc, setProfileSrc] = useState(
    "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
  );

  const [filePrev, setFilePrev] = useState("");

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfileSrc(URL.createObjectURL(file));
  };

  const handleDocUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFilePrev(file.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(values);
  };
  return (
    <div className="KYC-details">
      <div className="head">
        <h3 className="heading">KYC Details</h3>
        <div
          className="underline"
          style={{ backgroundColor: `${theme.accent}` }}
        >
          {" "}
        </div>
      </div>
      <form action="">
        <p className="message">
          Enter your details as they appear on identification document
        </p>
        <div className="image-upload">
          <img src={profileSrc} alt="" className="user-profile" />
          <label
            class="custom-file-upload"
            style={{ backgroundColor: `${theme.accent}` }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleProfileUpload(e)}
            />
            Upload
          </label>
        </div>
        <div className="basic">
          <input
            type="text"
            className="inp-field"
            placeholder="*First Name"
            required
            name="fname"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="inp-field"
            placeholder="*Last Name"
            required
          />
          <input
            type="date"
            className="inp-field"
            placeholder="Date of birth"
            required
          />
          <input
            type="number"
            className="inp-field"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>
        <input
          type="email"
          className="inp-field"
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          className="inp-field"
          placeholder="Password"
          required
        />
        <input
          type="password"
          className="inp-field"
          placeholder="Confirm Password"
          required
        />
        <input
          type="text"
          className="inp-field"
          placeholder="*Address line 1"
          required
        />
        <input type="text" className="inp-field" placeholder="Address line 2" />
        <div className="basic">
          <input
            type="text"
            className="inp-field"
            placeholder="*City"
            required
          />
          <input
            type="text"
            className="inp-field"
            placeholder="*State"
            required
          />
          <input
            type="text"
            className="inp-field"
            placeholder="*Country"
            required
          />
          <input
            type="number"
            className="inp-field"
            placeholder="*PIN Code"
            required
          />
        </div>
        <p className="message">*Details of any Government ID Card</p>
        <select name="gov_id" id="" className="inp-field">
          <option value="null">select</option>
          <option value="aadhar">AADHAR Card</option>
          <option value="pan">PAN Card</option>
          <option value="itr">ITR return</option>
        </select>
        <input type="" className="inp-field" placeholder="ID Number" />
        <p className="message">*Upload Document</p>
        <div className="doc-upload">
          <label
            class="custom-file-upload"
            style={{ backgroundColor: `${theme.accent}` }}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleDocUpload(e)}
            />
            Choose file
          </label>
          <p className="preview">{filePrev}</p>
        </div>
        <input
          type="submit"
          value="Submit"
          style={{ backgroundColor: `${theme.accent}` }}
          className="submit btn"
        />
      </form>
    </div>
  );
}

export default KYCFrom;
