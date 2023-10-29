import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero gradient rounded-xl rounded-br-[80px]">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
          </div>
          <div className='lg:w-1/2 space-y-4'>
            <h2 className='text-3xl font-bold text-yellow-50'>About Us</h2>
            <h1 className="text-5xl font-bold ">We are qualified & of <span className=''>experience in this field</span></h1>
            <p className="py-6 ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. 
            </p>
            <p className=''>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
