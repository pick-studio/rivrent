import React from 'react';
import Company from '../company';

import styles from './companies.module.scss';

export default function Companies({ companiesList }) {
    return (
        <div className={styles.companies}>
            <div className={styles.wrapper}>
                {companiesList && companiesList.map((item, index) => {
                    return (
                        <div key={index} className={styles.companiesItem}>
                            <div className={styles.rating}>
                                {/* Компания */}
                                <Company company={item.company} />
                                <div className={styles.grade}>{item.grade}</div>

                                <div className={styles.indicators}>
                                    {/* Звезды */}
                                    <div className={styles.indicators}>
                                        {/* Звезды */}
                                        <div className={styles.stars}>
                                            <svg className={styles.star} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.962727 6.49128L4.90965 5.64928C5.10616 5.60735 5.27519 5.483 5.3737 5.30786L6.85938 2.66667L7.8899 0.834627C8.15751 0.358871 8.84249 0.358872 9.1101 0.834628L11.6263 5.30786C11.7248 5.483 11.8938 5.60735 12.0904 5.64928L16.0373 6.49128C16.5702 6.60497 16.7746 7.25711 16.4019 7.65464L13.1177 11.1577C12.9652 11.3205 12.8993 11.5462 12.9404 11.7655L13.7002 15.8175C13.8084 16.3946 13.2008 16.8404 12.6827 16.5641L8.82941 14.509C8.62353 14.3992 8.37647 14.3992 8.17059 14.509L4.31727 16.5641C3.79921 16.8404 3.19165 16.3946 3.29985 15.8175L4.05959 11.7655C4.10071 11.5462 4.03484 11.3205 3.88226 11.1577L0.598099 7.65464C0.225417 7.25711 0.429815 6.60497 0.962727 6.49128Z" fill="#FEC12A" />
                                            </svg>
                                            <svg className={styles.star} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.962727 6.49128L4.90965 5.64928C5.10616 5.60735 5.27519 5.483 5.3737 5.30786L6.85938 2.66667L7.8899 0.834627C8.15751 0.358871 8.84249 0.358872 9.1101 0.834628L11.6263 5.30786C11.7248 5.483 11.8938 5.60735 12.0904 5.64928L16.0373 6.49128C16.5702 6.60497 16.7746 7.25711 16.4019 7.65464L13.1177 11.1577C12.9652 11.3205 12.8993 11.5462 12.9404 11.7655L13.7002 15.8175C13.8084 16.3946 13.2008 16.8404 12.6827 16.5641L8.82941 14.509C8.62353 14.3992 8.37647 14.3992 8.17059 14.509L4.31727 16.5641C3.79921 16.8404 3.19165 16.3946 3.29985 15.8175L4.05959 11.7655C4.10071 11.5462 4.03484 11.3205 3.88226 11.1577L0.598099 7.65464C0.225417 7.25711 0.429815 6.60497 0.962727 6.49128Z" fill="#FEC12A" />
                                            </svg>
                                            <svg className={styles.star} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.962727 6.49128L4.90965 5.64928C5.10616 5.60735 5.27519 5.483 5.3737 5.30786L6.85938 2.66667L7.8899 0.834627C8.15751 0.358871 8.84249 0.358872 9.1101 0.834628L11.6263 5.30786C11.7248 5.483 11.8938 5.60735 12.0904 5.64928L16.0373 6.49128C16.5702 6.60497 16.7746 7.25711 16.4019 7.65464L13.1177 11.1577C12.9652 11.3205 12.8993 11.5462 12.9404 11.7655L13.7002 15.8175C13.8084 16.3946 13.2008 16.8404 12.6827 16.5641L8.82941 14.509C8.62353 14.3992 8.37647 14.3992 8.17059 14.509L4.31727 16.5641C3.79921 16.8404 3.19165 16.3946 3.29985 15.8175L4.05959 11.7655C4.10071 11.5462 4.03484 11.3205 3.88226 11.1577L0.598099 7.65464C0.225417 7.25711 0.429815 6.60497 0.962727 6.49128Z" fill="#FEC12A" />
                                            </svg>
                                            <svg className={styles.star} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.962727 6.49128L4.90965 5.64928C5.10616 5.60735 5.27519 5.483 5.3737 5.30786L6.85938 2.66667L7.8899 0.834627C8.15751 0.358871 8.84249 0.358872 9.1101 0.834628L11.6263 5.30786C11.7248 5.483 11.8938 5.60735 12.0904 5.64928L16.0373 6.49128C16.5702 6.60497 16.7746 7.25711 16.4019 7.65464L13.1177 11.1577C12.9652 11.3205 12.8993 11.5462 12.9404 11.7655L13.7002 15.8175C13.8084 16.3946 13.2008 16.8404 12.6827 16.5641L8.82941 14.509C8.62353 14.3992 8.37647 14.3992 8.17059 14.509L4.31727 16.5641C3.79921 16.8404 3.19165 16.3946 3.29985 15.8175L4.05959 11.7655C4.10071 11.5462 4.03484 11.3205 3.88226 11.1577L0.598099 7.65464C0.225417 7.25711 0.429815 6.60497 0.962727 6.49128Z" fill="#FEC12A" />
                                            </svg>
                                            <svg className={styles.star} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.962727 6.49128L4.90965 5.64928C5.10616 5.60735 5.27519 5.483 5.3737 5.30786L6.85938 2.66667L7.8899 0.834627C8.15751 0.358871 8.84249 0.358872 9.1101 0.834628L11.6263 5.30786C11.7248 5.483 11.8938 5.60735 12.0904 5.64928L16.0373 6.49128C16.5702 6.60497 16.7746 7.25711 16.4019 7.65464L13.1177 11.1577C12.9652 11.3205 12.8993 11.5462 12.9404 11.7655L13.7002 15.8175C13.8084 16.3946 13.2008 16.8404 12.6827 16.5641L8.82941 14.509C8.62353 14.3992 8.37647 14.3992 8.17059 14.509L4.31727 16.5641C3.79921 16.8404 3.19165 16.3946 3.29985 15.8175L4.05959 11.7655C4.10071 11.5462 4.03484 11.3205 3.88226 11.1577L0.598099 7.65464C0.225417 7.25711 0.429815 6.60497 0.962727 6.49128Z" fill="#FEC12A" />
                                            </svg>
                                        </div>
                                        {/* Отзывы */}
                                        <div className={styles.numbers}>{item.numberOfReviews}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};