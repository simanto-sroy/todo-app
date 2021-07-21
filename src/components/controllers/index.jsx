import React from 'react';
import {Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';

import SearchPanel from './search-form'
import BulkController from './bulk-controller';
import ViewsController from './views-controller';
import FilterController from './filters-controller';

const Controller = ({term, handleSearch, toggleForm, handleFilter, view, changeView, clearCompleted, clearSelected, reset}) => {
    return (
        <div>
            <SearchPanel
                term={term}
                handleSearch={handleSearch}
                toggleForm={toggleForm}
            />
            <Row className="my-4">
                <Col md={{size:4}}>
                    <FilterController handleFilter={handleFilter} />
                </Col>
                <Col md={{size:4}}>
                    <ViewsController view={view} changeView={changeView} />
                </Col>
                <Col md={{size:4}} className="d-flex">
                    <div className="ms-auto">
                        <BulkController
                            clearCompleted={clearCompleted}
                            clearSelected={clearSelected}
                            reset={reset}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Controller;