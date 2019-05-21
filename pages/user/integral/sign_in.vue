<template>
	<view id="app">
		<image src="../../../static/user/integral/bg.png" mode=""></image>
		<view class="horizontal-bar">
			<view></view>
		</view>
		<view class="detailed">
			<view class="detailed-title">
				<view>
					每日连续签到积分兑换好礼
				</view>
			</view>
			<view class="days">
				<view class="days1">
					<view>
						5
					</view>

					<view>
						签到获得总积分
					</view>
				</view>
				<view class="days1">
					<view>
						1
					</view>
					<view>
						连续签到天数
					</view>
				</view>
			</view>
			<view class="date-view">
				<view class="date1">
					<!-- <view class="date2">
						1
					</view> -->
					<view class="date6">
						<image src="../../../static/user/integral/check_mark.png" mode=""></image>
					</view>
					<view class="date3">
						5.06
					</view>
				</view>
				<view class="date4">
					<!-- <view class="date5"></view> -->
				</view>
				<view class="date1">

					<view class="date2">
						1
					</view>
					<view class="date3">
						5.06
					</view>
				</view>
				<view class="date4">
					<!-- <view class="date5"></view> -->
				</view>
				<view class="date1">

					<view class="date2">
						1
					</view>
					<view class="date3">
						5.06
					</view>
				</view>
				<view class="date4">
					<!-- <view class="date5"></view> -->
				</view>
				<view class="date1">
					<view class="date2">
						1
					</view>
					<view class="date3">
						5.06
					</view>
				</view>
				<view class="date4">
					<!-- <view class="date5"></view> -->
				</view>
				<view class="date1">
					<view class="date2">
						1
					</view>
					<view class="date3">
						5.06
					</view>
				</view>
				<view class="date4">
					<!-- <view class="date5"></view> -->
				</view>
				<view class="date1">
					<view class="date2">
						1
					</view>
					<view class="date3">
						5.06
					</view>
				</view>
				<view class="date4">
					<!-- <view class="date5"></view> -->
				</view>
				<view class="date1">
					<view class="date2">
						1
					</view>
					<view class="date3">
						5.06
					</view>
				</view>

			</view>
			<view class="sign-in" @click="signIn">
				签到
			</view>
		</view>

		<view class="popup" v-if="popupIndex">
			<view class="popup-view">
				<view>
					<view class="panel">
						<image src="../../../static/user/integral/calendarBg.jpg" mode=""></image>
						<view class="panel-title">
							<view class="panel-title1">
								签到成功
							</view>
							<view class="panel-title2">
								您已连续签到2天，连续签到获取更多积分吧！
							</view>
							<view class="panel-title3" @click="signIn">
								知道了
							</view>
						</view>
					</view>
					<view class="calendar">
						<image src="../../../static/user/integral/calendar.png" mode=""></image>
						<view class="count">
							+5
						</view>
					</view>
					<view class="fork" @click="signIn">
						<image src="../../../static/user/integral/fork.png" mode=""></image>
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
				popupIndex: false
			}
		},
		methods: {
			signIn() {
				var _this = this;
				if (_this.popupIndex) {
					_this.popupIndex = false
				} else{
					_this.popupIndex = true
				}
			}
		}
	}
</script>

<style scoped>
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}

	#app>image {
		width: 100%;
		height: 100%;
	}

	.horizontal-bar {
		width: 667upx;
		height: 38upx;
		position: absolute;
		bottom: 601upx;
		left: 41.5upx;
		background: rgba(255, 69, 76, 1);
		border-radius: 19upx;
	}

	.horizontal-bar>view {
		width: 635upx;
		height: 14upx;
		margin: 0 auto;
		margin-top: 18upx;
		background: rgba(229, 24, 32, 1);
	}

	.detailed {
		width: 635upx;
		height: 555upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 0px 0upx 20upx 20upx;
		position: absolute;
		left: 57.5upx;
		bottom: 58upx;
		overflow: hidden;
	}

	.detailed-title {
		width: 632upx;
		height: 111upx;
		background: rgba(255, 245, 246, 1);
		overflow: hidden;
	}

	.detailed-title>view {
		width: 470upx;
		height: 64upx;
		background: linear-gradient(0deg, rgba(255, 70, 77, 1) 0%, rgba(255, 121, 69, 1) 100%);
		border-radius: 32upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 245, 246, 1);
		text-align: center;
		line-height: 64upx;
		margin: 23upx auto;
	}

	.days {
		width: 100%;
		display: flex;
		overflow: hidden;
	}

	.days1 {
		flex: 1;
	}

	.days1>view:nth-child(1) {
		text-align: center;
		font-size: 80upx;
		font-family: PingFang-SC-Heavy;
		font-weight: 800;
		color: rgba(229, 24, 32, 1);
		margin-top: 25upx;
		margin-bottom: 10upx;
		overflow: hidden;
	}

	.days1>view:nth-child(2) {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		text-align: center;
	}

	.date-view {
		width: 100%;
		overflow: hidden;
		padding-left: 26upx;
		padding-top: 48upx;
	}

	.date-view>view {
		float: left;
	}

	.date1 {
		overflow: hidden;
		width: 52upx;
	}

	.date2 {
		width: 48upx;
		height: 48upx;
		border: 1upx solid rgba(153, 153, 153, 1);
		border-radius: 50%;
		overflow: hidden;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		text-align: center;
		line-height: 48upx;
	}

	.date6 {
		width: 52upx;
		height: 52upx;

		border-radius: 50%;
		overflow: hidden;

	}

	.date6>image {
		width: 100%;
		height: 100%;
	}

	.date3 {
		font-size: 20upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		text-align: center;
	}

	.date4 {
		width: 29upx;
		height: 2upx;
		margin: 24upx 5upx;
		background-color: rgba(153, 153, 153, 1);
	}

	.date5 {
		width: 29upx;
		height: 2upx;
		background-color: rgba(229, 24, 32, 1);
	}

	.sign-in {
		width: 200upx;
		height: 58upx;
		background: rgba(255, 104, 75, 1);
		border-radius: 29upx;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 58upx;
		margin: 0 auto;
		margin-top: 63upx;
	}

	.popup {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);

	}

	.popup-view {
		width: 520upx;
		height: 733upx;
		position: absolute;
		left: 53.5%;
		top: 40%;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}

	.popup-view>view {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}

	.panel {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 30;
		width: 470upx;
		height: 532upx;
		overflow: hidden;
		border-radius: 8upx;
	}

	.panel>image {
		width: 100%;
		height: 100%;
	}
	.panel-title {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 50;
		width: 470upx;
		height: 432upx;
	}
	.panel-title1 {
		font-size:60upx;
font-family:PingFang-SC-Heavy;
font-weight:800;
color:rgba(229,24,32,1);
text-shadow:0upx 5upx 9upx rgba(210,110,2,0.7);

background:linear-gradient(180deg,rgba(255,255,255,1) 0%, rgba(255,229,204,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
text-align: center;
margin-top: 30upx;
	}
	.panel-title2 {
		width:330upx;
font-size:28upx;
margin: 0 auto;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
line-height:45upx;
text-align: center;
margin-top: 60upx;
	}
	.panel-title3 {
		width:200upx;
height:58upx;
border:1upx solid rgba(255,255,255,1);
border-radius:29upx;
margin: 0 auto;
font-size:32upx;
line-height: 58upx;
text-align: center;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
margin-top: 50upx;
	}

	.calendar {
		position: absolute;
		top: 0;
		left: 13upx;
		z-index: 40;
		width: 409upx;
		height: 398upx;
		overflow: hidden;
	}

	.calendar>image {
		width: 100%;
		height: 100%;
	}

	.count {
		width: 100upx;
		height: 80upx;
		position: absolute;
		top: 160upx;
		left: 160upx;
		z-index: 60;
		text-align: center;
		overflow: hidden;
		font-size: 59upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(229, 24, 32, 1);
		transform: rotate(15deg);

	}
	.fork {
		width: 50upx;
		height: 50upx;
		position: absolute;
		top: 120upx;
		right: 0;
		z-index: 70;
		overflow: hidden;
	}
	.fork > image {
		width: 100%;
		height: 100%;
	}
</style>
