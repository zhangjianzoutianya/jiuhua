<template>
	<view>
		<view class="uni-padding-wrap">
			<image :src="banner" mode=""></image>
		</view>
		<view class="unmanned">
			<view class="unmanned-view" @click="supermarket">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav5/1.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					美天菜场
				</view>
			</view>
			<view class="unmanned-view">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav5/2.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					菜店
				</view>
			</view>
			<view class="unmanned-view">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav5/3.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					邻里中心
				</view>
			</view>
			<view class="unmanned-view">
				<view class="unmanned-img">
					<image src="../../../static/index/indexnav5/4.png" mode=""></image>
				</view>
				<view class="unmanned-text">
					在线菜市
				</view>
			</view>
		</view>

		<view class="sell-like-hot-cakes">
			<view class="sell-like-hot-cakes-text">
				热销菜场
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
					<image src="../../../static/index/indexnav1/5.png" mode=""></image>
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
					<image src="../../../static/index/indexnav1/5.png" mode=""></image>
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
				duration: 500,
				banner:{},
			}
		},
		created(){
			let _this=this;
		},
		mounted(){
			let _this=this;
			//baner
			_this.getBanner();
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
			
			//banner
			getBanner:function(){
				let _this=this;
				let data={
					id:8,
				};
				_this.$axios(_this.$baseUrl.banner,data).then(res =>{
					if(res.data.status==1){
						_this.banner=res.data.result.banner[0];
					}
				}).catch(error =>{
					
				})
			}

		}
	}
</script>

<style>
	.uni-padding-wrap {
		width: 100%;
		height: 414upx;
	}
	.uni-padding-wrap > image {
		width: 100%;
		height: 100%;
	}
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
		height: 180upx;
		overflow: hidden;
		display: flex;
		margin-top: 46upx;
	}

	.unmanned-view {
		flex: 1;
		height: 100%;
	}

	.unmanned-img {
		width: 150upx;
		height: 150upx;
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
		margin-top: -20upx;
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
		bottom: 15upx;
		left: 0;
		padding:0 19upx;
	}
	
	.ranking {
		width: 99upx;
		height: 32upx;
		background: linear-gradient(0deg, rgba(232, 129, 54, 1) 0%, rgba(232, 70, 53, 1) 100%);
		opacity: 0.8;
		border-radius: 32upx 0 32upx 0;
		font-size: 26upx;
		color: rgba(255, 255, 255, 1);
		line-height: 32upx;
		padding-left: 10upx;
	}
	
	.area-text {
		height: 27upx;
		font-size: 26upx;
		color: rgba(255, 255, 255, 1);
		line-height: 27upx;
		margin-top: 50upx;
	}
	
	.area-name {
		height: 27upx;
		font-size: 24upx;
		color: rgba(255, 255, 255, 1);
		line-height: 27upx;
		margin-top: 19upx;
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
