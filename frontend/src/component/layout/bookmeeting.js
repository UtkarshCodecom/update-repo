import React, { Fragment, useState } from "react";
import "../Home/Home.css";
import MetaData from "../layout/MetaData";
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api_rout_url } from '../../utils/Constants';

const Book = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [reason, setReason] = useState("");
    const [response, setResponse] = useState(false);

    const categories = [
        "Web - VAPT",
        "API - VAPT",
        "Network - VAPT",
        "Smart Contract - VAPT",
        "Self - Courses",
        "Collaboration - Courses",
        "Udemy - Courses",
        "Other",
    ];

    const validateForm = () => {
        if (!name) {
            toast.error("Name is required");
            return false;
        }
        if (!email) {
            toast.error("Email is required");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email address");
            return false;
        }
        if (!phone) {
            toast.error("Phone number is required");
            return false;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error("Phone number must be 10 digits");
            return false;
        }
        if (!service) {
            toast.error("Service is required");
            return false;
        }
        if (!reason) {
            toast.error("Reason is required");
            return false;
        }
        return true;
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        
        try {
            const response = await fetch(`${api_rout_url}/api/auth/book`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, service, reason })
            });
            
            if (response.ok) {
                const result = await response.json();
                toast.success('Form submitted successfully: ' + result);
                setResponse(true);
                // Optionally, reset the form
                setName('');
                setEmail('');
                setPhone('');
                setService('');
                setReason('');
            } else {
                const errorResponse = await response.json();
                toast.error('Error submitting form: ' + (errorResponse.message || response.statusText));
            }
        } catch (error) {
            // Handle any network errors
            toast.error('Network error: ' + error.message);
        }
    };

    return (
        <Fragment>
            <MetaData title="Home" />
            <div className="main">
                <div className="mg rest">
                    <div className="contact">
                        <div className="baye">
                            <div className="down heading">
                                <h2 className="white-why ">
                                    <span className="color-why ml-2 ">Book a meeting</span>
                                </h2>
                            </div>
                            <p>Let's meet and discuss your ideas</p>
                        </div>
                        {response ? (
                            <div className="daye">
                                <h2>We will contact you soon</h2>
                            </div>
                        ) : (
                            <div style={{ display: "block" }} className="daye">
                                <h2>Fill this form and our team will reach out to you soon!</h2>
                                <form >
                                    <input className="enquiry" placeholder="Name" type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <input className="enquiry flex"
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <input className="enquiry"
                                        placeholder="Phone No."
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                    <select className="enquiry" value={service} onChange={(e) => setService(e.target.value)}>
                                        <option value="">Choose Category</option>
                                        {categories.map((cate) => (
                                            <option key={cate} value={cate}>
                                                {cate}
                                            </option>
                                        ))}
                                    </select>
                                    <input placeholder="General enquiry"
                                        type="text" className="enquiry message"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)} />
                                   
                                </form>
                                <Button
                                        variant="contained" type="submit" onClick={submitForm}>Submit</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    );
};

export default Book;
