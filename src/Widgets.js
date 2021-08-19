import React from 'react'
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>


        </div>
    )



    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("JEJELIVE explose les compteurs", "La plaque tournante de l'info !!")}
            {newsArticle("Covid", "La médecine passe la seconde")}
            {newsArticle("Ski alpin", "Un snowpark ouvre à Marseille")}
            {newsArticle("Crypto", "Nouvelle crypto amicale née dans le Sud")}
            {newsArticle("2022", "Votre carrière va démarrer et la thune va pleuvoir - Top news 3500 vues")}
        </div>
    );    
}

export default Widgets;
