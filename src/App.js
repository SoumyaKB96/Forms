import "./styles.css";

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
            <select>
              <option selected value="New Hire">
                New Hire
              </option>
              <option value="Trasnfer From another Siemens Unit">
                Trasnfer From another Siemens Unit
              </option>
              <option value="Re-Hire">Re-Hire</option>
              <option value="Status Change">Re-Hire</option>
              <option value="Work Date Extension">Work date Extension</option>
            </select>
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
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
