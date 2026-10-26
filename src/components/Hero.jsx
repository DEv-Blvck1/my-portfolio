import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Kevv, bwmap, worldmap } from '../assets';

const HeroContent = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative w-full h-full max-w-7xl mx-auto ${styles.paddingX} 
      flex flex-col justify-center pt-14 sm:pt-6 md:pt-0`}>
      <div className="flex flex-row items-start gap-3 sm:gap-4 max-w-3xl">
        {/* Mobile vertical line indicator */}
        <div className="flex flex-col justify-center items-center mt-5 sm:hidden">
          <div
            className={`w-4 h-4 rounded-full ${
              isDark ? 'bg-white' : 'bg-[#0a0a0a]'
            }`}
          />
          <div
            className={`w-1 h-36 ${
              isDark ? 'bg-white/60' : 'bw-gradient'
            }`}
          />
        </div>

        <div className="flex flex-col select-none">
          <h1
            className={`font-black font-poppins uppercase lg:text-[80px] sm:text-[60px] xs:text-[48px] text-[38px] lg:leading-[90px] leading-tight mt-2 ${
              isDark ? 'text-white' : 'text-eerieBlack'
            }`}>
            Hi, I'm{' '}
            <span
              className={`lg:text-[110px] sm:text-[90px] xs:text-[70px] text-[54px] font-mova font-extrabold uppercase tracking-wide ${
                isDark ? 'text-white' : 'text-battleGray'
              }`}>
              Kevin
            </span>
          </h1>

          <p
            className={`mt-2 max-w-2xl font-medium font-poppins lg:text-[26px] sm:text-[22px] xs:text-[18px] text-[15px] lg:leading-[38px] leading-relaxed ${
              isDark ? 'text-silver' : 'text-eerieBlack'
            }`}>
            A software engineer <br className="sm:block hidden" />
            focused on building responsive, visually appealing interfaces and
            transforming complex ideas into intuitive digital experiences using
            modern web.
          </p>

          {/* Social links & Say Hi */}
          <div className="mt-5 flex items-center gap-4 flex-wrap">
            <span
              className={`font-bold font-poppins text-xl sm:text-2xl ${
                isDark ? 'text-white' : 'text-eerieBlack'
              }`}>
              Say Hi →
            </span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348161216241"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full 
              transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md ${
                isDark ? 'bg-white text-black' : 'bg-night text-white'
              }`}>
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.507 14.307l-.009.075c-.236-.118-1.393-.687-1.609-.766-.216-.079-.373-.118-.53.118-.158.236-.61.766-.748.924-.138.158-.276.177-.512.059-.236-.118-1-.368-1.905-1.175-.705-.628-1.181-1.405-1.319-1.641-.138-.236-.015-.364.103-.482.106-.106.236-.276.354-.413.118-.138.158-.236.236-.394.079-.158.039-.295-.02-.413-.059-.118-.53-1.279-.727-1.752-.192-.46-.387-.398-.53-.405-.138-.007-.295-.008-.453-.008s-.413.059-.629.295c-.216.236-.827.808-.827 1.97 0 1.162.846 2.284.964 2.442.118.158 1.666 2.544 4.037 3.567.564.243 1.005.388 1.349.497.567.18 1.082.155 1.49.094.456-.068 1.393-.57 1.59-1.121.197-.551.197-1.024.138-1.122-.059-.098-.216-.157-.452-.275zM12.012 21.885c-1.802 0-3.568-.484-5.116-1.401l-.367-.218-3.805.998 1.016-3.71-.239-.38c-1.009-1.605-1.541-3.468-1.541-5.38 0-5.513 4.485-9.998 10.048-9.998 2.686 0 5.21 1.047 7.108 2.947 1.898 1.9 2.943 4.426 2.943 7.114 0 5.514-4.485 10.008-10.046 10.028z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ogueri-joachim-kevin-677634194"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg 
              transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md ${
                isDark ? 'bg-white text-black' : 'bg-night text-white'
              }`}>
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.27a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-flashWhite select-none">
      {/* =========================================================
          BASE LAYER: WHITE / LIGHT ZONE
          Renders 100% crisp, readable black text & dark icons
          over the light world map background.
         ========================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Base Layer Text Content (Dark/Black theme) */}
      <div className="relative z-10 w-full h-full">
        <HeroContent theme="light" />
      </div>

      {/* Base Layer Scroll Indicator */}
      <div className="absolute xs:bottom-8 bottom-6 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-dim flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-taupe mb-1"
            />
          </div>
        </a>
      </div>

      {/* =========================================================
          OVERLAY LAYER: DARK ZONE
          Clipped precisely to the diagonal dark area.
          Contains the dark background, Kevin's fully framed photo,
          and inverted white text & icons.
          Only the parts that cross into this clipped zone invert!
         ========================================================= */}
      <div
        className="hero-dark-layer absolute inset-0 z-20 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Dark Background */}
        <div className="absolute inset-0 bg-[#0d0d10]" />
        <div className="absolute inset-0 opacity-20">
          <img
            src={bwmap}
            alt="world map"
            className="w-full h-full object-cover filter invert"
          />
        </div>

        {/* Kevin's Photo: Positioned in the dark zone, fully visible for all screens */}
        <div className="absolute right-0 bottom-0 z-10 flex items-end justify-end pointer-events-none">
          <img
            className="h-[46vh] xs:h-[50vh] sm:h-[62vh] md:h-[70vh] lg:h-[80vh] xl:h-[86vh] 
            max-w-[80vw] sm:max-w-[55vw] md:max-w-[48vw] lg:max-w-[42vw]
            object-contain object-bottom drop-shadow-2xl"
            src={Kevv}
            alt="Kevin"
          />
        </div>

        {/* Inverted White Text Content */}
        <div className="relative z-20 w-full h-full">
          <HeroContent theme="dark" />
        </div>

        {/* Inverted White Scroll Indicator */}
        <div className="absolute xs:bottom-8 bottom-6 w-full flex justify-center items-center z-20">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
