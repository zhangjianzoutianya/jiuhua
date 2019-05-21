<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="banner.indicatorDots" :circular="banner.circular" :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration">
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/stb_banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/stb_banner.png" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image width="100%" src="../../../static/index/stb_banner.png" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="store_box">
			<view class="store_opi">
				<view class="store_zi">
					优质
				</view>
				<view class="store_top">
					临街旺铺，可餐饮，可明火，多业态
				</view>
				<view class="stsore_cony">
					<view class="stsore_opu">
						<view class="stsore_opu_olor">
							12000元
						</view>
						<view class="sts_ty">
							租金
						</view>
					</view>
					<view class="stsore_opu">
						<view class="stsore_opu_olor">
							220元/<view class="stry_dis">m<text>2</text>&nbsp;&nbsp;/</view>天
						</view>
						<view class="sts_ty">
							单价
						</view>
					</view>
					<view class="stsore_opu">
						<view class="stsore_opu_olor">
							158<view class="stry_disp">m<text>2</text></view>
						</view>
						<view class="sts_ty">
							建筑面积
						</view>
					</view>
				</view>
				<view class="xin_xi">
					<view class="xin_tore">
						<view class="tore_left">
							楼层 <text>低层</text>
						</view>
						<view class="tore_right">
							临街 <text>不临街</text>
						</view>
					</view>
					<view class="xin_tore">
						<view class="tore_left">
							位置 <text>望京</text>
						</view>
						<view class="tore_right">
							押金 <text>0个月</text>
						</view>
					</view>
					<view class="xin_tore">
						<view class="tore_ytr">
							时间 <text>11天以前发布</text>
						</view>
					</view>
					<view class="xin_tore">
						<view class="tore_ytr">
							形态 <text>信息补充中</text>
						</view>
					</view>
					<view class="xin_tore">
						<view class="tore_ytr">
							行业 <text>餐饮/儿童亲子/休闲娱乐/零售</text>
						</view>
					</view>
				</view>
			</view>
			<view class="potion_info">
				<view class="sitdion_mation">
					位置信息
				</view>
				<view class="sitdion_scrol">
					<scroll-view class="scroll-view_H" scroll-x="true">
						<view class="scroll-view-item_H">
							<text class="tet">地铁站</text>
						</view>
						<view class="scroll-view-item_H">
							<text>公交站</text>
						</view>
						<view class="scroll-view-item_H ">
							<text>加油站</text>
						</view>
						<view class="scroll-view-item_H">
							<text>地铁站</text>
						</view>
						<view class="scroll-view-item_H ">
							<text>公交站</text>
						</view>
						<view class="scroll-view-item_H ">
							<text>加油站</text>
						</view>
						<view class="scroll-view-item_H ">
							<text>地铁站</text>
						</view>
						<view class="scroll-view-item_H ">
							<text>公交站</text>
						</view>
						<view class="scroll-view-item_H ">
							<text>加油站</text>
						</view>
                    </scroll-view>
				</view>
				<view class="page-section page-section-gap">
					<map class="map" id="map" :latitude="latitude" :longitude="longitude" :markers="covers" :scale="scale" @markertap="markertap">
					</map>
				</view>
			</view>
			<view class="housing_source">
				<view class="housing_title">
					房源特色
				</view>
				<view class="housing_conent">
					<text>楼盘特色：</text>
					地处保利餐饮一条街，人流量大，可餐饮，可注册。方便看房，随时使用。
				</view>
				<view class="housing_conent">
					<text>周边配套：</text>
					地处保利餐饮一条街，人流量大，可餐饮，可注册。方便看房，随时使用。
				</view>
			</view>
			<view class="houd_sout">
				<view class="housing_title">
					附近房源推荐
				</view>
				<view class="hoov_banner">
				<view>
					<scroll-view class="scroll-view_H" scroll-x="true">
						<view id="demo1" class="scroll-view-item_H scroll-view-item_P">
							<view class="ed_on">
								<image src="../../../static/index/fdplay_conent.png" mode=""></image>
								<view class="foed_con">
									最新
								</view>
							</view>
							<view class="stayu_top">
								整租-3室1厅1卫
							</view>
							<view class="stayu_cont">
								丰台-六里桥-益丰苑小区
							</view>
							<view class="stayu_botm">
								￥6700/月 <text>押一付三</text>
							</view>
						</view>
						<view id="demo2" class="scroll-view-item_H scroll-view-item_P">
							<view class="ed_on">
								<image src="../../../static/index/fdplay_conent1.png" mode=""></image>
							</view>
							<view class="stayu_top">
								整租-3室1厅1卫
							</view>
							<view class="stayu_cont">
								丰台-六里桥-益丰苑小区
							</view>
							<view class="stayu_botm">
								￥6700/月 <text>押一付三</text>
							</view>
						</view>
						<view id="demo3" class="scroll-view-item_H scroll-view-item_P">
							<view class="ed_on">
								<image src="../../../static/index/fdplay_conent.png" mode=""></image>
							</view>
							<view class="stayu_top">
								整租-3室1厅1卫
							</view>
							<view class="stayu_cont">
								丰台-六里桥-益丰苑小区
							</view>
							<view class="stayu_botm">
								￥6700/月 <text>押一付三</text>
							</view>
						</view>
					</scroll-view>
				</view>
				</view>
			</view>
		</view>
		 <view class="fied_list">
			<view class="fied_list_con">
				<view class="fied_list_left">
					<view class="fied_list_img">
						<image src="../../../static/index/xinj1.png" mode=""></image>
					</view>
					<text>收藏</text>
				</view>
				<view class="fied_list_right">
					<view class="fied_list_img1">
						<image src="../../../static/index/dian_hua.png" mode=""></image>
					</view>
					<text>电话预约</text>
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
			title: 'map',
			scale: 0,
			id: 1,
			latitude: 39.909,
			longitude: 116.39742,
			covers: [{
					id: 0,
					latitude: 39.909,
					longitude: 116.39742,
					width:32,
					height: 32,
					iconPath: '../../../static/index/ty_din.png'
				}
			],
			
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

<style>
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
	.uni-padding-wrap{
		width: 100%;
	}
	.store_box{
		padding: 0 26upx;
	}
	.store_opi{
		width: 100%;
		margin-top: 28upx;
	}
	.store_zi{
		color: #FFFFFF;
		font-size: 24upx;
		text-align: center;
		width: 80upx;
		height: 40upx;
		line-height: 40upx;
		background: #FD8626;
		border-top-right-radius: 10upx;
		border-bottom-left-radius: 10upx;
	}
	.store_top{
		width: 100%;
		margin: 42upx 0;
		font-size: 36upx;
		color: #333333;
		font-weight: bold;
	}
	.stsore_cony{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.stsore_opu{
		width: 30%;
		border: 1upx solid #E5E5E5;
		border-radius: 6upx;
		text-align: center;
		padding: 25upx 0;
	}
	.stsore_opu_olor{
		color: #C90009;
		font-size: 30upx;
		display: flex;
		justify-content: center;
	}
	.stry_dis{
		position: relative;
	}
	.stry_dis text{
		position: absolute;
		top: -2upx;
		right:4upx;
		font-size: 18upx;
	}
	.stry_disp{
		position: relative;
	}
	.stry_disp text{
		position: absolute;
		top: 0upx;
		right:-10upx;
		font-size: 18upx;
	}
	.sts_ty{
		color: #999999;
		font-size: 24upx;
		margin-top: 15upx;
	}
	.xin_xi{
		margin-top: 88upx;
	}
	.xin_tore{
		display: flex;
		margin-bottom: 40upx;
	}
	.tore_left{
		width: 60%;
		color: #999999;
		font-size: 28upx;
	}
	.tore_left text{
		margin-left: 32upx;
		color: #333333;
		font-size: 28upx;
	}
	.tore_right{
		width: 40%;
		color: #999999;
		font-size: 28upx;
	}
	.tore_right text{
		margin-left: 32upx;
		color: #333333;
		font-size: 28upx;
	}
	.tore_ytr{
		width: 100%;
		color: #999999;
		font-size: 28upx;
	}
	.tore_ytr text{
		margin-left: 32upx;
		color: #333333;
		font-size: 28upx;
	}
	.potion_info{
		width: 100%;
		margin-top: 50upx;
	}
	.sitdion_mation{
		color: #333333;
		font-size: 32upx;
		margin-bottom: 40upx;
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
		width: 15%;
		font-size: 24upx;	
		margin-right: 33upx;
		position: relative;
		text-align: center;
		color: #999999;
		
	}
	.scroll-view-item_H text{
		display: inline-block;
		padding: 10upx 0;
	}
	.scroll-view-item_H .tet{
		color: #333333;
		border-bottom: 1upx solid #C90009;
	}
	.map{
		width: 100%;
		height: 260upx;
		margin-top: 10upx;
		border-radius: 10upx;
	}
	.housing_source{
		width: 100%;
		margin-top: 88upx;
	}
	.housing_title{
		color: #333333;
		font-size: 32upx;
		margin-bottom: 47upx;
	}
	.housing_conent{
		color: #333333;
		font-size: 24upx;
		margin-bottom: 35upx;
		letter-spacing: 2upx;
	}
	.housing_conent text{
		font-weight: bold;
		font-size: 28upx;
	}
	.houd_sout{
		width: 100%;
		margin: 40upx 0 100upx;
	}
	.hoov_banner{
		width: 100%;
		margin: 40upx 0;
	}
	
	.scroll-view-item_P{
		display: flex;
	}
	.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_P {
		display: inline-block;
		width: 40%;
		height: 218upx;
		font-size: 36upx;	
		margin-right: 33upx;
		position: relative;
		text-align: left;
	}
	.ed_on{
		width: 100%;
		height: 100%;
	}
	.scroll-view-item_P:nth-child(3){
		margin-right: 0;
	}
	.scroll-view-item_P  image{
		width: 100%;
		height: 100%;
	}
	.foed_con{
		color: #FFFFFF;
		font-size: 24upx;
		background: #E2B54E;
		padding: 6upx 15upx;
		border-radius: 4upx;
		position: absolute;
		top: 0;
		right: 0;
	}
	.stayu_top{
		color: #666666;
		font-size: 20upx;
		margin-top: 10upx;
	}
	.stayu_cont{
		color: #333333;
		font-size: 24upx;
		margin: 14upx 0;
	}
	.stayu_botm{
		color: #C90009;
		font-size: 24upx;
		display: flex;
	}
	.stayu_botm text{
		margin-left: 20upx;
		color: #C90009;
		font-size: 24upx;
		margin-top: -12upx;
	}
	.fied_list{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100upx;
		background: #FFFFFF;
	}
	.fied_list_con{
		display: flex;
		justify-content: flex-end;
	}
	.fied_list_left{
		display: flex;
		width: 150upx;
		height: 70upx;
		border: 1upx solid #999999;
		border-radius: 50upx;
		color: #666666;
		font-size: 24upx;
		margin-right: 30upx;
		justify-content: center;
		line-height: 70upx;
		margin-top: 16upx;
	}
	.fied_list_img{
		width: 26upx;
		height: 28upx;
		margin-right: 10upx;
	}
	.fied_list_img image{
		width: 100%;
		height: 100%;
	}
	.fied_list_right{
		width: 270upx;
		height: 70upx;
		background: #C90009;
		border-radius: 50upx;
		display: flex;
		color: #FFFFFF;
		font-size: 28upx;
		justify-content: center;
		line-height: 70upx;
		margin-right: 30upx;
		margin-top: 16upx;
	}
	.fied_list_img1{
		width: 33upx;
		height: 33upx;
		margin-right: 10upx;
		margin-top: 4upx;
	}
	.fied_list_img1>image{
		width: 100%;
		height: 100%;
	}
</style>
