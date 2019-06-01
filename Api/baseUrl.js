import {web} from "./config.js"

const serviceModule = {
	//页面banner图
	banner:{
		url: web.webUrl+'WXAPI/index/banner',
		method: 'post'
	},
	//活动列表
	events1:{
		url: web.webUrl+'WXAPI/article/events',
		method: 'post'
	},
	//活动详情
	eventDetail:{
		url: web.webUrl+'WXAPI/article/event_detail',
		method: 'post'
	},
	//短信验证码
	sendCode:{
		url:web.webUrl+'WXAPI/user/send_code',
		method:'post'
	},
	//登陆
	login:{
		url: web.webUrl+'WXAPI/user/login',
		method: 'post'
	},
	//评论列表
	getComment: {
		url: web.webUrl+'WXAPI/article/get_comment',
		method: 'post'
	},
	//发表评论
	conmmentAdds: {
		url: web.webUrl+'WXAPI/article/conmment_adds',
		method: 'post'
	},
	//个人信息
	userInfo: {
		url: web.webUrl+'WXAPI/user/user_info',
		method: 'post'
	},
	//修改个人信息
	editUser: {
		url: web.webUrl+'WXAPI/user/edit_user',
		method: 'post'
	},
	//上传图片
	upload: {
		url: web.webUrl+'WXAPI/user/upload',
		method: 'post'
	},
	//签到
	signIn: {
		url: web.webUrl+'WXAPI/user/sign_in',
		method: 'post'
	},
	//点击签到
	userSign: {
		url: web.webUrl+'WXAPI/user/sign',
		method: 'post'
	},
	//用户积分
	userPoint: {
		url: web.webUrl+'WXAPI/user/user_point/user_id/157',
		method: 'post'
	},
	//积分商城
	pointShop: {
		url: web.webUrl+'WXAPI/user/point_shop',
		method: 'post'
	},
	//我的九华	
	userIndex: {
		url: web.webUrl+'WXAPI/user/index',
		method: 'post'
	},
	//帮助搜索	
	articleHelp: {
		url: web.webUrl+'WXAPI/article/help',
		method: 'post'
	},
	//获取优惠券	
	userCoupon: {
		url: web.webUrl+'WXAPI/User/coupon',
		method: 'post'
	},
	//充值记录	
	userRecharge: {
		url: web.webUrl+'WXAPI/user/recharge',
		method: 'post'
	},
	//消费记录	
	userConsume: {
		url: web.webUrl+'WXAPI/user/consume',
		method: 'post'
	},
	//积分商品详情	
	userintegralDetail: {
		url: web.webUrl+'WXAPI/user/integral_detail',
		method: 'post'
	},
	//兑换记录	
	userExchange: {
		url: web.webUrl+'WXAPI/user/exchange',
		method: 'post'
	},
	//收货地址列表
	addressList: {
		url: web.webUrl+'WXAPI/User/addressList',
		method: 'post'
	},
	//添加地址
	addAddress: {
		url: web.webUrl+'WXAPI/User/add_address',
		method: 'post'
	},
	//修改地址
	editAddress: {
		url: web.webUrl+'WXAPI/User/edit_address',
		method: 'post'
	},
	//删除地址
	delAddress: {
		url: web.webUrl+'WXAPI/User/del_address',
		method: 'post'
	},
	//修改默认地址
	editDefault: {
		url: web.webUrl+'WXAPI/user/edit_default',
		method: 'post'
	},
};


const ApiSetting = { ...serviceModule
}
export default ApiSetting