import React from 'react';
import { useNavigate } from 'react-router-dom';
function ShopChoices() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='container my-5'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    navigate("/ShopTemp1");
                }} className="btn btn-primary btn-lg mx-2">Template1</button>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    navigate("/ShopTemp2");
                }}className="btn btn-primary btn-lg mx-2">Template2</button>
            </div>
        </div>
    )
}

export default ShopChoices
