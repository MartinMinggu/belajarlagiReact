import styled from "styled-components";

const GeneralTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    & th{
        font-weight: normal;
        text-align: left;
        color:#19D9FF;
        // padding: 18px;
        // border-bottom: solid 1px white;
    }
    & th,
    & td{
        padding: 18px;
        border-bottom: solid 1px white;
    }
    & tbody tr:last-child td{
        border-bottom: none;
    }


`;
export default function BaseTable({ children }) {
    return <GeneralTable>
        {children}
    </GeneralTable>
}