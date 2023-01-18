import React from 'react'
import './contacts.css'

const Contacts = () => {

    // const [isActive, setIsActive] = useState(false);
    // const qqq = () => {
    //     setIsActive(current => !current);
    // };

    return (
        < main id="contacts" className="section-contacts" >
            {/* < main id="contacts" className={isActive ? "section-contacts--active" : "section-contacts"} > */}
            {/* <button className="btn-contacts" onClick={qqq}>www</button> */}
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Zaporizhzhia, Ukrain</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp / Viber</h2>
                        <p><a href="tel:+380508876228">+38 (050) 887-82-28</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:vsmolenskyi88@gmail.com">vsmolenskyi88@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </ main>
    )
}

export default Contacts