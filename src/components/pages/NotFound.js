import React from "react";

export default function NotFound() {
  return (
    <div id="NotFound">
      <h1 className="display-4 mainHead">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead para">Sorry, that page does not exist.</p>
      <h1 clssName="display-4 contactNotFound">
        <span className="text-danger">Contact</span> list
      </h1>
      <p className="lead empty">No entry found!</p>
    </div>
  );
}
