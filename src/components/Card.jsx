import star from '../../public/assets/star.svg'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        <div className='card' >
            {badgeText && <div className='card--badge' >{badgeText}</div>}
            <img src={`../../public/assets/${props.coverImg}`} className='card--img' />
            <div className="card--stats">
                <img src={star} alt='Star Icon' />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <span>{props.title}</span>
            <span>
              <b>From ${props.price}</b> / person  
            </span>
        </div>
    )
}