<template>
	<view id="app">
		<view class="pages">
			<view class="nav-view">
				<view class="nav-bg">
					<image src="../../static/user/userBg.png" mode=""></image>
					<view class="information">
						<view class="sign-in" @click="signIn">
							签到
						</view>
						<!-- <view  @click="login">
							<view class="logo-img">
								<image src="../../static/user/logo.png" mode=""></image>
							</view>
							<view class="name-view1">
								<text>登陆</text>/<text>注册</text>
							</view>
						</view> -->
						<view @click="goPaging('information/information')">
							<view class="logo-img">
								<image src="../../static/user/logo.png" mode=""></image>
							</view>
							<view class="name-view">
								<view class="name">
									我叫千小兔
								</view>
								<view class="name-img">
									<image src="../../static/user/member1.png" mode=""></image>
								</view>
							</view>
						</view>
						
					</view>
				</view>
				<view class="balance">
					<view class="info" @click="goPaging('recharge/balance')">
						<view>
							0.00
						</view>
						<view>
							余额
						</view>
					</view>
					<view class="info" @click="goPaging('recharge/recharge_record')">
						<view>
							0.00
						</view>
						<view>
							充值
						</view>
					</view>
					<view class="info" @click="goPaging('recharge/coupon')">
						<view>
							1
						</view>
						<view>
							优惠券
						</view>
					</view>
				</view>
			</view>
			<view class="paging" @click="goPaging('member/member')">
				<image class="more" src="../../static/user/more.png" mode=""></image>
				<image class="paging-img" src="../../static/user/member.png" mode=""></image>
			
				<view class="paging-title">
					会员中心
				</view>
			</view>
			<view class="paging" @click="goPaging('integral/index')">
				<image class="more" src="../../static/user/more.png" mode=""></image>
				<image class="paging-img" src="../../static/user/integral.png" mode=""></image>
			
				<view class="paging-title">
					我的积分
				</view>
			</view>
			<view class="paging" @click="goPaging('help/help')">
				<image class="more" src="../../static/user/more.png" mode=""></image>
				<image class="paging-img" src="../../static/user/help.png" mode=""></image>
			
				<view class="paging-title">
					帮助中心
				</view>
			</view>
			<view class="paging">
				<image class="more" src="../../static/user/more.png" mode=""></image>
				<image class="paging-img" src="../../static/user/bill.png" mode=""></image>
			
				<view class="paging-title">
					我的账单
				</view>
			</view>
			<view class="paging">
				<image class="more" src="../../static/user/more.png" mode=""></image>
				<image class="paging-img" src="../../static/user/public_welfare.png" mode=""></image>
			
				<view class="paging-title">
					我的公益
				</view>
			</view>
			<view class="paging">
				<image class="more" src="../../static/user/more.png" mode=""></image>
				<image class="paging-img" src="../../static/user/set_up.png" mode=""></image>
			
				<view class="paging-title" @click="goPaging('setUp/set_up')">
					设置
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
			login() {
				uni.navigateTo({
					url: "/pages/user/login/home_page",
				})
			},
			goPaging(url) {
				uni.navigateTo({
					url: "/pages/user/" + url,
				})
			},
			signIn() {
				uni.navigateTo({
					url: "/pages/user/integral/sign_in",
				})
			},
		}
	}
</script>

<style scoped>

	
	.pages {
		background-color: #F7F7F7;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	.nav-view {
		width: 750upx;
		height: 454upx;
		overflow: hidden;
		position: relative;
	}

	.nav-bg {
		width: 100%;
		height: 366upx;
		overflow: hidden;
	}

	.nav-bg>image {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.information {
		position: absolute;
		width: 100%;
		height: 130upx;
		top: 129upx;
		left: 0;
		overflow: hidden;
	}

	.sign-in {
		width: 119upx;
		height: 66upx;
		background: rgba(255, 255, 255, 0.3);
		opacity: 0.25;
		border-radius: 33upx 0 0 33upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 66upx;
		opacity: 0.8;
		float: right;
		text-align: center;
	}

	.logo-img {
		width: 130upx;
		height: 130upx;
		border-radius: 65upx;
		margin-left: 31upx;
		margin-right: 53upx;
		float: left;
		overflow: hidden;
	}

	.logo-img>image {
		width: 100%;
		height: 100%;
	}

	.name-view {
		width: 400upx;
		height: 130upx;
		overflow: hidden;
	}

	.name-view1 {
		width: 400upx;
		height: 130upx;
		overflow: hidden;
		line-height: 130upx;
		font-size: 32upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}

	.name-view1>text:nth-child(1) {
		padding-right: 10upx;
	}

	.name-view1>text:nth-child(2) {
		padding-left: 10upx;
	}

	.name {
		width: 100%;
		height: 74upx;
		line-height: 74upx;
		font-size: 32upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}

	.name-img {
		width: 97upx;
		height: 36upx;
		overflow: hidden;
	}

	.name-img>image {
		width: 100%;
		height: 100%;
	}

	.balance {
		position: absolute;
		width: 698upx;
		height: 154upx;
		bottom: 0;
		margin-left: 27upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 0upx 57upx 0upx rgba(110, 110, 110, 0.1);
		border-radius: 10upx;
		overflow: hidden;
		display: flex;
	}

	.info {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.info>view {
		text-align: center;
	}

	.info>view:nth-child(1) {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-top: 35upx;
	}

	.info>view:nth-child(2) {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-top: 15upx;
	}

	.paging {
		width: 750upx;
		height: 88upx;
		background: rgba(255, 255, 255, 1);
		margin-top: 20upx;
		overflow: hidden;
	}

	.more {
		width: 18upx;
		height: 30upx;
		float: right;
		margin: 29upx;

	}



	.paging-img {
		width: 30upx;
		height: 28upx;
		margin: 32upx 30upx;

		float: left;
	}


	.paging-title {
		width: 300upx;
		height: 88upx;
		line-height: 88upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
</style>
