import React from "react";

export default class EmpFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestId: null,
      requestType: "",
      istransfer: false,
      selectedImage: "./download.png",

      empType: "",
      isContractor: false,
      transferDept: "",
      contractorDept: "",
      otherDept: "",

      empId: null,
      dept: "",
      fName: "",
      lName: "",
      startDate: null,
      endDate: null,

      isHistory: false,
      purchaseRequest: "",
      system: ""
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

  valueHandle = () => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  submitHandle = () => {
    console.log(this.state);
  };

  render() {
    let transfer;
    if (this.state.istransfer) {
      transfer = (
        <div>
          <label>
            Employee Transferring from CT US :
            <input type="text" name="otherCompany" />
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
            <input type="text" name="otherCompany" />
          </label>
        </div>
      );
    }
    if (this.state.empType === "Other ") {
      empTypeOption = (
        <div>
          <label>
            If Other, specify :
            <input type="text" name="otherCompany" />
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

    let purchaseOption;
    if (this.state.purchaseRequest == "Yes") {
      purchaseOption = (
        <div>
          <label>
            Please enter the Purchase Request :
            <input type="text" name="Purchase" />
          </label>
        </div>
      );
    }

    let systemOptions;
    if (this.state.system == "Other") {
      systemOptions = (
        <div>
          <label>
            Please specify Other options :
            <input type="text" name="system" />
          </label>
        </div>
      );
    }

    return (
      <div>
        <h3>Employee Form </h3>

        <h4 className="headings">Employee Details</h4>

        <form onSubmit={this.submitHandle}>
          <div className="image">
            <label>
              <img
                src={this.state.selectedImage}
                alt="preview"
                width="150px"
                height="150px"
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
          <div className="Empdetails">
            <label>
              Request ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="requestId"
                onChange={(e) => this.setState({ requestId: e.target.value })}
              />
            </label>
            <br />
            <br />

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
            <br />

            <div className="Names">
              <label>
                First Name :&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  name="fname"
                  size="40"
                  onChange={this.valueHandle}
                />
              </label>

              <label>
                Last Name :
                <input
                  type="text"
                  name="lname"
                  size="40"
                  onChange={this.valueHandle}
                />
              </label>

              <label>
                Employee ID :
                <input
                  type="text"
                  name="empId"
                  size="40"
                  onChange={this.valueHandle}
                />
              </label>
              <br />
            </div>
            <br />
            <div className="Dates">
              <label>
                Department:&nbsp;&nbsp;&nbsp;&nbsp;
                <select width="20px">
                  <option selected value="None">
                    Select...
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                </select>
              </label>
              <label>
                From :
                <input
                  type="date"
                  name="startDate"
                  onChange={this.valueHandle}
                />
              </label>

              <label>
                Until :
                <input type="date" name="endDate" onChange={this.valueHandle} />
              </label>
              <br />
            </div>
            <label>
              Comments:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" name="Comment1" onChange={this.valueHandle} />
            </label>
          </div>
          <br />

          <label>
            Did this person work for Siemens Before ? : *<br />
            <label>Yes</label>
            <input
              type="checkbox"
              onClick={(e) => this.setState({ isHistory: true })}
            />
            <label>No</label>
            <input
              type="checkbox"
              onClick={(e) => this.setState({ isHistory: false })}
            />
            {history}
          </label>

          <h4 className="headings"> Workspace Requirements</h4>
          <div className="Workspace">
            <p>Please select workspace requirements :</p>

            <label>System </label>
            <br />
            <label>Desktop</label>
            <input
              type="checkbox"
              onClick={(e) => this.setState({ system: "Desktop" })}
            />

            <label>Laptop</label>
            <input
              type="checkbox"
              onClick={(e) => this.setState({ system: "Laptop" })}
            />
            <label>Server</label>
            <input
              type="checkbox"
              onClick={(e) => this.setState({ system: "Server" })}
            />

            <label>Other</label>
            <input
              type="checkbox"
              onClick={(e) => this.setState({ system: "Other" })}
            />

            {systemOptions}
            <br />
            <br />
            <label>Phone </label>
            <br />
            <label>Desk </label>
            <input type="checkbox" />
            <label>Mobile </label>
            <input type="checkbox" />
            <br />
            <br />
            <label>Others</label>
          </div>

          <h4 className="headings"> Building Access</h4>
          <div className="Building">
            <label>Work Location</label>
            <br />

            <label>Seating Location</label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
