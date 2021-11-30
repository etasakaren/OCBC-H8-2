import React from 'react'

import styled from 'styled-components';

let Header1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`


function Header({ title }: any) {
    return (
        <>
            <Header1>{title}</Header1>
            <hr />
        </>
    )
}

export default Header