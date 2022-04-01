import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: ${oc.green[7]};
    color: white;
    border-bottom: 1px solid ${oc.green[8]};
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
    font-family: 'Baloo', cursive
`;


const Header = () => (
    <Wrapper>
        <div>
            INCODING
        </div>
    </Wrapper>
);

export default Header;