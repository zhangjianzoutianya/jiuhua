<template>
	<view>
		<view class="nav">
			<view class="nav-list">
				<view v-for="(list, index) in navList" :key="index">
					<view class="list" @click="navIndexs(index)" :class="{hover:index == navIndex, hover1:index != navIndex}">
						{{list.title}}({{list.count}})
					</view>
				</view>
			</view>
		</view>
		<view class="coupon-view" v-show="navIndex == 0">
			<!-- <view class="discount">
				<view class="discount1">
					<image src="../../../static/user/recharge/discount.png" mode=""></image>
				</view>
				<view class="discount2">
					您当前没有优惠券哦~
				</view>
			</view> -->
			<view class="coupon-data">
				<view class="couponBg" v-for="(list,index) in contList" :key="index">
					<image src="../../../static/user/recharge/coupon1.png" mode=""></image>
					<view class="coupon-text">
						<view class="coupon-text1">
							<view>
								<text>￥</text>{{list.money}}
							</view>
							<view>
								满减
							</view>
						</view>
						<view class="coupon-text2">
							<image src="../../../static/user/recharge/shoubiao.png" mode=""></image>
						</view>
						<view class="coupon-text3">
							<view>
								{{list.name}}
							</view>
							<view>
								满{{list.condition}}可用
							</view>
						</view>
					</view>
					<view class="validity">
						有效期：{{list.use_start_time}}  ——  {{list.use_end_time}}
					</view>
				</view>
				<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
			</view>
		</view>
		<view class="coupon-view" v-show="navIndex == 1">
			<view class="coupon-data">
				<view class="couponBg" v-for="(list,index) in contList" :key="index">
					<image src="../../../static/user/recharge/coupon1.png" mode=""></image>
					<view class="coupon-text">
						<view class="coupon-text1">
							<view>
								<text>￥</text>{{list.money}}
							</view>
							<view>
								满减
							</view>
						</view>
						<view class="coupon-text2">
							<image src="../../../static/user/recharge/shoubiao.png" mode=""></image>
						</view>
						<view class="coupon-text3">
							<view>
								{{list.name}}
							</view>
							<view>
								满{{list.condition}}可用
							</view>
						</view>
					</view>
					<view class="validity">
						有效期：{{list.use_start_time}}  ——  {{list.use_end_time}}
					</view>
				</view>
				<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
			</view>
			
		</view>

		<view class="coupon-view" v-show="navIndex == 2">
			<view class="coupon-data">
				<view class="couponBg" v-for="(list,index) in contList" :key="index">
					<image src="../../../static/user/recharge/coupon1.png" mode=""></image>
					<view class="coupon-text">
						<view class="coupon-text1">
							<view>
								<text>￥</text>{{list.money}}
							</view>
							<view>
								满减
							</view>
						</view>
						<view class="coupon-text2">
							<image src="../../../static/user/recharge/shoubiao.png" mode=""></image>
						</view>
						<view class="coupon-text3">
							<view>
								{{list.name}}
							</view>
							<view>
								满{{list.condition}}可用
							</view>
						</view>
					</view>
					<view class="validity">
						有效期：{{list.use_start_time}}  ——  {{list.use_end_time}}
					</view>
				</view>
				<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>

				<!-- <view class="couponBg">
					<image src="../../../static/user/recharge/coupon2.png" mode=""></image>
					<view class="couponBg1">
						<view class="coupon-text">
							<view class="coupon-text1">
								<view>
									<text>￥</text>20
								</view>
								<view>
									满减
								</view>
							</view>
							<view class="coupon-text2">
								<image src="../../../static/user/recharge/yifu.png" mode=""></image>
							</view>
							<view class="coupon-text3">
								<view>
									服饰类满减券
								</view>
								<view>
									本商城服饰类产品全部可用满100可用
								</view>
							</view>
						</view>
						<view class="validity">
							有效期：2018年4月5日 —— 2019年4月6日
						</view>
						<view class="mask1">
							<view>
								已过期
							</view>
						</view>
					</view>
					
				</view>

				<view class="couponBg">
					<image src="../../../static/user/recharge/coupon3.png" mode=""></image>
					<view class="couponBg1">
						<view class="coupon-text">
							<view class="coupon-text1">
								<view>
									<text>￥</text>10
								</view>
								<view>
									满减
								</view>
							</view>
							<view class="coupon-text2">
								<image src="../../../static/user/recharge/shuma.png" mode=""></image>
							</view>
							<view class="coupon-text3">
								<view>
									数码产品满减券
								</view>
								<view>
									本商城服饰类产品全部可用满50可用
								</view>
							</view>
						</view>
						<view class="validity">
							有效期：2018年4月5日 —— 2019年4月6日
						</view>
						<view class="mask1">
							<view>
								已过期
							</view>
						</view>
					</view>
					
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '../../../components/uni-load-more.vue';
	export default {
		 components: {//2注册组件
			uniLoadMore
		},
		data() {
			return {
				navList: [{
					title: "未使用",
					count: 3
				}, {
					title: "已使用",
					count: 2
				}, {
					title: "已过期",
					count: 1
				}],
				navIndex: 0,
				token:'',
				page:'',
				type:0,
				allPages:1,
				page:1,
				contList:[],
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			}
		},
		created:function(){ 
			var _this = this;
			uni.getStorage({
				 key: 'token',
				 success: function (res) {
					 _this.token = res.data
				}
			})
		},
		onReachBottom:function(){
			let _this=this;
			_this.userCoupon();
		},
		mounted:function(){
			var _this = this;
			_this.userCoupon();
		},
		methods: {
			navIndexs(index) {
				var _this = this;
				_this.navIndex = index;
				_this.type = index;
				_this.page = 1;
				_this.contList = []
				_this.userCoupon()
			},
			userCoupon:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					type:_this.type,
					page:_this.page
				};
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.userCoupon,data).then(res =>{
					if(res.data.status==1){
						if(_this.page!=1){
							if (res.data.result.logs == null ||res.data.result.logs==undefined ||res.data.result.logs=='' ) {//没有数据
							    _this.loadingType = 2;
							    uni.hideNavigationBarLoading();//关闭加载动画
							    return;
							}
						}
						_this.page++
						_this.contList = _this.contList.concat(res.data.result.logs)
						_this.navList[0].count = res.data.result.count1;
						_this.navList[1].count = res.data.result.count2;
						_this.navList[2].count = res.data.result.count3;
						_this.allPages = res.data.result.pages
						console.log(_this.allPages)
						_this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					}else{
						_this.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
					}
				}).catch(error =>{
					
				})
			},
		}
	}
</script>

<style>
	.nav {
		width: 100%;
		height: 80upx;
		overflow: hidden;

	}

	.nav-list {
		display: flex;
		overflow: hidden;
		width: 100%;
		height: 100%;

	}

	.nav-list>view {
		flex: 1;
		border-bottom: 1upx rgba(238, 238, 238, 1);
	}

	.list {
		width: 160upx;
		height: 79upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		line-height: 79upx;
		margin: 0 auto;
		text-align: center;
	}

	.hover {
		color: rgba(201, 0, 9, 1);
		border-bottom: 3upx solid rgba(201, 0, 9, 1);
	}

	.hover1 {
		color: rgba(51, 51, 51, 1);
	}

	.coupon-view {
		width: 100%;
		overflow: hidden;
	}

	.coupon-data {
		width: 100%;
		overflow: hidden;
	}

	.couponBg {
		width: 688upx;
		height: 266upx;
		border-radius: 26upx;
		margin: 0 auto;
		margin: 30upx;
		overflow: hidden;
		box-shadow: 0upx 0upx 30upx 0px rgba(200, 200, 200, 1);
		position: relative;
	}

	.couponBg>image {
		width: 100%;
		height: 100%;
	}

	.coupon-text {
		position: absolute;
		top: 31upx;
		left: 0;
		width: 100%;
		overflow: hidden;
	}

	.coupon-text1 {
		width: 130upx;
		float: right;
		margin-right: 31upx;
		overflow: hidden;
	}

	.coupon-text1>view:nth-child(1) {
		font-size: 50upx;
		font-family: SourceHanSansCN-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 64upx;
		height: 64upx;
		text-align: right;
		margin-top: 11upx;
	}

	.coupon-text1>view:nth-child(1)>text {
		font-size: 31upx;
		font-family: SourceHanSansCN-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);

	}

	.coupon-text1>view:nth-child(2) {
		font-size: 35upx;
		font-family: SourceHanSansCN-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 37upx;
		margin-top: 20upx;
		text-align: right;
	}

	.coupon-text2 {
		height: 119upx;
		width: 98upx;
		overflow: hidden;
		margin-left: 40upx;
		margin-right: 27upx;
		float: left;
	}

	.coupon-text2>image {
		height: 100%;
		width: 100%;
	}

	.coupon-text3 {
		width: 350upx;
		float: left;
		overflow: hidden;
	}

	.coupon-text3>view:nth-child(1) {
		font-size: 35upx;
		font-family: SourceHanSansCN-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 37upx;
		margin-top: 5upx;
	}

	.coupon-text3>view:nth-child(2) {
		font-size: 24upx;
		font-family: SourceHanSansCN-Regular;
		font-weight: bold;
		color: rgba(255, 236, 236, 1);
		line-height: 30upx;
		margin-top: 23upx;
	}

	.validity {
		position: absolute;
		width: 100%;
		height: 80upx;
		left: 0;
		bottom: 0;
		font-size: 23upx;
		font-family: SourceHanSansCN-Normal;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		padding-left: 30upx;
		line-height: 80upx;
	}

	.mask {
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.8);
		top: 0;
		left: 0;
		position: absolute;
		border-radius: 26upx;
	}

	.mask>view {
		width: 131upx;
		height: 50upx;
		border: 2upx solid rgba(153, 153, 153, 1);
		border-radius: 10upx;
		text-align: center;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 50upx;
		margin-top: 150upx;
		transform: rotate(-30deg);
		margin-left: 520upx;
	}

	.mask1 {
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.5);
		top: 0;
		left: 0;
		position: absolute;
		border-radius: 26upx;
	}

	.mask1>view {
		width: 131upx;
		height: 50upx;
		border: 2upx solid rgba(153, 153, 153, 1);
		border-radius: 10upx;
		text-align: center;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 50upx;
		margin-top: 150upx;
		transform: rotate(-30deg);
		margin-left: 520upx;
	}

	.discount {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.discount1 {
		width: 268upx;
		height: 248upx;
		margin: 0 auto;
		margin-top: 170upx;
		overflow: hidden;
	}

	.discount1>image {
		width: 100%;
		height: 100%;
	}

	.discount2 {
		width: 100%;
		height: 113upx;
		line-height: 113upx;
		font-size: 30upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}
	.couponBg1 {
		width: 100%;
		height: 100%;
		background-color: rgba(220,220,220,1);
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 26upx;
	}
</style>
