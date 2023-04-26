import qr from '../img/image-qr-code.png'

const QrCard = () => {
  return (
        <section className='card'>
            <div className='card-header'>
                <img src={qr} alt="qr code"/>
            </div>
            <div className='card-body'>
                <h1>Improve your front-end skills by building projects</h1>
            </div>
            <div className='card-footer'>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </section>
    )
}

export default QrCard