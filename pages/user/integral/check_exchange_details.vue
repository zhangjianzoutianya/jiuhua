<template>
	<view id="app">
		<view class="details">
			<view class="comm-info">
				<view class="comm-img">
					<image src="../../../static/user/integral/comm001.png" mode=""></image>
				</view>
				<view class="comm-title">
					<view class="comm-text">
						拉克边桌简约时尚，公主高端品质定制

					</view>
					<view class="comm-msg">

						<view class="comm-time">
							200积分
						</view>
						<view class="comm-data">
							x1
						</view>
					</view>
				</view>
			</view>
			<view class="erweima">
				<image src="../../../static/user/integral/qrcode.png" mode=""></image>
			</view>
			<view class="serial-number">
				JH25235u1521316
			</view>
			<view class="count-down">
				08时29分42秒倒计时
			</view>
			<view class="order">
				<view class="order-text">
					下单时间    2019.05.08 15:35
				</view>
				<view class="order-text2">
					消耗积分    200积分
				</view>
			</view>
		</view>
		<view class="money-changer">
				<image src="../../../static/user/login/more.png" mode=""></image>
			<view class="money-changer-img">
				<image src="../../../static/user/integral/address.png" mode=""></image>
				<view class="money-changer-text">
					兑换点
				</view>
			</view>
			<view class="money-changer-title">
				<view>
					香奈儿
				</view>
				<view>
					C3香奈儿收银处
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	#app {
		background-color: #F7F7F7;
		overflow: hidden;
		height: 100%;
	}

	.details {
		width: 699upx;
		height: 804upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
		margin: 20upx auto;
		position: relative;
	}

	.comm-info {
		width: 100%;
		height: 211upx;
		border-bottom: 1upx solid rgba(238, 238, 238, 1);
		overflow: hidden;
	}

	.comm-img {
		width: 170upx;
		height: 145upx;
		margin: 30upx 25upx;
		float: left;
		overflow: hidden;
		border-radius: 10upx;
	}

	.comm-img>image {
		width: 100%;
		height: 100%;
	}

	.comm-title {
		width: 450upx;
		height: 145upx;
		margin-top: 30upx;
		overflow: hidden;
	}

	.comm-text {
		width: 100%;
		height: 80upx;
		line-height: 40upx;
		overflow: hidden;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.comm-msg {
		width: 100%;
		height: 25upx;
		margin-top: 35upx;
		overflow: hidden;
	}

	.comm-data {
		font-size: 24upx;
		line-height: 25upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.comm-time {
		font-size: 24upx;
		line-height: 25upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		width: 50%;
		float: left;
		color: rgba(102, 102, 102, 1);
	}

	.erweima {
		width: 248upx;
		height: 248upx;
		border: 1upx solid rgba(229, 229, 229, 1);
		margin: 0 auto;
		margin-top: 48upx;
	}

	.erweima>image {
		width: 210upx;
		height: 210upx;
		margin: 19upx;
	}

	.serial-number {
		width: 100%;
		height: 42upx;
		font-size: 30upx;
		text-align: center;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 42upx;
		margin-top: 32upx;
	}

	.count-down {
		height: 42upx;
		font-size: 24upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 42upx;
	}
	.order {
		width: 100%;
		height: 143upx;
		border-top:1upx solid rgba(229,229,229,1);
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.order-text {
		width: 100%;
		height: 26upx;
		font-size:24upx;
		line-height: 26upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);
margin-top: 31upx;
padding-left: 20upx;
	}
	.order-text2 {
		width: 100%;
				height: 26upx;
				font-size:24upx;
				line-height: 26upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-top: 25upx;
		padding-left: 20upx;
	}
	.money-changer {
		width:699upx;
height:106upx;
background:rgba(255,255,255,1);
border-radius:10upx;
margin: 36upx auto;
	}
	.money-changer > image {
		width: 18upx;
		height: 30upx;
		float: right;
		margin: 38upx 21upx;
	}
	.money-changer-img {
		width: 115upx;
		height: 88upx;
		margin-top: 9upx;
		overflow: hidden;
		float: left;
		border-right: 1upx solid rgba(229,229,229,1);
	}
	.money-changer-img > image {
		width: 40upx;
		height: 39upx;
		margin: 0 37.5upx;
		margin-top: 9upx;
	}
	.money-changer-text {
		text-align: center;
		font-size:20upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);
line-height:20upx;
margin-top: 6upx;
	}
	.money-changer-title {
		width: 500upx;
		height: 88upx;
		overflow: hidden;
		margin-top: 9upx;
		padding-left: 20upx;
	}
	.money-changer-title>view:nth-child(1) {
		font-size:28upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(51,51,51,1);
line-height:20upx;
margin-top: 25upx;
	}
	.money-changer-title>view:nth-child(2) {
		font-size:20upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);
line-height:20upx;
margin-top: 18upx;
	}
</style>
