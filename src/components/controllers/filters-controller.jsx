import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const FilterController = ({handleFilter}) => (
    <ButtonGroup>
        <Button onClick={handleFilter('all')}>All</Button>
        <Button onClick={handleFilter('running')}>Running</Button>
        <Button onClick={handleFilter('completed')}>Completed</Button>
    </ButtonGroup>
)

FilterController.propTypes = {
    handleFilter: PropTypes.func.isRequired
}

export default FilterController;