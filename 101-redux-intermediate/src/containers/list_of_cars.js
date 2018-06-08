import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListOfCars extends Component {
    listOfCars = ({ cars }) => {
        if (cars) {
            return cars.map(car => {
                return (
                    <Link
                        to={`/car/${car.id}`}
                        key={car.id}
                        className="car_item">
                        <div className="left">
                            <img alt={car.image} src={`/images/${car.image}`} />
                        </div>
                        <div className="right">
                            <h4>{car.model}</h4>
                            <h6>{car.brand}</h6>
                        </div>

                        {car.model}
                    </Link>
                );
            });
        }
    };

    render() {
        return <div>{this.listOfCars(this.props)}</div>;
    }
}

function mapStateToProps(state) {
    console.log(state);

    return {
        cars: state.cars
    };
}

export default connect(
    mapStateToProps,
    null
)(ListOfCars);
