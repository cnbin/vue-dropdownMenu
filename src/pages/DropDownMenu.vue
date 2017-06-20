<template>
<div>
    <section class="sort_container">
        <div class="sort_item" :class="{choose_type:sortBy == 'sort'}">
            <div class="sort_item_container" @click="chooseType('sort')">
                <div class="sort_item_border">
                    <span :class="{category_title: sortBy == 'sort'}">{{menuText}}</span>
                    <img :src="sortIconUrl" :class="[sortBy == 'sort' ? 'active_sort_icon' :'sort_icon']"> </img>
                </div>
            </div>
            <transition name="showlist">
                <section v-show="sortBy == 'sort'" class="sort_detail_type">
                    <ul class="sort_list_container">
                        <li v-for="(item, index) in items" @click="sortList(item,index)" :class="[sortIndex == index ? 'sort_list_li_select' :'sort_list_li']">
                            <p :class="{sort_select: sortIndex == index}">
                                <span>{{item}}</span>
								<img :src="imgUrl" :class="[sortIndex == index ? 'img_select' : 'img_normal']"> </img>
                            </p>
                        </li>
                    </ul>
                </section>
            </transition>	
        </div>
    </section>
    <section class="sort_table_list_container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    </section>
</div>
</template>

<script>
import config from '../config/config.js'
import arrow from '../assets/arrow.png'
import menu_arrow from '../assets/menu_arrow.png'

export default {
    name: 'dropDownMenu',
   	data(){
        return {
            sortBy: '', 
            items: config.mItems.meun1,
            sortIndex : '-1',
            imgUrl:arrow,
			sortIconUrl:menu_arrow,
			menuText: '下拉菜单',
        }
    },
    methods: {
        chooseType(type){
    		if (this.sortBy !== type) {
    			this.sortBy = type;
    		}else{
    			this.sortBy = '';//再次点击相同选项时收回列表
    		}
    	},
        sortList(item,index){
            this.sortIndex = index;
            this.sortBy = '';
			this.menuText = item;
			console.log(this.menuText);
		}
    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
	.sort_container{
		background-color: #fff;
		border-bottom: 0.025rem solid #f1f1f1;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		display: flex;
		z-index: 13;
		box-sizing: border-box;
		.sort_item{
			@include sc(0.55rem, #444);
			@include wh(100%, 2.6rem);
			text-align: center;
			line-height: 1rem;
			.sort_item_container{
				@include wh(100%, 100%);
				position: relative;
				z-index: 14;
				background-color: #fff;
				box-sizing: border-box;
				padding-top: .8rem;
				.sort_item_border{
				    height: 1rem;
					border-right: 0.025rem solid $bc;
					.sort_icon {
						width: .8rem;
						height: .8rem;
						margin-left: .8rem;
						vertical-align: middle;
					}
					.active_sort_icon {
						@extend .sort_icon;
						transform:rotate(180deg);
						transition: all .3s;
					}
				}
			}
		
		}
		.choose_type{
			.sort_item_container{
				.category_title{
					color: $blue;
				}
			}
		}
		.showlist-enter-active, .showlist-leave-active {
			transition: all .3s;
            transform: translateY(0);
		}
		.showlist-enter, .showlist-leave-active {
			opacity: 0;
			transform: translateY(-100%);
		}
		.sort_detail_type{
			width: 100%;
			position: absolute;
			display:flex;
			top: 2.6rem;
			left: 0;
			border-top: 0.025rem solid $bc;
		}
		.sort_list_container{
			width: 100%;
			.sort_list_li{
                background-color:#F5F5F5;
				height: 3rem;
				display: flex;
				align-items: center;
				svg{
					@include wh(0.7rem, 0.7rem);
					margin:0 .3rem 0 .8rem;
				}
				p{
					line-height: 2.9rem;
					flex: 1;
                  
					text-align: left;
					text-indent: 0.25rem;
					border-bottom: 0.025rem solid $bc;
					@include fj;
					align-items: center;
					span{
						color: #666;
					}

				}
				.sort_select{
					span{
                        @include wh(100%, 2.9rem);
						color: $blue; 
                        background-color: white;
					}
				}

				.img_select {
					width: 20px;
					height: 20px;
					display:block;
					background-color: white;
				}
				.img_normal {
					width: 20px;
					height: 20px;
					display:none;
					background-color: white;
				}
			}
			.sort_list_li_select {
				@extend .sort_list_li;
				background-color: white;
			}
		}
	}
    .sort_table_list_container {
        display: flex;
        position: absolute;
        top: 3em;
        bottom: 0;
        left: 0;
    }

</style>