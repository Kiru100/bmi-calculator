import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className='bg-gradient-to-tl from-link-water pt-8 px-6 rounded-b-[35px] h-[640px]'>
        <img src={logo} alt="BMI Calculator Logo" className='h-10 w-10 mx-auto'/>
        <h1 className='mt-6 font-Inter-SemiBold text-5xl leading-[110%] text-gunmetal text-center tracking-tighter' >Body Mass Index Calculator</h1>
        <p className="text-dark-electric-blue font-Inter-Normal leading-[150%] text-base mt-6">Better understand your weight in relation to your height using our bodyF mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
    </header>
  )
}

export default Header;
