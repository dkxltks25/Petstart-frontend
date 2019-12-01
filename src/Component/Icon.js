
import React from "react";
import logo from "../image/logo.png";
import styled from "styled-components";

const ImgBlocked = styled.img`
    height:80px;
`;
export const Logo = () =>(
    <ImgBlocked src = {logo}/>
)