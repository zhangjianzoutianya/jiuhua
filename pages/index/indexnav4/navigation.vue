<template>
	<view class="map_list">
		<view class="map_sou">
			<view class="map_sou_left">
				<view class="sou_img">
					<image src="../../../static/index/lou_che.png" mode=""></image>
				</view>
				<view class="map_tit">
					 C3
				</view>
			</view>
			<view class="shop_sousu">
				<view class="shop_sousu_img">
					<image src="../../../static/index/sou_su.png" mode=""></image>
				</view>
				<input type="text" value="" placeholder="店铺、设施、车位" />
			</view>
		</view>
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map class="map" :latitude="latitude" :longitude="longitude" :scale="scale" :markers="covers">
                </map>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
    data() {
        return {
            title: 'map',
            latitude: 39.909,
            longitude: 116.39742,
			scale:7,
            covers: [{
                latitude: 39.909,
                longitude: 116.39742,
                iconPath: '../../../static/location.png'
            }, {
                latitude: 39.90,
                longitude: 116.39,
                iconPath: '../../../static/location.png'
            }]
        }
    },
    methods: {

    }
}
	
</script>

<style>
	.map_list{
		width: 100%;
		position: relative;
	}
	.map {
		width: 750upx;
		height: 835upx;
	}
	.map_sou{
		position: absolute;
		top: 20upx;
		left: 0;
		width: 94%;
		padding: 0 26upx;
		display: flex;
		justify-content: space-between;
		z-index: 1;
	}
	.map_sou_left{
		width: 62upx;
		height: 60upx;
		background: #FFFFFF;
		border-radius: 10upx;
		text-align: center;
	}
	.sou_img{
		width: 22upx;
		height: 22upx;
	}
	.sou_img image{
		width: 100%;
		height: 100%;
	}
	.map_tit{
		color: #C90009;
		font-size: 20upx;
		margin-top: 18upx;
	}
	.shop_sousu{
		 position: relative;
		 width: 87%;
		 height: 60upx;
		 background: #F3F3F3;
		 border-radius: 10upx;
	}
	.shop_sousu_img{
		width: 32upx;
		height: 32upx;
		position: absolute;
		top: 40%;
		left: 30%;
		transform: translate(-50%,-50%);
	}
	.shop_sousu_img image{
		width: 100%;
		height: 100%;
	}
	.shop_sousu input{
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 24upx;
		color: #999999;
		border-radius: 10upx;
		background: #FFFFFF;
	}
</style>
