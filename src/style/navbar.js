import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    
`


export const NavItem = styled.div`
    margin: 1em;
    /* padding: 1em; */
    width: 20em;
    /* border: 1px solid white; */
    display: flex;
    align-content: center;
    height: 50px;
    max-width: 20em;
    transition: 0.4s;
    &:hover {
        height: 8em;
    }
`

export const NavDesc = styled.div`
    border-radius: 10px;
    text-align: center;
    background: ${props => props.primary ? "#2A8CAE" : "white"};
    color: ${props => props.primary ? "white" : "#2A8CAE"};
    transition-duration: 0.4s;
    margin-top: 1em;
    padding: 1em 1em;
    opacity: 0;
    /* inline-size: 40em;  */
    ${NavItem}:hover & {
        opacity: 1;
    }
`

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#2A8CAE" : "white"};
  color: ${props => props.primary ? "white" : "#2A8CAE"};

  font-size: 2em;
  /* margin: 1em; */
  padding: 0 1em;
  border: 1px solid #2A8CAE;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 0.4s;
  height: 50px;
  width: auto;

  &:hover{
    opacity: 50%;
    background: ${props => props.primary ? "white" : "#2A8CAE"};
    color: ${props => props.primary ? "#2A8CAE" : "white" };
    width: auto;
    border-radius: 3px 0 0 3px;
  };
  
`;

