import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@material-ui/core';
import Race_Company from './Race_Company.jsx';
import Age_Company from './Age_Company.jsx';
import Gender_Company from './Gender_Company.jsx';
import Total_Company from './Total_Company.jsx';

const CompanyComparison = ({ view, index }) => {
  const [value, setValue] = useState(0);

  const changeGraph = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Container id="company_container">
        <div hidden={view !== index} id="company_comparison_div">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={changeGraph}
            className="vertical_tab_bar"
          >
            <Tab label="Aggregate"></Tab>
            <Tab label="Race"></Tab>
            <Tab label="Age"></Tab>
            <Tab label="Gender"></Tab>
          </Tabs>
        </div>
      </Container>

      <Box>
        <Total_Company view={view} value={value} index={0} />
      </Box>
      <Box>
        <Race_Company view={view} value={value} index={1} />
      </Box>
      <Box>
        <Age_Company view={view} value={value} index={2} />
      </Box>
      <Box>
        <Gender_Company view={view} value={value} index={3} />
      </Box>
    </React.Fragment>
  );
};

export default CompanyComparison;
