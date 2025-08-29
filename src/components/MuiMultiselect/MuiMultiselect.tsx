import React from 'react';
import styled from '@emotion/styled';
import { Box, Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';

export const MuiMultiselect: React.FC<{
  items: string[],
  selectedItems: string[],
  handleChange: (event: SelectChangeEvent<string[]>) => void,
  label?: string
}> =
({ items: customers, selectedItems: selectedCustomers, handleChange, label }) => {
    return (
      <MultiSelectContainer>
          <MultiSelectStyled
          input={label ? <OutlinedInput label={<InputLabel>{label}</InputLabel>} /> : undefined}
            multiple
            value={selectedCustomers}
            onChange={(e) => handleChange(e as SelectChangeEvent<string[]>)}
            renderValue={(selected) => (selected as string[]).join(', ')}
          >
            { 
              customers.map((customer, index) =>
                <MenuItem key={index} value={customer}>
                  <Checkbox checked={selectedCustomers.includes(customer)} />
                  <ListItemText primary={customer}/>
                </MenuItem>
              )
            }
          </MultiSelectStyled>
      </MultiSelectContainer>
    )
}


const MultiSelectContainer = styled(Box)`
  margin: 1em;
  display: flex;
  justify-content: space-evenly;
`
const MultiSelectStyled = styled(Select)`
  & legend span {
    opacity: 1;
    label {
      font-size: 10px;
    }
  }
  width: 50%;
  min-width: 300px;
`
