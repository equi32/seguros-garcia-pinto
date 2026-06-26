'use client';

import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    function init() {
      const $ = (window as any).$;
      if (!$ || !$.fn || !$.fn.cubeportfolio) return false;

      const $grid = $('#grid-mosaic');
      if ($grid.data('cubeportfolio')) {
        $grid.cubeportfolio('destroy');
      }
      $grid.cubeportfolio({
        filters: '#mosaic-filter',
        animationType: 'rotateSides',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [
          { width: 1500, cols: 3 },
          { width: 1100, cols: 3 },
          { width: 800, cols: 3 },
          { width: 480, cols: 2 },
          { width: 320, cols: 2 },
        ],
        defaultFilter: '*',
        filterDeeplinking: false,
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 400,
      });

      if ($.fn.fancybox) {
        $('[data-fancybox]').fancybox({ loop: true });
      }
      return true;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      if (init() || ++attempts >= 50) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="position-relative padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center wow fadeIn" data-wow-delay="300ms">
            <div className="heading-title darkcolor wow fadeInUp" data-wow-delay="300ms">
              <span className="defaultcolor"> Explorá nuestra oferta </span>
              <h2 className="font-normal darkcolor heading_space_half"> Productos </h2>
            </div>
            <div className="col-md-6 offset-md-3 heading_space_half">
              <p>Conocé los diferentes seguros que tenemos para ofrecerte, junto con el mejor asesoramiento posible</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div id="mosaic-filter" className="cbp-l-filters bottom30 wow fadeIn text-center" data-wow-delay="350ms">
              <div data-filter="*" className="cbp-filter-item"><span>Todos</span></div>
              <div data-filter=".bienes" className="cbp-filter-item"><span>Bienes</span></div>
              <div data-filter=".salud" className="cbp-filter-item"><span>Salud</span></div>
              <div data-filter=".trabajo" className="cbp-filter-item"><span>Trabajo</span></div>
              <div data-filter=".herramientas" className="cbp-filter-item"><span>Herramientas</span></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div id="grid-mosaic" className="cbp cbp-l-grid-mosaic-flat">
              {[
                { img: 'integral-consorcio', label: 'Integral de Consorcio', cats: 'bienes graphics' },
                { img: 'art', label: 'ART', cats: 'trabajo graphics design' },
                { img: 'hogar', label: 'Seguro de Hogar', cats: 'bienes digital graphics' },
                { img: 'trabajador', label: 'Seguro de Empleados/Trabajadores', cats: 'trabajo graphics' },
                { img: 'autos', label: 'Seguro para Autos', cats: 'bienes design design' },
                { img: 'herramientas', label: 'Herramientas de Trabajo', cats: 'herramientas digital design' },
                { img: 'moto', label: 'Seguro para Motos', cats: 'bienes graphics' },
                { img: 'mala-praxis', label: 'Seguro por Mala Praxis', cats: 'salud graphics design' },
                { img: 'maquinas-agricolas', label: 'Seguro para Máquinas Agrícolas', cats: 'herramientas digital graphics' },
                { img: 'caucion', label: 'Seguros de Caución', cats: 'trabajo graphics' },
                { img: 'comercio', label: 'Seguros para Comercio', cats: 'trabajo digital design' },
                { img: 'sepelio', label: 'Seguros de Sepelio', cats: 'salud design design' },
              ].map(({ img, label, cats }) => (
                <div key={img} className={`cbp-item ${cats}`}>
                  <img src={`/img/servicios/${img}.jpg`} alt="" />
                  <div className="gallery-hvr whitecolor">
                    <div className="center-box">
                      <a href={`/img/servicios/${img}-banner.jpg`} className="opens" data-fancybox="gallery" title="Ver más">
                        <i className="fa fa-search-plus"></i>
                      </a>
                      <h4 className="w-100">{label}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
