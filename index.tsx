import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import GroupSelect from './GroupSelect'

const data = Array(6).fill('').map(a => {
 const name = `加${Math.ceil(Math.random() * 1000)}`;
 return {
         id: name,
        label: name
    };

}).map(b => {
     
     const childs = Array(10).fill('').map(c => {
const name = `减${Math.ceil(Math.random() * 1000)}`;
    return {id: name, label: name}
})

  b.children = childs;
return b;
})

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
    <GroupSelect data={data} />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
