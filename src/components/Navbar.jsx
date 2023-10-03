import airBnBLogo from '../../public/assets/airbnb.svg'

export default function Navbar() {
    return (
        <nav className='navbar' >
            <img src={airBnBLogo} alt='AirBnb Logo' className='nav--logo' />
        </nav>
    )
}