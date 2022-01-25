import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 10px;
    border: 1px solid #d92323;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff";
    margin: 8px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        /* border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white; */
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid "#d92323";
    /* box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3); */
    display: none;
    margin-top: -5px;
    /* z-index: 99999;
    background-color: "#fff"; */

    &.is-selected {
        display: block;
    }
`;
WrapperTabPanel.tabsRole = "TabPanel";