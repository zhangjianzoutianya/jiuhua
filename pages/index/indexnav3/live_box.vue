<template>
	<view class="livr_box">
			<view class="npi_live">
			    <view class="uni-padding-wrap">
			        <view class="page-section swiper">
			            <view class="page-section-spacing">
			                <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="circular" :interval="interval" :duration="duration">
			                    <swiper-item>
			                        <view class="swiper-item uni_live_img">
										<image  src="../../../static/index/banner_live.png"></image>
									</view>
			                    </swiper-item>
			                    <swiper-item>
			                        <view class="swiper-item uni_live_img">
										<image  src="../../../static/index/banner_live1.png"></image>
									</view>
			                    </swiper-item>
			                    <swiper-item>
			                        <view class="swiper-item uni_live_img">
										<image  src="../../../static/index/banner_live2.png"></image>
									</view>
			                    </swiper-item>
			                </swiper>
			            </view>
			        </view>
			    </view>      
			</view>
			<view class="live_banner">
				<view class="uni-title uni-common-mt live_banner_top">
                <text>热门门店</text>
				</view>
				<view>
					<scroll-view class="scroll-view_H" scroll-x="true">
						<navigator url="live_inner" class="scroll-view-item_P">
							<view class="scroll-view-item_H">
								<image src="../../../static/index/banner_live3.png" mode=""></image>
								<view class="tet_atore">香奈儿集团杭州大江东义蓬街道...</view>
							</view>
						</navigator>					
					    <navigator url="live_inner" class="scroll-view-item_P">
							<view class="scroll-view-item_H">
								<image src="../../../static/index/banner_live4.png" mode=""></image>
								<view class="tet_atore">香奈儿集团杭州大江东义蓬街道...</view>
							</view>
						</navigator>
					    <navigator url="live_inner" class="scroll-view-item_P">
							<view class="scroll-view-item_H">
								<image src="../../../static/index/banner_live5.png" mode=""></image>
								<view class="tet_atore">香奈儿集团杭州大江东义蓬街道...</view>
							</view>
						</navigator>
				    </scroll-view>
				</view>
			</view>	
			<view class="check_store">
				查看全部门店
			</view>
			<view class="apartment_dplay">
				<view class="apartment_dplay_top">
					<text>户型展示</text>
					<view class="play_top_img">
						<image src="../../../static/index/gen.png" mode=""></image>
					</view>
				</view>
				<view class="apartment_dplay_conent">
					<view class="fdplay_conent">
						<view class="fdplay_conent_img">
							<image src="../../../static/index/fdplay_conent.png" mode=""></image>
							<text class="zui_xin">最新</text>
						</view>	
						<view class="fdplay_conent_top">
							 整租-3室1厅1卫
						</view>
						<view class="fdplay_copi">
							丰台-六里桥-益丰苑小区
						</view>
						<view class="fdplay_conent_bottm">
							<text>￥6700/月</text>
							<text class="nent_bot">押一付三</text>
						</view>
					</view>
					<view class="fdplay_conent">
						<view class="fdplay_conent_img">
							<image src="../../../static/index/fdplay_conent1.png" mode=""></image>
						</view>	
						<view class="fdplay_conent_top">
							 整租-3室1厅1卫
						</view>
						<view class="fdplay_copi">
							丰台-六里桥-益丰苑小区
						</view>
						<view class="fdplay_conent_bottm">
							<text>￥6700/月</text>
							<text class="nent_bot">押一付三</text>
						</view>
					</view>
					<view class="fdplay_conent">
						<view class="fdplay_conent_img">
							<image src="../../../static/index/fdplay_conent2.png" mode=""></image>
						</view>	
						<view class="fdplay_conent_top">
							 整租-3室1厅1卫
						</view>
						<view class="fdplay_copi">
							丰台-六里桥-益丰苑小区
						</view>
						<view class="fdplay_conent_bottm">
							<text>￥6700/月</text>
							<text class="nent_bot">押一付三</text>
						</view>
					</view>
					<view class="fdplay_conent">
						<view class="fdplay_conent_img">
							<image src="../../../static/index/fdplay_conent3.png" mode=""></image>
						</view>	
						<view class="fdplay_conent_top">
							 整租-3室1厅1卫
						</view>
						<view class="fdplay_copi">
							丰台-六里桥-益丰苑小区
						</view>
						<view class="fdplay_conent_bottm">
							<text>￥6700/月</text>
							<text class="nent_bot">押一付三</text>
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
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
			circular:true,
			scrollTop: 0,
            old: {
                scrollTop: 0
            }
        }
    }		
}	
	
</script>

<style scoped>
	.livr_box{
		padding: 0 26upx;
	}
	.swiper {
		width: 100%;
		height: 410upx;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}
	.swiper-item>image {
		width: 100%;
		height: 100%;
	}
	.live_banner{
		width: 100%;
		margin-top: 74upx;
	}
	.live_banner_top{
		font-size: 32upx;
		color: #333333;		
		margin-bottom: 39upx;
	}
	.box_conent{
		font-size: 24upx;
		color: #333333;
		line-height: 24upx;
	}
	.scroll-view_H{
		display: flex;
	}
	.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_P{
		display: inline-block;
		width: 60%;
		height: 300upx;
		font-size: 36upx;
		margin-right: 3%;	
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 100%;
		font-size: 36upx;		
	}
	.scroll-view-item_P:nth-child(3){
		margin-right: 0;
	}
	.scroll-view-item_H  image{
		width: 100%;
		height: 100%;
	}
	.tet_atore{
		width: 100%;
		color: #333333;
		font-size: 24upx;
		line-height: 24upx;
		height: 24upx;
		margin-top: 20upx;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	uni-image{
		width: 100%;
		height: 100%;
	}
	.check_store{
		width: 30%;
		line-height: 60upx;
		border: 1upx solid #C90009;
		border-radius: 10upx;
		font-size: 24upx;
		color: #C90009;
		text-align: center;
		margin: 85upx auto 79upx;
	}
	.apartment_dplay{
		width: 100%;
	}
	.apartment_dplay_top{
		font-size: 32upx;
		color: #333333;
		line-height: 24upx;
		margin-bottom: 40upx;
		display: flex;
		justify-content: space-between;
	}
	.play_top_img{
		width: 12upx;
		height: 24upx;
	}
	.play_top_img image{
		width: 100%;
		height: 100%;
	}
	.apartment_dplay_conent{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.fdplay_conent{
		width: 48%;
		margin-bottom: 50upx;
	}
	.fdplay_conent_img{
		width: 100%;
		height: 218upx;
		position: relative;
	}
	.fdplay_conent_img>image{
		width: 100%;
		height: 100%;
	}
	.fdplay_conent_top{
		font-size: 20upx;
		color: #666666;
		line-height: 24upx;
		margin-top: 11upx;
	}
	.fdplay_copi{
		font-size: 24upx;
		color: #333333;
		line-height: 24upx;
		margin: 14upx 0;
	}
	.fdplay_conent_bottm{
		display: flex;
		color:#C90009;
		font-size: 24upx;
		line-height: 24upx;
	}
	.nent_bot{
		margin-left: 10%;
	}
	.zui_xin{
		position: absolute;
		top: 0;
		right: 0;
		display: inline-block;
		width: 78upx;
		height: 36upx;
		background: #E2B54E;
		font-size: 24upx;
		color: #ffffff;
		line-height: 36upx;
		text-align: center;
		border-top-right-radius: 12upx;
	}
</style>
