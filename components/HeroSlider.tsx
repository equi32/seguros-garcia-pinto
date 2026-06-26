'use client';

import { useEffect } from 'react';
import { SITE } from '@/lib/constants';

declare global {
  interface Window {
    revSliderReady?: boolean;
  }
}

export default function HeroSlider() {
  useEffect(() => {
    function initSlider() {
      const $ = (window as any).$;
      if (!$ || !$.fn || !$.fn.revolution) return false;

      $('#rev_main').show().revolution({
        sliderType: 'fullwidth',
        jsFileLocation: 'js/revolution/',
        sliderLayout: 'fullwidth',
        dottedOverlay: 'none',
        delay: 9000,
        navigation: { arrows: { enable: false } },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [900, 768, 600, 500],
        lazyType: 'none',
        shadow: 0,
        spinner: 'off',
        autoHeight: 'off',
        disableProgressBar: 'on',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: { simplifyAll: 'off', nextSlideOnWindowFocus: 'off', disableFocusListener: false },
      });
      return true;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      if (initSlider() || ++attempts >= 50) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="position-relative">
      <div id="revo_main_wrapper" className="rev_slider_wrapper fullwidthbanner-container m-0 p-0 bg-dark" data-alias="classic4export" data-source="gallery">
        <div id="rev_main" className="rev_slider fullwidthabanner white" data-version="5.4.1">
          <ul>
            {/* SLIDE 1 */}
            <li data-index="rs-01" data-transition="fade" data-slotamount="default" data-easein="Power100.easeIn" data-easeout="Power100.easeOut" data-masterspeed="2000" data-fsmasterspeed="1500" data-param1="01">
              <img src="/images/banner1-4.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
              <div className="overlay overlay-dark opacity-6"></div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-130','-130','-110','-80']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-xlight whitecolor text-center">Rodrigo J. García Pinto</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-50','-20']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-bold whitecolor text-center">Productor | Asesor</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-10','-10','10','40']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1500"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-xlight whitecolor text-center">de Seguros</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['40','40','60','90']"
                data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="2000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h4 className="whitecolor font-xlight text-center">Obtené un asesoramiento completo para tu seguro</h4>
              </div>
            </li>
            {/* SLIDE 2 */}
            <li data-index="rs-02" data-transition="fade" data-slotamount="default" data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="2000" data-fsmasterspeed="1500" data-param1="02">
              <img src="/images/banner1-5.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
              <div className="overlay overlay-dark opacity-6"></div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-130','-130','-110','-80']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-xlight whitecolor text-center">Conocé todas</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-50','-20']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-bold whitecolor text-center">las ofertas</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-10','-10','10','40']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1500"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-xlight whitecolor text-center">que tenemos</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['40','40','60','90']"
                data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="2000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h4 className="whitecolor font-xlight text-center">Trabajamos con una variada cartera de empresas</h4>
              </div>
            </li>
            {/* SLIDE 3 */}
            <li data-index="rs-03" data-transition="fade" data-slotamount="default" data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="2000" data-fsmasterspeed="1500" data-param1="03">
              <img src="/images/banner1-6.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
              <div className="overlay overlay-dark opacity-7"></div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-130','-130','-110','-80']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-xlight whitecolor text-center">Obtené tu seguro</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-50','-20']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-bold whitecolor text-center">de forma fácil</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-10','-10','10','40']"
                data-width="none" data-height="none" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="1500"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h1 className="text-capitalize font-xlight whitecolor text-center">rápida y directa</h1>
              </div>
              <div className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['40','40','60','90']"
                data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                data-textalign="['center','center','center','center']"
                data-responsive_offset="on" data-start="2000"
                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                <h4 className="whitecolor font-xlight text-center">Atención personalizada para todos nuestros clientes</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul className="social-icons-simple revicon white">
        <li className="d-table">
          <a href={SITE.facebook} className="facebook"><i className="fab fa-facebook-f"></i></a>
        </li>
        <li className="d-table">
          <a href={SITE.linkedin} className="linkedin"><i className="fab fa-linkedin-in"></i></a>
        </li>
        <li className="d-table">
          <a href={SITE.instagram} className="insta"><i className="fab fa-instagram"></i></a>
        </li>
      </ul>
    </section>
  );
}
