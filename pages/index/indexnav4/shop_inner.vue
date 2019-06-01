<template>
	<view class=" group_box">
		 <view class="group_top">
			 <view class="group_top_img">
				 <image src="../../../static/index/ban_inner.png" mode=""></image>
			 </view>
			 <view class="group_cnt">
				  <view class="group_cnten">
					 香奈儿（Chanel）是一个法国奢侈品品牌，创始人是Coco Chanel
					 （原名是Gabrielle Bonheur Chanel ，
					 中文名是加布里埃·可可·香奈儿），该品牌于1910年在法国巴黎创立...
				  </view>
				  <view class="group_clic">
					  更多介绍
				  </view>
			 </view>
		 </view>
		 <view class="group_ntroduction">
			  <view class="ntrod">
			  	 <view class="group_ntroduction_top">
			  	 	  <view class="dsuction_title">
			  	 	  	   香奈儿集团
			  	 	  </view>
					  <view class="dsuction_shop">
					  	  <view class="dsuction_shop_left">
					  	  	 精品礼盒
					  	  </view>
						  <text>C3-C102</text>
					  </view>
					  <view class="dstiond_m">
					  	<view class="dsuction_shop1">
					  		<view class="dsuction_shop_left1">
					  		   整租
					  		</view>
					  		<view class="dsuction_shop_right">236m<text>2</text></view>
					  	</view>
						<view class="dsuc_right">
							 ￥26-28万/年
						</view>
					  </view>
					  <view class="tetore_ul">
					  	<text>近地铁</text>
					  	<text>新房源</text>
					  	<text>公司办公精选</text>
					  </view>
				 </view>
			     <view class="group_ntroduction_bottom">
			     	   <view class="uni-title uni-common-mt live_banner_top">
						   <text>周边配套</text>
						   <view class="colo_opi">
							 <text>更多</text>
							 <view class="play_top_img">
								<image src="../../../static/index/gen1.png" mode=""></image>
							 </view>
						   </view>
						</view>
						<view class="ntrod_conent">
							<view class="ntent_list">
								<view class="ntent_list_img">
									<image src="../../../static/index/fu_zhu.png" mode=""></image>
								</view>
								<view class="ntent_list_tit">
									B1-服装
								</view>
							</view>
							<view class="ntent_list">
								<view class="ntent_list_img" style="width: 30upx;">
									<image src="../../../static/index/fu_zhu1.png" mode=""></image>
								</view>
								<view class="ntent_list_tit">
									B2-配饰
								</view>
							</view>
							<view class="ntent_list">
								<view class="ntent_list_img" style="width: 30upx;">
									<image src="../../../static/index/fu_zhu2.png" mode=""></image>
								</view>
								<view class="ntent_list_tit">
									C1-个人护理
								</view>
							</view>
							<view class="ntent_list">
								<view class="ntent_list_img" style="width: 45upx;height: 45upx;">
									<image src="../../../static/index/fu_zhu3.png" mode=""></image>
								</view>
								<view class="ntent_list_tit">
									C2-娱乐
								</view>
							</view>
							<view class="ntent_list">
								<view class="ntent_list_img" style="width: 37upx; height: 35upx;">
									<image src="../../../static/index/fu_zhu4.png" mode=""></image>
								</view>
								<view class="ntent_list_tit">
									C3-精品礼盒
								</view>
							</view>
							<view class="ntent_list">
								<view class="ntent_list_img" style="width: 33upx; height: 39upx;">
									<image src="../../../static/index/fu_zhu5.png" mode=""></image>
								</view>
								<view class="ntent_list_tit">
									L1-家用
								</view>
							</view>
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
</script>

<style>
	.group_box{
		width: 100%;
	}
	.group_top{
		width: 100%;
	}
	.group_top_img{
		width: 100%;
		height: 380upx;
	}
	.group_top_img image{
		width: 100%;
		height: 100%;
	}
	.group_cnt{
		padding: 29upx 26upx 0;
		width: 93%;
	}
	.group_cnten{
		color: #333333;
		font-size: 24upx;
		height: 120upx;
		line-height: 42upx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	.group_clic{
		color: #C90009;
		font-size: 24upx;
		margin-top: 36upx;
		margin-bottom: 47upx;
		width: 100%;
		text-align: center;
	}
	.group_ntroduction{
		border-top: 1upx solid #EEEEEE;
		margin-bottom: 30upx;
	}
	.ntrod{
		padding: 0 26upx;
	}
	.group_ntroduction_top{
		width: 100%;
		padding-top: 50upx;
		margin-bottom: 98upx;
	}
	.dsuction_title{
		color: #333333;
		font-size: 30upx;
	}
	.dsuction_shop{
		display: flex;
		padding: 25upx 0 36upx;
	}
	.dsuction_shop_left{
		position: relative;
		color: #C90009;
		font-size: 28upx;
		margin-right: 20upx;
	}
	.dsuction_shop_left::after{
		position: absolute;
		top: 25%;
		right: -10upx;
		width: 4upx;
		height: 60%;
		background: #999999;
		content: "";
	}
	.dsuction_shop text{
		color: #999999;
		font-size: 28upx;
	}
	.dstiond_m{
		display: flex;
		justify-content: space-between;
		margin-bottom: 30upx;
	}
	.dsuction_shop1{
		display: flex;
	}
	.dsuction_shop_left1{
		position: relative;
		color: #333333;
		font-size: 24upx;
		margin-right: 40upx;
	}
	.dsuction_shop_left1::after{
		position: absolute;
		top: 15%;
		right: -20upx;
		width: 4upx;
		height: 60%;
		background: #666666;
		content: "";
	}
	.dsuction_shop_right{
		position: relative;
		color: #333333;
		font-size: 24upx;
	}
	.dsuction_shop_right text{
		position: absolute;
		right: -15upx;
		top: 0;
		color: #666666;
		font-size: 16upx;
	}
	.dsuc_right{
		color: #C90009;
		font-size: 30upx;
	}
	.tetore_ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.tetore_ul text{
		font-size: 24upx;
		color: #999999;
		padding: 8upx 22upx;
		margin-right: 14upx;
		background: #F7F7F7;
	}
	.group_ntroduction_bottom{
		width: 100%;
	}
	.live_banner_top{
		font-size: 32upx;
		color: #333333;		
		margin-bottom: 39upx;
		display: flex;
		justify-content: space-between;
	}
	.colo_opi{
		display: flex;
		color: #999999;
		font-size: 24upx;
	}
	.colo_opi text{
		margin-right: 20upx;
	}
	.play_top_img{
		width: 12upx;
		height: 24upx;
		margin-top: 4upx;
	}
	.play_top_img image{
		width: 100%;
		height: 100%;
	}
	.ntrod_conent{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.ntent_list{
		width: 25%;
		text-align: center;
		margin-bottom: 70upx;
	}
	.ntent_list_img{
		width: 45upx;
		height: 50upx;
		margin: 0 auto;
	}
	.ntent_list_img image{
		width: 100%;
		height: 100%;
	}
	.ntent_list_tit{
		color: #333333;
		font-size: 24upx;
		margin-top: 29upx;
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
