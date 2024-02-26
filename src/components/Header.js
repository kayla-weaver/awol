import React from 'react'
import { useTranslation } from "react-i18next";

const Header = () => {
  const {t}= useTranslation()
return(
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">{t("about")}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">{t("resources")}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">{t("donate")}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">{t("home")}</a>
  </li>
</ul>






);
}
export default Header;