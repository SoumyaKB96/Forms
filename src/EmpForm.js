import React from "react";

export default class EmpFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      istransfer: false,
      selectedImage: null,

      requestType: "",
      requestId: null,
      dept: "",
      fName: "",
      lName: "",
      startDate: null,
      endDate: null
    };
  }

  imageSelectionHandle = (event) => {
    this.setState({
      selectedImage: URL.createObjectURL(event.target.files[0])
    });
  };
  imageUploadHandle = () => {};
  transferHandle = () => {
    this.setState({ istransfer: true });
  };

  render() {
    let transfer;
    if (this.state.istransfer) {
      transfer = (
        <div>
          <label>
            CT US
            <select>
              <option selected value="None">
                Select...
              </option>
              <option value="Rda Management">Rda Management</option>
              <option value="Management Head">Management Head</option>
              <option value="Head Research">Head Research</option>
            </select>
          </label>
        </div>
      );
    }

    return (
      <div>
        <h3>Employee Form </h3>

        <h4 className="headings">Employee Details</h4>

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
              <button onClick={this.transferHandle}>Tranfer</button>
              <button>Re-hire</button>
              <button>Status Change</button>
              <button>Work Date extension</button>
            </label>
            {transfer}
            <br />

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

            <div className="Names">
              <label>
                First Name :
                <input type="text" name="name" />
              </label>

              <label>
                Last Name :
                <input type="text" name="name" />
              </label>
              <br />
              <br />
            </div>

            <div className="Dates">
              <label>
                Start date :
                <input type="date" name="name" />
              </label>

              <label>
                End date :
                <input type="date" name="name" />
              </label>
              <br />
            </div>

            <label>
              Comments:
              <input type="text" name="name" />
            </label>
          </div>

          <h4 className="headings"> Employee History</h4>
          <div classname="EmpHist">
            <label>
              Did this person work for Siemens Before ? : *<button>Yes</button>
              <button>No</button>
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
