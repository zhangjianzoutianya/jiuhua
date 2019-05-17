<template>
	<view>
		<view>
			<view class="logo-bg">
				<view class="logo-bg-img">
					<image src="../../../static/user/login/logoBg.png" mode=""></image>
				</view>
				<view class="logo">
					<image src="../../../static/user/login/logo.png" mode=""></image>
				</view>
			</view>
			<view class="login">
				<view class="login-view" @click="login">
					登陆
				</view>
				<view class="login-text">
					聚九鼎之力创荣华，展一片真诚润生活
				</view>
			</view>
		</view>
		<view class="mask" v-if="loginIndex">
			<view class="passageway">
				<view class="passageway1">
					请先选择用户身份
				</view>
				<view class="passageway2" @click="memberLogin">
					<view class="passageway-img">
						<image src="../../../static/user/login/member.png" mode=""></image>
					</view>
					<view class="passageway-text">
						会员注册
					</view>
				</view>
				<view class="passageway2" @click="staffLogin">
					<view class="passageway-img">
						<image src="../../../static/user/login/staff.png" mode=""></image>
					</view>
					<view class="passageway-text">
						员工通道
					</view>
				</view>
				<view class="passageway3"  @click="merchantRegister">
					<view class="passageway-img">
						<image src="../../../static/user/login/merchant.png" mode=""></image>
					</view>
					<view class="passageway-text">
						商户注册
					</view>
				</view>
				<view class="passageway4" @click="login">
					取消
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginIndex: false,
			}
		},
		methods: {
			login() {
				var _this = this;
				if (_this.loginIndex) {
					_this.loginIndex = false;
				} else {
					_this.loginIndex = true;
				}
			},

			// 会员注册
			memberLogin() {
				uni.navigateTo({
					url: 'member_login',
				});
			},

			// 员工通道
			staffLogin() {
				uni.navigateTo({
					url: 'staff_login',
				});
			},
			
			// 商户注册
			merchantRegister() {
				uni.navigateTo({
					url: 'merchant_register',
				});
			}
		}
	}
</script>

<style>
	.logo-bg {
		width: 100%;
		height: 878upx;
		position: relative;
	}

	.logo-bg-img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.logo-bg-img>image {
		width: 100%;
		height: 100%;
	}

	.logo {
		position: absolute;
		width: 255upx;
		height: 226upx;
		top: 307upx;
		left: 247upx;
	}

	.logo>image {
		width: 100%;
		height: 100%;
	}

	.login {
		width: 100%;
		/* max-height: 656upx; */
		max-height: calc(100% - 878upx);
		overflow: hidden;
		position: relative;
	}

	.login-view {
		width: 200upx;
		height: 200upx;
		background: rgba(213, 34, 39, 1);
		border-radius: 50%;
		font-size: 52upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		text-align: center;
		color: rgba(255, 255, 255, 1);
		line-height: 200upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

	}

	.login-text {
		height: 24upx;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 24upx;
		margin-top: 356upx;
		text-align: center;
	}

	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}

	.passageway {
		width: 628upx;
		height: 668upx;
		background: rgba(0, 0, 0, 0.6);
		opacity: 0.66;
		border-radius: 10upx 10upx 0 0;
		position: absolute;
		bottom: 0;
		left: 61upx;
		-webkit-animation: fadelogIn .4s;
        animation: fadelogIn .4s;
	}
	
	@keyframes fadelogIn {
            0% {
                -webkit-transform: translate3d(0, 100%, 0);
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
            }
            100% {
                -webkit-transform: none;
                transform: none;
            }
        }

        @-webkit-keyframes fadelogIn {
            0% {
                -webkit-transform: translate3d(0, 100%, 0);
            }
            100% {
                -webkit-transform: none;
            }
        }

	.passageway1 {
		height: 34upx;
		font-size: 36upx;
		text-align: center;
		margin-top: 84upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 34upx;
		margin-bottom: 61upx;
	}

	.passageway2 {
		width: 248upx;
		height: 95upx;
		border-top: 1upx solid rgb(255, 255, 255);
		overflow: hidden;
		margin: 0 auto;
	}

	.passageway3 {
		width: 248upx;
		height: 95upx;
		border-top: 1upx solid rgb(255, 255, 255);
		border-bottom: 1upx solid rgb(255, 255, 255);
		overflow: hidden;
		margin: 0 auto;
	}

	.passageway-img {
		width: 56upx;
		height: 56upx;
		margin-top: 19upx;
		margin-left: 19upx;
		float: left;
	}

	.passageway-img>image {
		width: 100%;
		height: 100%;
	}

	.passageway-text {
		width: 173upx;
		height: 95upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 95upx;
		text-align: center;
		float: right;
	}

	.passageway4 {
		font-size: 36upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		margin-top: 103upx;
	}
</style>
