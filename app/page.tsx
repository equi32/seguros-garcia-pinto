import dynamic from 'next/dynamic';
import { SITE } from '@/lib/constants';
import ContactForm from '@/components/ContactForm';
import QuotationForm from '@/components/QuotationForm';
import ScrollAnimations from '@/components/ScrollAnimations';

// SSR disabled for jQuery-dependent components to avoid hydration mismatches
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <div className="loader">
        <div className="loader-inner">
          <div className="cssload-loader"></div>
        </div>
      </div>

      {/* Header */}
      <header className="site-header" id="header">
        <nav className="navbar navbar-expand-lg transparent-bg static-nav">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/img/logo-alt.png" alt="logo" className="logo-default" />
              <img src="/img/logo.png" alt="logo" className="logo-scrolled" />
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto ml-xl-auto mr-xl-0">
                <li className="nav-item"><a className="nav-link active pagescroll" href="#home">Inicio</a></li>
                <li className="nav-item"><a className="nav-link pagescroll scrollupto" href="#about">Que te ofrecemos</a></li>
                <li className="nav-item"><a className="nav-link pagescroll" href="#portfolio">Productos</a></li>
                <li className="nav-item"><a className="nav-link pagescroll" href="#blog">Servicios</a></li>
                <li className="nav-item"><a className="nav-link pagescroll" href="#contact">Contacto</a></li>
              </ul>
            </div>
          </div>
          <a href="#" className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
            <span></span> <span></span> <span></span>
          </a>
        </nav>
        {/* Side menu */}
        <div className="side-menu opacity-0 gradient-bg">
          <div className="overlay"></div>
          <div className="inner-wrapper">
            <span className="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
            <nav className="side-nav w-100">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active pagescroll" href="#home">Inicio</a></li>
                <li className="nav-item"><a className="nav-link pagescroll scrollupto" href="#about">Qué te ofrecemos</a></li>
                <li className="nav-item"><a className="nav-link pagescroll" href="#portfolio">Productos</a></li>
                <li className="nav-item"><a className="nav-link pagescroll" href="#blog">Servicios</a></li>
                <li className="nav-item"><a className="nav-link pagescroll" href="#contact">Contacto</a></li>
              </ul>
            </nav>
            <div className="side-footer w-100">
              <ul className="social-icons-simple white top40">
                <li><a href={SITE.facebook} className="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href={SITE.linkedin} className="linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href={SITE.instagram} className="insta" target="_blank"><i className="fab fa-instagram"></i></a></li>
              </ul>
              <p className="whitecolor">
                &copy; <span id="year"></span> <a href={SITE.developia} target="_blank">Developia</a>.
              </p>
            </div>
          </div>
        </div>
        <div id="close_side_menu" className="tooltip"></div>
      </header>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Boxes */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="services-slider" className="owl-carousel">
              <div className="item">
                <div className="service-box">
                  <span className="bottom25"><i className="fa fa-user-tie"></i></span>
                  <h4 className="bottom10 text-nowrap">Profesionalismo</h4>
                  <p>Te brindamos asesoramiento profesionalmente y nos adaptamos a nuestros clientes</p>
                </div>
              </div>
              <div className="item">
                <div className="service-box">
                  <span className="bottom25"><i className="fa fa-hand-holding-usd"></i></span>
                  <h4 className="bottom10">El Mejor Precio</h4>
                  <p>Mejoramos el presupuesto que tengas y además mejoramos la cobertura</p>
                </div>
              </div>
              <div className="item">
                <div className="service-box">
                  <span className="bottom25"><i className="fa fa-hands-helping"></i></span>
                  <h4 className="bottom10">Atención Personalizada</h4>
                  <p>Nuestros clientes son nuestra prioridad, por eso nuestra atención es la mejor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About / Feature */}
      <section id="about" className="single-feature padding mt-n5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-7 col-sm-7 text-sm-left text-center wow fadeInLeft" data-wow-delay="300ms">
              <div className="heading-title mb-4">
                <h2 className="darkcolor font-normal bottom30">Te brindamos el mejor <span className="defaultcolor">Asesoramiento</span> para encontrar el seguro que necesitás</h2>
              </div>
              <p className="bottom35">
                Con nuestra atención personalizada y directa, como así también con la variada gama de compañías con las que trabajamos, te ayudamos a encontrar el mejor seguro que se ajuste a tu presente y necesidades.
              </p>
              <a href="#pricing" className="button gradient-btn mb-sm-0 mb-4">Pedí tu cotización</a>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-5 col-sm-5 wow fadeInRight" data-wow-delay="300ms">
              <div className="image"><img alt="SEO" src="/images/awesome-feature.png" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section id="our-process" className="padding bgdark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="heading-title whitecolor wow fadeInUp" data-wow-delay="300ms">
                <span>Conocé como nuestro proceso de trabajo</span>
                <h2 className="font-normal">Cómo Trabajamos</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ul className="process-wrapp">
              <li className="whitecolor wow fadeIn" data-wow-delay="300ms">
                <span className="pro-step bottom20">01</span>
                <p className="fontbold bottom20">Contacto</p>
                <p className="mt-n2 mt-sm-0">Conectate con nosotros por cualquiera de nuestros medios.</p>
              </li>
              <li className="whitecolor wow fadeIn" data-wow-delay="400ms">
                <span className="pro-step bottom20">02</span>
                <p className="fontbold bottom20">Entrevista</p>
                <p className="mt-n2 mt-sm-0">Te ayudamos a encontrar lo que necesitás.</p>
              </li>
              <li className="whitecolor wow fadeIn active" data-wow-delay="500ms">
                <span className="pro-step bottom20">03</span>
                <p className="fontbold bottom20">Cotización</p>
                <p className="mt-n2 mt-sm-0">Analizamos y buscamos las mejores opciones para vos.</p>
              </li>
              <li className="whitecolor wow fadeIn" data-wow-delay="600ms">
                <span className="pro-step bottom20">04</span>
                <p className="fontbold bottom20">Selección</p>
                <p className="mt-n2 mt-sm-0">Elegís la opción que más te conviene.</p>
              </li>
              <li className="whitecolor wow fadeIn" data-wow-delay="700ms">
                <span className="pro-step bottom20">05</span>
                <p className="fontbold bottom20">Seguimiento</p>
                <p className="mt-n2 mt-sm-0">Estamos alerta a tus necesidades de forma continua.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quotation Form */}
      <section id="pricing" className="padding bglight">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="heading-title darkcolor wow fadeInUp" data-wow-delay="300ms">
                <span className="defaultcolor">Seleccioná tu opción, envía tu consulta </span>
                <h2 className="font-normal heading_space_half"> Pedí tu cotización </h2>
              </div>
            </div>
            <QuotationForm />
          </div>
        </div>
      </section>

      {/* Corporate Insurance */}
      <section id="bg-counters" className="padding bg-counters parallax">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="font-light whitecolor top20">
                Coberturas de Seguros Corporativos
              </h2>
              <p className="whitecolor top20 bottom20 font-light title">
                Las coberturas de líneas corporativas están diseñadas para proteger aquellos activos que son fundamentales la operación de un negocio: Personas, edificios, maquinaria y contratos, entre otros. Saber dirigir un negocio es saber administrar los riesgos eficientemente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonial / Partners Header */}
      <section id="our-testimonial">
        <div className="parallax page-header testimonial-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-12 text-center text-lg-right">
                <div className="heading-title wow fadeInRight padding_testi" data-wow-delay="300ms">
                  <span className="whitecolor">Cobertura nacional e internacional</span>
                  <h2 className="whitecolor font-normal">Trabajamos con compañías de gran trayectoria</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="our-partners" className="padding">
        <div className="container">
          <div className="row">
            <h2 className="d-none">Empresas Seguros</h2>
            <div className="col-md-12 col-sm-12">
              <div id="partners-slider" className="owl-carousel">
                {[
                  { src: '/img/empresas/logo-sura.jpg', alt: 'SURA' },
                  { src: '/img/empresas/logo-federacion-patronal.jpg', alt: 'Federación Patronal' },
                  { src: '/img/empresas/logo-galeno.jpg', alt: 'Galeno' },
                  { src: '/img/empresas/logo-mapfre.jpg', alt: 'MAPFRE' },
                  { src: '/img/empresas/logo-zurich.jpg', alt: 'Zurich' },
                  { src: '/img/empresas/logo-asociart.jpg', alt: 'Asociart' },
                  { src: '/img/empresas/logo-mercantil-andina.jpg', alt: 'Mercantil Andina' },
                ].map(({ src, alt }) => (
                  <div key={alt} className="item">
                    <div className="logo-item"><img alt={alt} src={src} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Services */}
      <section className="bglight padding" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="heading-title darkcolor wow fadeInUp" data-wow-delay="100ms">
                <span className="defaultcolor">La mejor propuesta para vos</span>
                <h2 className="font-normal darkcolor heading_space_half"> Seguros de Vida - Retiro </h2>
              </div>
              <div className="col-md-6 offset-md-3 heading_space">
                <p>
                  La mejor cobertura con compañias de gran trayectoria, alcance a nivel mundial y seguros Dolarizados para un mayor beneficio.
                  <br />
                  Paga en pesos y te aseguras en doláres.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="news_item shadow wow fadeInUp" data-wow-delay="200ms">
                <div className="blog-img"><div className="image"><img src="/img/seguros-vida-retiro/1.jpg" alt="" className="img-responsive" /></div></div>
                <div className="news_desc">
                  <h3 className="text-capitalize font-normal darkcolor">Seguros de Vida/Salud</h3>
                  <p>Lo más valioso es tu tranquilidad y la de tú familia. <strong>Protección y respaldo para vos y tú familia.</strong> Protegé el futuro de tus seres queridos con el seguro de vida de <strong>ZURICH</strong></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="news_item shadow wow fadeInUp" data-wow-delay="300ms">
                <div className="blog-img"><div className="image"><img src="/img/seguros-vida-retiro/2.jpg" alt="" className="img-responsive" /></div></div>
                <div className="news_desc">
                  <h3 className="text-capitalize font-normal darkcolor">Seguros de Ahorro</h3>
                  <p>Descubre otras formas de invertir con grandes ventajas fiscales. <strong>Plan de Ahorro</strong>. Planifica tú futuro como quieras, con tu plan de ahorro personalizado.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="news_item shadow mb-0 wow fadeInUp" data-wow-delay="400ms">
                <div className="blog-img"><div className="image"><img src="/img/seguros-vida-retiro/3.jpg" alt="" className="img-responsive" /></div></div>
                <div className="news_desc">
                  <h3 className="text-capitalize font-normal darkcolor">Seguros de Retiro</h3>
                  <p>Protejé tu vida y tu salud, y cubrí todos esos gastos que no están a tu alcance o fuera de tu obra social. A su vez, generá un ahorro para tu futura jubilación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="position-relative padding_bottom_half">
        <div className="container whitebox padding_bottom_half">
          <div className="padding_top">
            <div className="row">
              <div className="col-md-12 text-center wow fadeInUp mt-n3" data-wow-delay="300ms">
                <span className="defaultcolor">Comunicate con nosotros</span>
                <div className="heading-title bottom25 darkcolor">
                  <h2 className="font-normal darkcolor"> Contacto</h2>
                </div>
                <div className="col-md-6 offset-md-3 heading_space">
                  <p>Realizá tu consulta, sacate todas las dudas que tengas y obtené información de forma directa. Envianos tus datos y nos comunicamos con vos.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 order-md-2 text-center text-md-left">
                <div className="contact-meta pl-0 pl-sm-5 wow fadeInRight" data-wow-delay="300ms">
                  <div className="heading-title heading_small">
                    <h3 className="defaultcolor">{SITE.name}</h3>
                    <h5 className="defaultcolor font-normal mb-2">M.P. 87740</h5>
                    <h4 className="darkcolor font-normal">Información de Contacto</h4>
                  </div>
                  <div className="my-3">
                    <p className="bottom10">{SITE.celular}</p>
                    <p className="bottom10"><a href={`mailto:${SITE.contact}`}>{SITE.contact}</a></p>
                  </div>
                  <ul className="social-icons no-border mb-4 mb-md-0 wow fadeInUp" data-wow-delay="300ms">
                    <li><a href={SITE.facebook} className="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a className="linkedin" style={{cursor:'default'}}><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href={SITE.instagram} className="insta" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href={SITE.whatsapp} className="whatsapp" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                    <li><a href={SITE.email}><i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="heading-title wow fadeInLeft" data-wow-delay="300ms">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="site-footer" className="bgdark padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer_panel padding_bottom_half bottom20">
                <a href="/" className="footer_logo bottom10">
                  <img src="/img/logo-transparent.png" alt="RGP" />
                </a>
                <p className="whitecolor bottom25">Rodrigo J. García Pinto <br /> M.P. 87740.</p>
                <div className="d-table w-100 address-item whitecolor bottom10">
                  <span className="d-table-cell align-middle"><i className="fas fa-mobile-alt"></i></span>
                  <p className="d-table-cell align-middle bottom0">
                    {SITE.celular}
                    <a className="d-block" href={SITE.contact}>{SITE.contact}</a>
                  </p>
                </div>
                <ul className="social-icons white wow fadeInUp" data-wow-delay="300ms">
                  <li><a href={SITE.facebook} className="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href={SITE.linkedin} className="linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href={SITE.instagram} className="insta" target="_blank"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                <h4 className="whitecolor bottom25">Navegación</h4>
                <ul className="links">
                  <li><a href="#home" className="pagescroll">Inicio</a></li>
                  <li><a href="#about" className="pagescroll scrollupto">Qué te ofrecemos</a></li>
                  <li><a href="#portfolio" className="pagescroll">Productos</a></li>
                  <li><a href="#blog" className="pagescroll">Servicios</a></li>
                  <li><a href="#contact" className="pagescroll">Contacto</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer_panel padding_bottom_half bottom20">
                <h4 className="whitecolor bottom25">Organismo de control</h4>
                <a href={SITE.ssn} className="footer_logo_ssn bottom10" target="_blank">
                  <img src="/img/logo-ssn.png" alt="SSN" />
                </a>
                <p className="whitecolor bottom25">
                  <strong>Superintendencia de seguros de la Nación</strong><br />
                  <a href={SITE.ssn} target="_blank">www.argentina.gob.ar/ssn</a>
                </p>
                <p className="graycolor">
                  Desarrollado por: <a href={SITE.developia} target="_blank">Developia</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollAnimations />
    </>
  );
}
