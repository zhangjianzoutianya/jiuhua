<template>
	<view id="app">
		<view class="merchant" @click="selectPicturesLogo">
			<view class="merchant-img">
				<image :src="selectPictureslogo" mode=""></image>
			</view>
			<view class="merchant-text">
				商户LOGO
			</view>
		</view>

		<view class="detailed">
			<view class="detailed-view">
				<!-- <image src="../../../static/user/login/more.png" mode=""></image> -->
				<view class="detailed-name">
					商户名称
				</view>
				<view class="detailed-input">
					<input type="text" value="" placeholder="请输入店铺名称" />
				</view>
			</view>
			<view class="detailed-view">
				<image src="../../../static/user/login/more.png" mode=""></image>
				<view class="detailed-name">
					行业
				</view>
				<view class="detailed-input">
					<view>
						请选择您所在行业
					</view>
				</view>
			</view>
			<view class="detailed-view">
				
					<image src="../../../static/user/login/more.png" mode=""></image>
					<view class="detailed-name">
						地址
					</view>
					<view class="detailed-input">
						<view>
							<addressd @changes="childClick">
								</addressd>
							<!-- 浙江省-杭州市-萧山区 -->
						</view>
					</view>
				
				
			</view>
			<view class="detailed-view">
				<!-- <image src="../../../static/user/login/more.png" mode=""></image> -->
				<view class="detailed-name">
					详细地址
				</view>
				<view class="detailed-input">
					<input type="text" value="" placeholder="（如街道、门牌）" />
				</view>
			</view>
			<view class="detailed-view">
				<!-- <image src="../../../static/user/login/more.png" mode=""></image> -->
				<view class="detailed-name">
					联系电话
				</view>
				<view class="detailed-input">
					<input type="text" value="" placeholder="请输入联系电话" />
				</view>
			</view>
			<view class="detailed-view">
				<!-- <image src="../../../static/user/login/more.png" mode=""></image> -->
				<view class="detailed-name">
					推广手机号码
				</view>
				<view class="detailed-input">
					<input type="text" value="" placeholder="无推广人员可不填写" />
				</view>
			</view>
		</view>
		<view class="license">
			营业执照
		</view>

		<view class="license-img">
			<view class="license-image" @click="selectPicturesLicense">
				<image :src="selectPictureslicense" mode=""></image>
			</view>
			<view class="submission">
				在线提交
			</view>
		</view>
	</view>
</template>

<script>
	import addressd from "@/components/jm-address/jm-address.vue"
	export default {
		data() {
			return {
				selectPictureslogo: "../../../static/user/login/camera_min.png",
				selectPictureslicense: "../../../static/user/login/camera.png",
			}
		},
		components: {
           addressd
        },
		methods: {
			
			// 上传商户logo
			selectPicturesLogo() {
				var _this = this;
				uni.chooseImage({
					count: 1, 
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						// console.log(JSON.stringify(res.tempFilePaths));
						_this.selectPictureslogo = res.tempFilePaths[0]
					}
				});
			},
			
			// 上传营业执照
			selectPicturesLicense() {
				var _this = this;
				uni.chooseImage({
					count: 1, 
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						// console.log(JSON.stringify(res.tempFilePaths));
						_this.selectPictureslicense = res.tempFilePaths[0]
					}
				});
			},
			childClick(e) {
                    console.log(e)
                }
		}
	}
</script>

<style scoped>

	#app {
		background: rgba(238, 238, 238, 1);
		width: 100%;
		height: 100%;
	}

	.merchant {
		width: 100%;
		height: 105upx;
		background-color: rgb(255, 255, 255);
		overflow: hidden;
		border-top: 1upx solid rgba(228, 228, 228, 1);
	}

	.merchant-img {
		width: 65upx;
		height: 65upx;
		overflow: hidden;
		float: right;
		margin: 20upx;
		margin-right: 59upx;
		border-radius: 50%;
	}

	.merchant-img>image {
		width: 100%;
		height: 100%;
	}

	.merchant-text {
		line-height: 105upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		padding-left: 61upx;
	}

	.detailed {
		width: 100%;
		overflow: hidden;
		background-color: rgb(255, 255, 255);
		margin-top: 20upx;
	}

	.detailed-view {
		width: 630upx;
		height: 108upx;
		border-bottom: 1upx solid rgba(230, 230, 230, 1);
		margin: 0 auto;
		overflow: hidden;
	}

	.detailed-view:last-child {
		border-bottom: 1upx solid rgba(255, 255, 255, 1);
	}

	.detailed-view>image {
		width: 17upx;
		height: 30upx;
		margin-top: 38upx;
		float: right;
	}

	.detailed-name {
		line-height: 108upx;
		width: 200upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		float: left;
	}

	.detailed-input {
		width: 350upx;
		height: 108upx;
		overflow: hidden;
		line-height: 108upx;
	}

	.detailed-input>input {
		height: 108upx;
		line-height: 108upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.detailed-input>view {
		height: 108upx;
		line-height: 108upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.license {
		width: 100%;
		height: 106upx;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 106upx;
		margin-left: 61upx;
	}

	.license-img {
		width: 100%;
		background-color: rgba(255, 255, 255, 1);
		overflow: hidden;
	}

	.license-image {
		width: 150upx;
		height: 150upx;
		margin: 103upx auto;
		overflow: hidden;
	}

	.license-image>image {
		width: 100%;
		height: 100%;
	}

	.submission {
		width: 631upx;
		height: 80upx;
		background: rgba(200, 0, 10, 1);
		opacity: 0.5;
		border-radius: 40upx;
		margin: 0 auto;
		margin-bottom: 64upx;
		text-align: center;
		line-height: 80upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}
</style>
