const Dashboard = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <img src={userData.picture} alt=""/>
      <h1>{userData.name}</h1>
      <h2>{userData.email}</h2>
    </>
  );
};
export default Dashboard;
