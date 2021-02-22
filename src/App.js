import "./styles.css";
import Calender from "react-calendar";

export default function App() {
  return (
    <div className="App">
      <h3>Employee Form </h3>

      <h4>Employee Details</h4>

      <form>
        <div className="Empdetails">
          <label>
            Onboarding Request ID:
            <input type="text" name="name" />
          </label>
          <br />

          <div className="image">
            <label>
              Uplaod Image:
              <button>Uplaod image</button>
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
            Did this person work for Siemens Before ? : *
            <select>
              <option selected value="None">
                Select...
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <h4> Computer Assist Plan</h4>
        <div classname="CompAssist">
          <label>
            Did this person work for Siemens Before ? : *
            <select>
              <option selected value="None">
                Select...
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
