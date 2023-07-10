import React, { useState } from "react";
import "./HomeStyles.css";
import CvSubmitButton from "../../components/buttons/cvSubmitButton/CvSubmitButton";

export default function Home() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [summary, setSummary] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    console.log(
        "Form submitted: ", firstName, lastName, email, phone, summary
    );

    return(
        <div>
            <h1>
                CV Form
            </h1>

            <form onSubmit={handleSubmit} >
                <label>
                    First name: 
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>

                <br />

                <label>
                    Last name: 
                    <input 
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>

                <br />

                <label>
                    Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <br />

                <label>
                    Phone:
                    <input 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>

                <br />

                <label>
                    Summary:
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    >

                    </textarea>
                </label>
                
                <br />

                <CvSubmitButton 
                    text="Submit"
                    type="submit"
                />
            </form>
        </div>
    );
}