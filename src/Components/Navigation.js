import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg';

function Navigation(){
    return(
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />

            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/education" activeClassName="active-class">Educational Qualification</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/work" activeClassName="active-class">Work Experience</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/skills" activeClassName="active-class">Skills</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/projects" activeClassName="active-class">Projects</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/publications" activeClassName="active-class">Publications</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>

                </li>

            </ul>
            <footer className="footer">
                <p>@2021 S.M. Faiaz Mursalin's Portfolio</p>

            </footer>

        </NavigationStyled>
    )

}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0 ;
        img{

            width: 70%;
            border-radius:50% ;
            border: 8px solid var(--border-color);


        }

    }
    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color);
        }
        li{
            display: block;
            
            a{
                display: block;
                padding: 0.2rem 0;
                position: relative;
                transition:All 0.4s cubic-bezier(1,-0.02,.25,.95);
                z-index: 10;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition:All 0.4s cubic-bezier(1,-0.02,.25,.95) ;
                    z-index: 3;
                    opacity: 0.24;
                    

                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;

            }
        }

    }
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding:2rem 0;
            font-size:1rem;
            text-align: center;
            display: block;

        }
    }


`;



export default Navigation;