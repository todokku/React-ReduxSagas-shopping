import styled from 'styled-components';

export const CheckoutPageStyledContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    letter-spacing: 3px;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarning = styled.div`
    text-align: center;
    margin:2rem;
    font-size: 1.2rem;
    color:#222;
    font-family:'微软雅黑';
    line-height: 2rem;
    letter-spacing: 3px;
`;