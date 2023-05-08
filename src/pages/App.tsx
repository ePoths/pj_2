import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GoToPage = styled(Link)`
  color: #fff;
`;

function App() {
  return (
    <div>
      <GoToPage to="/movie">영화 리스트트</GoToPage>
      <br />
      <GoToPage to="/time">시간</GoToPage>
    </div>
  );
}

export default App;
