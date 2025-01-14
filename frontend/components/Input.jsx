import React from "react";

export default function Input({ id, label, placeholder, min, onChange }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type="number"
                id={id}
                className="form-control form-control-lg"
                min={min}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}
