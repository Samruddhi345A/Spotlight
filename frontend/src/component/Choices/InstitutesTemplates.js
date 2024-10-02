import React from 'react'
import { useNavigate } from 'react-router-dom';
function InstitutesTemplates() {
  const navigate = useNavigate();
  return (
    <div>
       <div className='container my-5'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    navigate("/ITemp1");
                }} className="btn btn-primary btn-lg mx-2">Template1</button>
            </div>
    </div>
  )
}

export default InstitutesTemplates
