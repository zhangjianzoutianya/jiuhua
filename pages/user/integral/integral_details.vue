<template>
	<view>
		<view class="banner">
			<image :src="content.original_img" mode=""></image>
		</view>
		<view class="comm-name">
			{{content.integral_name}}
		</view>
		<view class="amount">
			{{content.exchange_integral}}积分+{{content.shop_price}}元
		</view>
		<view class="null"></view>
		<view class="count">
			<view class="addition-and-subtraction">
				<view class="reduce" @click="reduce">
					-
				</view>
				<view class="num">
					{{num}}
				</view>
				<view class="add" @click="add">
					+
				</view>
			</view>
			<view class="count-text">
				兑换数量
			</view>
		</view>
		<view class="null"></view>
		<view class="details-text">
			<view class="details-text1">
				兑换地点
			</view>
			<view class="details-text2">
				C3香奈儿收银处
			</view>
		</view>
		<view class="details-text">
			<view class="details-text1">
				使用说明
			</view>
			<view class="details-text2">
				1.该商品需200积分+10，原价156元，尾款10元需到香奈儿收银台支付。
			</view>
			<view class="details-text2">
				2.活动详情请咨询店铺，图片仅供参考，以实物为主。
			</view>
		</view>
		<view class="details-text">
			<view class="details-text1">
				退货须知
			</view>
			<view class="details-text2">
				该礼品不可退换货
			</view>
		</view>
		<view class="nul"></view>
		<view class="operation" @click="popupIndex">
			立即兑换
		</view>

		<view class="popup" v-if="popups">
			<view class="alert">
				<view>
					<view class="alert-img">
						<image src="../../../static/user/integral/integral.png" mode=""></image>
					</view>
					<view class="alert-title">
						兑换该商品需200积分
					</view>
					<view class="alert-btn">
						<view class="no" @click="popupIndex">
							稍等看看
						</view>
						<view class="yes" @click="popupYes">
							确定兑换
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
				num: 0,
				popups: false,
				id:'',
				content:'',
				allNums:'',
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			let _this = this;
			_this.id = option.id;
		},
		mounted:function(){
			var _this = this;
			_this.userintegralDetail();
		},
		methods: {
			reduce() {
				var _this = this;
				if(_this.num>=1){
					_this.num--
				}
			},
			add() {
				var _this = this;
				if(_this.num<_this.allNums){
					_this.num++
				}
			},
			popupIndex() {
				var _this = this;
				if (_this.popups) {
					_this.popups = false
				} else{
					_this.popups = true
				}
			},
			popupYes() {
				var _this = this;
				_this.popups = false
				uni.navigateTo({
					url:"integral_handle",
				})
			},
			//详情
			userintegralDetail:function(){
				let _this=this;
				let data={
					integral_id:_this.id,
				};
				_this.$axios(_this.$baseUrl.userintegralDetail,data).then(res =>{
					if(res.data.status==1){
						_this.content = res.data.result.integral;
						_this.allNums = res.data.result.integral.store_count;
					}
				}).catch(error =>{
					
				})
			},
		}
	}
</script>

<style>
	.banner {
		width: 100%;
		height: 447upx;
		overflow: hidden;
	}

	.banner>image {
		width: 100%;
		height: 100%;
	}

	.comm-name {
		width: 508upx;
		margin: 0 auto;
		text-align: center;
		margin-top: 30upx;
		line-height: 45upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.amount {
		width: 100%;
		height: 30upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(247, 105, 54, 1);
		line-height: 30upx;
		text-align: center;
		margin: 30upx 0;
	}

	.null {
		width: 750upx;
		height: 20upx;
		background: rgba(247, 247, 247, 1);
	}

	.count {
		width: 100%;
		height: 94upx;
		overflow: hidden;
	}

	.addition-and-subtraction {
		width: 140upx;
		height: 40upx;
		float: right;
		margin-top: 27upx;
		margin-right: 57upx;
		overflow: overlay;
	}

	.addition-and-subtraction>view {
		float: left;
	}

	.reduce {
		width: 40upx;
		height: 40upx;
		text-align: center;
		color: #999999;
		line-height: 40upx;
		font-size: 30upx;
		font-weight: bold;
	}

	.num {
		width: 60upx;
		height: 40upx;
		text-align: center;
		line-height: 40upx;
		font-size: 28upx;
		background-color: #F4F5FA;
	}

	.add {
		width: 40upx;
		height: 40upx;
		text-align: center;
		color: #999999;
		line-height: 40upx;
		font-size: 30upx;
		font-weight: bold;
	}

	.count-text {
		height: 94upx;
		line-height: 94upx;
		font-size: 28upx;
		padding-left: 25upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.details-text {
		margin: 20upx 25upx;
		overflow: hidden;
	}

	.details-text1 {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 60upx;
	}

	.details-text2 {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 40upx;
	}

	.operation {
		width: 750upx;
		height: 88upx;
		background: rgba(201, 0, 9, 1);
		position: fixed;
		bottom: 0;
		left: 0;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 88upx;
	}

	.nul {
		width: 88upx;
		height: 88upx;
	}

	.popup {
		position: fixed;
		z-index: 20;
		background-color: rgba(0, 0, 0, 0.5);
		overflow: hidden;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.alert {
		width: 628upx;
		height: 305upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}

	.alert>view {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}

	.alert-img {
		width: 89upx;
		height: 89upx;
		margin: 0 auto;
		margin-top: 31upx;
	}

	.alert-img>image {
		width: 100%;
		height: 100%;
	}

	.alert-title {
		margin-top: 30upx;
		height: 30upx;
		font-size: 28upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.alert-btn {
		position: absolute;
		width: 100%;
		height: 75upx;
		display: flex;
		left: 0;
		bottom: 0;
	}

	.alert-btn>view {
		flex: 1;
		text-align: center;
		line-height: 75upx;
	}

	.no {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		border-top: 1px solid rgba(238, 238, 238, 1);
		border-right: 1px solid rgba(238, 238, 238, 1);
		;
	}

	.yes {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		border-top: 1px solid rgba(238, 238, 238, 1);
		font-weight: 500;
		color: rgba(201, 0, 9, 1);
	}
</style>
