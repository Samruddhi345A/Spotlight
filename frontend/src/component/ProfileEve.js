import React, {useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import eveContext from '../context/eveContext';

function ProfileEve({ data ,eveImage }) {

  const Eve = useContext(eveContext);
  const { deleteEve } = Eve;
  const [Idata,setIdata]=useState(data)
  // Check if contentData is defined before accessing its properties
  const orgName = data?.orgName || "";
  const EventImageUrl = eveImage ? `data:image/jpeg;base64,${eveImage}` : "";
  const handleSvgClick = (e) => {
   e.preventDefault();
   try {
    // Call the deleteBuz function to delete the buz data
     deleteEve(data._id);
    // Remove the deleted buz from the data
    setIdata(null)
  } catch (error) {
    console.error('Error deleting buz:', error);
  }
};

// Render the component only if data is not null
if (!data) {
  return null;
}
if(Idata==null){
  return null;
}
  return (
    <> 
    <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
    
      <div className="card-header">{orgName}<svg onClick={handleSvgClick} xmlns="http://www.w3.org/2000/svg"  style={{float: "right"}}x="0px" y="0px" width="50" height="20" viewBox="0,0,255.99594,255.99594">
    <g fill="#ff5d00" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(10.66667,10.66667)"><path d="M10.80664,2c-0.517,0 -1.01095,0.20431 -1.37695,0.57031l-0.42969,0.42969h-5c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h16c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-5l-0.42969,-0.42969c-0.365,-0.366 -0.85995,-0.57031 -1.37695,-0.57031zM4.36523,7l1.52734,13.26367c0.132,0.99 0.98442,1.73633 1.98242,1.73633h8.24805c0.998,0 1.85138,-0.74514 1.98438,-1.74414l1.52734,-13.25586z"></path></g></g>
    </svg> </div>
      <div className="card-body text-info">

      {eveImage ? (
            <img src={EventImageUrl} width="200px" height="200px" alt="Event" />
          ) : (
            <p>No image available</p>
          )}
        <h5 className="card-title"></h5>
        {/* <Link to={`/shop-temp/${tempType}`} state={{ contentData, images }}> 
          check it &rarr;
        </Link>*/}
      </div>
    </div>
    </>
  );
}

export default ProfileEve;


