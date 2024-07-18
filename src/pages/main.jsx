import React from "react";
import Menu from "../assets/img/Menu.svg";
import ShevronDown from "../assets/img/ShevronDown.svg";
import Term from "../assets/img/Term.svg";
import burger from "../assets/img/burger.svg";
import TableOne from "../components/TableOne.jsx";
import TableOneSmallScreen from "../components/TableOneSmallScreen.jsx";

function Main() {
  return (
    <main className="homeMain container">
      <nav className="catalogPnav">
        <div className="catalogPnav_left">
          <img src={Menu} alt="" className="catalogPnav__left_img" />
          <div className="catalogPnav__left_catalogParr">
            <div className="catalogPnav__left_catalogParr_txt">КАТАЛОГ</div>
            <img
              src={ShevronDown}
              alt=""
              className="catalogPnav__left_catalogParr_arr header__left_city_arr"
            />
          </div>
        </div>
        <div className="catalogPnav_right">
          <div className="catalogPnav__right_navEl">
            <div className="catalogPnav__right_navEl_oZavode_txt">О заводе</div>
            <img
              src={ShevronDown}
              alt=""
              className="catalogPnav__right_navEl_oZavode_img header__left_city_arr"
            />
          </div>
          <div className="catalogPnav__right_navEl">Отзывы</div>
          <div className="catalogPnav__right_navEl">Дилерам</div>
          <div className="catalogPnav__right_navEl">
            <div className="catalogPnav__right_navEl_sell_txt">Акции</div>
            <div className="catalogPnav__right_navEl_sell_btn">до 50%</div>
          </div>
          <div className="catalogPnav__right_navEl">Доставка и оплата</div>
          <div className="catalogPnav__right_navEl">Советы и статьи</div>
          <div className="catalogPnav__right_navEl">Контакты</div>
        </div>
      </nav>
      <nav className="catalogPnav2">
        <div className="catalogPnav_left">
          <img src={burger} alt="" className="catalogPnav__let_burger" />
        </div>
        <div className="catalogPnav_right">
          <div className="catalogPnav__right_numTel">+7 (343) 237-23-72</div>
        </div>
      </nav>
      <div className="mainText">
        <div className="mainText_left">Спасибо за ваши контактные данные</div>
        <div className="mainText_right">
          <div className="mainText__right_top">
            Наш менеджер свяжется с вами в течение 15 минут и поможет подобрать
            дренажную систему для вашего участка. Ниже вы можете ознакомиться с
            ценами.
          </div>
          <div className="mainText__right_btn">
            Мы ответственно относимся к сохранности данных наших клиентов и не
            передаем их третьим лицам.
          </div>
        </div>
      </div>
      <div className="priceOnSystemContent">
        <div className="priceOnSystemContent_top">
          <div className="priceOnSystemContent__top_left">
            <div className="priceOnSystemContent__top_left_h1">
              Прайс на дренажную систему ЛАЙТРОК и комплектующие
            </div>
            <div className="priceOnSystemContent__top_left_h2">
              При заказе дренажной системы в больших объемах вы получаете
              персональную скидку на саму систему и на комплектующие.
            </div>
            <div className="priceOnSystemContent__top_left_pricesData">
              <img
                src={Term}
                alt=""
                className="priceOnSystemContent__top_left_pricesData_calendar"
              />
              <div className="priceOnSystemContent__top_left_pricesData_txt">
                Цены актуальны на
              </div>
              <div className="priceOnSystemContent__top_left_pricesData_data">
                14.03.2023
              </div>
            </div>
          </div>
          <div className="priceOnSystemContent__top_right">
            <div className="priceOnSystemContent__top_right_exelBtn">
              Таблица Exel
            </div>
            <div className="priceOnSystemContent__top_right_txt">
              Прайс на дренаж ЛАЙТРОК и комплектующие
            </div>
          </div>
        </div>
        <div className="priceOnSystemContent__drenSyst_container">
          <div className="priceOnSystemContent__drenSyst_txt1">
            <div className="priceOnSystemContent__drenSyst_txt1_txt">
              Дренажная система ЛАЙТРОК
            </div>
            <div className="priceOnSystemContent__drenSyst_txt1_01">01</div>
          </div>
          <div className="priceOnSystemContent__drenSyst_txt2">
            Стоимость указана в информационных целях и не является публичной
            офертой
          </div>
        </div>
        <div className="priceOnSystemContent_propertiesPprice">
          <div className="priceOnSystemContent__propertiesPprice_l">
            Характеристики
          </div>
          <div className="priceOnSystemContent__propertiesPprice_r">
            Цена зависит от объема заказа, руб/пог.м
          </div>
        </div>
        <div className="tableScrollingWrapper">
          <div className="tableScrollingPartBigScreen">
            <div className="priceOnSystemContent_tableUpStatic">
              <div className="priceOnSystemContent__tableUpStatic_el_1">
                Модель системы, 3 м
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                Комплектация
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                Диаметр трубы, мм
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                Диаметр трубы, мм
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                От 0 до 100 пог.м
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                От 151 до 500 пог.м
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2 ">
                От 501 пог.м и более
              </div>
            </div>
            <TableOne />
            <TableOne />
            <TableOne />
            <TableOne />
            <TableOne />
            <TableOne />
          </div>
          <div className="tableScrollingPart">
            <div className="priceOnSystemContent_tableUpStatic">
              <div className="priceOnSystemContent__tableUpStatic_el_1">
                Модель системы, 3 м
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                Комплектация
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                Диаметр трубы, мм
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                Диаметр трубы, мм
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                От 0 до 100 пог.м
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2">
                От 151 до 500 пог.м
              </div>
              <div className="priceOnSystemContent__tableUpStatic_el_2 ">
                От 501 пог.м и более
              </div>
            </div>
            <TableOneSmallScreen />
            <TableOneSmallScreen />
            <TableOneSmallScreen />
            <TableOneSmallScreen />
            <TableOneSmallScreen />
            <TableOneSmallScreen />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
