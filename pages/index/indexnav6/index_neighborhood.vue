<template>
	<view class="neig_box">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="banner.indicatorDots" :circular="banner.circular" :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration">
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/sta_banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/sta_banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/sta_banner.png" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="hoo_opy">
			<view class="hood_info">
				<view class="hoo_left">
					<text>杭州市</text>
					<view class="hood_info_img">
						<image src="../../../static/index/str_xia.png" mode=""></image>
					</view>
				</view>
				<view class="hood_right">
					<view class="hood_right_img">
						<image src="../../../static/index/str1_xia.png" mode=""></image>
					</view>
					<input type="text" value="" placeholder="搜热铺" />
				</view>
			</view>
		</view>
		<view class="hoov_banner">
			<view>
                <scroll-view class="scroll-view_H" scroll-x="true">
                    <view id="demo1" class="scroll-view-item_H" @click="goMsg('beauty_shop')">
						<view class="opi_ty">
							<image src="../../../static/index/sta1_banner.png" mode=""></image>
							<view class="fo_boom"></view>
							<view class="foed_con">
								<view class="foed_con_top">
									找靓店
								</view>
								<view class="foed_con_boom">
									高端与时尚并存
								</view>
							</view>
						</view>					
					</view>
                    <view id="demo2" class="scroll-view-item_H">
						<view class="opi_ty">
							<image src="../../../static/index/sta1_banner.png" mode=""></image>
							<view class="fo_boom"></view>
							<view class="foed_con">
								<view class="foed_con_top">
									热搜铺
								</view>
								<view class="foed_con_boom">
									享受阳光与美景
								</view>
							</view>
						</view>		
					</view>
                    <view id="demo3" class="scroll-view-item_H" @click="goMsg('community_business')">
						<view class="opi_ty">
							<image src="../../../static/index/sta1_banner.png" mode=""></image>
							<view class="fo_boom"></view>
							<view class="foed_con">
								<view class="foed_con_top">
									社区商业
								</view>
								<view class="foed_con_boom">
									高品质青年社区
								</view>
							</view>
						</view>		
					</view>
                </scroll-view>
            </view>
		</view>
		<view class="back_colo"></view>
		<view class="todays_mar">
			<view class="todays_market">
				<view class="todays_top">
					<view class="todays_top_left">
						今日行情
					</view>
					<view class="todays_top_right">
						<text>详情</text>
						<view class="todays_right_img">
							<image src="../../../static/index/xiayige.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="todays_conent">
					<view class="days_con">
						<view class="dayvs_cont">
							1800 <text>元/月</text>
						</view>
						<view class="dayvs_ty">
							房租均价上升 <text>2.8%</text>
						</view>
					</view>
					<view class="days_con">
						<view class="dayvs_cont">
							1800 <text>套</text>
						</view>
						<view class="dayvs_ty">
							新上房源
						</view>
					</view>
					<view class="days_con">
						<view class="dayvs_cont">
							1800 <text>套</text>
						</view>
						<view class="dayvs_ty">
							在转商铺
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="back_colo"></view>
		<view class="guess_box">
			<view class="guess_like">
				<view class="guess_like_top">
					猜你喜欢
				</view>
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
							<view class="guesa_title_bottm">
								12万/年
							</view>
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
				banner:{
					indicatorDots: true,
					autoplay: true,
					interval: 4000,
					duration: 800,
					circular:true 
			},
			
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
	.neig_box{
		/* padding: 0 26upx; */
	}
	.uni-padding-wrap{
		padding: 0 26upx;
	}
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
	.hoo_opy{
		padding: 0 26upx;
	}
	.hood_info{
		width: 100%;
		display: flex;
		border: 1upx solid #DCDCDC;
		height: 88upx;
		border-radius: 10upx;
		margin-top: 20upx;
	}
	.hoo_left{
		display: flex;
		width: 30%;
		line-height: 88upx;
		color: #333333;
		font-size: 28upx;
		padding-left: 5%;
	}
	.hood_info_img{
		width: 16upx;
		height: 8upx;
		margin-left: 10upx;
		margin-top: -6upx;
	}
	.hood_info_img image{
		width: 100%;
		height: 100%;
	}
	.hood_right{
		width: 70%;
		display: flex;
		position: relative;
		height: 88upx;
	}
	.hood_right_img{
		width: 32upx;
		height: 32upx;
		position: absolute;
		top: 25%;
		left: 0;
	}
	.hood_right_img image{
		width: 100%;
		height: 100%;
	}
	.hood_right input{
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		font-size: 24upx;
		color: #999999;
		padding-left: 10%;
	}
	.hoov_banner{
		width: 96.2%;
		margin: 40upx 0;
		padding-left: 26upx;
	}
	
	.scroll-view_H{
		display: flex;
	}
	.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 35%;
		height: 146upx;
		font-size: 36upx;	
		margin-right: 33upx;
		/* position: relative; */
	}
	.opi_ty{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.scroll-view-item_H:nth-child(3){
		margin-right: 0;
	}
	.scroll-view-item_H  image{
		width: 100%;
		height: 100%;
	}
	.fo_boom{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		border-radius: 10upx;
	}
	.foed_con{
		position: absolute;
		bottom: 5%;
		left: 10%;
	}
	.foed_con_top{
		color: #FFFFFF;
		font-size: 24upx;
	}
	.foed_con_boom{
		color: #DCDCDC;
		font-size: 18upx;
	}
	.back_colo{
		width: 100%;
		height: 20upx;
		background: #F7F7F7;
	}
	.todays_mar{
		padding: 0 26upx;
	}
	.todays_market{
		width: 100%;
		padding: 30upx 0;
	}
	.todays_top{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.todays_top_left{
		color: #333333;
		font-size: 32upx;
	}
	.todays_top_right{
		font-size: 24upx;
		color: #999999;
		display: flex;
	}
	.todays_right_img{
		width: 12upx;
		height: 20upx;
		margin-left: 10upx;
	}
	.todays_right_img image{
		width: 100%;
		height: 100%;
	}
	.todays_conent{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 50upx;
	}
	.dayvs_cont{
		color: #333333;
		font-size: 28upx;
		display: flex;
		margin-bottom: 10upx;
	}
	.dayvs_cont text{
		color: #666666;
		font-size: 20upx;
		margin-left: 6upx;
		margin-top: 10upx;
	}
	.dayvs_ty{
		display: flex;
		color: #999999;
		font-size: 22upx;
	}
	.dayvs_ty text{
		color: #C90008;
	}
	.guess_box{
		padding: 0 26upx;
	}
	.guess_like{
		width: 100%;
	}
	.guess_like_top{
		color: #333333;
		font-size: 32upx;
		padding: 32upx 0;
	}
	.guess_like_conent{
		width: 100%;
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
		padding-top: 15upx;
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
		padding: 20upx 0;
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
	}
</style>
