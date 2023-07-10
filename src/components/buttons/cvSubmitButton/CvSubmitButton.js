import React from "react";
import "./CvSubmitButtonStyles.css";

export default function CvSubmitButton({
    text, type
}) {
    return(
        <button className="cv-submit-button" >
            {text}
        </button>
    );
}