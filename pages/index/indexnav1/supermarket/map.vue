<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map class="map" id="map" :latitude="latitude" :longitude="longitude" :markers="covers" :scale="scale" @markertap="markertap">
				</map>
			</view>
			<view class="comm">
				<view class="title">
					<image src="../../../../static/index/indexnav1/positioning2.png" mode=""></image>
					<view>
						地图上的美食
					</view>
				</view>
				<view class="merchant">
					<view class="merchant-view">
						<view class="merchant-img">
							<image src="../../../../static/index/indexnav1/jump.png" mode=""></image>
							<view class="merchant-img-juli">
								4.8km
							</view>
						</view>
						<view class="merchant-image">
							<image src="../../../../static/index/indexnav1/3.png" mode=""></image>
						</view>
						<view class="merchant-text">
							<view class="merchant-text1">
								世纪联华（学院路）
							</view>
							<view class="merchant-text2">
								营业时间：8：00-22：30
							</view>
							<view class="merchant-text3">
								<image src="../../../../static/index/indexnav1/food_market.png" mode=""></image>
								<view>
									美天菜场
								</view>
							</view>
						</view>
					</view>
					<view class="merchant-view">
						<view class="merchant-img">
							<image src="../../../../static/index/indexnav1/jump.png" mode=""></image>
							<view class="merchant-img-juli">
								4.8km
							</view>
						</view>
						<view class="merchant-image">
							<image src="../../../../static/index/indexnav1/3.png" mode=""></image>
						</view>
						<view class="merchant-text">
							<view class="merchant-text1">
								世纪联华（学院路）
							</view>
							<view class="merchant-text2">
								营业时间：8：00-22：30
							</view>
							<view class="merchant-text3">
								<image src="../../../../static/index/indexnav1/food_market.png" mode=""></image>
								<view>
									美天菜场
								</view>
							</view>
						</view>
					</view>
					<view class="merchant-view">
						<view class="merchant-img">
							<image src="../../../../static/index/indexnav1/jump.png" mode=""></image>
							<view class="merchant-img-juli">
								4.8km
							</view>
						</view>
						<view class="merchant-image">
							<image src="../../../../static/index/indexnav1/3.png" mode=""></image>
						</view>
						<view class="merchant-text">
							<view class="merchant-text1">
								世纪联华（学院路）
							</view>
							<view class="merchant-text2">
								营业时间：8：00-22：30
							</view>
							<view class="merchant-text3">
								<image src="../../../../static/index/indexnav1/food_market.png" mode=""></image>
								<view>
									美天菜场
								</view>
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
				title: 'map',
				scale: 0,
				id: 1,
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
						id: 0,
						latitude: 39.909,
						longitude: 116.39742,
						width: 23,
						height: 28,
						iconPath: '../../../../static/index/indexnav1/positioning5.png'
					}, {
						id: 1,
						latitude: 37.909,
						longitude: 116.39742,
						width: 23,
						height: 28,
						iconPath: '../../../../static/index/indexnav1/positioning5.png'
					}, {
						id: 2,
						latitude: 36.909,
						longitude: 116.39742,
						width: 23,
						height: 28,
						iconPath: '../../../../static/index/indexnav1/positioning5.png'
					},
					{
						id: 3,
						latitude: 38.909,
						longitude: 115.39742,
						width: 23,
						height: 28,
						iconPath: '../../../../static/index/indexnav1/positioning5.png'
					}, {
						id: 4,
						latitude: 37.909,
						longitude: 115.39742,
						width: 23,
						height: 28,
						iconPath: '../../../../static/index/indexnav1/positioning5.png'
					}
				],
				
			}
		},
		methods: {
			markertap(e) {
				console.log(e.markerId);
			}
		},
		onLoad() {
			var _this = this;
			
			// #ifdef H5
			_this.scale = 6;
			// #endif
			
			// #ifndef H5
			_this.scale = 7;
			// #endif
			
		},
	}
</script>

<style scoped>
	.map {
		width: 750upx;
		height: 835upx;
	}

	/* #ifdef H5 */
	.comm {
		width: 100%;
		overflow: hidden;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
		max-height: calc(100% - 925upx);
		overflow-y: scroll;
	}
	/* #endif */
	
	/* #ifndef H5 */
	.comm {
		width: 100%;
		overflow: hidden;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
		max-height: calc(100% - 835upx);
		overflow-y: scroll;
	}
	/* #endif */


	.comm::-webkit-scrollbar {
		display: none
	}

	.title {
		width: 100%;
		height: 78upx;
		border-bottom: 1upx solid #eee;
	}

	.title>image {
		width: 20upx;
		height: 24upx;
		margin: 25upx 10upx 25upx 26upx;
		float: left;
	}

	.title>view {

		font-size: 24upx;
		line-height: 78upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.merchant {
		width: 698upx;
		margin: 0 auto;
		overflow: hidden;

	}

	.merchant-view {
		width: 100%;
		height: 231upx;
		overflow: hidden;
		border-bottom: 1upx solid rgba(233, 233, 233, 1);
	}

	.merchant-img {
		float: right;
		margin-top: 72upx;
		width: 100upx;
	}

	.merchant-img>image {
		width: 60upx;
		height: 60upx;
		margin-left: 20upx;

	}

	.merchant-img>view {
		width: 100upx;
		height: 19upx;
		font-size: 24upx;
		color: rgba(153, 153, 153, 1);
		text-align: center;
		line-height: 30upx;
	}

	.merchant-image {
		width: 158upx;
		height: 158upx;
		border-radius: 6upx;
		margin-top: 39upx;
		margin-right: 22upx;
		overflow: hidden;
		float: left;
	}

	.merchant-image>image {
		width: 100%;
		height: 100%;
	}

	.merchant-text1 {
		margin-top: 50upx;
		height: 29upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 47upx;
	}

	.merchant-text2 {
		margin-top: 16upx;
		height: 21upx;
		font-size: 22upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.merchant-text3 {
		margin-top: 31upx;
		overflow: hidden;
	}

	.merchant-text3>image {
		width: 23upx;
		height: 23upx;
		margin-right: 10upx;
		float: left;
	}

	.merchant-text3>view {
		height: 23upx;
		line-height: 23upx;
		font-size: 23upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}
</style>
