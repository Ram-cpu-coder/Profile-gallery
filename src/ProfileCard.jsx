import "./ProfileCard.css";

const ProfileCard = ({ data, openSesame, setSelectedProfile }) => {
  const item = data;
  const OpenProfileViewer = () => {
    openSesame(true);
    setSelectedProfile(data);
  };
  return (
    <div className="profile flex flex-col flex-nowrap justify-center item-center m-5 text-center">
      <img src={item.image} className="border border-0 rounded-2xl" />
      <div>{item.name}</div>
      <div>{item.title}</div>
      <button
        className="bg-black text-white p-2 m-2 rounded-xl"
        onClick={OpenProfileViewer}
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
