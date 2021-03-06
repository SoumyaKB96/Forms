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
      otherSystem:false,
    };
  }

  imageSelectionHandle = (event) => {
    this.setState({
      selectedImage: URL.createObjectURL(event.target.files[0]),
    });
  };
  imageUploadHandle = () => {};

  requestTypeHandle = (event) => {
    if (event.target.value === "Transfer") {
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
      this.setState({ empType: "Contractor" });
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
        <div class="form-group row">
          <div class="col-xs-3">
            <label>Transferring from which CT US:</label>
            <input
              type="text"
              class="form-control "
              id="pwd"
              name="lname"
              onChange={(e) => this.setState({ requestId: e.target.value })}
            />
          </div>
        </div>
      );
    }

    let empTypeOption;
    if (this.state.empType === "Contractor") {
      empTypeOption = (
        <div class="form-group row">
          <div class="col-xs-3">
            <label>If Contractor Specify which Company they worked for:</label>
            <input
              type="text"
              class="form-control "
              id="pwd"
              name="lname"
              onChange={(e) => this.setState({ requestId: e.target.value })}
            />
          </div>
        </div>
      );
    }
    if (this.state.empType === "Others") {
      empTypeOption = (
        <div class="form-group row">
          <div class="col-xs-3">
            <label>If Other , Specify:</label>
            <input
              type="text"
              class="form-control "
              id="pwd"
              name="lname"
              onChange={(e) => this.setState({ requestId: e.target.value })}
            />
          </div>
        </div>
      );
    }

    let history;
    if (this.state.isHistory) {
      history = (
        <div>
          <div class="form-group row">
            <div class="col-xs-3">
              <label for="ex1">GID/Email:</label>
              <input
                class="form-control"
                id="fname"
                type="text"
                name="fname"
                onChange={this.valueHandle}
              />
            </div>
            <div class="col-xs-3">
              <label for="ex2">Last/Current Unit:</label>
              <input
                class="form-control"
                id="lname"
                type="text"
                name="lname"
                onChange={this.valueHandle}
              />
            </div>
            <div class="col-xs-3">
              <label>Last Working Day:</label>
              <input
                class="form-control"
                type="date"
                name="empId"
                onChange={this.valueHandle}
              />
            </div>
          </div>
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
          <div ></div>

          <div class="form-group row">
            <div class="col-xs">
              <label>Request ID:</label>
             
            </div>
          </div>
          
          <div className="Request">
          <label>Request</label>
          <div class="form-group row">
          
            <div class="col-sm-1">
             
              <input
                class="form-control"
                id="fname"
                type="button"
                name="fname"
                value="Transfer"
                onClick={this.requestTypeHandle}
              /> 
            </div>
            <div class="col-mb-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="New Hire"
                onClick={this.requestTypeHandle}
              />
            </div>
            <div class="col-mb-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="Re-hire"
                onClick={this.requestTypeHandle}
              />
            </div>

            <div class="col-mb-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="Status Change"
                onClick={this.requestTypeHandle}
              />
            </div>

            <div class="col-mb-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="Date Extension"
                onClick={this.requestTypeHandle}
              />
            </div>
            </div>

           
          </div>
          {transfer}
          <br />

          <label>Employee Type</label>
          <div class="form-group row">
          
            <div class="col-xs-1">
             
              <input
                class="form-control"
                id="fname"
                type="button"
                name="fname"
                value="Full Time"
                onClick={(e) => this.setState({ empType: e.target.value })}
              /> 
            </div>
            <div class="col-xs-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="Intern"
                onClick={(e) => this.setState({ empType: e.target.value })}
              />
            </div>
            <div class="col-xs-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="Contractor"
                onClick={(e) => this.setState({ empType: e.target.value })}
              />
            </div>

            <div class="col-xs-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="Visitor"
                onClick={(e) => this.setState({ empType: e.target.value })}
              />
            </div>

            <div class="col-sm-1">
              
              <input
                class="form-control"
                id="lname"
                type="button"
                name="lname"
                value="Others"
                onClick={this.requestTypeHandle}
              />
            </div>
            </div>
         
          {empTypeOption}
          <br />

          <div class="form-group row">
          <label class="col-form-label">First name</label>
            <div class="col-xs-2">
              
              <input
                class="form-control"
                id="fname"
                type="text"
                name="fname"
                onChange={this.valueHandle}
              />
            </div>
            <div class="col-xs-2">
              <label for="ex2">Last Name</label>
              <input
                class="form-control"
                id="lname"
                type="text"
                name="lname"
                onChange={this.valueHandle}
              />
            </div>
            <div class="col-xs-2">
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
            <div class="form-group row">
              <div class="col-xs-2">
                <label for="ex2">From</label>
                <input
                  class="form-control"
                  id="lname"
                  type="date"
                  name="lname"
                  onChange={this.valueHandle}
                />
              </div>
              <div class={this.state.empType==="Full Time"?"hide":"col-xs-2"}>
                <label>Until</label>
                <input
                  class="form-control"
                  type="date"
                  name="empId"
                  onChange={this.valueHandle}
                />
              </div>
              <div class="col-xs-2">
                <label for="ex1">Department</label>
                <select class="form-control" id="sel1">
                  <option selected value="None">
                    Select...
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                Manager :
              </div>
            </div>
          </div>

          <label>
            Did this person work for Siemens Before ? : *
            <label class="radio-inline">
              <input
                type="radio"
                
                onClick={(e) => this.setState({ isHistory: true })}
              />
              Yes
            </label>
            <label class="radio-inline">
              <input
                type="radio"
                
                onClick={(e) => this.setState({ isHistory: false })}
              />
              No
            </label>
            {history}
          </label>

          <h4 className="headings"> Workspace Requirements</h4>
          <div class="form-group row">
            <div class="col-xs-4">
           
            <label>System  &nbsp;</label>

            <label class="checkbox-inline">
              <input type="checkbox" value="Desktop" />
              Desktop
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="Server" />
              Server
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="Laptop" />
              Laptop
            </label>
            

            <div class={this.state.otherSystem== true ? "" :"hide"}>
            <label class="checkbox-inline">
              <input type="textarea" value=""  />
              
            </label>
            </div>

            <br />
            <label>Phone &nbsp;&nbsp;&nbsp; </label>

            <label class="checkbox-inline">
              <input type="checkbox" value="Desk" />
              Desk
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="Mobile" />
              Mobile
            </label>
          </div>
          <div class="col-xs-4"><input type="textarea">Other Assets</input></div>

          </div>

          <h4 className="headings"> Building Access</h4>
          <div className="Building">
          <div class="form-group row">
            <div class="col-xs-2">
              <label for="ex1">Building Location</label>
              <input
                class="form-control"
                id="fname"
                type="text"
                name="fname"
                onChange={this.valueHandle}
              />
            </div>
            <div class="col-xs-2">
              <label for="ex2">Seating Location</label>
              <input
                class="form-control"
                id="lname"
                type="text"
                name="lname"
                onChange={this.valueHandle}
              />
            </div>
           
          </div>

          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
