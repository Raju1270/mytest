import React, { useState } from "react";

function Home() {
  const [a1, seta1] = useState();
  const [a2, seta2] = useState("");
  const [toggle, settoggle] = useState(false);
  const handleclick = () => {
    settoggle(!toggle);
  };
  return (
    <div className="sub-container">
      <div className="cross">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 122.878 122.88"
          enableBackground="new 0 0 122.878 122.88"
        >
          <g>
            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
          </g>
        </svg>
      </div>
      <div className="h1 pt1rem">ROI Calculator</div>
      <div className="flex">
        <p></p>
        <p className="pd10">
          <span className="cakelogo">c</span>
          <span>Cake</span>
          <label className="s-switch ">
            <input type="checkbox" />
            <span className="s-slider round"></span>
          </label>
          <span>USD</span>
        </p>
      </div>
      <div className="relative">
        <input
          className="inputtext h1 p1"
          type="number"
          value={a1}
          onChange={(e) => seta1(e.target.value)}
        />
        <span className="h1">CAKE</span>
      </div>
      <div className="flex">
        <div className="sub-button">
          <div className="active">USE BALANCE</div>
          <div>$1000</div>
          <div>$100</div>
        </div>
        <p>~$20.82</p>
      </div>
      <div className="h3 p">Timeframe</div>
      <div className="flex">
        <div className="sub-button rf">
          <div className="active">1 Day</div>
          <div>7 day</div>
          <div>30 day</div> <div>1 Year</div>
          <div>5 Year</div>
        </div>
      </div>
      <div className="flex pc">
        <div className="h2 p">Enable Accelarated APY</div>
        <label className="switch ">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="h3">
        <p>Select Tier</p>
      </div>
      <div className="flex pb">
        <div className="sub-button rf">
          <div>Tier 1</div>
          <div>Tier 2</div>
          <div>Tier 3</div>
          <div className="active">Tier 4</div>
          <div>Tier 5</div>
        </div>
      </div>
      <div className="flex p">
        <p></p>
        <p>ROI at Current Rates</p>
      </div>
      <div className="relative">
        <input
          className="inputtext maininput h1 p2"
          type="number"
          value={a2}
          onChange={(e) => seta2(e.target.value)}
        />
        <span className="h1">USD</span>
        <span className="pencil">
          {toggle ? (
            <svg
            width="20"
              height="20"
              fill="currentColor"
              
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          ) : (
            <svg
             
              width="20"
              height="20"
              fill="currentColor"
              
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          )}
        </span>
      </div>
      <div className="flex p">
        <p></p>
        <p>~ 3 CAKE + 10 DON</p>
      </div>
      <div className="flex">
        <button className="button b1">Apply</button>
        <button className="button b2">Cancel</button>
      </div>

      <div className="flexc" onClick={handleclick}>
        {toggle ? (
          <div className="h3 p flexc">
            Show Details
            <svg className="ml" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        ) : (
          <div className="h3 p flexc">
            Hide Details
            <svg className="ml" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </div>
        )}
      </div>
      {toggle ? (
        <div></div>
      ) : (
        <div className="">
          <div className="h3 ">
          <div className="flex pc">
        <div className="h2 p">Enable Accelarated APY</div>
        <div className="yf">64.34%</div>
      </div>
            <ul>
              <li>
                <p>Calculated based on current rates</p>
              </li>
              <li>
                <p>All fugures are estimates provided for your convenience only, and by no means represent guaranted returns.</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
