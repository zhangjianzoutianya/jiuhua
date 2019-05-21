<template>
	<view>
		<view class="search">
			<view class="map">
				<image src="../../../../static/index/indexnav1/map_inco.png" mode=""></image>
			</view>
			<view class="search-input">
				<image src="../../../../static/index/indexnav1/search.png" mode=""></image>
				<input type="text" value="" placeholder="输入任意位置/菜场"/>
			</view>
		</view>
		<view class="switch-view">
			<view class="switch-text" @click="switchView(0)">
				<image v-if="navIndex == 1" src="../../../../static/index/indexnav1/gray.png" mode=""></image>
				<image v-else src="../../../../static/index/indexnav1/red.png" mode=""></image>
				<view :class="{hover:navIndex == 0, hover1:navIndex != 0}">
					综合排序
				</view>
			</view>
			<view class="switch-text" @click="switchView(1)">
				<image v-if="navIndex == 0" src="../../../../static/index/indexnav1/gray.png" mode=""></image>
				<image v-else src="../../../../static/index/indexnav1/red.png" mode=""></image>
				<view :class="{hover:navIndex == 1, hover1:navIndex != 1}">
					附近
				</view>
			</view>
		</view>
		<view class="merchant">
			<view class="merchant-view" @click="details">
				<view class="merchant-img">
					<image src="../../../../static/index/indexnav1/jump.png" mode=""></image>
					<view class="merchant-img-juli">
						4.8km
					</view>
				</view>
				<view class="merchant-image">
					<image src="../../../../static/index/indexnav1/1.png" mode=""></image>
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
					<image src="../../../../static/index/indexnav1/2.png" mode=""></image>
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
					<image src="../../../../static/index/indexnav1/4.png" mode=""></image>
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
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
			}
		},
		methods: {
			switchView(index) {
				var _this = this;
				_this.navIndex = index;
			},
			details() {
				uni.navigateTo({
				    url: 'details',
				});
			}
		}
	}
</script>

<style scoped>
	.search {
		width: 698upx;
		height: 60upx;
		margin: 26upx auto;
		overflow: hidden;
	}
	.map {
		width: 60upx;
		height: 60upx;
		margin-left: 36upx;
		float: right;
		overflow: hidden;
	}
	.map > image {
		width: 100%;
		height: 100%;
	}
	.search-input {
		width: 602upx;
		height: 60upx;
		background:rgba(243,243,243,1);
		border-radius:10px;
	}
	.search-input > image {
		width: 32upx;
		height: 32upx;
		margin: 14upx;
		float: left;
	}
	.search-input > input {
		font-size:24upx;
		color:rgba(153,153,153,1);
		line-height:60upx;
	}
	.switch-view {
		width: 100%;
		height: 70upx;
		display: flex;
		border-bottom: 4upx solid #eee;
	}
	.switch-text {
		flex: 1;
		position: relative;
	}
	.switch-text > view {
		
		text-align: center;
		font-size:30upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		line-height:70upx;
	}
	.hover {
		color:rgba(201,0,9,1);
	}
	.hover1 {
		color:rgba(51,51,51,1);
	}
	.switch-text > image {
		position: absolute;
		width: 14upx;
		height: 8upx;
	}
	.switch-text:nth-child(1) > image {
		top: 33upx;
		left: 260upx;
	}
	.switch-text:nth-child(2) > image {
		top: 33upx;
		left: 230upx;
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
