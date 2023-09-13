import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentCar, setCurrentCar] = useState();

    const openPopup = (car) => {
        setPopupOpen(true);
        setCurrentCar(car);
    };

    const closePopup = () => {
        setPopupOpen(false);
        setCurrentCar();
    };

    const [isVideoPopupOpen, setIsVideoPopup] = useState(false);
    const [currentUrl, setCurrentUrl] = useState();

    const openVideoPopup = (url) => {
        setIsVideoPopup(true);
        setCurrentUrl(url);
    };

    const closeVideoPopup = () => {
        setIsVideoPopup(false);
        setCurrentUrl();
    };

    return (
        <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup, isVideoPopupOpen, openVideoPopup, closeVideoPopup, currentCar, currentUrl }}>
            {children}
        </PopupContext.Provider>
    );
}

export function usePopup() {
    return useContext(PopupContext);
}