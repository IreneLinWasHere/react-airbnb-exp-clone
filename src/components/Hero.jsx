import airBnbPics from '../../public/assets/airbnb-exp.svg'

export default function Hero() {
    return (
        <section className='hero' >
            <img src={airBnbPics} alt='Different AirBnb Experiences' className='hero--img' />
            <h1>Online Experiences</h1>
            <p className='hero--text' >Join unique interactive activities led by one-of-a-kind hosts<>&#8212;</>all without leaving home.</p>
        </section>
    )
}