import profilesData from '../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div key={profile.firstName} className="facebook-body">
            <img
              className="facebook-img"
              src={profile.img}
              alt={profile.firstName}
            />
            <div className="facebook-info">
              <p>
                <span>First Name</span>:{profile.firstName}
              </p>
              <p>
                <span>Last Name</span>:{profile.lastName}
              </p>
              <p>
                <span>Country</span>:{profile.country}
              </p>
              <p>
                <span>Type</span>:{profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
