import React, { Component } from 'react';
import EmailFormVangsters from '../EmailFormVangsters';

class EmailForm extends Component {
    render() {
        return (
            <section id="email-form-section">
                <div id="email-form-section-container">
                    <div id="email-form-section-title">
                        <h3>LET'S GET GOING.</h3>
                        <div id="small-gray-line-h"></div>
                    </div>
                    <div id="email-form-container">
                        <EmailFormVangsters />
                    </div>
                </div>
                <style>
                    {`
                    #email-form-section {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        padding: 3rem;
                        min-height: 30vh;
                    }

                    #email-form-section-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        
                    }

                    #email-form-section-title {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        align-content: center;
                    }

                    #small-gray-line-h {
                        background-color: #dadada;
                        height: 2px;
                        width: 150px;
                    }

                    #email-form-container {
                        padding: 2rem;
                    }

                    #email-submit-button {
                        background-color: #f0561f;
                        color: white;
                    }

                    #email-button-text {
                        color: white !important;
                    }


                    `}
                </style>
            </section>
            
        );
    }
}

export default EmailForm;