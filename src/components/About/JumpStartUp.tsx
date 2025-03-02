import teamPhoto2 from '@/image/team-photo-2.jpg'
import Image from 'next/image'
import Link from 'next/link'
const JumpStartUp = () => {
  return (
    <>
        <div className="relative w-full min-h-[90vh] overflow-hidden">
      <Image
        src={teamPhoto2}
        alt="team photo 2 image"
        className="w-full h-full object-cover absolute -z-10"
      />

      <div className=" z-10 max-w-6xl mx-auto  h-full text-white text-center">
        <div className="flex flex-col gap-4 items-center justify-center  p-6 my-24 md:p-12 text-white">
          {/* Left Section - Marketing Content */}
          <h2 className='text-7xl text-center' >Jump-start your career with StepUp</h2>
          <p className='text-xl w-1/2' >If you’re enthusiastic about internet marketing, web design, or web development, we’d love to hear from you!</p>
          <Link aria-label='join our team' href='/career' className='bg-[#6433FF] text-white w-[300px] py-4 text-2xl' >Join Our Team</Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>
    </div>
    </>
  )
}

export default JumpStartUp