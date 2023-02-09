import React, { Component } from 'react'

export class Productdetails extends Component {
  render() {
    return (

      <div className="container">
        <div className="col-lg-10 border p-3 main-section bg-white">
          <div className="row m-0">
            <div className="col-md-5 left-side-product-box pb-3"><img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" className="border p-3" /><span className="sub-img"><img src="https://salt.tikicdn.com/cache/100x100/ts/product/b4/ff/9a/a57a8d4bd5e1fff5190eb0a2df4f8202.jpg.webp" className="border p-2" alt-text /><img src="https://salt.tikicdn.com/cache/100x100/ts/product/f9/13/f1/e15b24c2449e73cf53c50f6a341731bf.jpg.webp" className="border p-2" alt-text /><img src="https://salt.tikicdn.com/cache/100x100/ts/product/91/6a/59/699d0859c5ce5c33909d7337e96a8025.jpg.webp" className="border p-2" alt-text /><img src="https://salt.tikicdn.com/cache/100x100/ts/product/7f/b3/09/9929ffa5d12b70e18fa077a727fd3c7e.jpg.webp" className="border p-2" alt-text /></span></div>
            <div className="col-md-7">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="m-0 p-0">Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
                  </div>
                  <div className="col-lg-12">
                    <p className="m-0 p-0 price-pro">52000 <del>65000</del></p>
                    <hr className="p-0 m-0" />
                  </div>
                  <div className="col-lg-12 pt-2">BRAND: OEM<br />PRODUCT CODE: AONU213<br /></div>
                  <div className="col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <div> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </div>
                    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</div>
                  </div>
                  <div className="col-lg-12" />
                  <div className="col-lg-12">
                    <h6>Quantity :</h6>
                    <input type="number" className="form-control text-center w-100" defaultValue={1} />
                  </div>
                  <div className="col-lg-12">
                    <h6>Color :</h6>
                    <select>
                      <option value="blue">blue</option>
                      <option value=" violet"> violet</option>
                      <option value=" green"> green</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <h6>Size :</h6>
                    <select>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6 "><button className=" addtocartbutton btn btn-danger w-100">Add To Cart</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productdetails