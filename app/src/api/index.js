import requests from './request'
import mockRequests from './requestMock'

//三级联动接口
// /api/product/getBaseCategoryList    GET    无参数
export const getBaseCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })


//大轮播图  /aip/banner
export const getBanner = () => mockRequests({ url: '/banner', method: 'get' })

//获取floor数据  /api/floor
export const getFloor = () => mockRequests({ url: '/floor', method: 'get' })

//获取产品列表 /api/list
export const getProductList = (params) => requests({ url: '/list', method: 'post', data: params })

//获取商品详情 /api/item/{ skuId }
export const getProductDetail = (skuid) => requests({ url: `/item/${skuid}`, method: 'get' })

//添加至购物车以及购物车修改数量    /api/cart/addToCart/{ skuId }/{ skuNum }  
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车数据    /api/cart/cartList  
export const reqGetShopCart = () => requests({ url: '/cart/cartList ', method: 'get' })

//删除购物车商品  /api/cart/deleteCart/{skuId}
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//切换商品选中状态   /api/cart/checkCart/{skuId}/{isChecked}
export const reqCheckCart = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

//获取验证码   /api/user/passport/sendCode/{phone}   
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

//用户注册 /api/user/passport/register
export const reqUserRegister = (userData) => requests({ url: '/user/passport/register', data: userData, method: 'post' })

//用户登录 /api/user/passport/login
export const reqUserLogin = (userData) => requests({ url: '/user/passport/login', data: userData, method: 'post' })

//获取用户信息  /api/user/passport/auth/getUserInfo
export const reqGetUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

//用户退出登录  /api/user/passport/logout
export const reqCheckOut = () => requests({ url: '/user/passport/logout', method: 'get' })

//获取用户地址信息  /api/user/userAddress/auth/findUserAddressList
export const reqUserAddress = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

//获取用户交易信息  /api/order/auth/trade
export const reqUserTrade = () => requests({ url: '/order/auth/trade', method: 'get' })

//提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, tradeInfo) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data: tradeInfo, method: 'post' })

//获取订单支付信息  /api/payment/weixin/createNative/{orderId}
export const reqPayment = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

//获取订单支付状态  /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

//获取我的订单信息  /api/order/auth/{page}/{limit}
export const reqGetOrder = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
