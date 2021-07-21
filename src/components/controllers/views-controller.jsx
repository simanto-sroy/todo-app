import React from 'react'
import { Label, CustomInput } from 'reactstrap';
import PropTypes from 'prop-types';

const ViewsController = ({view, changeView}) => (
    <div className="d-flex">
        <Label htmlFor="list-view" className="me-4">
            <CustomInput
                type="radio"
                name="view"
                value="list"
                id="list-view"
                onChange={changeView}
                className="d-inline-block"
                checked={view === 'list'}
            />
            List View
        </Label>
        <Label htmlFor="list-view">
            <CustomInput
                type="radio"
                name="view"
                value="table"
                id="table-view"
                onChange={changeView}
                className="d-inline-block"
                checked={view === 'table'}
            />
            Table View
        </Label>
    </div>
);

ViewsController.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
}

export default ViewsController;