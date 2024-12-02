import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileViewer from "./ProfileViewer";

const users = [
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Michael Brown",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Emily Davis",
    title: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "David Clark",
    title: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Sarah White",
    title: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "James Wilson",
    title: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Maria Martinez",
    title: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    name: "Christopher Lee",
    title: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Samantha Taylor",
    title: "Business Analyst",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Robert Harris",
    title: "Security Engineer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Olivia Johnson",
    title: "Customer Support",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    name: "William Robinson",
    title: "System Administrator",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Sophia Lewis",
    title: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Ethan Young",
    title: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Isabella Walker",
    title: "Sales Manager",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    name: "Alexander Hall",
    title: "Software Architect",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Ava Allen",
    title: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    name: "Mason King",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Charlotte Wright",
    title: "Human Resources",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Lucas Scott",
    title: "QA Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Mia Carter",
    title: "Accountant",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Henry Perez",
    title: "Network Engineer",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    name: "Amelia Thomas",
    title: "Product Owner",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    name: "Benjamin Moore",
    title: "Database Administrator",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Harper White",
    title: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    name: "Sebastian Harris",
    title: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Ella Garcia",
    title: "Researcher",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Jack Anderson",
    title: "Cloud Engineer",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    name: "Grace Martinez",
    title: "Social Media Manager",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    name: "Liam Robinson",
    title: "Software Tester",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    name: "Zoe Nelson",
    title: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Oliver Carter",
    title: "Tech Support",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Lily Mitchell",
    title: "Event Coordinator",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Aiden Perez",
    title: "Business Development",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Madeline Lewis",
    title: "Copywriter",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Daniel Lee",
    title: "Technical Writer",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Amos Wilson",
    title: "Product Marketing",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Chloe Young",
    title: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    name: "Wyatt Thomas",
    title: "IT Consultant",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Scarlett Moore",
    title: "Business Consultant",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Daniel Harris",
    title: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    name: "Lillian Scott",
    title: "PR Specialist",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Maxwell Clark",
    title: "Network Administrator",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nina Walker",
    title: "SEO Specialist",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Isaac King",
    title: "Game Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ella Green",
    title: "Content Editor",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Samuel Taylor",
    title: "IT Technician",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Grace Adams",
    title: "Recruiter",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Henry Williams",
    title: "Cloud Architect",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Lila Davis",
    title: "Customer Success Manager",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Levi Moore",
    title: "Operations Director",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Madeline Wright",
    title: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Owen Robinson",
    title: "Frontend Architect",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Sophia Evans",
    title: "Sales Representative",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Jackie Lee",
    title: "Digital Marketing",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    name: "Elijah Carter",
    title: "Blockchain Developer",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Hannah Roberts",
    title: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Victor Wilson",
    title: "Game Designer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Ella White",
    title: "Editor-in-Chief",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
];
const galleryStyle = {
  display: "flex",
  width: "100%",
  heigth: "100vh",

  flexWrap: "wrap",
};

const ProfileGallery = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState({
    name: "",
    title: "",
    image: "",
  });

  return (
    <div>
      <h1 className="text-center text-6xl font-semibold m-4">
        Profile Gallery
      </h1>
      <div style={galleryStyle} className="justify-center item-center mt-8">
        {users.map((item) => {
          return (
            <ProfileCard
              data={item}
              openSesame={setShowProfile}
              setSelectedProfile={setSelectedProfile}
            />
          );
        })}
      </div>

      {showProfile ? (
        <ProfileViewer {...selectedProfile} closeModal={setShowProfile} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileGallery;
