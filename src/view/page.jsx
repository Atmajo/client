import React, { useState } from "react";

function page() {
  const [image, setImage] = useState("144px");
  return (
    <div style={{backgroundColor: '#242424'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {image == "144px" ? <img src="144px.png" width={300} alt="" /> : ""}
          {image == "360px" ? <img src="360px.png" width={300} alt="" /> : ""}
          {image == "480px" ? <img src="480px.png" width={300} alt="" /> : ""}
          {image == "720px" ? <img src="720px.png" width={300} alt="" /> : ""}
          {image == "1080px" ? (
            <img src="1080px.jpeg" width={300} alt="" />
          ) : (
            ""
          )}
        </div>
        <select
          name=""
          id="pixels"
          onChange={(event) => {
            console.log(event.target.value);
            setImage(event.target.value);
          }}
          style={{padding: '10px'}}
        >
          <option value="144px">144px</option>
          <option value="360px">360px</option>
          <option value="480px">480px</option>
          <option value="720px">720px</option>
          <option value="1080px">1080px</option>
        </select>
      </div>
    </div>
  );
}

export default page;
