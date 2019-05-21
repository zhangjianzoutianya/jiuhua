<template>
	<view class="livr_box">
		<view class="popular_box">
			<view class="popular_img">
				<image src="../../../static/index/banner_live3.png" mode=""></image>
			</view>
			<view class="popular_title">
				<view class="popular_title_left">
					龙湖九华杭州大江东岸紫去...
				</view>
				<view class="popular_title_right">
					￥26-28万/年
				</view>
			</view>
			<view class="popular_botom">
				<text class="potom">4种房型</text>
				<text class="potom_a">45-52m <text>2</text></text>
			</view>
		</view>	
		<view class="address">
			<view class="address_left">
				<view class="address_left_img">
					<image src="../../../static/index/dao_han.png" mode=""></image>
				</view>
				<view class="address_left_conent">
					<view class="addre_conent_top">杭州市石桥路92号杭州萧山机场</view>
					<view class="addr_nent_bomy">距1号线闸弄口500米</view>
				</view>
			</view>
			<view class="play_top_img">
				<image src="../../../static/index/gen1.png" mode=""></image>
			</view>
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
		<view class="fied_list">
			<view class="fied_list_con">
				<view class="fied_list_left">
					<view class="fied_list_img">
						<image src="../../../static/index/xinj.png" mode=""></image>
					</view>
					<text>关注</text>
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

</script>

<style scoped>
	.livr_box{
		padding: 0 26upx;
	}
	.popular_box{
		width: 100%;
	}
	.popular_img{
		width: 100%;
		height: 358upx;
	}
	.popular_img image{
		width: 100%;
		height: 100%;
	}
	.popular_title{
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 28upx 0 20upx;
		font-size: 30upx;
		line-height: 24upx;
	}
	.popular_title_left{		
		color: #333333;		
	}
	.popular_title_right{
		color: #C90009;
	}
	.popular_botom{
		color: #333333;
		font-size: 24upx;
		line-height: 24upx;
		display: flex;
		margin-bottom: 33upx;
	}
	.potom{
		margin-right: 5%;
		position: relative;
	}
	.potom::after{
		position: absolute;
		top: 0;
		right: -20upx;
		width: 3upx;
		height: 100%;
		content: "";
		background: #333333;
	}
	.address{
		width: 100%;
		border-bottom: 1upx solid #EEEEEE;
		border-top: 1upx solid #EEEEEE;
		padding: 30upx 0;
		margin-bottom: 76upx;
		display: flex;
		justify-content: space-between;
	}
	.address_left{
		display:flex;
		width: 80%;
	}
	.address_left_img{
		width: 84upx;
		height: 82upx;
	}
	.address_left_img image{
		width: 100%;
		height: 100%;
	}
	.address_left_conent{
		margin-left: 2%;
	}
	.addre_conent_top{
		font-size: 24upx;
		color: #333333;
		line-height: 24upx;
		margin-bottom: 15upx;
		padding-top: 8upx;
	}
	.addr_nent_bomy{
		color: #999999;
		font-size: 20upx;
		line-height: 24upx;
	}	
	uni-image{
		width: 100%;
		height: 100%;
	}
	.apartment_dplay{
		width: 100%;
		margin-bottom: 60upx;
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
		width: 27upx;
		height: 23upx;
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
	.potom_a {
		position: relative;
	}
	.potom_a text{
		position: absolute;
		top: -4upx;
		right: -15upx;
	}
</style>
