/**
 *
 * HomePage
 *
 */
import React, { Component } from "react";
class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div style={{ color: "#6b6161" }}>
          <div
            style={{
              height: "100px",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
              width: "100%"
            }}
          >
            <span
              style={{
                lineHeight: "20px",
                color: "#4a90e2",
                fontSize: "31px",
                fontWeight: 600,
                fontStyle: "normal"
              }}
            >
              Introduction{" "}
            </span>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "500px",
                alignItems: "center",
                backgroundColor: "#4a90e2",
                borderRadius: "4px",
                width: "100%"
              }}
            >
              <h1
                style={{
                  right: "300px",
                  bottom: "300px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  color: "#000000",
                  fontSize: "30px",
                  wordSpacing: "9px",
                  paddingTop: "22px",
                  paddingBottom: "9px",
                  paddingLeft: "5px"
                }}
              >
                <span style={{ top: "22px" }}>한슬기</span>
                <h2 style={{ fontSize: "30px", margin: "5px" }}>
                  <span style={{ fontSize: "24px" }}>"안녕하세요 한슬기입니다"</span>
                  <h3
                    style={{
                      marginRight: "14px",
                      marginBottom: "10px",
                      marginTop: "17px"
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/athenasghan/athena_p2/master/strayy_night.jpg"
                      style={{ width: "57%", height: "83%" }}
                    />
                  </h3>
                  <h4 style={{ fontSize: "27px" }}>
                    <span style={{ fontSize: "24px" }}>SNS</span>
                    <a href="https://www.facebook.com/athena.han.7140">
                      <span style={{ color: "#2631df" }}> Facebook</span>
                    </a>
                  </h4>
                </h2>
              </h1>
            </div>
          </div>
          <h1
            style={{
              right: "300px",
              bottom: "300px",
              fontStyle: "normal",
              fontWeight: 500,
              color: "#000000",
              fontSize: "30px",
              wordSpacing: "9px",
              paddingTop: "12px",
              paddingBottom: "9px",
              paddingLeft: "5px"
            }}
          >
            <span style={{ top: "22px" }}>한슬기</span>
          </h1>
          <h2 style={{ fontSize: "30px", margin: "5px" }}>
            <span style={{ fontSize: "24px", color: "#c5a6a6" }}>
              "안녕하세요 한슬기입니다"
            </span>
          </h2>
          <h3
            style={{
              marginRight: "14px",
              marginBottom: "10px",
              marginTop: "17px"
            }}
          >
            <img
              src="https://raw.githubusercontent.com/athenasghan/athena_p2/master/strayy_night.jpg"
              style={{ width: "20%", height: "50%" }}
            />
          </h3>
          <h4 style={{ fontSize: "27px" }}>
            <span style={{ fontSize: "24px" }}>SNS</span>
            <a href="https://www.facebook.com/athena.han.7140">
              <span style={{ color: "#2631df" }}> Facebook</span>
            </a>
          </h4>
          <footer><p><span>Footer</span></p></footer>
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
