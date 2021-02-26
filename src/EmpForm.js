import React from "react";

export default class EmpFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestId: null,
      requestType: "",
      istransfer: false,
      selectedImage: null,

      empType: "",
      isContractor: false,
      transferDept: "",
      contractorDept: "",
      otherDept: "",
      otherLastDate: null,

      empId: null,
      dept: "",
      fName: "",
      lName: "",
      startDate: null,
      endDate: null,

      isHistory: false,
      purchaseRequest: "",
      system: "",
    };
  }

  imageSelectionHandle = (event) => {
    this.setState({
      selectedImage: URL.createObjectURL(event.target.files[0]),
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

  valueHandle = () => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  submitHandle = () => {
    console.log(this.state);
  };
  historyHandle = (event) => {
    var checkBox = document.getElementById("myCheck");

    if (event.target.value == "Yes") {
      if (checkBox.checked == true) {
        this.setState({ isHistory: true });
      }
      if (checkBox.checked == false) {
        this.setState({ isHistory: false });
      }
    }
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
          <label>
            Last work date from resume :
            <input
              type="date"
              name="lastWorkDate"
              onChange={this.valueHandle}
            />
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
          <div className="Empdetails"></div>

          <div class="form-group row">
            <div class="col-xs">
              <label>Request ID:</label>
              <input
                type="text"
                class="form-control "
                id="pwd"
                name="lname"
                onChange={(e) => this.setState({ requestId: e.target.value })}
              />
            </div>
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

          <div class="form-group row">
            <div class="col-xs-3">
              <label for="ex1">First name</label>
              <input
                class="form-control"
                id="fname"
                type="text"
                name="fname"
                onChange={this.valueHandle}
              />
            </div>
            <div class="col-xs-3">
              <label for="ex2">Last Name</label>
              <input
                class="form-control"
                id="lname"
                type="text"
                name="lname"
                onChange={this.valueHandle}
              />
            </div>
            <div class="col-xs-3">
              <label>Employee Id</label>
              <input
                class="form-control"
                type="text"
                name="empId"
                onChange={this.valueHandle}
              />
            </div>
          </div>

          <div className="Dates">
            <div class="form-group col-sm-3">
              <label for="sel1">Department </label>
              <select class="form-control" id="sel1">
              <option selected value="None">
                  Select...
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
           
            <label>
              From :
              <input type="date" name="startDate" onChange={this.valueHandle} />
            </label>
            <label>
              Until :
              <input type="date" name="endDate" onChange={this.valueHandle} />
            </label>
            <br />
          </div>
          <div class="form-group col-xs-3">
  <label for="comment">Comment:</label>
  <textarea class="form-control" rows="4" id="comment"></textarea>
</div>

          <br />

          <label>
            Did this person work for Siemens Before ? : *<br />
            <label class="radio-inline">
              <input
                type="radio"
                name="optradio"
                onClick={(e) => this.setState({ isHistory: true })}
              />
              Yes
            </label>
            <label class="radio-inline">
              <input
                type="radio"
                name="optradio"
                onClick={(e) => this.setState({ isHistory: false })}
              />
              No
            </label>
            {history}
          </label>

          <h4 className="headings"> Workspace Requirements</h4>
          <div className="Workspace">
            <p>Please select workspace requirements :</p>
            <p>System </p>

            <label class="checkbox-inline">
              <input type="checkbox" value="" />
              Desktop
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="" />
              Server
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="" />
              Laptop
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="" />
              Other
            </label>

            <div className="system">
              <input
                type="checkbox"
                onClick={(e) => this.setState({ system: "Desktop" })}
              />
              Desktop
              <input
                type="checkbox"
                name="Laptop"
                onClick={(e) => this.setState({ system: "Laptop" })}
              />
              Laptop
              <input
                type="checkbox"
                onClick={(e) => this.setState({ system: "Server" })}
              />
              Server
              <input
                type="checkbox"
                onClick={(e) => this.setState({ system: "Other" })}
              />
              Other
              {systemOptions}
            </div>
            <br />
            <br />
            <label>Phone </label>

            <label class="checkbox-inline">
              <input type="checkbox" value="" />
              Desk
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="" />
              Mobile
            </label>
          </div>
          <label>Others </label>
          <input type="text" name="PhoneOthers" />

          <label class="checkbox-inline">
            <input type="checkbox" value="" />
            Option 1
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" value="" />
            Option 2
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" value="" />
            Option 3
          </label>

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
