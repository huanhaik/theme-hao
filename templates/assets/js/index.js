/**首页逻辑 */

const ThemeConfig = {
	theme_mode: /*[[${theme.config.basic.theme_mode}]]*/ 'user',
	enable_loading_bar: /*[[${theme.config.theme.enable_loading_bar}]]*/ true,
	enable_footer: /*[[${theme.config.footer.enable_footer}]]*/ true,
	footer_position: /*[[${theme.config.footer.footer_position}]]*/ 'none',
	check_baidu_collect: /*[[${theme.config.other.check_baidu_collect}]]*/ false,
	baidu_token: /*[[${theme.config.other.baidu_token}]]*/ '',
	enable_back2top: /*[[${theme.config.theme.enable_back2top}]]*/ true,
	enable_back2top_smooth: /*[[${theme.config.theme.enable_back2top_smooth}]]*/ true,
	enable_weather: /*[[${theme.config.blogger.enable_weather}]]*/ false,
	weather_key: /*[[${theme.config.blogger.weather_key}]]*/ '',
	link_behavior: /*[[${theme.config.theme.link_behavior}]]*/ 'default',
	enable_tag_cloud: true,
	tag_cloud_type: document.getElementById('tags-3d') ? '3d' : 'list',
	enable_fixed_header: /*[[${theme.config.navbar.enable_fixed_header}]]*/ true,
	enable_clean_mode: /*[[${theme.config.other.enable_clean_mode}]]*/ false,
	cursor_effect: /*[[${theme.config.theme.cursor_effect}]]*/ 'off',
	enable_offscreen_tip: /*[[${theme.config.theme.enable_offscreen_tip}]]*/ false,
	enable_birthday: /*[[${theme.config.footer.enable_birthday}]]*/ false,
	birthday: /*[[${theme.config.footer.custom_birthday}]]*/ '',
	light_time_scope: /*[[${theme.config.basic.light_time_scope}]]*/ '5:00~19:00',
	enable_console_theme: /*[[${theme.config.other.enable_console_theme}]]*/ false,
	version: /*[[${theme.spec.version}]]*/ '1.0.0',

	enable_big_banner: /*[[${theme.config.beauty.enable_big_banner}]]*/ false,
	enable_banner: /*[[${theme.config.carousel.enable_banner}]]*/ true,
	banner_direction: /*[[${theme.config.carousel.banner_direction}]]*/ 'horizontal',
	enable_banner_loop: /*[[${theme.config.carousel.enable_banner_loop}]]*/ true,
	banner_effect: /*[[${theme.config.carousel.banner_effect}]]*/ 'slide',
	banner_speed: /*[[${theme.config.carousel.banner_speed}]]*/ 500,
	enable_banner_handle: /*[[${theme.config.carousel.enable_banner_handle}]]*/ true,
	enable_banner_autoplay: /*[[${theme.config.carousel.enable_banner_autoplay}]]*/ true,
	banner_delay: /*[[${theme.config.carousel.banner_delay}]]*/ 3500,
	enable_banner_switch_button: /*[[${theme.config.carousel.enable_banner_switch_button}]]*/ true,
	enable_banner_pagination: /*[[${theme.config.carousel.enable_banner_pagination}]]*/ true,
	enable_index_list_ajax: /*[[${theme.config.home.enable_index_list_ajax}]]*/ false,
	post_index_page_size: /*[[${theme.config.home.enable_index_list_ajax}]]*/ false,
	backdrop: /*[[${theme.config.theme.backdrop}]]*/ 'off',
	favicon: /*[[${theme.config.custom.favicon}]]*/ '',
	enable_index_list_effect: /*[[${theme.config.home.enable_index_list_effect}]]*/ true,
	index_list_effect_class: /*[[${theme.config.home.index_list_effect_class}]]*/ 'fadeInUp',
	show_loaded_time: /*[[${theme.config.custom.show_loaded_time}]]*/ false,
	enable_debug: /*[[${theme.config.other.enable_debug}]]*/ false,
	access_key: /*[[${theme.config.custom.show_loaded_time}]]*/ false,
	enable_copy: /*[[${theme.config.post.enable_copy}]]*/ true,
	enable_share: /*[[${theme.config.post.enable_share}]]*/ true,
	enable_share_link: /*[[${theme.config.post.enable_share_link}]]*/ true,
	enable_share_weixin: /*[[${theme.config.post.enable_share_weixin}]]*/ true,
	enable_like: /*[[${theme.config.post.enable_like}]]*/ true,
	enable_toc: /*[[${theme.config.post.enable_toc}]]*/ true,
	enable_progress_bar: /*[[${theme.config.post.enable_progress_bar}]]*/ true,
	enable_code_expander: /*[[${theme.config.code_block.enable_code_expander}]]*/ false,
	enable_fold_long_code: /*[[${theme.config.code_block.enable_fold_long_code}]]*/ false,
	enable_comment: /*[[${theme.config.post.enable_comment}]]*/ true,
	toc_depth: /*[[${theme.config.post.toc_depth}]]*/ 0,
	enable_code_title: /*[[${theme.config.code_block.enable_code_title}]]*/ true,
	enable_code_hr: /*[[${theme.config.code_block.enable_code_hr}]]*/ true,
	enable_code_macdot: /*[[${theme.config.code_block.enable_code_macdot}]]*/ true,
	enable_code_line_number: /*[[${theme.config.code_block.enable_code_line_number}]]*/ true,
	enable_code_newline: /*[[${theme.config.code_block.enable_code_newline}]]*/ false,
	show_tools_when_hover: /*[[${theme.config.code_block.show_tools_when_hover}]]*/ true,
	enable_code_copy: /*[[${theme.config.code_block.enable_code_copy}]]*/ true,
	enable_copy_right_text: /*[[${theme.config.post.enable_copy_right_text}]]*/ true,
	copy_right_text: /*[[${theme.config.post.copy_right_text}]]*/ '',
	offscreen_title_leave: /*[[${theme.config.theme.offscreen_title_leave}]]*/ '',
	offscreen_title_back: /*[[${theme.config.theme.offscreen_title_back}]]*/ '',
	enable_journal_effect: /*[[${theme.config.journals.enable_journal_effect}]]*/ true,
	// prettier-ignore
	journal_list_effect_class: /*[[${theme.config.journals.index_list_effect_class}]]*/ 'fadeInUp',
	enable_like_journal: /*[[${theme.config.journals.enable_like_journal}]]*/ true,
	enable_comment_journal: /*[[${theme.config.journals.enable_comment_journal}]]*/ true,
	journal_block_height: /*[[${theme.config.journals.journal_block_height}]]*/ 300,
	long_code_height: /*[[${theme.config.code_block.long_code_height}]]*/ 800,
	lazyload_avatar: /*[[${theme.config.blogger.lazyload_avatar}]]*/ '',
	photos_layout: 'waterfall',
	// prettier-ignore
	blog_url: /*[[${#strings.substring(site.url, #strings.length(site.url) - 1)== '/'}? ${#strings.substring(site.url,0,#strings.length(site.url) - 1)}:${site.url}]]*/ '',
	blog_title: /*[[${site.title}]]*/ '',
	// prettier-ignore
	BASE_RES_URL: /*[[${(#strings.trim(theme.config.basic.source_link) !='' && theme.config.basic.enable_source_link)? theme.config.basic.source_link : '/themes/theme-Joe3'}]]*/ '',
	BASE_URL: 'https://bbchin.com',
  };

const homeContext = {
	/* 初始化轮播图 */
	initSwiper() {
		if (
			ThemeConfig.enable_banner &&
			$(".joe_index__banner .swiper").length !== 0
		) {

			new Swiper('.swiper', {
				
				direction: ThemeConfig.banner_direction, // 垂直切换选项
				loop: ThemeConfig.enable_banner_loop, // 循环模式选项
				effect: ThemeConfig.banner_effect,//Slide的切换效果
				keyboard: false,
				speed: ThemeConfig.banner_speed,
				mousewheel: false,
				grabCursor: ThemeConfig.enable_banner_handle,
				allowTouchMove: ThemeConfig.enable_banner_handle,
				autoplay: ThemeConfig.enable_banner_autoplay
					? {
						delay: ThemeConfig.banner_delay,
						disableOnInteraction: false,
					}
					: false,
				observer: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},

				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

			});
		}
	},
	// /* 获取文章封面 */
	 getThumbnail(post) {
	// 	// 取值逻辑（文章封面 > 分类封面 > 标签封面 > 随机图(若开启) > 默认封面）
	 	let thumbnail = post.thumbnail || "";
	 	if (!thumbnail) {
	 		if (post.categories.length) {
	 			thumbnail = post.categories[0].thumbnail;
	 			if (!thumbnail) {
	 				if (post.tags.length) {
						thumbnail = post.tags[0].thumbnail;
						if (!thumbnail) {
	 						thumbnail = homeContext.getDefaultThumbnail(post.id);
						}
					} else {
	 					thumbnail = homeContext.getDefaultThumbnail(post.id);
					}
				}
			} else {
				if (post.tags.length) {
	 				thumbnail = post.tags[0].thumbnail;
	 				if (!thumbnail) {
	 					thumbnail = homeContext.getDefaultThumbnail(post.id);
	 				}
	 			} else {
	 				thumbnail = homeContext.getDefaultThumbnail(post.id);
	 			}
	 		}
	 	}
	 	return thumbnail;
	 },
	// /* 获取默认封面 */
	// getDefaultThumbnail(postId) {
	// 	// 如果配置了随机图，则从随机图获取
	// 	if (
	// 		ThemeConfig.enable_random_img_api &&
    //   ThemeConfig.random_img_api.trim()
	// 	) {
	// 		return `${ThemeConfig.random_img_api}${
	// 			ThemeConfig.random_img_api.includes("?") ? "&" : "?"
	// 		}_r=${postId}`;
	// 	} else {
	// 		return ThemeConfig.post_thumbnail;
	// 	}
	// },
	/* 初始化首页列表 */
// 	initList() {
// 		if (!ThemeConfig.enable_index_list_ajax) return;
// 		const MapTypes = {
// 			1: "createTime",
// 			2: "visits",
// 			3: "updateTime",
// 			4: "likes",
// 		};
// 		const pageSize = ThemeConfig.post_index_page_size;
// 		const $el = $(".joe_index__list");
// 		const $headerHeight =
//       ThemeConfig.enable_fixed_header || Joe.isMobile
//       	? $(".joe_header").height()
//       	: 0;
// 		const $navItems = $(".passage-list-tabs .item");
// 		const $navLine = $(".passage-list-tabs .line");
// 		const $domList = $el.find(".joe_list");
// 		const $domEmpty = $el.find(".joe_empty");
// 		const $domLoad = $(".joe_load");
// 		const $domLoading = $el.find(".joe_list__loading");
// 		$navLine.attr("style", `width:${$navItems.eq(0).width()}px;`);
// 		let queryData = {
// 			page: 0,
// 			size: pageSize,
// 			keyword: "",
// 			sort: "topPriority,createTime,desc", // 默认为置顶优先+创建时间+倒序
// 		};
//
// 		// 初始化Dom
// 		const initDom = async (sort) => {
// 			$domList.html("").show();
// 			$domEmpty.addClass("hide");
// 			$domLoad.removeAttr("loading").html("查看更多").show();
// 			const activeItem = $(`.passage-list-tabs .item[data-type="${sort}"]`);
// 			const activeLine = $(".passage-list-tabs .line");
// 			activeItem.addClass("active").siblings().removeClass("active");
// 			activeLine.css({
// 				left: activeItem.position().left,
// 				width: activeItem.width(),
// 			});
// 		};
//
// 		// 获取数据
// 		const getDate = async () => {
// 			$domLoad.attr("loading", true).html("加载中...");
// 			$domLoading.show();
// 			await Utils.sleep(200);
//
// 			return new Promise((reslove, reject) => {
// 				Utils.request({
// 					url: "/api.console.halo.run/v1alpha1/posts",
// 					method: "GET",
// 					data: queryData,
// 				})
// 					.then((res) => {
// 						const resD = res.content;
// 						if (resD.length === 0) {
// 							$domLoad.hide();
// 							if (queryData.page === 0) {
// 								$domList.hide();
// 								$domEmpty.removeClass("hide");
// 							}
// 						} else {
// 							resD.forEach((itm, idx) =>
// 								$domList.append(getListNode(itm, idx))
// 							);
// 							if (res.isLast) {
// 								$domLoad.hide();
// 								// return Qmsg.warning("没有更多内容了");
// 							}
// 						}
// 						$domLoading.hide();
// 						$domLoad.removeAttr("loading").html("查看更多");
// 						reslove(resD.length ? resD.length - 1 : 0);
// 					})
// 					.catch((err) => {
// 						if ($(".joe_list__item").length === 0) {
// 							$domList.hide();
// 							$domEmpty.removeClass("hide");
// 						}
// 						$domLoading.hide();
// 						$domLoad.removeAttr("loading").html("查看更多");
// 						reject(err);
// 					});
// 			});
// 		};
//
// 		// 渲染Dom节点
// 		const getListNode = (post, index) => {
// 			const thumbnail = homeContext.getThumbnail(post);
// 			const link_behavior =
//         ThemeConfig.link_behavior !== "default"
//         	? ThemeConfig.link_behavior === "new"
//         		? "_blank"
//         		: ""
//         	: "_blank";
//
// 			return `<li class="joe_list__item default animated wow" data-wow-delay="0.${index}s">
//             ${
// 	ThemeConfig.enable_post_thumbnail
// 		? `<a href="${post.fullPath}" class="thumbnail" title="${
// 			post.title
// 		}" target="${link_behavior}" rel="noopener noreferrer">
//                       <img width="100%" height="100%" class="lazyload" src="${
// 	ThemeConfig.lazyload_thumbnail
// }" data-src="${thumbnail}" onerror="Joe.errorImg(this,${
// 	ThemeConfig.fallback_thumbnail
// })" alt="${post.title}">
//                       <time datetime="${Utils.formatDate(
// 		post.createTime
// 	)}">${Utils.formatDate(post.createTime)}</time>
//                       <i class="joe-font joe-icon-picture"></i>
//                   </a>`
// 		: ""
// }
//             <div class="information">
//                 <a href="${post.fullPath}" class="title" title="${
// 	post.title
// }" target="${link_behavior}" rel="noopener noreferrer">
//                   ${
// 	post.topped
// 		? "<span class=\"badge\" style=\"display: inline-block\">置顶</span>"
// 		: ""
// }${post.title}</a>
//             <a class="abstract" href="${
// 	post.fullPath
// }" title="文章摘要" target="${link_behavior}" rel="noopener noreferrer">${
// 	post.summary
// }</a>
//             <div class="meta">
//                 <ul class="items">
//                     <li>${Utils.formatDate(post.createTime)}</li>
//                     <li><i class="joe-font joe-icon-eye"></i>${
// 	post.visits || 0
// }</li>
//                     <li><i class="joe-font joe-icon-message"></i>${
// 	post.commentCount || 0
// }</li>
//                     <li><i class="joe-font joe-icon-dianzan"></i>${
// 	post.likes || 0
// }</li>
//                 </ul>
//                 ${
// 	post.categories.length > 0
// 		? `<ul class="categories">${post.categories.reduce(
// 			(sum, pcate) => {
// 				return (sum += `<li class="pcate">
//                                   <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z" fill="var(--minor)"></path><path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z" fill="#ff6a18"></path></svg>
//                                   <a class="link" target="${link_behavior}" rel="noopener noreferrer" href="${pcate.fullPath}">${pcate.name}</a>
//                               </li>`);
// 			},
// 			""
// 		)}</ul>`
// 		: ""
// }
//             </div>
//         </div>
//     </li>`;
// 		};
//
// 		// 切换文章类型
// 		$navItems.on("click", function (e) {
// 			e.stopPropagation();
// 			if (!ThemeConfig.enable_index_list_ajax) return;
// 			const typeId = $(this).attr("data-type");
// 			const typeName = MapTypes[typeId];
// 			if (queryData.sort.includes(typeName)) return;
// 			queryData = {
// 				page: 0,
// 				size: pageSize,
// 				sort: `topPriority,${typeName},desc`,
// 			};
// 			initDom(typeId);
// 			getDate();
// 		});
//
// 		// 加载更多
// 		$domLoad.on("click", async function (e) {
// 			e.stopPropagation();
// 			if ($(this).attr("loading")) return;
// 			const lastItemTop = $domList.find(".joe_list__item:last").offset().top;
// 			queryData.page++;
// 			await getDate();
//
// 			// 向下滚动一段距离
// 			await Utils.sleep(300);
// 			const scrollTop = lastItemTop - $headerHeight;
// 			$("html,body").animate(
// 				{
// 					scrollTop,
// 				},
// 				500
// 			);
// 		});
//
// 		getDate();
// 	},
	loadMoreArticles() {
		if (!ThemeConfig.enable_index_list_ajax){
			return
		}
		// 在页面加载完成后执行
		const $headerHeight =
			ThemeConfig.enable_fixed_header || Joe.isMobile
				? $(".joe_header").height()
				: 0;
		$(document).ready(() => {
			const $domLoadContainer = $(".joe_load_container");
			$domLoadContainer.on('click','.joe_load', async function () {
				const lastItemTop = document.querySelector(".joe_list__item:last-child").offsetTop;
				const $domLoad = $(".joe_load");
				this.domNext = $domLoad.attr('data-next');
				// console.log(this.domNext)
				$domLoad.html("加载中...").attr("loading", "true");
				fetch(this.domNext, {
					method: "GET",
				})
					.then((response) => response.text())
					.then((html) => {
						const parser = new DOMParser();
						const doc = parser.parseFromString(html, "text/html");
						const postListElement = document.querySelector(".joe_list");
						// console.log(postListElement)
						const postListNewElements = doc.querySelectorAll(".joe_list .joe_list__item");
						// console.log(postListNewElements)

						if (postListNewElements && postListNewElements.length > 0) {
							postListNewElements.forEach((element) => {
								postListElement.appendChild(element.cloneNode(true));
							});

						}
						const $newDomLoad = $(doc).find(".joe_load");
						if ($newDomLoad.attr('data-next') !== '/') {
							$domLoadContainer.empty().append($newDomLoad);
						} else {
							$domLoadContainer.remove();
						}
						// 向下滚动一段距离
						// const lastItemTop = postListElement.querySelector(".joe_list__item:last-child").offsetTop;
						// console.log(postListElement.querySelector(".joe_list__item:last-child"))
						// console.log($headerHeight)
						const scrollTop = lastItemTop - $headerHeight; // Adjust the value as needed
						window.scrollTo({
							top: scrollTop,
							behavior: 'smooth'
						});

					})
					.catch((error) => {
						console.error(error);
					})
					.finally(() => {

					});
			});
		});
	},
	// 加载更多文章的函数
	// loadMoreArticles() {
	// 	// 进行加载前的一些UI交互，例如显示加载指示器
	//
	// 	// 发送Ajax请求获取新的文章内容
	// 	fetch(this.domNext, {
	// 		method: "GET",
	// 	})
	// 		.then((response) => response.text())
	// 		.then((html) => {
	// 			const parser = new DOMParser();
	// 			const doc = parser.parseFromString(html, "text/html");
	// 			const postListElement = document.getElementById("main");
	// 			const postListNewElements = doc.querySelectorAll("#main .post");
	//
	// 			if (postListNewElements && postListNewElements.length > 0) {
	// 				postListNewElements.forEach((element) => {
	// 					postListElement.appendChild(element);
	// 				});
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		})
	// 		.finally(() => {
	// 			// 加载完成后的一些UI交互，例如隐藏加载指示器
	// 		});
	// },

	bigBannerGoto(){
		if (!ThemeConfig.enable_big_banner){
			return
		}
		const link = document.getElementById('evan-big-banner_goto');
		const target = document.querySelector('#indexPosition');

		link.addEventListener('click', (event) => {
			event.preventDefault();

			const targetPosition = target.getBoundingClientRect().top + window.scrollY;

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		});
	},
/* 激活列表特效 */
	
};

!(function () {
	const omits = ["getThumbnail", "getDefaultThumbnail"];
	document.addEventListener("DOMContentLoaded", function () {
		Object.keys(homeContext).forEach(
			(c) => !omits.includes(c) && homeContext[c]()
		);
	});

	// window.addEventListener("load", function () {
	//   if (omits.length === 1) {
	//     homeContext[omits[0]]();
	//   } else {
	//     omits.forEach((c) => homeContext[c]());
	//   }
	// });
})();
