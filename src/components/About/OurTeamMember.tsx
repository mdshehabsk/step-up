import Image from "next/image";
import team1 from "@/image/about-page/team-member/1.webp";
import team2 from "@/image/about-page/team-member/2.webp";
import team3 from "@/image/about-page/team-member/3.webp";
import team4 from "@/image/about-page/team-member/4.webp";
import team5 from "@/image/about-page/team-member/5.webp";
import team6 from "@/image/about-page/team-member/6.webp";
import team7 from "@/image/about-page/team-member/7.webp";
import team8 from "@/image/about-page/team-member/8.webp";

const teamMemberArr = [
    {
        img: team1,
        name: 'Riaz Uddin',
        job: 'HR & Culture'
    },
    {
        img: team2,
        name: 'Tanjirul Haque',
        job: 'International Marketing'
    },
    {
        img: team3,
        name: 'Tauhidul Islam Lin',
        job: 'Creative Director'
    },
    {
        img: team4,
        name: 'Habibullah Kawsari',
        job: 'Digital Marketer'
    },
    {
        img: team5,
        name: 'Redwan',
        job: 'Web Developer'
    },
    {
        img: team6,
        name: 'Sonia Akter',
        job: 'Voice Artist'
    },
    {
        img: team7,
        name: 'Safaayet Hossen',
        job: 'Corporate Sales'
    },
    {
        img: team8,
        name: 'Raidah Rumana',
        job: 'Content Writer'
    },
]

const OurTeamMember = () => {
  return (
    <div className="my-10">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-center text-3xl md:text-5xl">Our Team Member</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 ">
        
          {
            teamMemberArr?.map((item,ind) =>    <div key={ind} className="relative group overflow-y-hidden ">
                <Image src={item.img} alt="team image"  className="h-full object-cover" />
                <div className="absolute bg-black/50 bottom-0 w-full text-center text-white py-4 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500  ">
                  <h3 className="text-2xl font-bold"> {item.name} </h3>
                  <p> {item.job} </p>
                </div>
              </div> )
          }
        </div>
      </div>
    </div>
  );
};

export default OurTeamMember;
