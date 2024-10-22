import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-5 m-5 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold'>Knowladge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;