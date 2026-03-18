import {styled} from 'styled-components';

const Card = styled.div`
    border:solid 1px #bdc3c7;
    box-shadow: 0 4px 8px 0 #bdc3c7;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 20px;
    margin-bottom:10px;

    & .button-container button:first-child{
        margin-right:5px;
    }

    & .space-between{
        display:flex;
        justify-content:space-between;
        align-items: center;

        & > span{
            font-weight:bold;
            text-transform:uppercase;
        }

        & > div > button:first-child{
            margin-right:5px;
        }
    }

    & .two-side{
        display:flex;
        font-size:14px;
        gap:20px;

        & > div{
            flex-grow:1;
        }
        & > div:first-child{
            min-width:250px;
        }
        & .property{
            margin-bottom: 15px;
        }
        & .property:last-child{
            margin-bottom: 0;
        }
        & .property:before{
            margin-right: 15px;
            color:#1e90ff;
            font-weight:bold;
        }
        & .title:before{
            content: 'Title:';
        }
        & .duration:before{
            content: 'Duration:';
        }
        & .duration:after{
            content: 'minutes';
            margin-left:5px;
        }
        & .status:before{
            content: 'Status:';
        }
        & .rating:before{
            content: 'Rating:';
        }
        & .production:before{
            content: 'Production:';
        }
        & .button-container{
            display:flex;
            justify-content:end;
            margin-bottom:10px;
        }
        & .button-container > button:first-child{
            margin-right:5px;
        }
        & .summary:before{
            content: 'Summary:';
            margin-right:0;
            display:block;
            margin-bottom:5px;
        }
    }
`;

export default function SimpleCard({children}){
    return (
        <Card>{children}</Card>
    );
}