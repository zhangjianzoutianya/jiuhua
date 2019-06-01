<template>
	<view>
		<view class="shop_lisu">
			<view class="shop_sousu">
				<view class="shop_sousu_img">
					<image src="../../../static/index/sou_su.png" mode=""></image>
				</view>
				<input type="text" value="" placeholder="附近循环站" />
			</view>
			<view class="info_imh" @click="goMsg('station_inner')">
				<image src="../../../static/index/top_su.png" mode=""></image>
			</view>
		</view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map class="map" id="map" :latitude="latitude" :longitude="longitude" :markers="covers" :scale="scale" @markertap="markertap">
				</map>
			</view>
		</view>
		<view class="info_map">
			<view class="map_box" @click="goMsg('station_inner')">
				<view class="map_box_left">
					<view class="map_box_left_img">
						<image src="../../../static/index/fixed.png" mode=""></image>
					</view>
					<text>附近循环站</text>
				</view>
				<view class="map_box_right">
					<image src="../../../static/index/xiayige.png" mode=""></image>
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
						iconPath: '../../../static/index/fixed1.png'
					}, {
						id: 1,
						latitude: 37.909,
						longitude: 116.39742,
						width: 23,
						height: 28,
						iconPath: '../../../static/index/fixed1.png'
					}, {
						id: 2,
						latitude: 36.909,
						longitude: 116.39742,
						width: 23,
						height: 28,
						iconPath: '../../../static/index/fixed1.png'
					},
					{
						id: 3,
						latitude: 38.909,
						longitude: 115.39742,
						width: 23,
						height: 28,
						iconPath: '../../../static/index/fixed1.png'
					}, {
						id: 4,
						latitude: 37.909,
						longitude: 115.39742,
						width: 23,
						height: 28,
						iconPath: '../../../static/index/fixed1.png'
					}, {
						id: 4,
						latitude: 35.909,
						longitude: 115.39742,
						width: 23,
						height: 28,
						iconPath: '../../../static/index/fixed1.png'
					}
				],
				
			}
		},
		methods: {
			markertap(e) {
				console.log(e.markerId);
			},
			goMsg(url){
				uni.navigateTo({
					url:url
				})
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
			
		}
		
	}
</script>

<style>
	.map {
		width: 100%;
		height: 83vh;
	}
	
	.shop_lisu{
		 padding: 20upx 26upx;
		 display: flex;
		 justify-content: space-between;
	}
	.shop_sousu{
		 position: relative;
		 width: 90%;
		 height: 60upx;
		 background: #F3F3F3;
		 border-radius: 10upx;
		 margin-top: 14upx;
	}
	.shop_sousu_img{
		width: 32upx;
		height: 32upx;
		position: absolute;
		top: 40%;
		left: 10%;
		transform: translate(-50%,-50%);
	}
	.shop_sousu_img image{
		width: 100%;
		height: 100%;
	}
	.shop_sousu input{
		width: 85%;
		height: 100%;
		font-size: 24upx;
		color: #999999;
		border-radius: 10upx;
		padding-left: 15%;
	}
	.info_imh{
		width: 26upx;
		height: 30upx;
		margin-top: 20upx;
	}
	.info_imh image{
		width: 100%;
		height: 100%;
	}
	.info_map{
		padding: 20upx 26upx;
	}
	.map_box{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.map_box_left{
		display: flex;
	}
	.map_box_left_img{
		width: 38upx;
		height: 50upx;
	}
	.map_box_left_img image{
		width: 100%;
		height:100%;
	}
	.map_box_left text{
		height:31upx;
		line-height: 40upx;
		font-size:32upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		margin-left:15upx ;
	}
	.map_box_right{
		width: 16upx;
		height: 27upx;
	}
	.map_box_right image{
		width: 100%;
		height: 100%;
	}
</style>
