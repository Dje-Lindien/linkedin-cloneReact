import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );



    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://source.unsplash.com/random" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Jeremy Breuillard</h2>
                <h4>jerem.brld@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Qui a vu mon profil</p>
                    <p className="sidebar__statNumber">1,245</p>
                </div>
                <div className="sidebar__stat">
                    <p>Vues de mes posts</p>
                    <p className="sidebar__statNumber">4,245</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Récent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengeneering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;
