import React from 'react';
import {Input, Button} from 'reactstrap'
import PropTypes from 'prop-types';

const SearchPanel = ({term, handleSearch, toggleForm}) => {
    return (
        <div className="d-flex">
            <Input
                className="me-3"
                placeholder="Enter Your Search Term"
                value={term}
                onChange={event => handleSearch(event.target.value)}
            />
            <Button className="btn btn-danger" onClick={toggleForm}>
                New
            </Button>
        </div>
    );
}

SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
}


export default SearchPanel;