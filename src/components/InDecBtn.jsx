import { useState } from "react";
export default function IncDecBtn() {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggleBtn(!toggleBtn)}
        className="btn btn-secondary"
      >
        Toggle Btn
      </button>
      {toggleBtn ? <p className="lead">YouTube Content</p> : null}
    </>
  );
}
