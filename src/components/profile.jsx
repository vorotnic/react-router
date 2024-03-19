import { useNavigate, useSearchParams, Navigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log(searchParams);

  return (
    <>
      <div>Profile</div>
      <button onClick={() => navigate("/")}>Back Home</button>
      <Navigate replace to="/" />
    </>
  );
};

export default Profile;
