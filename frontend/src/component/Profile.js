
import '../css/profile.css'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/userContext';
import React, { useContext, useEffect, useState } from 'react';
import ProfileBuz from './ProfileBuz';
import buzContext from '../context/buzContext';
import insContext from '../context/insContext';
import ProfileOrgs from './ProfileOrgs';
import eveContext from '../context/eveContext';
import ProfileEve from './ProfileEve';
// Export the getImageIds function
export
    const getImageIds = (ele) => {
        const imageIds = [];
        const { contentData } = ele;

        if (contentData && contentData.images) {
            const { images } = contentData;
            Object.values(images).forEach((imageArray) => {
                imageArray.forEach((imageId) => {
                    imageIds.push(imageId.toString());
                });
            });
        }

        return imageIds;
    };

const getImageIdsE = (ele) => {
    const imageIds = [];
    if (ele && typeof ele === 'object') {
        if (ele.images) {
            imageIds.push(ele.images);
        }
    }
    return imageIds;
};

function Profile() {
    const Buz = useContext(buzContext);
    const Ins = useContext(insContext);
    const Eves = useContext(eveContext)
    const navigate = useNavigate();
    const { images, userBuzs, getBuzOfOne, getImages } = Buz;
    const { userInss, imagesI, getInsOfOne, getImagesI } = Ins;
    const { userEves, getEvesOfOne } = Eves;
    const [combinedData, setCombinedData] = useState([]);
    const [EventData, setEventData] = useState([]);

    const { users, getUser } = useContext(userContext)
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await getBuzOfOne();
                    await getInsOfOne();
                    await getEvesOfOne();
                    getUser();

                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                navigate('/Home');
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const fetchDataE = async () => {

            if (userBuzs.length > 0 || userInss.length > 0) {
                const allBusinessImageIds = userBuzs.flatMap(getImageIds);
                getImages(allBusinessImageIds);
                const allInstituteImageIds = userInss.flatMap(getImageIds);
                getImagesI(allInstituteImageIds);
                const combinedArray = [...userBuzs, ...userInss];

                setCombinedData(combinedArray);
            }
        }
        fetchDataE();
    }, [userBuzs, userInss]);
    const profileImageUrl = users.profileImage ? `data:image/jpeg;base64,${users.profileImage}` : ""
    return (
        <div className="profile-body ">
            <div className="container-fluid ">
                <form method="post">
                    <div className="row ">
                        <div className="col-md-4 ">
                            <div className="profile-img">

                                {profileImageUrl && <img className="" src={profileImageUrl} alt="Profile" />}

                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="row emp-profile">
                                <div className="col-md-6">
                                    <div className="profile-head">
                                        <h5>
                                            {users.name}
                                        </h5>
                                        <h6>
                                            {users.role}
                                        </h6>

                                        <h4>About</h4>
                                    </div>
                                </div>


                                <div className="col-md-12 my-4">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>User Id</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{users._id}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{users.name}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{users.email}</p>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>User Role</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{users.role}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Gender</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{users.gender}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {users.role == "Normal User" ? "" :
                            <div className='row'>
                                {users.role == "Business User" ?
                                    <div className='col-md-3 offset-3'>
                                        <button type="button" onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/ShopChoice");
                                        }} className="btn btn-warning mx-2 my-2">Add Business</button>
                                    </div>
                                    : ""}
                                {users.role == "Organisation User" ?
                                    <div className="row">
                                        <div className='col-md-3 offset-3'>
                                            <button type="button" onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/instiChoice");
                                            }} className="btn btn-warning mx-2 my-2">Add Institute</button>
                                        </div>
                                        <div className='col-md-3 '>
                                            <button type="button" onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/addEvent");

                                            }} className="btn btn-warning mx-2 my-2">Add events</button>
                                        </div>
                                    </div> : ""
                                }


                            </div>
                        }
                    </div>

                    <div className="row offset-md-3">
                        {combinedData.map((ele) => {
                            const isInstitute = ele.contentData && Object.keys(ele.contentData).includes('title') && ele.contentData.title.instituteTitle;
                            const Component = isInstitute ? ProfileOrgs : ProfileBuz;
                            const imagesForComponent = isInstitute ? Object.values(imagesI) : Object.values(images);
                            return (
                                <div className="col-md-4 " key={ele._id}>
                                    <Component data={ele} images={imagesForComponent} />
                                </div>
                            );
                        })}
                       
                           <div className="row">
                        {userEves.length > 0 ? userEves.map((event) => (

                            <div className="col-md-4 " key={event._id}>
                                <ProfileEve data={event} eveImage={event.imageData}/>
                            </div>
                        )) : ""}
                    </div>
                    </div>
                 

                </form>
            </div >
        </div >
    )
}

export default Profile
