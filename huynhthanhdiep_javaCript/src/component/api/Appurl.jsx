class Appurl {
    static BaseURL = "http://localhost/ecomlaravel/public/api/";
    static postcontact = this.BaseURL + "postContact";
    static allSiteInfo = this.BaseURL + "allSiteInfo";
    static allCategories = this.BaseURL + "allCategories";
    static productsByRemark = this.BaseURL + "productsByRemark";
    static productsByCategory = this.BaseURL + "productsByCategory";
    static productsBySubCategory = this.BaseURL + "productsBySubCategory";

    static allSliders = this.BaseURL + "allSliders";
    static allBrand = this.BaseURL + "allBrands";

    static productDetail = (id) => { return this.BaseURL + "productDetail/" + id; }
    static login = this.BaseURL + "login";
    static register = this.BaseURL + "register";
    static forgetpassword = this.BaseURL + "forgetpassword";
    static resetpassword = this.BaseURL + "resetpassword";
    static UserData = this.BaseURL + "userdata";
    static checkout = this.BaseURL + "checkout";
    static OrderListByUser = this.BaseURL + "orderListByUser";
    static OrderList = this.BaseURL + "orderList";



}

export default Appurl