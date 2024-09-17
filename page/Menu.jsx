import { render } from "./lib/react-dom.development.17.0.2";
import { useState, useEffect} from "React"
import { Container, Toast, Modal, Button, Card, CloseButton, ButtonGroup } from 'ReactBootstrap';
import { useStore } from './../store'
import Footer from './Footer'
import Header2 from './Header'
let t1 = [{ aa: 333 }, { aa: 1333 }, { aa: 2333 }, { aa: 3333 }]

//t1.map((catObj, index) =>
//    <div key={index}>
//        {catObj.aa }
//    </div>)


let HeaderPage = () =>
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light *bg-c-secondary">
            <div className="container *container-fluid">
                <span className="navbar-brand m-0" id="logo">
                    <img className="logo" src="./Img/logo.svg" alt="" />
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navList">
                        <HeadeItem onClick={() => showAdModal()} title='活動快訊' />
                        <HeadeItem onClick={() => showGuideModal()} title='功能介紹' />
                        <HeadeItem onClick={() => showUserOrderModal()} title='訂單查詢' />
                        <HeadeItem onClick={() => goToBackstage()} title='切換至後台' />
                        <HeadeItem onClick={() => showLoginModal()} title='登入/註冊' />
                    </ul>
                </div>
            </div>
        </nav>
    </div>
let HeadeItem = ({ click, title }) =>
    <li className="nav-item">
        <span className="nav-link finger" onClick={click}>{title}</span>
    </li>
const handleChangeMenu2 = () => {
    alert("asdfwe")
    let name = document.querySelector("input[name='分類標籤']:checked").value;

}

let TagList = (props) =>
    <div className="tagArea mx-3" {...props}>
        <ul className="tagList" >
            <TagRadio title='全部' />
            <TagRadio title='蛋餅' />
            <TagRadio title='吐司' />
            <TagRadio title='漢堡' />
            <TagRadio title='沙拉' />
            <TagRadio title='點心' />
            <TagRadio title='飲品' />
        </ul>
    </div>


let TagRadio = ({ title }) => (
    <li >
        <input type="radio" className="btn-check" name="分類標籤" id={'tag' + title} value={title}
            autoComplete="off" />
        <label className="btn btn-cat-tag" htmlFor={'tag' + title}>{title}</label>
    </li>
);



//廣告和菜單(可捲動區塊) -->
//菜單
// <MenuItem groupNum={groupNum} itemNum={itemNum} caption={caption} desc={desc} cose={cose} imgPathFile={imgPathFile} />

let Txx = () =>
    <div>
        <span>asdfwqeqwe</span>
    </div>
let Propp = ({ productId }) =>
    <div className="modal fade show" id="productModal2" tabIndex="-1" style="display: block;" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <span>{productId}</span>
        </div>
    </div>
//彈出商品Modal
function showProductModal2(catId, productId) {
    ReactDOM.render(
        <Txx />,
        document.getElementById('productModal')
    );

    //renderProductModal(productId);
    /*    $('#productModal').modal('show');*/
    let ii = document.getElementById('productModal');
    var productModal = new bootstrap.Modal(ii, {
        keyboard: false
    });
    $('#productModal').show();
}
//<div className="modal fade show" id="productModal" tabindex="-1" style="display: block;" aria-modal="true" role="dialog">
//    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//        <div className="modal-content"><div className="modal-content">
//            <div className="modal-header d-block pb-1" style="border-width: 0;">
//                <button type="button" className="btn-close float-end float" data-bs-dismiss="modal"></button>
//                <h5 className="text-center fw-bolder">培根蛋餅</h5>
//            </div>

//            <div className="modal-body pt-1">
//                <!-- 介紹 -->
//                <div>
//                    <img src="https://raw.githubusercontent.com/ColdingPoTaTo/resCollection/main/breakfast/menu/p013.jpg" className="modalFoodImg mb-3" alt="">
//                        <p className="h6 fw-light">手工蛋餅皮+雙份培根</p>
//                        <p className="h6 fw-light"></p>
//                        <p className="h5">$35</p>
//        </div>
//                    <!-- 選項 -->
//                    <div id="foodAdditionOptions">
//                        <div className="" data-addtion-id="AH01">
//                            <label>加料</label>
//                            <hr className="my-1">
//                                <input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD011" value="AD011" data-add-price="10">
//                                    <label className="btn btn-pill-primary" htmlFor="add-AD011">加蛋 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD012" value="AD012" data-add-price="15">
//                                        <label className="btn btn-pill-primary" htmlFor="add-AD012">加培根 +$15</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD013" value="AD013" data-add-price="5">
//                                            <label className="btn btn-pill-primary" htmlFor="add-AD013">加蔥花 +$5</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD014" value="AD014" data-add-price="10">
//                                                <label className="btn btn-pill-primary" htmlFor="add-AD014">加起司 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD015" value="AD015" data-add-price="10">
//                                                    <label className="btn btn-pill-primary" htmlFor="add-AD015">加蔬菜 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD016" value="AD016" data-add-price="0">
//                                                        <label className="btn btn-pill-primary" htmlFor="add-AD016">不要醬料 +$0</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AH017" value="AH017" data-add-price="0">
//                                                            <label className="btn btn-pill-primary" htmlFor="add-AH017">不要胡椒 +$0</label>
//                    </div>            
//        </div>

//                                                    <br>
//                                                        <!-- 備註 -->
//                                                        <div>
//                                                            <p className="h6">餐點備註</p>
//                                                            <textarea className="form-control" id="tempProductComment" rows="2"></textarea>
//                                                        </div>
//    </div>
//                                                    <div className="modal-footer flex-column">
//                                                        <!-- 數量 -->

//                                                        <div className="d-flex align-items-center">
//                                                            <button className="btn rounded-circle btn-sm btn-minus" onclick="adjAmount('35','minus')"><i className="fa-solid fa-minus small"></i></button>
//                                                            <span className="mx-4" id="tempProductAmount">1</span>
//                                                            <button className="btn rounded-circle btn-sm btn-add" onclick="adjAmount('35','add')"><i className="fa-solid fa-plus small"></i></button>
//                                                        </div>

//                                                        <!-- 加入購物車 -->
//                                                        <button type="button" className="btn btn-addToCart my-1" id="btnAddToCart" onclick="addToCart('c01','p013')">
//                                                            <span className=""> 加入購物車($</span>
//                                                            <span className="" id="tempProductTotal" data-food-price="35" data-add-price="0" data-total-price="35">35</span>
//                                                            <span className="">)</span>
//                                                        </button>
//                                                    </div>
//</div></div>
//                </div>
//            </div>



let MenuPage = ({ selectName }) => {
    
    const [state, dispatch] = useStore();
    //let countContext = useStore();
    function showProductModal() {
        console.log("MenuPage dispatch is " + state.isShowProduct)
        dispatch(Active.openProductModal);
        console.log("MenuPage dispatch open " + state.isShowProduct)

    }
    //const [showProduct, setShowProduct] = useState(false);
    //const showProductModal = (catId, id) => {
    //    console.log("asdfwe")
    //    let isTrue =true
    //    setShowProduct(!showProduct);
    //    //const modala = ReactDOM.createRoot(document.getElementById('root'));
    //    //modala.render(<ProductModal show={true}/>);

    //    //ReactDOM.render(
    //    //    <ProductModal show={true} />,
    //    //    document.getElementById('modal')
    //    //);
    //}
    //useEffect(() => {
    //    console.log("useEffect " + showProduct)
    //    ReactDOM.render(
    //        <ProductModal show={true } />,
    //        document.getElementById('modal')
    //    );
    //}, [showProduct])
    return <div className="menu container pb-6" id="menu">
        asdfwe
        <ProductModal show={false} />
        {
            theMenu.map((catObj, index) =>
                <div className={(catObj.name == selectName || selectName == "全部") ? "" : "d-none"}
                    key={index} name="foodCat" data-cat={catObj.name} >
                    <div className="catTitle my-3" data-cat={catObj.name}>
                        <span className="h4 fw-bolder">{catObj.name}</span>
                    </div>
                    <div className="menu-cards row g-3" data-cat={catObj.name}>
                        {
                            catObj.products.map((productObj, index) =>
                                <div key={index} className="col-12 col-md-6 col-xl-4 position-relative" >
                                    <div className={'foodCard ' + (productObj.isSoldOut ? 'soldout' : '')} onClick={() => showProductModal(productObj.catId, productObj.id)}>
                                        <div className="d-flex flex-column w-60">
                                            <p className="h5">{productObj.name}</p>
                                            <p className="h6">{productObj.comment}</p>
                                            <p className="h5 mt-auto">{'$' + productObj.price}</p>
                                        </div>
                                        <div className="d-inline-block ms-auto">
                                            <img className="menuCardImg" src={productObj.img} alt="" />
                                        </div>
                                        <div className={'soldoutMask ' + (productObj.isSoldOut ? '' : 'd-none')}>已售完</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }
    </div>
}



//<!-- 頁尾 -->
let FooterPage = () => (
    <div className="footer py-2">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="border-left fw-bolder">
                    <span className="ms-2">訂單小計</span>
                    <span className="text-danger" id="footerTotalPrice">$0</span>
                </div>
                <div>
                    <button className="btn btn-chkOrder" onClick={() => showCartModal()}>查看購物車</button>
                </div>
            </div>
        </div>
    </div>
);


let ProductModalxx = () =>
    <div className="modal fade show" id="productModal" tabIndex="-1" aria-modal="true" role="dialog" style="display: block;">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content"><div className="modal-content">
                <div className="modal-header d-block pb-1" style={{ 'border-width': 0 }}>
                    <button type="button" className="btn-close float-end float" data-bs-dismiss="modal"></button>
                    <h5 className="text-center fw-bolder">培根蛋餅</h5>
                </div>

                <div className="modal-body pt-1">
                    {/*  <!-- 介紹 -->*/}
                    <div>
                        <img src="./Img/PC/p013.jpg" className="modalFoodImg mb-3" alt="" />
                        <p className="h6 fw-light">手工蛋餅皮+雙份培根</p>
                        <p className="h6 fw-light"></p>
                        <p className="h5">$35</p>
                    </div>
                    {/*<!-- 選項 -->*/}
                    <div id="foodAdditionOptions">
                        <div className="" data-addtion-id="AH01">
                            <label>加料</label>
                            <hr className="my-1" />
                            <input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD011" value="AD011" data-add-price="10" />
                            <label className="btn btn-pill-primary" htmlFor="add-AD011">加蛋 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD012" value="AD012" data-add-price="15" />
                            <label className="btn btn-pill-primary" htmlFor="add-AD012">加培根 +$15</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD013" value="AD013" data-add-price="5" />
                            <label className="btn btn-pill-primary" htmlFor="add-AD013">加蔥花 +$5</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD014" value="AD014" data-add-price="10" />
                            <label className="btn btn-pill-primary" htmlFor="add-AD014">加起司 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD015" value="AD015" data-add-price="10" />
                            <label className="btn btn-pill-primary" htmlFor="add-AD015">加蔬菜 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD016" value="AD016" data-add-price="0" />
                            <label className="btn btn-pill-primary" htmlFor="add-AD016">不要醬料 +$0</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AH017" value="AH017" data-add-price="0" />
                            <label className="btn btn-pill-primary" htmlFor="add-AH017">不要胡椒 +$0</label>
                        </div>
                    </div>

                    <br />
                    {/*<!-- 備註 -->*/}
                    <div>
                        <p className="h6">餐點備註</p>
                        <textarea className="form-control" id="tempProductComment" rows="2"></textarea>
                    </div>
                </div>
                <div className="modal-footer flex-column">
                    {/*<!-- 數量 -->*/}

                    <div className="d-flex align-items-center">
                        <button className="btn rounded-circle btn-sm btn-minus" onClick={adjAmount(35, "minus")}><i className="fa-solid fa-minus small"></i></button>
                        <span className="mx-4" id="tempProductAmount">1</span>
                        <button className="btn rounded-circle btn-sm btn-add" onClick={adjAmount(35, "add")}><i className="fa-solid fa-plus small"></i></button>
                    </div>

                    {/*<!-- 加入購物車 -->*/}
                    <button type="button" className="btn btn-addToCart my-1" id="btnAddToCart" onClick={() => addToCart(35, "aaww")}>
                        <span className=""> 加入購物車($</span>
                        <span className="" id="tempProductTotal" data-food-price="35" data-add-price="0" data-total-price="35">35</span>
                        <span className="">)</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>







//* <!-- 品項Modal --> */
let ProductModal4 = ({ productId }) => {
    if (!productId) return '';
    const myProductObj = theProducts.find(productObj => productObj.id == productId);
    const { catId, id, name, comment, price, img, isSoldOut, additionIds } = myProductObj;
    //食物的附加選項
    //let additionContents = additionIds.map(additionId => {
    //    let addObj = theFoodAdditions.find(x => x.id == additionId);
    //    let str = <div className="" data-addtion-id={addObj.id}>
    //        <label>{addObj.name}</label>
    //        <hr className="my-1" />
    //        {addObj.items.map(item =>
    //            <>
    //                <input type={addObj.isMulti ? 'checkbox' : 'radio'} className="btn-check foodAdditionOption" name={addObj.name}
    //                    id={'add-' + item.id} value={item.id} data-add-price={item.price} />
    //                <label className="btn btn-pill-primary" htmlFor={'add-' + item.id} >{item.name + '$' + item.price}</label>
    //            </>
    //        )
    //        }
    //    </div>
    //    return str;
    //})
    return (
        //<div className="modal-content">
        //<div className="modal-header d-block pb-1" style={{ 'border-width': 0 }}>
        //    <button type="button" className="btn-close float-end float" data-bs-dismiss="modal"></button>
        //    <h5 className="text-center fw-bolder">{name}</h5>
        //</div>
        <div>
            {name}

            {/*<div className="modal-body pt-1">*/}
            {/*    */}{/* <!-- 介紹 --> */}
            {/*    <div>*/}
            {/*        <img src={img} className="modalFoodImg mb-3" alt="" />*/}
            {/*        <p className="h6 fw-light">{comment}</p>*/}
            {/*        <p className="h6 fw-light"></p>*/}
            {/*        <p className="h5">{'$' + price}</p>*/}
            {/*    </div>*/}
            {/*    */}{/* <!-- 選項 -->*/}
            {/*    <div id="foodAdditionOptions">*/}
            {/*        */}{/*  {additionContents.join("")}*/}
            {/*    </div>*/}

            {/*    <br />*/}
            {/*    */}{/*<!-- 備註 -->*/}
            {/*    <div>*/}
            {/*        <p className="h6">餐點備註</p>*/}
            {/*        <textarea className="form-control" id="tempProductComment" rows="2"></textarea>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="modal-footer flex-column">*/}
            {/*    */}{/* <!-- 數量 -->*/}

            {/*    <div className="d-flex align-items-center">*/}
            {/*        <button className="btn rounded-circle btn-sm btn-minus" onClick={() => adjAmount(price, 'minus')}><i className="fa-solid fa-minus small"></i></button>*/}
            {/*        <span className="mx-4" id="tempProductAmount">1</span>*/}
            {/*        <button className="btn rounded-circle btn-sm btn-add" onClick={() => adjAmount(price, 'add')}><i className="fa-solid fa-plus small"></i></button>*/}
            {/*    </div>*/}

            {/*    */}{/* <!-- 加入購物車 -->*/}
            {/*    <button type="button" className="btn btn-addToCart my-1" id="btnAddToCart" onClick={() => addToCart(catId, id)} >*/}
            {/*        <span className=""> 加入購物車($</span>*/}
            {/*        <span className="" id="tempProductTotal" data-food-price={price} data-add-price="0" data-total-price={price}>{price}</span>*/}
            {/*        <span className="">)</span>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>)
}




//<!-- 購物車Modal --> */ }
let CartModal = () =>
    <div className="modal fade" id="cartModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header d-block pb-1">
                    <button type="button" className="btn-close float-end float" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 className="text-center fw-bold">購物車資訊</h5>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer flex-column">
                    {/*<!-- 加入購物車 -->*/}
                    <button type="button" className="btn btn-addToCart my-1" onClick={() => submitCart()}>
                        <span className=""> 送出訂單</span>
                        <span id="tempCartTotalPrice">($275)</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

/* <!-- Login Modal --> */
let LoginModal = () =>
    <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header border-0 pb-1">
                    <button type="button" className="btn-close float-end float" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body"></div>
            </div>
        </div>
    </div>
/* <!-- 歷史訂單Modal --> */
let UserOrdersModal = () =>
    <div className="modal fade" id="userOrdersModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header d-block pb-1">
                    <button type="button" className="btn-close float-end float" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 className="text-center fw-bold">歷史訂單</h5>
                </div>
                <div className="modal-body">
                    {/* <!-- renderUserOrdersModal() --> */}
                </div>
                <div className="modal-footer flex-column border-0"></div>
            </div>
        </div>
    </div>


function ProductModal(props) {
    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("props.show " + props.show);
 
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



////廣告Modal 
let ProductModalkk = (props) => {
    const [show, setShow] = useState((props.show==true) ? props.show : false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <Modal show={true} size="lg">
        <Card className="bg-success "
        >
            <Card.Header className="d-flex justify-content-end">
                <CloseButton variant="white" onClick={handleClose} />
            </Card.Header>

            <Card.Body className="text-light text-center h3"  >

                <p>Catch Breakfast</p>
                <p>快取早餐 歡慶上線</p>
                <p>即日起至12/31</p>
                <p>自備環保餐具</p>
                <p>飲料無限暢飲</p>

            </Card.Body>
            <Card.Img src="./Img/PC/image-9.png" />
        </Card>
    </Modal>
}


let ProductModalxcv = (props) => {
    const [meshow, setMeshow] = useState("asdfwe")
        //props.show ?
        //    "aa3" :
        //    "f")

    const handleClose = () => setMeshow(false);
    const handleShow = () => setMeshow(true);

    return <Modal show={meshow} size="lg">
        <Card className="bg-success "
        >
            <Card.Header className="d-flex justify-content-end">
                <CloseButton variant="white" onClick={handleClose} />
            </Card.Header>

            <Card.Body className="text-light text-center h3"  >

                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content"><div className="modal-content">
                        <div className="modal-header d-block pb-1" style={{ 'border-width': 0 }}>
                            <button type="button" className="btn-close float-end float" data-bs-dismiss="modal"></button>
                            <h5 className="text-center fw-bolder">培根蛋餅</h5>
                        </div>

                        <div className="modal-body pt-1">
                            {/*  <!-- 介紹 -->*/}
                            <div>
                                <img src="./Img/PC/p013.jpg" className="modalFoodImg mb-3" alt="" />
                                <p className="h6 fw-light">手工蛋餅皮+雙份培根</p>
                                <p className="h6 fw-light"></p>
                                <p className="h5">$35</p>
                            </div>
                            {/*<!-- 選項 -->*/}
                            <div id="foodAdditionOptions">
                                <div className="" data-addtion-id="AH01">
                                    <label>加料</label>
                                    <hr className="my-1" />
                                    <input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD011" value="AD011" data-add-price="10" />
                                    <label className="btn btn-pill-primary" htmlFor="add-AD011">加蛋 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD012" value="AD012" data-add-price="15" />
                                    <label className="btn btn-pill-primary" htmlFor="add-AD012">加培根 +$15</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD013" value="AD013" data-add-price="5" />
                                    <label className="btn btn-pill-primary" htmlFor="add-AD013">加蔥花 +$5</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD014" value="AD014" data-add-price="10" />
                                    <label className="btn btn-pill-primary" htmlFor="add-AD014">加起司 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD015" value="AD015" data-add-price="10" />
                                    <label className="btn btn-pill-primary" htmlFor="add-AD015">加蔬菜 +$10</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AD016" value="AD016" data-add-price="0" />
                                    <label className="btn btn-pill-primary" htmlFor="add-AD016">不要醬料 +$0</label><input type="checkbox" className="btn-check foodAdditionOption" name="加料" id="add-AH017" value="AH017" data-add-price="0" />
                                    <label className="btn btn-pill-primary" htmlFor="add-AH017">不要胡椒 +$0</label>
                                </div>
                            </div>

                            <br />
                            {/*<!-- 備註 -->*/}
                            <div>
                                <p className="h6">餐點備註</p>
                                <textarea className="form-control" id="tempProductComment" rows="2"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer flex-column">
                            {/*<!-- 數量 -->*/}

                            <div className="d-flex align-items-center">
                                <button className="btn rounded-circle btn-sm btn-minus" onClick={() => adjAmount(35, "minus")}><i className="fa-solid fa-minus small"></i></button>
                                <span className="mx-4" id="tempProductAmount">1</span>
                                <button className="btn rounded-circle btn-sm btn-add" onClick={() => adjAmount(35, "add")}><i className="fa-solid fa-plus small"></i></button>
                            </div>

                            {/*<!-- 加入購物車 -->*/}
                            <button type="button" className="btn btn-addToCart my-1" id="btnAddToCart" onClick={() => addToCart(35, "aaww")}>
                                <span className=""> 加入購物車($</span>
                                <span className="" id="tempProductTotal" data-food-price="35" data-add-price="0" data-total-price="35">35</span>
                                <span className="">)</span>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Img src="./Img/PC/image-9.png" />
        </Card>
    </Modal>
}




////廣告Modal 
let AdModal = (props) => {
    let [show, setShow] = useState(props.show ? props.show : false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <Modal show={show} size="lg">
        <Card className="bg-success "
        >
            <Card.Header className="d-flex justify-content-end">
                <CloseButton variant="white" onClick={handleClose} />
            </Card.Header>

            <Card.Body className="text-light text-center h3"  >

                <p>Catch Breakfast</p>
                <p>快取早餐 歡慶上線</p>
                <p>即日起至12/31</p>
                <p>自備環保餐具</p>
                <p>飲料無限暢飲</p>

            </Card.Body>
            <Card.Img src="./Img/PC/image-9.png" />
        </Card>
    </Modal>
}



let AdModalx2 = ({ Show }) => {
    const [show, setShow] = useState(show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <Modal show={show} onHide={handleClose} size="lg">
        <div className="adBackground ">
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body className="d-flex flex-column justify-content-center align-items-center 
align-items-lg-end col-12 col-lg-6 adsContent g-5 fw-bold fs-3">
                <p >Catch Breakfast</p>
                <p >快取早餐 歡慶上線</p>
                <p>即日起至12/31</p>
                <p>自備環保餐具</p>
                <p>飲料無限暢飲</p>
            </Modal.Body>

            <Modal.Footer className="col-12 col-lg-6 adsImg">
                <img src="./Img/PC/image-9.png" alt="" />
            </Modal.Footer>
        </div>
    </Modal>
}


let AdModal2 = () =>
    <Modal show={true} animation={false}>

        <Modal.Body className="adBackground">
            <Modal.Header closeButton>
                <Modal.Title>
                </Modal.Title>
            </Modal.Header>
            <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-end col-12 col-lg-6 adsContent g-5 fw-bold fs-3"
            >   <span >Catch Breakfast</span>
                <span >快取早餐 歡慶上線</span>
                <span>即日起至12/31</span>
                <span>自備環保餐具</span>
                <span>飲料無限暢飲</span>
            </div>
            <div className="col-12 col-lg-6 adsImg">
                <img src="./Img/PC/image-9.png" alt="" />
            </div>
        </Modal.Body>
    </Modal>



//<div className="modal fade" id="adModal" tabIndex="-1" show="show">
//    <div className="modal-dialog modal-dialog-centered modal-xl">
//        <div className="modal-content adBackground">
//            <div className="modal-header border-0 pb-0">
//                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//            </div>
//            <div className="modal-body d-flex flex-wrap border-0 pt-0">
//                <div
//                    className="d-flex flex-column justify-content-center align-items-center align-items-lg-end col-12 col-lg-6 adsContent g-5 fw-bold fs-3"
//                >
//                    <span className="">Catch Breakfast</span>
//                    <span className="">快取早餐 歡慶上線</span>
//                    <span>即日起至12/31</span>
//                    <span>自備環保餐具</span>
//                    <span>飲料無限暢飲</span>
//                </div>
//                <div className="col-12 col-lg-6 adsImg">
//                    <img src="./Img/PC/image-9.png" alt="" />
//                </div>
//            </div>
//        </div>
//    </div>
//</div>

/* <!-- 導覽Modal --> */
let GuideModal = () =>
    <div className="modal fade" id="guideModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content" style={{ 'minHeight': '360px' }}>
                <div className="modal-header d-block pb-1 position-relative border-0">
                    <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style={{ right: '1.5rem' }}></button>
                    <h5 className="text-center fw-bold">功能介紹</h5>
                </div>
                <div className="modal-body">
                    <ul className="nav nav-tabs row-cols-3" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link w-100 active" data-bs-toggle="tab" data-bs-target="#guideOnline" type="button" role="tab">
                                線上點餐
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#guideTable" type="button" role="tab">桌邊點餐</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#guideBack" type="button" role="tab">後台管理</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="guideOnline" role="tabpanel">
                            <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                                <ul>
                                    <li>登入與註冊會員</li>
                                    <li>瀏覽精緻菜單</li>
                                    <li>提供點餐服務</li>
                                    <li>調整購物車內容</li>
                                    <li>查詢歷史訂單</li>
                                </ul>
                                <span>可使用demo帳號
                                    <span className="finger" onClick={() => goToLoginModalWithName('小明')}><b><u>小明</u></b></span></span>
                                <span>進行操作體驗</span>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="guideTable" role="tabpanel">
                            <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                                <div className="text-center">請掃描QR Code後進行點餐</div>
                                <div className="mt-3" id="qrCode" onClick={() => window.open('https://coldingpotato.github.io/onlineOrder/redirect.html?insider=A3', '_self')} ><canvas width="135" height="135"></canvas></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="guideBack" role="tabpanel">
                            <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                                <ul>
                                    <li>出餐管理(顯示即時訂單)</li>
                                    <li>菜單管理(新增、調整與停售)</li>
                                    <li>營業狀況之圖表分析</li>
                                </ul>
                                <span>可使用demo帳號
                                    <span className="finger" onClick={() => goToLoginModalWithName()}><b><u>阿姨</u></b></span>
                                </span>
                                <span>進行操作體驗</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer flex-column border-0"></div>
            </div>
        </div>
    </div>


let FootHeader = () => {
    return <div className="text-dark ">
        <Button className="text-dark me-2" variant="outline-warning">Warning</Button>{' '}
        <Button className="text-dark me-2" variant="outline-warning">Warning</Button>{' '}
        <Button className="text-dark me-2" variant="outline-warning">Warning</Button>{' '}
        <Button className="text-dark me-2" variant="outline-warning">Warning</Button>{' '}
        <Button className="text-dark me-2" variant="outline-warning">Warning</Button>{' '}
    </div>
}

let TestModal = ({ show }) => {

    return <Modal show={show} >
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

    </Modal>
}

export let Menu = () => {

    const [state, dispatch] = useStore();
    const [selectName, setSelectName] = useState("全部")
    const handleChangeMenu = () => {
        let name = document.querySelector("input[name='分類標籤']:checked").value;
        setSelectName(name);
    }
    useEffect(() => {
        console.log("useEffect " + show);
        handleClose();
        handleShow();
    }, [show, state]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<div>
        <HeaderPage />
        <div className="main-content">
            <FootHeader />
            aaass

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adModal">
                Launch demo modal
            </button>
            <div className="container">
                <div className="d-flex py-2 justify-content-center">
                    <TagList onChange={handleChangeMenu} />
                </div>
            </div>
            <MenuPage selectName={selectName} />
        </div>



            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
        <TestModal show={show} />



        <FooterPage />
        <ProductModal show={show} />
        <div className="modal fade" id="productModal" tabIndex="-1" >qwerqwer</div>
        <CartModal />
        <LoginModal />
        <UserOrdersModal />
        <AdModal show={false} />
        <GuideModal />
    </div>
    )
}
        //<div>
        //    <ProductModal />
        //    <CartModal />
        //    <LoginModal />
        //    <UserOrdersModal />
        //    <AdModal />
        //    <GuideModal />
        //</div>