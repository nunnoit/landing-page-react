import React from "react";

export const Card = () => {
  return (
    <div className="card m-3 ">
      <img src="https://picsum.photos/500/325" className="card-img-top"></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, est!
          Aspernatur, architecto! Nobis reiciendis aliquid commodi iste eius
          quasi ducimus minima hic illo excepturi? Possimus dicta sunt qui
          fugiat quasi?
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
