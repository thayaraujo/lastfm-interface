import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #d92323;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 400;
    }

    button {
        background-color: #d92323;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;

        &:hover {
            background-color: #f71414;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }

        span {
            font-weight: bold;
            color: #fff;
        }
    }
`;