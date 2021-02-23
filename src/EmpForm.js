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
              </label>
            </div>

            <div className="Request">
              <label>
                Request Type :
                <button className="b1" onClick={this.transferHandle}>
                  Tranfer
                </button>
                <button className="b2">Re-hire</button>
                <button className="b3">Re-hire</button>
                <button className="b4">Status Change</button>
                <button className="b5">Work Date extension</button>
              </label>
            </div>
            {transfer}
            <br />

            <label>
              Employee Type:<button>Full-Time</button>
              <button>Intern </button>
              <button>Contractor</button>
              <button>Other </button>
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

            <label>
              Employee ID :
              <input type="text" name="name" size="40" />
            </label>
            <hr />
            <div className="Names">
              <label>
                First Name :
                <input type="text" name="name" size="40" />
              </label>

              <label>
                Last Name :
                <input type="text" name="name" size="40" />
              </label>
              <br />
              <br />
            </div>
            <br />

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

          <h4 className="headings"> Computer Asset PLan</h4>
          <div classname="CompAssist">
            <label>
              Will you need a computer for this person ? : *<button>Yes</button>
              <button>No</button>
            </label>
          </div>

          <h4 className="headings"> Communications</h4>
          <div classname="Comms">
            <label>
              Will you need a computer for this person ? : *<button>Yes</button>
              <button>No</button>
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
