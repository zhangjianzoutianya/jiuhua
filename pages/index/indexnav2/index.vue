<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :circular="circular" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/sec2_banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/sec2_banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/sec2_banner.png" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	<!-- 选项 -->
		<view class="sec2_fex sec2">
			<view class="sec2_fex_list" @click="goMsg('regenerate')">
				<image  src="../../../static/index/sec2_1.png" mode=""></image>
				<view class="text">再生科普</view>
			</view>
			<view class="sec2_fex_list" @click="goMsg('circulation_station')">
				<image src="../../../static/index/sec2_2.png" mode=""></image>
				<view class="text">附近循环站</view>
			</view>
			<view class="sec2_fex_list">
				<image src="../../../static/index/sec2_3.png" mode=""></image>
				<view class="text">再生源</view>
			</view>
		</view>
		<view class="sec3">
			<view class="sec3-inner sec-inner">
				<view class="sec3-inner-flex">
					<view class="sec3-inner-flex-list">
						<image src="../../../static/index/sec2_4.png" mode=""></image>
					</view>
					<view class="sec3-inner-flex-list">
						<image src="../../../static/index/sec2_5.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="sec4">
			<view class="sec4_abs"></view>
			<view class="sec-inner sec4-inner">
				<view class="sec4-inner-titflex">
					<text>环保资讯</text>
					<view class="more">
						<text>了解更多</text>
						<image src="../../../static/index/xiayige.png" mode=""></image>
					</view>
				</view>
				
				<view class="sec4-content">
					<view class="sec4-content-list">
						<view class="img">
							<image src="../../../static/index/sec2_new.png" mode=""></image>
						</view>
						<view class="title">锻造生态环保为打好污染防治攻坚战保驾护航</view>
						<view class="title2">
							<view class="title2_1">热</view>
							<text>服务到家</text>
							<text>1088评论</text>
							<text>1小时前</text>
						</view>
					</view>
					<view class="sec4-content-list">
						<view class="img">
							<image src="../../../static/index/sec2_new1.png" mode=""></image>
						</view>
						<view class="title">生态环境部召开部常务会议</view>
						<view class="title2">
							<!-- <view class="title2_1">热</view> -->
							<text>服务到家</text>
							<text>1088评论</text>
							<text>1小时前</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{ 
		data(){
			return{
				indicatorDots: true,
				autoplay: true,
				interval: 4000,
				duration: 800,
				circular:true
			}
		},
		
		methods:{
			goMsg(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style scoped>
	.swiper {
		width: 100%;
		height: 328upx;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiper-item>image {
		width: 100%;
		height: 100%;
	}
	.sec2{
		margin-top: 20upx;
	}
	.sec2_fex{
		display: flex;
	}
	.sec2_fex_list{
		width: 33.33333%;
		vertical-align: middle;
		text-align: center;
	}
	.sec2_fex_list image {
		width: 112upx;
		height: 112upx;
	}
	.sec2_fex_list .text{
		font-size:28upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 1;
	}
	.sec3{
		margin-top: 50upx;
	}
	.sec-inner{
		width: 694upx;
		margin: 0 auto;
	}
	.sec3-inner-flex{
		display: flex;
		justify-content: space-between;
	}
	.sec3-inner-flex-list {
		width: 338upx;
		height: 172upx;
	}
	.sec3-inner-flex-list image{
		width: 100%;
		height: 100%;
	}
	.sec4{
		margin-top: 50upx;
		position: relative;
	}
	.sec4-inner-titflex{
		display: flex;
		justify-content: space-between;
	}
	.sec4-inner-titflex>text{
		font-size:30upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:55upx;
	}
	.sec4-inner-titflex .more{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.sec4-inner-titflex .more text{
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height:55upx;
		margin-right: 15upx;
	}
	.sec4-inner-titflex .more image{
		width: 13upx;
		height: 23upx;
	}
	.sec4_abs{
		width:7upx;
		height:30upx;
		background:rgba(60,123,249,1);
		position: absolute;
		left: 0;
		top: 10upx;
	}
	.sec4-content-list{
		padding: 40upx 0;
		border-top: 1px solid rgba(234,234,234,1);
	}
	.sec4-content-list .img image{
		width: 694upx;
		height: 265upx;
	}
	.sec4-content-list .title{
		font-size:28upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		letter-spacing: 2upx;
		margin-top: 10upx;
	}
	.sec4-content-list .title2{
		margin-top: 15upx;
		display: flex;
		align-items: center;
	}
	.sec4-content-list .title2 text{
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-right: 15upx;
		letter-spacing: 1upx;
	}
	.sec4-content-list .title2 .title2_1{
		font-size: 16upx;
		width: 22upx;
		height: 22upx;
		line-height: 22upx;
		text-align: center;
		border: 1px solid crimson;
		color: #DC143C;
		margin-right: 15upx;
		border-radius: 5upx;
		font-weight: bold;
	}
	.sec4-content-list:first-child{
		border: none;
	}
</style>
