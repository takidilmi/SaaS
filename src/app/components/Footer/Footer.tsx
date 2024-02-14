import React from 'react';
import Link from 'next/link';
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithubAlt,
  FaCreditCard,
} from 'react-icons/fa';
import { IoSpeedometer, IoShield } from 'react-icons/io5';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="flex items-center flex-col bg-black z-10">
        <div className='w-[75%] z-10'>
          <div className="flex flex-col radius-custom">
            <div className="flex flex-2 m-10 flex-row flex-wrap justify-around">
              <div className="flex items-center gap-1 hover:text-violet-800 cursor-pointer">
                <IoSpeedometer size={30} />
                <Link href="">Free training & 24h support</Link>
              </div>
              <div className="flex items-center gap-1 hover:text-violet-800 cursor-pointer">
                <IoShield size={30} />
                <Link href="">Serious about security & privacy</Link>
              </div>
              <div className="flex items-center gap-1 hover:text-violet-800 cursor-pointer">
                <FaCreditCard size={30} />
                <Link href="">Lowest prices in the market</Link>
              </div>
            </div>
            <hr className="w-1/2" />
            <div className="flex cursor-default flex-[3] items-center p-2 justify-around ">
              <div className="flex flex-col flex-wrap gap-3 self-start">
                <h3>DASH-ZON</h3>
                <ul className="flex flex-col gap-2 self-center list-hover">
                  <li>
                    <Link href="/resources">Download</Link>
                  </li>
                  <li>
                    <Link href="/resources">Careers</Link>
                  </li>
                  <li>
                    <Link href="/resources#podcast">Product Roadmap</Link>
                  </li>
                  <li>
                    <Link href="/resources#podcast">Press</Link>
                  </li>
                  <li>
                    <Link href="/resources#webinars">Clients</Link>
                  </li>
                  <li>
                    <Link href="/resources#help-center">Brand</Link>
                  </li>
                  <li>
                    <Link href="/resources#community">Reviews</Link>
                  </li>
                  <li>
                    <Link href="/resources#academy">Status</Link>
                  </li>
                  <li>
                    <Link href="/resources#academy">About Us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 self-start">
                <h3>RESOURCES</h3>
                <ul className="flex flex-col gap-2 self-center list-hover">
                  <li>
                    <Link href="/resources">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/resources">Overview</Link>
                  </li>
                  <li>
                    <Link href="/resources#blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/resources#podcast">Podcast</Link>
                  </li>
                  <li>
                    <Link href="/resources#podcast">Templates</Link>
                  </li>
                  <li>
                    <Link href="/resources#webinars">Webinars</Link>
                  </li>
                  <li>
                    <Link href="/resources#help-center">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/resources#community">Community</Link>
                  </li>
                  <li>
                    <Link href="/resources#academy">Academy</Link>
                  </li>
                  <li>
                    <Link href="/resources#academy">Events</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 self-start">
                <h3>FEATURES</h3>
                <ul className="flex flex-col gap-2 self-center list-hover">
                  <li>
                    <Link href="/features">Overview</Link>
                  </li>
                  <li>
                    <Link href="/features#tasks">Tasks</Link>
                  </li>
                  <li>
                    <Link href="/features#docs">Docs</Link>
                  </li>
                  <li>
                    <Link href="/features#dashboards">Dashboards</Link>
                  </li>
                  <li>
                    <Link href="/features#automations">Automations</Link>
                  </li>
                  <li>
                    <Link href="/features#forms">Forms</Link>
                  </li>
                  <li>
                    <Link href="/features#sprints">Sprints</Link>
                  </li>
                  <li>
                    <Link href="/features#time-tracking">Time Tracking</Link>
                  </li>
                  <li>
                    <Link href="/features#chat">Chat</Link>
                  </li>
                  <li>
                    <Link href="/features#whiteboards">Whiteboards</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 self-start">
                <h3>COMPARE</h3>
                <ul className="flex self-center flex-col gap-2 list-hover">
                  <li>
                    <Link href="/resources">Product 1</Link>
                  </li>
                  <li>
                    <Link href="/resources">Product 2</Link>
                  </li>
                  <li>
                    <Link href="/resources#blog">Product 3</Link>
                  </li>
                  <li>
                    <Link href="/resources#podcast">Product 4</Link>
                  </li>
                  <li>
                    <Link href="/resources#podcast">Product 5</Link>
                  </li>
                  <li>
                    <Link href="/resources#webinars">Product 6</Link>
                  </li>
                  <li>
                    <Link href="/resources#help-center">Product 7</Link>
                  </li>
                  <li>
                    <Link href="/resources#community">Product 8</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 self-start">
                <h3>LEARN</h3>
              </div>
              <div className="bottom-0 right-0 -z-10 radius-custom2"></div>
            </div>
            <hr className="w-1/2 self-end" />
            <div className="flex flex-row mt-10 py-5 justify-around flex-wrap items-center">
              <Image
                className="self-center"
                src="/next.svg"
                alt="logo"
                width={100}
                height={100}
              />
              <div className="flex gap-3">
                <FaLinkedin
                  size={30}
                  className="hover:text-violet-800 cursor-pointer hover:scale-105 transition-all duration-300"
                />
                <FaGithubAlt
                  size={30}
                  className="hover:text-violet-800 cursor-pointer hover:scale-105 transition-all duration-300"
                />
                <FaInstagram
                  size={30}
                  className="hover:text-violet-800 cursor-pointer hover:scale-105 transition-all duration-300"
                />
                <FaYoutube
                  size={30}
                  className="hover:text-violet-800 cursor-pointer hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
