import React from 'react'
import './Footer.css'
import{FaHandshake} from 'react-icons/fa'

function Footer() {
    return (
        <section id="footer">
            <div className="container text-center">
                <div className="icon2">
                    <p>Education for a promising future <i className="fa fa-handshake-o"><FaHandshake /></i></p>
                </div>
            </div>
        </section>
    )
}

export default Footer

