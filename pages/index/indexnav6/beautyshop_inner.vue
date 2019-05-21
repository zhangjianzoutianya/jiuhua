<template>
	<view>
		<view class="garbage">
			<view class="garbage_box">
				<view class="garbage_tab" @click="tabs(0)" :class="{'activ':index==0}">
					 <text>区域</text>
					  <view class="shom_top_left_img">
						  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
						  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
					 </view>
				</view>
				<view class="garbage_tab" @click="tabs(1)" :class="{'activ':index==1}">
					 <text>面积</text>
					  <view class="shom_top_left_img">
						  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
						  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
					 </view>
				</view>
				<view class="garbage_tab" @click="tabs(2)" :class="{'activ':index==2}">
				  <text>费用</text>
				  <view class="shom_top_left_img">
				 	  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
					  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
				 </view>
			    </view>
				<view class="garbage_tab" @click="tabs(3)" :class="{'activ':index==3}">
				  <text>更多</text>
				  <view class="shom_top_left_img">
				 	  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
					  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
				 </view>
				</view>
		    </view>
		</view>
			<view class="looking_list">
			<view class="guess_like_conent">
				<view class="guesa_conent" @click="goMsg('store_details')">
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
				index: 0,
			}
		},
		methods: {
			tabs(o){
				this.index = o;
			},
			goMsg(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
<style scoped>
	.garbage{
		padding: 15upx 26upx;
		border-top: 1upx solid #EEEEEE;
		border-bottom: 1upx  solid #EEEEEE;
	}
	.garbage_box{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.garbage_tab{
		line-height: 40upx;
		font-size:28upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		display: flex;
	}
	.shom_top_left_img{
		width: 14upx;
		height: 8upx;
		margin-top: 16upx;
		margin-left: 12upx;
	}
	.shom_top_left_img image{
		width: 100%;
		height: 100%;
	}
	.activ{
		color: #C90009;
	}
	.abm_on{
		display: none;
	}
	.acm_ty{
		display: block;
	}
	.activ .abm_on{
		display: block!important;
	}
	.activ .acm_ty{
		display: none!important;
	}
	
	
	.looking_list{
		padding: 0 26upx;
	}
	.looking_top{
		width: 100%;
		height: 78upx;
		background: #F7F7F7;
		padding-left: 26upx;
		line-height: 78upx;
		margin-top: 50upx;
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
		padding: 1upx 16upx 2upx;
		color: #999999;
		font-size: 18upx;
		margin-right: 10upx;
	}
	
</style>
