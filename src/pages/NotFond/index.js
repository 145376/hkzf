import React from "react";

class NotFond extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{ fontSize: "20px", marginTop: "50px", padding: "20px" }}
        onClick={() => {
          this.props.history.push("/home");
        }}
      >
        -404
        <br />
        <br />
        找不到页面,点击返回<span style={{ color: "blue" }}>首页</span>
      </div>
    );
  }
}

export default NotFond;
