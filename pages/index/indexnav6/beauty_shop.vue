<template>
	<view class="">
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map class="map" id="map" :latitude="latitude" :longitude="longitude" :markers="covers" :scale="scale" @markertap="markertap">
				</map>
			</view>
		</view>
		<view class="beauty">
			<view class="beauty_list">
				<view class="beauty_list_img" @click="goMsg('beautyshop_inner')">
					<image src="../../../static/index/xinai_er.png" mode=""></image>
				</view>
				<view class="bottm_mapop">
					<view class="map_ban">
						<view class="map_ban_left">
							龙湖九华上海明珠酒店
						</view>
						<view class="map_ban_right">
							￥39899元/月起
						</view>
					</view>
					<view class="bottm_map">
					上海市浦东新区乔安路299号
				</view>
				</view>
			</view>
		</view>
		<view class="looking_top">
			招租信息发布
		</view>
		<view class="looking_list">
			<view class="guess_like_conent">
				<view class="guesa_conent">
					 <view class="guesa_conent_left">
					 	<image src="../../../static/index/1u.png" mode=""></image>
						<view class="conent_left_imkj">
							<image src="../../../static/index/wei_zuo.png" mode=""></image>
						</view>
					 </view>
					 <view class="guesa_conent_right">
					 	<view class="guesa_title">
					 		龙湖九华星悦坊公寓......
					 	</view>
						<view class="guesa_title_disp">
							<view class="guesa_title_disp_left">
								128cm
								<text>2</text>
							</view>
							<view class="guesa_title_disp_right">
								距离盈丰路地铁站258米
							</view>
						</view>
						<view class="guesa_tyr">
							<text>近地铁</text>
							<text>新房源</text>
						</view>
						<view class="guesa_title_bottm">
							12万/年
						</view>
					 </view>
				</view>
				<view class="guesa_conent">
					 <view class="guesa_conent_left">
					 	<image src="../../../static/index/2u.png" mode=""></image>
						<view class="conent_left_imkj">
							<image src="../../../static/index/wei_zuo.png" mode=""></image>
						</view>
					 </view>
					 <view class="guesa_conent_right">
					 	<view class="guesa_title">
					 		龙湖九华星悦坊公寓......
					 	</view>
						<view class="guesa_title_disp">
							<view class="guesa_title_disp_left">
								128cm
								<text>2</text>
							</view>
							<view class="guesa_title_disp_right">
								距离盈丰路地铁站258米
							</view>
						</view>
						<view class="guesa_tyr">
							<text>近地铁</text>
							<text>新房源</text>
						</view>
						<view class="guesa_title_bottm">
							12万/年
						</view>
					 </view>
				</view>
				<view class="guesa_conent">
					 <view class="guesa_conent_left">
					 	<image src="../../../static/index/3u.png" mode=""></image>
						<view class="conent_left_imkj">
							<image src="../../../static/index/wei_zuo.png" mode=""></image>
						</view>
					 </view>
					 <view class="guesa_conent_right">
					 	<view class="guesa_title">
					 		龙湖九华星悦坊公寓......
					 	</view>
						<view class="guesa_title_disp">
							<view class="guesa_title_disp_left">
								128cm
								<text>2</text>
							</view>
							<view class="guesa_title_disp_right">
								距离盈丰路地铁站258米
							</view>
						</view>
						<view class="guesa_tyr">
							<text>近地铁</text>
							<text>新房源</text>
						</view>
						<view class="guesa_title_bottm">
							12万/年
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
		height: 90vh;
	}
	.beauty{
		padding: 0 26upx;
	}
	.beauty_list{
		width: 100%;
		margin-top: -45%;
		position: relative;
		z-index: 10;
	}
	.beauty_list_img{
		width: 100%;
		height: 325upx;
	}
	.beauty_list_img image{
		width: 100%;
		height: 100%;
	}
	.bottm_mapop{
		box-shadow: 1upx 1upx 20upx 3upx rgba(0,0,0,0.2);
		padding: 30upx 18upx;
		border-bottom-left-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}
	.map_ban{
		display: flex;
		justify-content: space-between;
	}
	.map_ban_left{
		color: #333333;
		font-size: 28upx;
	}
	.map_ban_right{
		color: #C90009;
		font-size: 28upx;
	}
	.bottm_map{
		color: #666666;
		font-size: 20upx;
		margin-top: 10upx;
	}
	.looking_list{
		padding: 0 26upx;
	}
	.looking_top{
		width: 96%;
		height: 78upx;
		background: #F7F7F7;
		padding-left: 26upx;
		line-height: 78upx;
		margin-top: 50upx;
		font-size: 32upx;
		letter-spacing: 1upx;
	}
	.guess_like_conent{
		width: 100%;
		padding-top: 44upx;
	}
	.guesa_conent{
		display: flex;
		padding-bottom: 20upx;
	}
	.guesa_conent_left{
		width: 225upx;
		height: 160upx;
		position: relative;
	}
	.conent_left_imkj{
		width: 29upx;
		height: 34upx;
		position: absolute;
		bottom: 9%;
		right: 5%;
	}
	.conent_left_imkj image{
		width: 100%;
		height: 100%;
	}
	.guesa_conent_left image{
		width: 100%;
		height: 100%;
	}
	.guesa_conent_right{
		margin-left: 5%;
		width: 70%;
		border-bottom: 1upx solid #EEEEEE;
		padding-bottom: 22upx;
	}
	.guesa_title{
		color: #333333;
		font-size: 28upx;
		height:36upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.guesa_title_disp{
		display: flex;
		justify-content: space-between;
		color: #999999;
		font-size: 24upx;
		margin: 10upx 0;
	}
	.guesa_title_disp_left{
		position: relative;
	}
	.guesa_title_disp_left text{
		position: absolute;
		top: -10upx;
		right: -20upx;
	}
	.guesa_title_bottm{
		color: #C90009;
		font-size: 24upx;
		margin-top: 10upx;
	}
	.guesa_tyr{
		display: flex;
	}
	.guesa_tyr text{
		border: 1upx solid #DCDCDC;
		border-radius: 4upx;
		padding: 2upx 16upx 6upx;
		color: #999999;
		font-size: 18upx;
		margin-right: 10upx;
	}
</style>
