/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../../styles/booking-form.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        fromAddress: '',
        toAddress: '',
        journeyDate: '',
        journeyTime: '',
        passengers: '1 person',
        luggages: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Label for="firstName">First Name</Label>
                <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-1 mb-4">
                <Label for="lastName">Last Name</Label>
                <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-1 mb-4">
                <Label for="phoneNumber">Phone Number</Label>
                <Input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Label for="fromAddress">From Address</Label>
                <Input
                    type="text"
                    name="fromAddress"
                    id="fromAddress"
                    value={formData.fromAddress}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-1 mb-4">
                <Label for="toAddress">To Address</Label>
                <Input
                    type="text"
                    name="toAddress"
                    id="toAddress"
                    value={formData.toAddress}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Label for="journeyDate">Journey Date</Label>
                <Input
                    type="date"
                    name="journeyDate"
                    id="journeyDate"
                    value={formData.journeyDate}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-1 mb-4">
                <Label for="journeyTime">Journey Time</Label>
                <Input
                    type="time"
                    name="journeyTime"
                    id="journeyTime"
                    value={formData.journeyTime}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Label for="passengers">Passengers</Label>
                <select
                    name="passengers"
                    id="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                >
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                    <option value="5+ person">5+ Person</option>
                </select>
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <Label for="luggages">Luggages</Label>
                <select
                    name="luggages"
                    id="luggages"
                    value={formData.luggages}
                    onChange={handleChange}
                >
                    <option value="1 luggage">1 luggage</option>
                    <option value="2 luggage">2 luggage</option>
                    <option value="3 luggage">3 luggage</option>
                    <option value="4 luggage">4 luggage</option>
                    <option value="5+ luggage">5+ luggage</option>
                </select>
            </FormGroup>
            <Button type="submit" className="btn reserve__btn mt-4 bg-secondary text-white">
                Reserve Now
            </Button>
        </Form>
    );
};

export default BookingForm;
