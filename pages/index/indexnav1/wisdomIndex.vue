<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
					 :indicator-active-color="indicatorActiveColor" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<image src="../../../static/index/indexnav1/banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<image src="../../../static/index/indexnav1/banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue">
								<image src="../../../static/index/indexnav1/banner.png" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="unmanned">
			<view class="unmanned-view" @click="supermarket">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav1/supermarket.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					无人超市
				</view>
			</view>
			<view class="unmanned-view">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav1/vegetable_shop.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					无人菜店
				</view>
			</view>
			<view class="unmanned-view">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav1/receiving_container.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					无人收货柜
				</view>
			</view>
			<view class="unmanned-view">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav1/sellingCar.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					无人售卖车
				</view>
			</view>
		</view>

		<view class="sell-like-hot-cakes">
			<view class="sell-like-hot-cakes-text">
				热销店铺
			</view>
			<view class="sell-like-hot-cakes-i"></view>
			<view class="area">
				<view class="area-view">
					<image src="../../../static/index/indexnav1/5.png" mode=""></image>
					<view class="mask">
						<view class="ranking">
							TOP.1
						</view>
						<view class="area-text">
							拱墅区
						</view>
						<view class="area-name">
							某某某菜店
						</view>
					</view>
				</view>
				<view class="area-view">
					<image src="../../../static/index/indexnav1/6.png" mode=""></image>
					<view class="mask">
						<view class="ranking">
							TOP.2
						</view>
						<view class="area-text">
							拱墅区
						</view>
						<view class="area-name">
							某某某菜店
						</view>
					</view>
				</view>
				<view class="area-view">
					<image src="../../../static/index/indexnav1/7.png" mode=""></image>
					<view class="mask">
						<view class="ranking">
							TOP.3
						</view>
						<view class="area-text">
							拱墅区
						</view>
						<view class="area-name">
							某某某菜店
						</view>
					</view>
				</view>
			</view>

		</view>

		<view class="check-in">
			<image src="../../../static/index/indexnav1/check_in.png" mode=""></image>
		</view>
		
		<view class="nearby">
			<view class="sell-like-hot-cakes-text">
				附近商家
			</view>
			<view class="sell-like-hot-cakes-i"></view>
			<view class="merchant">
				<view class="merchant-view">
					<view class="merchant-img">
						<image src="../../../static/index/indexnav1/jump.png" mode=""></image>
						<view class="merchant-img-juli">
							4.8km
						</view>
					</view>
					<view class="merchant-image">
						<image src="../../../static/index/indexnav1/1.png" mode=""></image>
					</view>
					<view class="merchant-text">
						<view class="merchant-text1">
							世纪联华（学院路）
						</view>
						<view class="merchant-text2">
							营业时间：8：00-22：30
						</view>
						<view class="merchant-text3">
							<image src="../../../static/index/indexnav1/food_market.png" mode=""></image>
							<view>
								美天菜场
							</view>
						</view>
					</view>
				</view>
				
				<view class="merchant-view">
					<view class="merchant-img">
						<image src="../../../static/index/indexnav1/jump.png" mode=""></image>
						<view class="merchant-img-juli">
							4.8km
						</view>
					</view>
					<view class="merchant-image">
						<image src="../../../static/index/indexnav1/2.png" mode=""></image>
					</view>
					<view class="merchant-text">
						<view class="merchant-text1">
							世纪联华（学院路）
						</view>
						<view class="merchant-text2">
							营业时间：8：00-22：30
						</view>
						<view class="merchant-text3">
							<image src="../../../static/index/indexnav1/food_market.png" mode=""></image>
							<view>
								美天菜场
							</view>
						</view>
					</view>
				</view>
				
				<view class="merchant-view">
					<view class="merchant-img">
						<image src="../../../static/index/indexnav1/jump.png" mode=""></image>
						<view class="merchant-img-juli">
							4.8km
						</view>
					</view>
					<view class="merchant-image">
						<image src="../../../static/index/indexnav1/3.png" mode=""></image>
					</view>
					<view class="merchant-text">
						<view class="merchant-text1">
							世纪联华（学院路）
						</view>
						<view class="merchant-text2">
							营业时间：8：00-22：30
						</view>
						<view class="merchant-text3">
							<image src="../../../static/index/indexnav1/food_market.png" mode=""></image>
							<view>
								美天菜场
							</view>
						</view>
					</view>
				</view>
				
				<view class="merchant-view">
					<view class="merchant-img">
						<image src="../../../static/index/indexnav1/jump.png" mode=""></image>
						<view class="merchant-img-juli">
							4.8km
						</view>
					</view>
					<view class="merchant-image">
						<image src="../../../static/index/indexnav1/4.png" mode=""></image>
					</view>
					<view class="merchant-text">
						<view class="merchant-text1">
							世纪联华（学院路）
						</view>
						<view class="merchant-text2">
							营业时间：8：00-22：30
						</view>
						<view class="merchant-text3">
							<image src="../../../static/index/indexnav1/food_market.png" mode=""></image>
							<view>
								美天菜场
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				circular: true,
				indicatorColor: "rgb(221,221,221)",
				indicatorActiveColor: "rgba(201,0,10,1)",
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			supermarket() {
				uni.navigateTo({
				    url: 'supermarket/supermarket',
				});
			},

		}
	}
</script>

<style>
	.swiper {
		width: 100%;
		height: 410upx;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiper-item>image {
		width: 100%;
		height: 100%;
	}

	.unmanned {
		width: 100%;
		height: 150upx;
		overflow: hidden;
		display: flex;
		margin-top: 46upx;
	}

	.unmanned-view {
		flex: 1;
		height: 100%;
	}

	.unmanned-img {
		width: 109upx;
		height: 109upx;
		margin: 0 auto;
		overflow: hidden;
	}

	.unmanned-img>image {
		width: 100%;
		height: 100%;
	}

	.unmanned-text {
		text-align: center;
		font-size: 28upx;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}

	.sell-like-hot-cakes {
		width: 698upx;
		margin: 0 auto;
		margin-top: 70upx;
	}

	.sell-like-hot-cakes-text {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 33upx;
	}

	.sell-like-hot-cakes-i {
		width: 55upx;
		height: 5upx;
		margin-top: 10upx;
		background: rgba(201, 201, 201, 1);
	}

	.area {
		margin-top: 32upx;
		width: 698upx;
	}

	.area-view {
		width: 226upx;
		height: 292upx;
		border-radius: 14upx;
		float: left;
		position: relative;
	}

	.area-view:nth-child(2) {
		margin: 0 10upx;
	}

	.area-view>image {
		width: 100%;
		height: 100%;
	}

	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.ranking {
		width: 99upx;
		height: 32upx;
		background: linear-gradient(0deg, rgba(232, 129, 54, 1) 0%, rgba(232, 70, 53, 1) 100%);
		opacity: 0.8;
		border-radius: 32upx 0 32upx 0;
		font-size: 26upx;
		font-family: SourceHanSansCN-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 32upx;
		padding-left: 10upx;
		margin-top: 134upx;
		margin-left: 9upx;
	}

	.area-text {
		
		height: 25upx;
		font-size: 26upx;
		font-family: PingFang-SC-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 27upx;
		margin-top: 50upx;
		margin-left: 19upx;
	}

	.area-name {
		
		height: 23upx;
		font-size: 24upx;
		font-family: PingFang-SC-Regular;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 27upx;
		margin-top: 19upx;
		margin-left: 19upx;
	}
	.check-in {
		margin-top: 356upx;
		width: 100%;
		height: 210upx;
		overflow: hidden;
		
	}
	.check-in > image {
		width: 100%;
		height: 100%;
	}
	
	.nearby {
		width: 698upx;
		margin: 0 auto;
		margin-top: 60upx;
	}
	.merchant {
		width: 100%;
		overflow: hidden;
	}
	.merchant-view {
		width: 100%;
		height: 231upx;
		overflow: hidden;
		border-bottom: 1upx solid rgba(233,233,233,1);
	}
	.merchant-img {
		float: right;
		margin-top: 72upx;
		width: 100upx;
	}
	.merchant-img > image {
		width: 60upx;
		height: 60upx;
		margin-left: 20upx;
		
	}
	.merchant-img > view {
		width:100upx;
		height:19upx;
		font-size:24upx;
		color:rgba(153,153,153,1);
		text-align: center;
		line-height:30upx;
	}
	.merchant-image {
		width:158upx;
		height:158upx;
		border-radius:6upx;
		margin-top: 39upx;
		margin-right: 22upx;
		overflow: hidden;
		float: left;
	}
	.merchant-image > image {
		width: 100%;
		height: 100%;
	}
	.merchant-text1 {
		margin-top: 50upx;
		height:29upx;
		font-size:30upx;
		font-family:PingFang-SC-Medium;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:47upx;
	}
	.merchant-text2 {
		margin-top: 16upx;
		height:21upx;
		font-size:22upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.merchant-text3 {
		margin-top: 31upx;
		overflow: hidden;
	}
	.merchant-text3 > image {
		width: 23upx;
		height: 23upx;
		margin-right: 10upx;
		float: left;
	}
	.merchant-text3 > view {
		height:23upx;
		line-height: 23upx;
		font-size:23upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
</style>
