import React from "react";
import "./Page4.css";

export default function Page4() {
  return (
    <>
      <div className="a">
        <div className="b my-4 text-white">
          <h2>
            <u>Create Issue</u>
          </h2>
        </div>
        <div className="c text-white">
          <form action="#">
            <label for="exampleFormControlTextarea1" class="form-label">
              Write your issue
            </label>
            <textarea
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="15"
            ></textarea>

            <button action="http://localhost:3000/createPage" className="d" type="submit">
              
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
