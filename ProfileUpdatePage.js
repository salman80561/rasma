import React, { useState } from "react";

function ProfileUpdatePage() {
  const [fullName, setFullName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullName === "" || profileUrl === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Add your profile update logic here
    try {
      // Perform the profile update operation

      // Simulating a delay for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
    } catch (error) {
      setError("An error occurred while updating the profile.");
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      {success ? (
        <div>
          <p>Profile updated successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label>Profile URL:</label>
            <input
              type="text"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default ProfileUpdatePage;
