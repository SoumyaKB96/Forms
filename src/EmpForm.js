import React from "react";
import axios from "axios";

export default class EmpFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      istransfer: false,
      selectedImage: null,
      istransfer: false
    };
  }

  imageSelectionHandle = (event) => {
    this.setState({
      selectedImage: URL.createObjectURL(event.target.files[0])
    });
  };
  imageUploadHandle = () => {
    axios.post("");
  };

  render() {
    return (
      <div>
        <h3>Employee Form </h3>

        <h4>Employee Details</h4>

        <form>
          <div className="Empdetails">
            <label>
              Onboarding Request ID:
              <input type="text" name="id" />
            </label>
            <br />

            <div className="image">
              <label>
                <img
                  src={this.state.selectedImage}
                  alt="preview"
                  width="50px"
                  height="50px"
                />
                <br />
                <input
                  type="file"
                  name="image"
                  onChange={this.imageSelectionHandle}
                />
                <br />
                <button onClick={this.imageUploadHandle}>upload</button>
              </label>
            </div>

            <label>
              Request Type:
              <button>Tranfer from another Siemens Unit </button>
              <button>Re-hire</button>
              <button>Status Change</button>
              <button>Work Date extension</button>
            </label>
            <br />
            {this.trasnsfer}
            <label>
              Cost Center/Department:
              <select>
                <option selected value="None">
                  Select...
                </option>
                <option value="Rda Management">Rda Management</option>
                <option value="Management Head">Management Head</option>
                <option value="Head Research">Head Research</option>
              </select>
            </label>
            <br />

            <label>
              Onboarding Request ID:
              <input type="text" name="name" />
            </label>
            <br />
            <br />

            <label>
              First Name:
              <input type="text" name="name" />
            </label>

            <label>
              Last Name:
              <input type="text" name="name" />
            </label>
            <br />
            <br />

            <label>
              Start date:
              <input type="text" name="name" />
            </label>

            <label>
              End date:
              <input type="text" name="name" />
            </label>
            <br />

            <label>
              Comments:
              <input type="text" name="name" />
            </label>
          </div>

          <h4> Employee History</h4>
          <div classname="EmpHist">
            <label>
              Did this person work for Siemens Before ? : *<button>Yes</button>
              <button>No</button>
            </label>
          </div>

          <h4> Computer Assist Plan</h4>
          <div classname="CompAssist">
            <label>
              Did this person work for Siemens Before ? : *
              <br />
              <button>Yes</button>
              <button>No</button>
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
