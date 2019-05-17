<template>
	<view>
		<view class="sec1">
			<view class="sec-inner">
				<view class="texa">
					<textarea value="" placeholder="请写下您的意见或建议" />
					<view class="texa-abs"><text>0</text>/200</view>
				</view>
				<view class="btn">
					提交
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.sec-inner{
		width: 699upx;
		margin: 0 auto;
	}
	.sec1{
		margin-top:30upx ;
		
	}
	.texa{
		position: relative;
	}
	.texa textarea{
		width: 699upx;
		height: 321upx;
		padding: 19upx;
		background:rgba(236,235,235,1);
		border-radius:10upx;
		box-sizing: border-box;
		font-size: 24upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		line-height: 1.5;
		letter-spacing: 1upx;
	}
	.texa-abs{
		position: absolute;
		bottom: 19upx;
		right: 19upx;
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.btn{
		margin-top: 100upx;
		width:699upx;
		height:80upx;
		background:rgba(201,0,9,1);
		border-radius:10upx;
		color: #fff;
		text-align: center;
		font-size: 35upx;
		line-height: 80upx;
		letter-spacing: 10upx;
	}
</style>