import React from "react";

export default class EmpFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      istransfer: false,
      selectedImage: null,
      empType: "",

      requestType: "",
      requestId: null,
      dept: "",
      fName: "",
      lName: "",
      startDate: null,
      endDate: null,
      isContractor: false,
      isHistory: false
    };
  }

  imageSelectionHandle = (event) => {
    this.setState({
      selectedImage: URL.createObjectURL(event.target.files[0])
    });
  };
  imageUploadHandle = () => {};

  requestTypeHandle = (event) => {
    if (event.target.value === "Transfer  ") {
      this.setState({ istransfer: true });
    } else {
      this.setState({ istransfer: false });
    }
    this.setState({ requestType: event.target.value });
  };

  empTypeHandle = (event) => {
    if (event.target.value === "Contractor") {
      this.setState({ empType: "Contractor" });
    } else if (event.target.value === "Other") {
      this.setState({ empType: "Contracto" });
    } else {
      this.setState({ isContractor: false });
    }
    this.setState({ empType: event.target.value });
  };

  historyHandle = (event) => {
    if (event.target.value === "Yes") {
      this.setState({ isHistory: true });
    } else {
      this.setState({ isHistory: false });
    }
  };

  render() {
    let transfer;
    if (this.state.istransfer) {
      transfer = (
        <div>
          <label>
            Employee Transferring from CT US :
            <select>
              <option selected value="None">
                Select...
              </option>
              <option value="Rda Management">1</option>
              <option value="Management Head">2</option>
              <option value="Head Research">3</option>
            </select>
          </label>
        </div>
      );
    }

    let empTypeOption;
    if (this.state.empType === "Contractor") {
      empTypeOption = (
        <div>
          <label>
            If Contractor , what Company They Worked for :
            <select>
              <option selected value="None">
                Select...
              </option>
              <option value="1">1</option>
              <option value="Management Head">2</option>
              <option value="Head Research">3</option>
            </select>
          </label>
        </div>
      );
    }
    if (this.state.empType === "Other ") {
      empTypeOption = (
        <div>
          <label>
            If Other, specify :
            <select>
              <option selected value="None">
                Select...
              </option>
              <option value="1">1</option>
              <option value="Management Head">2</option>
              <option value="Head Research">3</option>
            </select>
          </label>
        </div>
      );
    }

    let history;
    if (this.state.isHistory) {
      history = (
        <div>
          <label>
            GID/Email:
            <input type="text" name="GID" />
          </label>

          <label>
            Last Current Unit
            <input type="text" name="Comments" />
          </label>
          <br />
          <label>
            Comments
            <input type="text" name="Comments" />
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
                Request Type :&nbsp;
                <input
                  type="button"
                  value="Transfer  "
                  onClick={this.requestTypeHandle}
                />
                <input
                  type="button"
                  value="New Hire"
                  onClick={this.requestTypeHandle}
                />
                <input
                  type="button"
                  value="  Re-Hire  "
                  onClick={this.requestTypeHandle}
                />
                <input
                  type="button"
                  value="Status Change"
                  onClick={this.requestTypeHandle}
                />
                <input
                  type="button"
                  value="Date Extension"
                  onClick={this.requestTypeHandle}
                />
              </label>
            </div>
            {transfer}
            <br />

            <label>
              Employee Type:
              <input
                type="button"
                value="Full Time"
                onClick={(e) => this.setState({ empType: e.target.value })}
              />
              <input
                type="button"
                value="   Intern   "
                onClick={(e) => this.setState({ empType: e.target.value })}
              />
              <input
                type="button"
                value="Contractor"
                onClick={(e) => this.setState({ empType: e.target.value })}
              />
              <input
                type="button"
                value="Other "
                onClick={(e) => this.setState({ empType: e.target.value })}
              />
            </label>
            {empTypeOption}
            <br />

            <label>
              Employee ID :&nbsp;
              <input type="text" name="name" size="40" />
            </label>
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
              Did this person work for Siemens Before ? : *
              <input type="Button" value="Yes" onClick={this.historyHandle} />
              <input type="Button" value="No" onClick={this.historyHandle} />
            </label>
            {history}
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
