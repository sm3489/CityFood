/* eslint-disable no-unused-vars */
//import React from "React";
import { Link } from "ReactRouterDOM";
//import "../Css/index.css";


//渲染NAV清單
function renderNavList() {
    let isLogin = getDataFromLocalStorage('_token') ? true : false;
    let isAdmin = getDataFromLocalStorage('_user') ? getDataFromLocalStorage('_user').role == 'admin' : false;
    let userNameContent = "";
    let loginoutContent = `<span class="nav-link finger" href="" onclick="showLoginModal('login')">登入/註冊</span>`;
    if (isLogin) {
        let helloStr = getDataFromLocalStorage('_user').role == 'insider' ? '桌號 ' : '早安!';
        userNameContent = `
        <li class="nav-item" id="navLoginArea">
            <span class="nav-link" href="" id="">${helloStr}  <b>${getDataFromLocalStorage('_user').name}</b></span>
        </li>
        ` ;
        loginoutContent = `<span class="nav-link finger" href="" onclick=
        "logout()">登出</span>`
    }

    let content = `
    ${userNameContent}
    <li class="nav-item">
        <span class="nav-link finger" onclick="showAdModal()">活動快訊</span>
    </li>
    <li class="nav-item">
        <span class="nav-link finger" onclick="showGuideModal()">功能介紹</span>
    </li>
    <li class="nav-item">
        ${isLogin ? '<span class="nav-link finger" onclick="showUserOrderModal()">訂單查詢</span>' : ''}
    </li>
    <li class="nav-item">
        ${isAdmin ? '<span class="nav-link finger" onclick="goToBackstage()">切換至後台</span>' : ''}
    </li>
    <li class="nav-item" id="">
        ${loginoutContent}
    </li>
    `;
    $("#navList").html(content);
}


export default function Navbar() {

    return (
        <div className="fixed-top bg-main-color">
            <div className="container-fluid">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link
                                to="/home"
                                className="nav-link text-blue"
                                aria-current="page"
                            >
                                首頁
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link text-blue">
                                菜單瀏覽
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link text-blue">
                                購物車
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/history" className="nav-link text-blue">
                                歷史訂單
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link text-blue">
                                使用者
                            </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    );


}