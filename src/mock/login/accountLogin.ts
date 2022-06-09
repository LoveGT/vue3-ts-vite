export default [
	{
		url: '/dev-api/mock/code',
		timeout: 1000,
		method: 'get',
		response: () => {
			return {
				msg: 'Request Success!',
				img: '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAA8AKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDtrW1ga1hZoIySikkoOeKsCztv+feL/vgU2z/484P+ua/yqyKiMY8q0IjGPKtCIWdr/wA+0P8A3wKeLK1/59of+/YqTOBXI+I/iJpXh65NqVkurlfvJERhfqfWujD4OpiZ+zow5n5A1BK7OsFlaf8APrD/AN+xThY2n/PrB/37Fc74Y8c6X4mzFCxhugMmCTrj1B6GuqU5pV8LOhN06sLNdGgSi1dEQsLP/n1g/wC/YpwsLP8A59IP+/YqYU8EVjyx7D5Y9iEafZf8+lv/AN+x/hThp1l/z52//fpf8KnHFc54l8caR4WQC8kaS4YZWCHBf6nJGBWtHDSrzVOlG7fRIGorVm+NOsf+fO3/AO/S/wCFOGm2P/Plb/8Afpf8K4jw98VtI1zUorB4JrSaZtsW/wCYMewyOlegIQwq8TgquFnyV4cr8xJQlqiAaZYf8+Vt/wB+l/wp40yw/wCfG2/79L/hVgU8Vz8sew+WPYrDS9P/AOfG2/78r/hTxpWn/wDPha/9+V/wqSW5hgGZZUjHqzAVj3/jbw3pbbbrWLRX/uLIGYfUDOPxrSnh5VHywjd+SuDUVuaw0rTv+fC1/wC/K/4U4aTp3/QPtf8Avyv+FR6VrFhrNot1p91HcQk43oc8/wBK0RUyp8r5ZKzDlj2Ko0nTf+gfaf8Aflf8Kranpenx6Reuljaq6wOVYQqCDtPI4rWFVdW/5At//wBe8n/oJqJRjyvQUox5XoclZ/8AHnB/1zX+VWRVez/484P+ua/yqyKcfhQ4/CipfTGGBiPSvn6aR9I8VzS3ieYDKzEsM5DH73vX0HewedCy+1eb694bW4lbzoty569x+NexlWYQwkpwqxvCas7brzRM4c23Q5zUdPM/l6vpDeVeR4cGE/f9x7/zrvPA/wARLfWxHYaiywahjAPRZvp7+35V55Jp2paATJYyGe26tE/Uf59RXN3c5u74zxQmKRjkqv8Ae9a+iw2Bp5hRdGc1OEfhn9qP92Setvw89rZSk4O6+4+pJZgke4GvJ21K68B+MWuWlnm0C9YqyFiwhJOeB6jnHqM9xUng/wAY3Gu6PPo9/cyJeRx4juUPzsvTJ/2hxz37+/Jar/wkln51vdyjULVjhg4DBh2OPvA/TpXlYPAyw2JqYbESils03a6ezi7Wut1e3buXKV4po9+/tCKayW4hkV43UOjqchgRkEH0r59124P/AAsC5m1QeYnnZG/pt/h/AcVJ4Y8c3Xh62lsJ43uLI5McZbDRN7H0PcevPrnL1rUp9fuvtIs/KUcBsknHueBXp5fllbLsTUVWypSi1z3StfZrXcic1NK251sGseG9SuY4blltpo2BhuEXYUYHghhx19eK9t0qczWcTGRJCVHzp0b3FfLGn/ZVvVjv4yYW4JBwV967m1utf8GR/a9FvWu9NAy9rP8AMEHrj+oxXPmWT0YyhQpVXdq8eb4Xf+WS29GOFR6to9s1fxHpGgxeZqeoQWwIyFdvmb6KOT+ArmY/i/4SkuPKN1cIuceY0Dbf05/SuUk8Q6L8RLKOK+stt5bfP5ZYggdDtYclTxkfT2NczeTeFLe6ksLnTfJZDtJKsCPfIOa8+hgKEZOhiKdR1Fuo20Xfrf8AItze6asegeOlsPGWhRyabfRPNA2+GaKTI5+8px0zgfiBXn8fg/TorVhdSTyXDD76sAFPsMfzqr/wi9rct5+jaoVU9id2PxH8sV0ml6X/AGHpUv8AausQvG5zGJPl2nvhiec+mK3liZYWh7LBYl7/AA8rUvS9n+dtxW5neSMD4feKZvCnif7O8paxnfyplzwDnAce4/lmvpm2mE0asDkEV8m6ho93a607Q27zJ5m9dgzkZzivpTwdqAv9FtpV3coAQwwQRwQQe4p8RPD1/ZYqi03Je9bv5ro/8go3V4s6cVV1b/kCX/8A17Sf+gmrYqrq/wDyBL//AK9pP/QTXy8vhZpL4WclZ/8AHlB/1zX+VWRVey/48oP+ua/yqyKI/Cgj8KFxkVVubCOdTlRVwU7HFUUeeeLLAabpNzeIoPlLuwe4zXl1xqOny/v0VhL/AHSv9a981m3M1uybAykYIIyDXnVx4UtXui62ESnP8K4H5dK9HB1cFCLWJg276NO3yZElL7LOd8C6dNNq5vWUqmCF9ya9Cv8Aw09zHvA5q54e0D7OVYpjHbFdqluoj2kVGY46WOrutJW6Jdkhwjyqx4H4m0R7WwlaRBlMMGxyKl8MaXJrejozZbyyYwfYdK9T8RaDDqEDRSRB0bqp796d4e0SOxiEUcKRxjoqrgU/raeC+rNXfNzJ9lazXzDl97mPJNZ8HyIjbFxIPun19qraV4lGn2bWWopIssXyqcZyPQ17jq2iJcREhRmvP9T8Ixzz5ltUdh/ERzXRhcxp+w+q4uLlBaqzs4vy8n2JlB35o7nF+CbSS48TC6hTZbxls/j0Fd3rnhqz1BvNuLNXfbjeMg4+orX8N+Gjbsv7sKo6ACu5/smJ4gpUdKnMM1qYrE+3heNlZWetl59xwgoxsz58uvBTRylrK7eI/wB1x/Uf4Va03wItxMH1C8lmP92MYz/wI5/lXtM/hiGRshRUtp4aihbO0VX9vZhy8vtPnZX++1/xF7KHY8r8R+HGi0NvsaSiWBQYdhJbjtnqeK1Pg/4l1S5v7zStTkkkEMavGZVw6c4IJ6nqOvpXoWp6IJYNqrVLRdFe1ut5XnpnHOKwhjksLPDzgpOTupdU9L/fYbj7yaO3jO5Qar6v/wAgS/8A+vaT/wBBNTwghADUOr/8gS//AOvaT/0E15svhY5fCzkrL/jyt/8Armv8qsiuZi1q5iiSNUiIRQoyD2/GpP7fuv8AnnD/AN8n/Gso1o2RnGrGyOlFOFcz/wAJDd/884P++T/jS/8ACRXf/POD/vk/41Xtoj9tE6Vog4wRUI0+LdnaKwf+EkvP+eUH/fJ/xpf+ElvP+eUH/fJ/xo9tEPbROnigWMcCpwK5L/hJ73/nlb/98t/jS/8ACUXv/PK3/wC+W/xo9tEPbROraFX6inxwqnQVyX/CVX3/ADyt/wDvlv8AGl/4Su+/55W3/fLf40e2iHtonYlAwwagawidslRXLf8ACW3/APzxtv8Avlv8aX/hL9Q/5423/fLf/FUe2iHtonYQ2yRdFAqyBXD/APCYah/zxtf++W/+Kpf+Ey1H/nja/wDfLf8AxVHtoh7aJ3QApwArhP8AhM9R/wCeNr/3w3/xVL/wmupf88LT/vhv/iqPbRD20TvCgbqKFhUHIFcJ/wAJtqX/ADwtP++G/wDiqX/hONT/AOeFp/3w3/xVHtoh7aJ6CoxVXV/+QHqH/XtJ/wCgmuK/4TnU/wDnhaf98N/8VUdz4z1G6tZrd4bUJKjIxVWyARjj5qmVaNmKVWNmf//Z',
				code: 200,
				uuid: 'ba6fe305bf9e4d0aaacbfdc41aa8a604'
			}
		}
	},
	{
		//普通员工登录 gaotao
		url: '/dev-api/mock/auth/oauth/token',
		timeout: 1000,
		method: 'post',
		response: () => {
			return {
				access_token: 'aa759a9c-5a98-45df-b514-7d952bcd957c',
				token_type: 'bearer',
				refresh_token: 'd7246aeb-c48e-4175-9dba-2bce80ed1582',
				expires_in: 21599,
				scope: 'server',
				user_id: 490,
				username: 'tao.gao@leaderment.com',
				nickname: '高涛'
			}
		}
	},
	{
		//普通员工的信息
		url: '/dev-api/mock/system/user/getInfo',
		timeout: 1000,
		method: 'get',
		response: () => {
			return {
				access_token: 'aa759a9c-5a98-45df-b514-7d952bcd957c',
				token_type: 'bearer',
				refresh_token: 'd7246aeb-c48e-4175-9dba-2bce80ed1582',
				expires_in: 21599,
				scope: 'server',
				user_id: 490,
				username: 'tao.gao@leaderment.com',
				nickname: '高涛'
			}
		}
	},
	{
		//普通员工对应的菜单
		url: '/dev-api/mock/system/user/getInfo',
		timeout: 1000,
		method: 'get',
		response: () => {
			return {
				msg: 'Request Success!',
				code: 200,
				data: [
					{
						name: 'SystemManage',
						path: '/systemManage',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '系统管理',
							icon: 'new-system-manage',
							noCache: false
						},
						children: [
							{
								name: 'User',
								path: 'user',
								hidden: false,
								component: 'systemManage/user/index',
								meta: { title: '用户管理', icon: 'user', noCache: false }
							},
							{
								name: 'Role',
								path: 'role',
								hidden: false,
								component: 'systemManage/role/index',
								meta: { title: '角色管理', icon: 'peoples', noCache: false }
							},
							{
								name: 'Menu',
								path: 'menu',
								hidden: false,
								component: 'systemManage/menu/index',
								meta: { title: '菜单管理', icon: 'tree-table', noCache: false }
							},
							{
								name: 'Dept',
								path: 'dept',
								hidden: false,
								component: 'systemManage/dept/index',
								meta: { title: '部门管理', icon: 'tree', noCache: false }
							},
							{
								name: 'Post',
								path: 'post',
								hidden: false,
								component: 'systemManage/post/index',
								meta: { title: '岗位管理', icon: 'post', noCache: false }
							},
							{
								name: 'Dict',
								path: 'dict',
								hidden: false,
								component: 'systemManage/dict/index',
								meta: { title: '字典管理', icon: 'dict', noCache: false }
							},
							{
								name: 'Config',
								path: 'config',
								hidden: false,
								component: 'systemManage/config/index',
								meta: { title: '参数设置', icon: 'edit', noCache: false }
							},
							{
								name: 'Client',
								path: 'client',
								hidden: false,
								component: 'systemManage/client/index',
								meta: { title: '终端设置', icon: 'client', noCache: false }
							},
							{
								name: 'Notice',
								path: 'notice',
								hidden: false,
								component: 'systemManage/notice/index',
								meta: { title: '通知公告', icon: 'message', noCache: false }
							},
							{
								name: 'Log',
								path: 'log',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '日志管理', icon: 'log', noCache: false },
								children: [
									{
										name: 'Operlog',
										path: 'operlog',
										hidden: false,
										component: 'systemManage/operlog/index',
										meta: { title: '操作日志', icon: 'empty', noCache: false }
									},
									{
										name: 'Logininfor',
										path: 'logininfor',
										hidden: false,
										component: 'systemManage/logininfor/index',
										meta: { title: '登录日志', icon: 'empty', noCache: false }
									}
								]
							}
						]
					},
					{
						name: 'Tool',
						path: '/tool',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '系统工具', icon: 'tool', noCache: false },
						children: [
							{
								name: 'Build',
								path: 'build',
								hidden: false,
								component: 'tool/build/index',
								meta: { title: '表单构建', icon: 'build', noCache: false }
							},
							{
								name: 'Gen',
								path: 'gen',
								hidden: false,
								component: 'tool/gen/index',
								meta: { title: '代码生成', icon: 'code', noCache: false }
							},
							{
								name: 'Http://localhost:8080/swagger-ui.html',
								path: 'http://localhost:8080/swagger-ui.html',
								hidden: false,
								component: 'Layout',
								meta: { title: '系统接口', icon: 'swagger', noCache: false }
							}
						]
					},
					{
						name: 'BasicInfo',
						path: '/basicInfo',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '基础信息', icon: 'new-basic-info', noCache: false },
						children: [
							{
								name: 'BasicAmzAccount',
								path: 'BasicAmzAccount',
								hidden: false,
								component: 'basicInfo/BasicAmzAccount/index',
								meta: {
									title: '亚马逊账号',
									icon: 'new-amazon-account',
									noCache: false
								}
							},
							{
								name: 'SeriesManagement',
								path: 'SeriesManagement',
								hidden: false,
								component: 'basicInfo/SeriesManagement/index',
								meta: {
									title: '系列信息',
									icon: 'new-series-info',
									noCache: false
								}
							},
							{
								name: 'BrandManagement',
								path: 'BrandManagement',
								hidden: false,
								component: 'basicInfo/BrandManagement/index',
								meta: {
									title: '品牌信息',
									icon: 'new-brand-info',
									noCache: false
								}
							},
							{
								name: 'BUManagement',
								path: 'BUManagement',
								hidden: false,
								component: 'basicInfo/BUManagement/index',
								meta: { title: 'BU信息', icon: 'new-bu-info', noCache: false }
							},
							{
								name: 'ProductMark',
								path: 'ProductMark',
								hidden: true,
								component: 'basic/ProductMark',
								meta: {
									title: '产品标记',
									icon: 'new-product-mark',
									noCache: false
								}
							},
							{
								name: 'ProductEOLAnalysis',
								path: 'productEOLAnalysis',
								hidden: true,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '产品EOL分析',
									icon: 'new-product-analysis',
									noCache: false
								},
								children: [
									{
										name: 'AnalysisSummary',
										path: 'analysisSummary',
										hidden: false,
										component: 'basic/productEOLAnalysis/analysisSummary',
										meta: {
											title: 'EOL分析总表',
											icon: 'new-eol-sum',
											noCache: false
										}
									},
									{
										name: 'AnalysisDetail',
										path: 'analysisDetail',
										hidden: false,
										component: 'basic/productEOLAnalysis/analysisDetail',
										meta: {
											title: 'EOL分析明细',
											icon: 'new-eol-detail',
											noCache: false
										}
									}
								]
							}
						]
					},
					{
						name: 'SupplyChain',
						path: '/supplyChain',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '供应链', icon: 'new-supply-chain', noCache: false },
						children: [
							{
								name: 'ProductCenter',
								path: 'productCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '产品中心',
									icon: 'new-product-center',
									noCache: false
								},
								children: [
									{
										name: 'ProductInfo',
										path: 'ProductInfo',
										hidden: false,
										component: 'supplyChain/productCenter/ProductInfo/index',
										meta: {
											title: '产品列表',
											icon: 'new-product-list',
											noCache: false
										}
									},
									{
										name: 'ProductMark',
										path: 'productMark',
										hidden: false,
										component: 'supplyChain/productCenter/ProductMark',
										meta: {
											title: '产品标记',
											icon: 'new-product-mark',
											noCache: false
										}
									},
									{
										name: 'ProductEOLAnalysis',
										path: 'productEOLAnalysis',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '产品EOL分析',
											icon: 'new-product-analysis',
											noCache: false
										},
										children: [
											{
												name: 'AnalysisSummary',
												path: 'analysisSummary',
												hidden: false,
												component:
													'supplyChain/productCenter/productEOLAnalysis/analysisSummary.vue',
												meta: {
													title: 'EOL分析总表',
													icon: 'new-eol-sum',
													noCache: false
												}
											},
											{
												name: 'AnalysisDetail',
												path: 'analysisDetail',
												hidden: false,
												component:
													'supplyChain/productCenter/productEOLAnalysis/analysisDetail.vue',
												meta: {
													title: 'EOL分析明细',
													icon: 'new-eol-detail',
													noCache: false
												}
											}
										]
									},
									{
										name: 'LogisticsInfo',
										path: 'LogisticsInfo',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: { title: '产品物流', icon: 'build', noCache: false },
										children: [
											{
												name: 'LogisticsInfo',
												path: 'LogisticsInfo',
												hidden: false,
												component:
													'supplyChain/productCenter/LogisticsInfo/index',
												meta: {
													title: '产品物流信息',
													icon: 'new-product-log',
													noCache: false
												}
											}
										]
									},
									{
										name: 'ProductOperatorInfo',
										path: 'ProductOperatorInfo',
										hidden: false,
										component:
											'supplyChain/productCenter/ProductOperatorInfo/index',
										meta: {
											title: '产品运营负责人',
											icon: 'new-prod-operate',
											noCache: false
										}
									}
								]
							},
							{
								name: 'InventoryCenter',
								path: 'inventoryCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '库存中心',
									icon: 'new-inventory-center',
									noCache: false
								},
								children: [
									{
										name: 'Situation',
										path: 'situation',
										hidden: false,
										component: 'supplyChain/inventoryCenter/situation/index',
										meta: {
											title: '库存情况',
											icon: 'new-inventory-situate',
											noCache: false
										}
									},
									{
										name: 'Details',
										path: 'details',
										hidden: false,
										component: 'supplyChain/inventoryCenter/details/index',
										meta: {
											title: '库存明细',
											icon: 'new-inventory-detail',
											noCache: false
										}
									},
									{
										name: 'Turnover',
										path: 'turnover',
										hidden: false,
										component: 'supplyChain/inventoryCenter/turnover/index',
										meta: {
											title: '库存周转',
											icon: 'new-inventory-turn',
											noCache: false
										}
									},
									{
										name: 'Uploadtable',
										path: 'uploadtable',
										hidden: false,
										component: 'supplyChain/inventoryCenter/uploadtable/index',
										meta: {
											title: '表格导入',
											icon: 'new-table-import',
											noCache: false
										}
									},
									{
										name: 'ShipmentTracking',
										path: 'shipmentTracking',
										hidden: false,
										component: 'supplyChain/inventoryCenter/shipmentTracking',
										meta: {
											title: '亚马逊货件追踪',
											icon: 'new-amazon-tracking',
											noCache: false
										}
									},
									{
										name: 'OverseasStock',
										path: 'overseasStock',
										hidden: false,
										component: 'supplyChain/inventoryCenter/overseasStock',
										meta: {
											title: '海外仓库存',
											icon: 'new-oversea-inv',
											noCache: false
										}
									},
									{
										name: 'DomesticStock',
										path: 'domesticStock',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '国内库存',
											icon: 'new-dom-inv',
											noCache: false
										},
										children: [
											{
												name: 'InOutCheck',
												path: 'inOutCheck',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/domesticStock/inOutCheck',
												meta: {
													title: '出入库登记',
													icon: 'new-inOut-check',
													noCache: false
												}
											},
											{
												name: 'VoucherLbrary',
												path: 'voucherLbrary',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/domesticStock/voucherLbrary',
												meta: {
													title: '凭证单据库',
													icon: 'new-proof-library',
													noCache: false
												}
											},
											{
												name: 'OutCnDelivery',
												path: 'outCnDelivery',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/domesticStock/outCnDelivery/index',
												meta: {
													title: '出库发货明细',
													icon: 'new-delivery-details',
													noCache: false
												}
											}
										]
									},
									{
										name: 'DomesticNowStock',
										path: 'domesticNowStock',
										hidden: false,
										component:
											'supplyChain/inventoryCenter/domesticNowStock/index',
										meta: {
											title: '国内实时库存',
											icon: 'new-dom-inv2',
											noCache: false
										}
									},
									{
										name: 'CnStorageAage',
										path: 'cnStorageAage',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '国内库龄',
											icon: 'new-dom-inv',
											noCache: false
										},
										children: [
											{
												name: 'StorageAgeDetail',
												path: 'storageAgeDetail',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/cnStorageAage/storageAgeDetail/index',
												meta: {
													title: '库龄明细表',
													icon: 'new-eol-detail',
													noCache: false
												}
											},
											{
												name: 'StorageAgeAnalysis',
												path: 'storageAgeAnalysis',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/cnStorageAage/storageAgeAnalysis/index',
												meta: {
													title: '库龄分析统计',
													icon: 'new-eol-sum',
													noCache: false
												}
											}
										]
									},
									{
										name: 'OverseasWarehouse',
										path: 'overseasWarehouse',
										hidden: false,
										component:
											'supplyChain/inventoryCenter/overseasWarehouse/index',
										meta: {
											title: '海外仓库信息',
											icon: 'new-oversea-inv',
											noCache: false
										}
									}
								]
							},
							{
								name: 'PlanningCenter',
								path: 'planningCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '计划中心',
									icon: 'new-plan-center',
									noCache: false
								},
								children: [
									{
										name: 'DeliveryPlan',
										path: 'deliveryPlan',
										hidden: false,
										component: 'supplyChain/planningCenter/deliveryPlan',
										meta: {
											title: '发货计划',
											icon: 'new-delivery-plan',
											noCache: false
										}
									},
									{
										name: 'TakeDeliveryPlan',
										path: 'takeDeliveryPlan',
										hidden: false,
										component: 'supplyChain/planningCenter/takeDeliveryPlan',
										meta: {
											title: '提货计划',
											icon: 'new-delivery-plan2',
											noCache: false
										}
									},
									{
										name: 'ProcurementPlan',
										path: 'procurementPlan',
										hidden: false,
										component: 'supplyChain/planningCenter/procurementPlan',
										meta: {
											title: '采购计划',
											icon: 'new-procure-plan',
											noCache: false
										}
									},
									{
										name: 'ActivityNeeds',
										path: 'activityNeeds',
										hidden: false,
										component: 'supplyChain/planningCenter/activityNeeds',
										meta: {
											title: '活动需求明细',
											icon: 'new-active-detail',
											noCache: false
										}
									},
									{
										name: 'GoodsRisk',
										path: 'goodsRisk',
										hidden: false,
										component: 'supplyChain/planningCenter/goodsRisk',
										meta: {
											title: '备货风险维护',
											icon: 'new-stock-risk',
											noCache: false
										}
									},
									{
										name: 'ShenzhenWarehouseDelivery',
										path: 'shenzhenWarehouseDelivery',
										hidden: false,
										component:
											'supplyChain/planningCenter/shenzhenWarehouseDelivery',
										meta: {
											title: '深圳仓当日发货需求',
											icon: 'new-loclal-deliver',
											noCache: false
										}
									}
								]
							},
							{
								name: 'SupplierCenter',
								path: 'supplierCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '供应商中心',
									icon: 'new-supplier-center',
									noCache: false
								},
								children: [
									{
										name: 'Supplier',
										path: 'supplier',
										hidden: false,
										component:
											'supplyChain/supplierCenter/PurchaseInfo/supplier',
										meta: {
											title: '供应商信息',
											icon: 'new-supplier-info',
											noCache: false
										}
									},
									{
										name: 'PurchaseInfo',
										path: 'PurchaseInfo',
										hidden: false,
										component: 'supplyChain/supplierCenter/PurchaseInfo/index',
										meta: {
											title: '供应商产品信息',
											icon: 'new-supplier-prodInfo',
											noCache: false
										}
									}
								]
							},
							{
								name: 'ChipCenter',
								path: 'chipCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '芯片中心',
									icon: 'new-chip-center',
									noCache: false
								},
								children: [
									{
										name: 'OperationalMaterialPlan',
										path: 'operationalMaterialPlan',
										hidden: false,
										component: 'supplyChain/chipCenter/operationalMaterialPlan',
										meta: {
											title: '物料计划',
											icon: 'new-material-plan',
											noCache: false
										}
									},
									{
										name: 'PurchaseMaterialsOrder',
										path: 'purchaseMaterialsOrder',
										hidden: false,
										component: 'supplyChain/chipCenter/purchaseMaterialsOrder',
										meta: {
											title: '采购物料订单',
											icon: 'new-material-order',
											noCache: false
										}
									},
									{
										name: 'DocTransfers',
										path: 'docTransfers',
										hidden: false,
										component: 'supplyChain/chipCenter/docTransfers',
										meta: {
											title: '调拨单据',
											icon: 'new-transfer-doc',
											noCache: false
										}
									}
								]
							},
							{
								name: 'LogisticsCenter',
								path: 'logisticsCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '物流商中心',
									icon: 'new-supplier-center',
									noCache: false
								},
								children: [
									{
										name: 'LogProviderInfo',
										path: 'logProviderInfo',
										hidden: false,
										component: 'supplyChain/logisticsCenter/logProviderInfo',
										meta: {
											title: '物流商信息',
											icon: 'new-log-supplier',
											noCache: false
										}
									},
									{
										name: 'LogisticsDeliveryDetails',
										path: 'LogisticsDeliveryDetails',
										hidden: true,
										component: 'basic/LogisticsDeliveryDetails',
										meta: {
											title: '物流发货明细',
											icon: 'new-product-log',
											noCache: false
										}
									}
								]
							}
						]
					},
					{
						name: 'SalesCenter',
						path: '/salesCenter',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '销售中心',
							icon: 'new-salses-center',
							noCache: false
						},
						children: [
							{
								name: 'DataCenter',
								path: 'dataCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '数据中心',
									icon: 'new-data-center',
									noCache: false
								},
								children: [
									{
										name: 'DataTracking',
										path: 'dataTracking',
										hidden: false,
										component: 'salesCenter/dataCenter/tracking/dataTracking',
										meta: {
											title: '销售数据（表格）',
											icon: 'new-salses-data',
											noCache: false
										}
									},
									{
										name: 'NewIndex',
										path: 'newIndex',
										hidden: false,
										component: 'salesCenter/dataCenter/salesTracking/newIndex',
										meta: {
											title: '销售数据（图表）',
											icon: 'new-salses-data2',
											noCache: false
										}
									},
									{
										name: 'SalesDynamic',
										path: 'salesDynamic',
										hidden: false,
										component:
											'salesCenter/dataCenter/salesDynamic/salesDynamic',
										meta: {
											title: '销售数据(动态图表)',
											icon: 'new-salses-data2',
											noCache: false
										}
									},
									{
										name: 'DailySalesDataNew',
										path: 'dailySalesDataNew',
										hidden: false,
										component: 'salesCenter/dataCenter/dailySalesDataNew',
										meta: {
											title: '日更销售数据(表格)',
											icon: 'new-dailysales-data',
											noCache: false
										}
									},
									{
										name: 'DayMore',
										path: 'dayMore',
										hidden: false,
										component: 'salesCenter/dataCenter/dayMore/index',
										meta: {
											title: '日更销售数据(图表)',
											icon: 'chart',
											noCache: false
										}
									}
								]
							},
							{
								name: 'AssessmentCenter',
								path: 'assessmentCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '测评中心',
									icon: 'new-evaluate-center',
									noCache: false
								},
								children: [
									{
										name: 'TestReview',
										path: 'testReview',
										hidden: false,
										component: 'salesCenter/assessmentCenter/testReview',
										meta: {
											title: '需求列表',
											icon: 'new-need-list',
											noCache: false
										}
									},
									{
										name: 'Resources',
										path: 'resources',
										hidden: false,
										component: 'salesCenter/assessmentCenter/resources',
										meta: {
											title: '资源列表',
											icon: 'new-resource-list',
											noCache: false
										}
									},
									{
										name: 'TestRecord',
										path: 'testRecord',
										hidden: false,
										component: 'salesCenter/assessmentCenter/testRecord',
										meta: {
											title: '测评列表',
											icon: 'new-evaluate-list',
											noCache: false
										}
									},
									{
										name: 'AddDetail',
										path: 'addDetail',
										hidden: true,
										component: 'evaluation/testReview/addDetail.vue',
										meta: {
											title: '测评录入',
											icon: 'new-evaluate-list',
											noCache: false
										}
									},
									{
										name: 'ResourcesDetail',
										path: 'resourcesDetail',
										hidden: true,
										component: 'evaluation/resources/resourcesDetail',
										meta: {
											title: '资源列表详情',
											icon: 'new-evaluate-center',
											noCache: false
										}
									}
								]
							},
							{
								name: 'SalesPlan',
								path: 'salesPlan',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '销售计划',
									icon: 'new-sales-plan',
									noCache: false
								},
								children: [
									{
										name: 'ProductAdjust',
										path: 'productAdjust',
										hidden: false,
										component: 'salesCenter/salesPlan/productAdjust/index',
										meta: {
											title: '销售月度预测',
											icon: 'new-sales-forecast2',
											noCache: false
										}
									},
									{
										name: 'SalesForecast',
										path: 'salesForecast',
										hidden: false,
										component:
											'salesCenter/salesPlan/salceDepart/salesForecast.vue',
										meta: {
											title: '销售预测',
											icon: 'new-sales-forecast',
											noCache: false
										}
									},
									{
										name: 'AuditReport',
										path: 'auditReport',
										hidden: false,
										component:
											'salesCenter/salesPlan/salceDepart/auditReport.vue',
										meta: {
											title: '审核列表',
											icon: 'new-check-list',
											noCache: false
										}
									},
									{
										name: 'ActivityPlan',
										path: 'activityPlan',
										hidden: false,
										component:
											'salesCenter/salesPlan/activityPlan/activityPlan',
										meta: {
											title: '活动计划',
											icon: 'new-active-plan',
											noCache: false
										}
									},
									{
										name: 'PredictDetails',
										path: 'predictDetails',
										hidden: true,
										component: 'salesCenter/salceDepart/predictDetails',
										meta: {
											title: '预测详情',
											icon: 'new-sales-forecast',
											noCache: false
										}
									}
								]
							},
							{
								name: 'AfterSalesCenter',
								path: 'afterSalesCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '售后中心',
									icon: 'new-after-center',
									noCache: false
								},
								children: [
									{
										name: 'ReviewManagement',
										path: 'reviewManagement',
										hidden: false,
										component:
											'salesCenter/afterSalesCenter/productReview/reviewManagement',
										meta: {
											title: '产品评价管理',
											icon: 'new-prod-comment2',
											noCache: false
										}
									},
									{
										name: 'OrderTracking',
										path: 'orderTracking',
										hidden: false,
										component: 'salesCenter/afterSalesCenter/orderTracking',
										meta: {
											title: '订单查询',
											icon: 'new-order-query',
											noCache: false
										}
									},
									{
										name: 'BadReview',
										path: 'badReview',
										hidden: false,
										component:
											'salesCenter/afterSalesCenter/productReview/badReview',
										meta: {
											title: '差评管理',
											icon: 'new-bad-comment',
											noCache: false
										}
									},
									{
										name: 'ShippingRefund',
										path: 'shippingRefund',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '发货及退款',
											icon: 'new--deliver-refund',
											noCache: false
										},
										children: [
											{
												name: 'Ship',
												path: 'ship',
												hidden: false,
												component:
													'salesCenter/afterSalesCenter/shippingRefund/ship',
												meta: { title: '发货', icon: '#', noCache: false }
											},
											{
												name: 'Refund',
												path: 'refund',
												hidden: false,
												component:
													'salesCenter/afterSalesCenter/shippingRefund/refund',
												meta: { title: '退款', icon: '#', noCache: false }
											}
										]
									}
								]
							},
							{
								name: 'BrandVipCenter',
								path: 'brandVipCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '品牌会员中心',
									icon: 'new-brand-center',
									noCache: false
								},
								children: [
									{
										name: 'Pre-sale',
										path: 'pre-sale',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '售前会员服务',
											icon: 'new-before-service',
											noCache: false
										},
										children: [
											{
												name: 'Af-Distributor',
												path: 'af-Distributor',
												hidden: true,
												component: 'salesCenter/brandVipCenter/af-Distributor',
												meta: {
													title: 'AF-Distributor',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Af-GYM',
												path: 'af-GYM',
												hidden: true,
												component: 'salesCenter/brandVipCenter/af-GYM',
												meta: {
													title: 'AF-GYM',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Af-Testing',
												path: 'af-Testing',
												hidden: false,
												component: 'salesCenter/brandVipCenter/af-Testing',
												meta: {
													title: 'AF-评测会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'At-Testing',
												path: 'at-Testing',
												hidden: false,
												component: 'salesCenter/brandVipCenter/at-Testing',
												meta: {
													title: 'AT-评测会员库',
													icon: 'new-member-library',
													noCache: false
												}
											}
										]
									},
									{
										name: 'After-sale',
										path: 'after-sale',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '售后会员服务',
											icon: 'new-after-service',
											noCache: false
										},
										children: [
											{
												name: 'Ub-Warranty',
												path: 'ub-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'UB-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Sy-Warranty',
												path: 'sy-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'SY-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Af-Warranty',
												path: 'af-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'AF-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'At-Warranty',
												path: 'at-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'AT-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											}
										]
									},
									{
										name: 'BlankLayout',
										path: 'BlankLayout',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '推广库',
											icon: 'new-promote-library',
											noCache: false
										},
										children: [
											{
												name: 'YouTube',
												path: 'YouTube',
												hidden: false,
												component: 'salesCenter/brandVipCenter/ytbList.vue',
												meta: {
													title: 'YouTube红人库',
													icon: 'new-red-library',
													noCache: false
												}
											},
											{
												name: 'Deal',
												path: 'deal',
												hidden: false,
												component: 'salesCenter/brandVipCenter/dealList.vue',
												meta: {
													title: 'Deal库',
													icon: 'new-deal-libary',
													noCache: false
												}
											}
										]
									}
								]
							},
							{
								name: 'DataImport',
								path: 'dataImport',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '数据导入',
									icon: 'new-data-import',
									noCache: false
								},
								children: [
									{
										name: 'DataImportZip',
										path: 'dataImportZip',
										hidden: false,
										component: 'salesCenter/dataImport/dataImportJIP',
										meta: {
											title: '数据导入（ZIP）',
											icon: 'new-data-import2',
											noCache: false
										}
									},
									{
										name: 'InfoSupplement',
										path: 'InfoSupplement',
										hidden: false,
										component: 'salesCenter/dataImport/InfoSupplement',
										meta: {
											title: '信息补漏',
											icon: 'new-info-traps',
											noCache: false
										}
									},
									{
										name: 'ReportDownload',
										path: 'reportDownload',
										hidden: false,
										component: 'salesCenter/dataImport/reportDownload',
										meta: {
											title: '报表下载检测',
											icon: 'new-report-check',
											noCache: false
										}
									}
								]
							},
							{
								name: 'TargetAds',
								path: 'targetAds',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '广告分析', icon: 'druid', noCache: false },
								children: [
									{
										name: 'AdDataManagement',
										path: 'adDataManagement',
										hidden: false,
										component: 'salesCenter/targetAds/adDataManagement',
										meta: {
											title: 'ASIN广告数据管理',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'KeyWordManagement',
										path: 'keyWordManagement',
										hidden: false,
										component: 'salesCenter/targetAds/keyWordManagement',
										meta: {
											title: 'ASIN关键词管理',
											icon: 'chat-poll-line',
											noCache: false
										}
									},
									{
										name: 'AdvertisingDetails',
										path: 'advertisingDetails',
										hidden: false,
										component: 'salesCenter/targetAds/advertisingDetails',
										meta: {
											title: '广告数据明细',
											icon: 'bar-chart-box-line',
											noCache: false
										}
									},
									{
										name: 'CustomVisualization',
										path: 'customVisualization',
										hidden: false,
										component: 'salesCenter/targetAds/customVisualization',
										meta: {
											title: '自定义可视化图表',
											icon: 'chart',
											noCache: false
										}
									}
								]
							},
							{
								name: 'BasicInfo',
								path: 'BasicInfo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '基础信息库',
									icon: 'new-basic-info',
									noCache: false
								},
								children: [
									{
										name: 'SalesTable',
										path: 'salesTable',
										hidden: false,
										component: 'salesCenter/dataCenter/tracking/index',
										meta: {
											title: '销售数据跟踪（表格）',
											icon: 'new-salses-data',
											noCache: false
										}
									},
									{
										name: 'SalesChart',
										path: 'salesChart',
										hidden: false,
										component: 'salesCenter/dataCenter/salesTracking/index',
										meta: {
											title: '销售数据跟踪（图表）',
											icon: 'new-salses-data2',
											noCache: false
										}
									},
									{
										name: 'DailySalesData',
										path: 'dailySalesData',
										hidden: false,
										component: 'salesCenter/dataCenter/dailySalesData',
										meta: {
											title: '日更销售数据',
											icon: 'new-dailysales-data',
											noCache: false
										}
									}
								]
							},
							{
								name: 'NegativeReview',
								path: 'negativeReview',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '差评系统',
									icon: 'new-bad-commen2',
									noCache: false
								},
								children: [
									{
										name: 'RecordList',
										path: 'recordList',
										hidden: false,
										component: 'negativeReview/record/index',
										meta: {
											title: '差评列表',
											icon: 'new-bad-comment3',
											noCache: false
										}
									},
									{
										name: 'Operation',
										path: 'operation',
										hidden: false,
										component: 'negativeReview/operation/index',
										meta: {
											title: '处理列表',
											icon: 'new-process-list',
											noCache: false
										}
									},
									{
										name: 'Detail',
										path: 'detail',
										hidden: true,
										component: 'negativeReview/record/detail',
										meta: {
											title: '差评详情',
											icon: 'new-bad-comment3',
											noCache: false
										}
									},
									{
										name: 'ImageList',
										path: 'imageList',
										hidden: true,
										component: 'negativeReview/image/index',
										meta: {
											title: '差评图片',
											icon: 'new-bad-comment',
											noCache: false
										}
									}
								]
							},
							{
								name: 'KanBan',
								path: 'kanBan',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '看板',
									icon: 'chat-check-line',
									noCache: false
								},
								children: [
									{
										name: 'PeopleKanBan',
										path: 'peopleKanBan',
										hidden: false,
										component: 'salesCenter/kanBan/peopleKanBan/index',
										meta: {
											title: '人效增长看板',
											icon: 'chat-check-line',
											noCache: false
										}
									}
								]
							}
						]
					},
					{
						name: 'OACenter',
						path: '/OACenter',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: 'OA中心', icon: 'OA', noCache: false },
						children: [
							{
								name: 'VisualDesign',
								path: 'visualDesign',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '视觉管理',
									icon: 'new-visual-manage',
									noCache: false
								},
								children: [
									{
										name: 'DemandList',
										path: 'demandList',
										hidden: false,
										component: 'oaCenter/visualDesign/visualDesign',
										meta: {
											title: '视觉需求',
											icon: 'new-visual-demand',
											noCache: false
										}
									},
									{
										name: 'Vision',
										path: 'vision',
										hidden: true,
										component: 'oaCenter/visualDesign/vision',
										meta: { title: '视觉需求提交', icon: '#', noCache: false }
									},
									{
										name: 'RevealImages',
										path: 'revealImages',
										hidden: true,
										component: 'oaCenter/visualDesign/revealImages',
										meta: { title: '需求完成展示', icon: '#', noCache: false }
									},
									{
										name: 'Details',
										path: 'details',
										hidden: true,
										component: 'oaCenter/visualDesign/details',
										meta: { title: '需求详情', icon: '#', noCache: false }
									}
								]
							},
							{
								name: 'Performance',
								path: 'performance',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '绩效管理',
									icon: 'new-perform-manage',
									noCache: false
								},
								children: [
									{
										name: 'Appraisal',
										path: 'appraisal',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效考核',
											icon: 'new-perform-exam',
											noCache: false
										},
										children: [
											{
												name: 'PerformanceOperation',
												path: 'performanceOperation',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/performanceOperation',
												meta: { title: '绩效操作', icon: '#', noCache: false }
											},
											{
												name: 'PerformanceDeal',
												path: 'performanceDeal',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/performanceDeal',
												meta: { title: '绩效处理', icon: '#', noCache: false }
											},
											{
												name: 'PerformanceControls',
												path: 'performanceControls',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/performanceControls',
												meta: { title: '绩效管控', icon: '#', noCache: false }
											},
											{
												name: 'DealWith',
												path: 'dealWith',
												hidden: false,
												component: 'oaCenter/performance/appraisal/dealWith',
												meta: { title: '任务处理', icon: '#', noCache: false }
											},
											{
												name: 'TaskSchedule',
												path: 'taskSchedule',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/taskSchedule',
												meta: { title: '任务进度', icon: '#', noCache: false }
											}
										]
									},
									{
										name: 'Rating',
										path: 'rating',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效评级',
											icon: 'new-perform-level',
											noCache: false
										},
										children: [
											{
												name: 'CenterRating',
												path: 'centerRating',
												hidden: false,
												component: 'oaCenter/performance/rating/centerRating',
												meta: {
													title: '中心评级',
													icon: 'new-center-rate',
													noCache: false
												}
											},
											{
												name: 'DepartmentRating',
												path: 'departmentRating',
												hidden: false,
												component:
													'oaCenter/performance/rating/departmentRating',
												meta: {
													title: '部门评级',
													icon: 'new-depart-rating',
													noCache: false
												}
											},
											{
												name: 'EmployeeRating',
												path: 'employeeRating',
												hidden: false,
												component: 'oaCenter/performance/rating/employeeRating',
												meta: {
													title: '员工评级',
													icon: 'new-employee-rating',
													noCache: false
												}
											},
											{
												name: 'RatingDifferences',
												path: 'ratingDifferences',
												hidden: false,
												component:
													'oaCenter/performance/rating/ratingDifferences',
												meta: {
													title: '评级建议差异',
													icon: 'new-rate-diff',
													noCache: false
												}
											}
										]
									},
									{
										name: 'Data',
										path: 'data',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效数据',
											icon: 'new-perform-data',
											noCache: false
										},
										children: [
											{
												name: 'PerformanceResults',
												path: 'performanceResults',
												hidden: false,
												component:
													'oaCenter/performance/data/performanceResults',
												meta: {
													title: '绩效结果列表',
													icon: 'new-perform-list',
													noCache: false
												}
											},
											{
												name: 'RatingDistribution',
												path: 'ratingDistribution',
												hidden: false,
												component:
													'oaCenter/performance/data/ratingDistribution',
												meta: {
													title: '评级分布列表',
													icon: 'new-rate-list',
													noCache: false
												}
											},
											{
												name: 'OperationalData',
												path: 'operationalData',
												hidden: false,
												component: 'oaCenter/performance/data/operationalData',
												meta: {
													title: '运营数据列表',
													icon: 'new-operate-data',
													noCache: false
												}
											}
										]
									},
									{
										name: 'Monitoring',
										path: 'monitoring',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效监控',
											icon: 'new-perform-control',
											noCache: false
										},
										children: [
											{
												name: 'CycleMonitoring',
												path: 'cycleMonitoring',
												hidden: false,
												component:
													'oaCenter/performance/monitoring/cycleMonitoring',
												meta: {
													title: '周期性绩效监控',
													icon: 'new-perform-circle',
													noCache: false
												}
											},
											{
												name: 'AnnualMonitoring',
												path: 'annualMonitoring',
												hidden: false,
												component:
													'oaCenter/performance/monitoring/annualMonitoring',
												meta: {
													title: '年度绩效考核监控',
													icon: 'new-perform-year',
													noCache: false
												}
											}
										]
									},
									{
										name: 'System',
										path: 'system',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '系统管理',
											icon: 'new-system-manage',
											noCache: false
										},
										children: [
											{
												name: 'UserTemplate',
												path: 'userTemplate',
												hidden: false,
												component: 'oaCenter/performance/system/userTemplate',
												meta: {
													title: '用户模板配置',
													icon: 'new-user-template',
													noCache: false
												}
											},
											{
												name: 'IndexLibrary',
												path: 'indexLibrary',
												hidden: false,
												component: 'oaCenter/performance/system/indexLibrary',
												meta: {
													title: '指标库',
													icon: 'new-target-library',
													noCache: false
												}
											},
											{
												name: 'TargetSet',
												path: 'targetSet',
												hidden: false,
												component: 'oaCenter/performance/system/targetSet',
												meta: {
													title: '目标设置',
													icon: 'new-target-setting',
													noCache: false
												}
											}
										]
									}
								]
							},
							{
								name: 'Https://5534697.app.netsuite.com',
								path: 'https://5534697.app.netsuite.com',
								hidden: false,
								component: 'NS-ERP',
								meta: { title: 'NS-ERP', icon: 'new-ns-erp', noCache: false }
							},
							{
								name: 'AddressBook',
								path: 'addressBook',
								hidden: false,
								component: 'oaCenter/addressBook',
								meta: {
									title: '通讯录',
									icon: 'new-address-book',
									noCache: false
								}
							},
							{
								name: 'Feishu',
								path: 'feishu',
								hidden: false,
								component: 'oaCenter/feishu',
								meta: {
									title: '飞书推送',
									icon: 'new-fly-push',
									noCache: false
								}
							},
							{
								name: 'BugReport',
								path: 'BugReport',
								hidden: false,
								component: 'oaCenter/BugReport/BugReport',
								meta: {
									title: 'Bug提交',
									icon: 'new-bug-submit',
									noCache: false
								}
							},
							{
								name: 'BillPrint',
								path: 'BillPrint',
								hidden: false,
								component: 'oaCenter/BillPrint/BillPrint',
								meta: {
									title: '税单打印',
									icon: 'new-fly-push',
									noCache: false
								}
							},
							{
								name: 'ConceptInfo',
								path: 'conceptInfo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '概念信息',
									icon: 'new-fly-push',
									noCache: false
								},
								children: [
									{
										name: 'ConceptInfoList',
										path: 'conceptInfoList',
										hidden: false,
										component: 'oaCenter/conceptInfo/index',
										meta: { title: '列表', icon: 'Group', noCache: false }
									},
									{
										name: 'DetailsInfo',
										path: 'detailsInfo',
										hidden: true,
										component: 'oaCenter/conceptInfo/detailsInfo',
										meta: {
											title: '概念详细页面',
											icon: 'Group',
											noCache: false
										}
									}
								]
							},
							{
								name: 'Workbench',
								path: 'workbench',
								hidden: false,
								component: 'oaCenter/workbench/index',
								meta: { title: '应用工作台', icon: 'build', noCache: false }
							},
							{
								name: 'MyApplication',
								path: 'myApplication',
								hidden: false,
								component: 'oaCenter/myApplication/index',
								meta: {
									title: '我的应用管理',
									icon: 'contacts-line',
									noCache: false
								}
							}
						]
					},
					{
						name: 'ProjectManagement',
						path: '/projectManagement',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '项目管理', icon: 'documentation', noCache: false },
						children: [
							{
								name: 'Assignment',
								path: 'assignment',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '我的项目任务',
									icon: 'checkbox',
									noCache: false
								},
								children: [
									{
										name: 'ToDoTasks',
										path: 'toDoTasks',
										hidden: false,
										component: 'projectManagement/assignment/toDoTasks',
										meta: {
											title: '待办任务',
											icon: 'feedback-line',
											noCache: false
										}
									},
									{
										name: 'HasDoTasks',
										path: 'hasDoTasks',
										hidden: false,
										component: 'projectManagement/assignment/hasDoTasks',
										meta: {
											title: '已办任务',
											icon: 'chat-check-line',
											noCache: false
										}
									}
								]
							},
							{
								name: 'Dashboard',
								path: 'dashboard',
								hidden: false,
								component: 'projectManagement/dashboard/index',
								meta: { title: '项目仪表盘', icon: 'example', noCache: false }
							},
							{
								name: 'List',
								path: 'list',
								hidden: false,
								component: 'projectManagement/list/index',
								meta: {
									title: '项目列表',
									icon: 'list-unordered',
									noCache: false
								}
							},
							{
								name: 'Check',
								path: 'check',
								hidden: false,
								component: 'projectManagement/check/index',
								meta: { title: '项目审核', icon: 'edit', noCache: false }
							},
							{
								name: 'Documentation',
								path: 'documentation',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '项目文档', icon: 'clipboard', noCache: false },
								children: [
									{
										name: 'PrdDocumentLibrary',
										path: 'prdDocumentLibrary',
										hidden: false,
										component:
											'projectManagement/documentation/prdDocumentLibrary',
										meta: {
											title: 'PRD文档库',
											icon: 'new-inOut-check',
											noCache: false
										}
									},
									{
										name: 'ProjectAnalysis',
										path: 'projectAnalysis',
										hidden: false,
										component:
											'projectManagement/documentation/projectAnalysis',
										meta: {
											title: '立项分析文档库',
											icon: 'new-info-traps',
											noCache: false
										}
									},
									{
										name: 'OtherDocumentLibraries',
										path: 'otherDocumentLibraries',
										hidden: false,
										component:
											'projectManagement/documentation/otherDocumentLibraries',
										meta: { title: '其他文档库', icon: 'tool', noCache: false }
									}
								]
							},
							{
								name: 'Report',
								path: 'report',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '项目报表',
									icon: 'bar-chart-box-line',
									noCache: false
								},
								children: [
									{
										name: 'OverviewList',
										path: 'overviewList',
										hidden: false,
										component: 'projectManagement/report/overviewList/index',
										meta: { title: '总览表', icon: 'monitor', noCache: false }
									},
									{
										name: 'RouteList',
										path: 'routeList',
										hidden: false,
										component: 'projectManagement/report/routeList/index',
										meta: { title: '路线图', icon: 'druid', noCache: false }
									},
									{
										name: 'Statistical',
										path: 'statistical',
										hidden: false,
										component: 'projectManagement/report/statistical/index',
										meta: {
											title: '项目群统计表',
											icon: 'new-dailysales-data',
											noCache: false
										}
									},
									{
										name: 'ProjectSales',
										path: 'projectSales',
										hidden: false,
										component: 'projectManagement/report/projectSales/index',
										meta: {
											title: '项目销售数据看板',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'SalesTarget',
										path: 'salesTarget',
										hidden: false,
										component: 'projectManagement/report/salesTarget/index',
										meta: {
											title: '项目销售目标维护',
											icon: 'new-target-setting',
											noCache: false
										}
									}
								]
							},
							{
								name: 'ProjectInfo',
								path: 'projectInfo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '项目配置维护', icon: 'OA', noCache: false },
								children: [
									{
										name: 'MembersMaintenance',
										path: 'membersMaintenance',
										hidden: false,
										component:
											'projectManagement/projectInfo/membersMaintenance',
										meta: {
											title: '成员维护',
											icon: 'contacts-line',
											noCache: false
										}
									},
									{
										name: 'PlanMaintenance',
										path: 'planMaintenance',
										hidden: false,
										component: 'projectManagement/projectInfo/planMaintenance',
										meta: {
											title: '计划维护',
											icon: 'file-edit-line',
											noCache: false
										}
									}
								]
							}
						]
					},
					{
						name: 'Flowable',
						path: '/flowable',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '流程管理', icon: 'cascader', noCache: false },
						children: [
							{
								name: 'Form',
								path: 'form',
								hidden: false,
								component: 'flowable/task/form/index',
								meta: { title: '表单配置', icon: 'form', noCache: false }
							},
							{
								name: 'Definition',
								path: 'definition',
								hidden: false,
								component: 'flowable/definition/index',
								meta: { title: '流程定义', icon: 'dict', noCache: false }
							}
						]
					},
					{
						name: 'Task',
						path: '/task',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '任务管理',
							icon: 'new-brand-center',
							noCache: false
						},
						children: [
							{
								name: 'Process',
								path: 'process',
								hidden: false,
								component: 'flowable/task/process/index',
								meta: { title: '我的流程', icon: 'peoples', noCache: false }
							},
							{
								name: 'Todo',
								path: 'todo',
								hidden: false,
								component: 'flowable/task/todo/index',
								meta: { title: '待办任务', icon: 'time-range', noCache: false }
							},
							{
								name: 'Finished',
								path: 'finished',
								hidden: false,
								component: 'flowable/task/finished/index',
								meta: { title: '已办任务', icon: 'task-line', noCache: false }
							}
						]
					},
					{
						name: 'Advertise',
						path: '/advertise',
						hidden: true,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '广告分析',
							icon: 'new-chip-center',
							noCache: false
						},
						children: [
							{
								name: 'AdvertiseIndex',
								path: 'advertiseIndex',
								hidden: false,
								component: 'advertise/advertiseDashborad',
								meta: {
									title: '广告分析首页',
									icon: 'education',
									noCache: false
								}
							},
							{
								name: 'StoreDetail',
								path: 'storeDetail',
								hidden: false,
								component: 'advertise/advertiseDashborad/storeDetail',
								meta: {
									title: '店铺明细',
									icon: 'profile-line',
									noCache: false
								}
							},
							{
								name: 'AdvertiseDashboradTwo',
								path: 'advertiseDashboradTwo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '广告看板2', icon: 'education', noCache: false },
								children: [
									{
										name: 'AdvertiseSituation',
										path: 'advertiseSituation',
										hidden: false,
										component:
											'advertise/advertiseDashboradTwo/advertiseSituation',
										meta: { title: '广告概况', icon: 'chart', noCache: false }
									}
								]
							},
							{
								name: 'AdvertiseDashboradThree',
								path: 'advertiseDashboradThree',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '广告看板3', icon: 'education', noCache: false },
								children: [
									{
										name: 'A-trendAnalysis',
										path: 'a-trendAnalysis',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/a-trendAnalysis',
										meta: {
											title: 'A表趋势分析',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'A-cateOperateAnalysis',
										path: 'a-cateOperateAnalysis',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/a-cateOperateAnalysis',
										meta: {
											title: 'A表品类运营分析',
											icon: 'druid',
											noCache: false
										}
									},
									{
										name: 'Ad-costRangeAnalysis',
										path: 'ad-costRangeAnalysis',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/ad-costRangeAnalysis',
										meta: {
											title: '广告花费区间分析',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'Sku-productOptimize',
										path: 'sku-productOptimize',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/sku-productOptimize',
										meta: {
											title: 'sku产品优化',
											icon: 'example',
											noCache: false
										}
									},
									{
										name: 'PeopleDetail',
										path: 'peopleDetail',
										hidden: false,
										component: 'advertise/advertiseDashboradThree/peopleDetail',
										meta: { title: '人员明细', icon: 'example', noCache: false }
									},
									{
										name: 'SecondCateDetail',
										path: 'secondCateDetail',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/secondCateDetail',
										meta: {
											title: '二级品类明细',
											icon: 'chart',
											noCache: false
										}
									}
								]
							}
						]
					}
				]
			}
		}
	},
	{
		//admin登录
		// payload：
		// username: admin
		// password: Leaderment-Bison
		// code: 15
		// uuid: ba6fe305bf9e4d0aaacbfdc41aa8a604
		// client_id: web
		// client_secret: e0bf307b-194b-44dd-8660-bc09663c5fc3
		// scope: server
		// grant_type: password
		url: '/dev-api/mock/auth/oauth/token',
		timeout: 1000,
		method: 'post',
		response: () => {
			return {
				access_token: 'e56a8c2a-6f20-42a3-bb3e-bd3b8997fded',
				token_type: 'bearer',
				refresh_token: 'c5daed14-ba92-455a-a5dc-7ec8c00db3fd',
				expires_in: 13490,
				scope: 'server',
				user_id: 1,
				username: 'admin',
				nickname: '管理员'
			}
		}
	},
	{
		//admin的信息
		url: '/dev-api/mock/system/user/getInfo',
		timeout: 1000,
		method: 'get',
		response: () => {
			return {
				msg: 'Request Success!',
				code: 200,
				permissions: ['*:*:*'],
				roles: ['admin'],
				user: {
					searchValue: null,
					createBy: 'admin',
					createTime: '2018-03-16 11:33:00',
					updateBy: null,
					updateTime: null,
					remark: '1',
					beginTime: null,
					endTime: null,
					params: {},
					pageNum: null,
					pageSize: null,
					dictFields: null,
					userId: 1,
					deptId: 100,
					userName: 'admin',
					nickName: '管理员',
					email: 'xxx@163.com',
					phonenumber: '15888888888',
					sex: '0',
					avatar: 'User 05b.jpg',
					password:
						'$2a$10$xCtyhL.SAL0rHJiaxj3XlOGFvzvj0h5mmIOoa1MjaCcEj2xaXrIo6',
					salt: null,
					status: '0',
					delFlag: '0',
					loginIp: '127.0.0.1',
					loginDate: '2018-03-16T11:33:00',
					dept: {
						searchValue: null,
						createBy: null,
						createTime: null,
						updateBy: null,
						updateTime: null,
						remark: null,
						beginTime: null,
						endTime: null,
						params: {},
						pageNum: null,
						pageSize: null,
						dictFields: null,
						deptId: 100,
						parentId: 0,
						ancestors: null,
						deptName: 'Leaderment',
						orderNum: '1',
						leader: 'Ben',
						phone: null,
						email: null,
						status: '0',
						delFlag: null,
						parentName: null,
						children: []
					},
					roles: [
						{
							searchValue: null,
							createBy: null,
							createTime: null,
							updateBy: null,
							updateTime: null,
							remark: null,
							beginTime: null,
							endTime: null,
							params: {},
							pageNum: null,
							pageSize: null,
							dictFields: null,
							roleId: 1,
							roleName: '超级管理员',
							roleKey: 'admin',
							roleSort: '1',
							dataScope: '1',
							menuCheckStrictly: false,
							deptCheckStrictly: false,
							status: '0',
							delFlag: null,
							flag: false,
							menuIds: null,
							deptIds: null,
							admin: true
						}
					],
					roleIds: null,
					posts: [
						{
							searchValue: null,
							createBy: 'admin',
							createTime: '2018-03-16 11:33:00',
							updateBy: null,
							updateTime: null,
							remark: '1',
							beginTime: null,
							endTime: null,
							params: {},
							pageNum: null,
							pageSize: null,
							dictFields: null,
							postId: null,
							postCode: null,
							postName: null,
							postSort: null,
							status: '0',
							flag: false
						}
					],
					postIds: null,
					admin: true
				}
			}
		}
	},
	{
		//admin对应的菜单
		url: '/dev-api/mock/system/menu/getRouters',
		timeout: 1000,
		method: 'get',
		response: () => {
			return {
				msg: 'Request Success!',
				code: 200,
				data: [
					{
						name: 'SystemManage',
						path: '/systemManage',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '系统管理',
							icon: 'new-system-manage',
							noCache: false
						},
						children: [
							{
								name: 'User',
								path: 'user',
								hidden: false,
								component: 'systemManage/user/index',
								meta: { title: '用户管理', icon: 'user', noCache: false }
							},
							{
								name: 'Role',
								path: 'role',
								hidden: false,
								component: 'systemManage/role/index',
								meta: { title: '角色管理', icon: 'peoples', noCache: false }
							},
							{
								name: 'Menu',
								path: 'menu',
								hidden: false,
								component: 'systemManage/menu/index',
								meta: { title: '菜单管理', icon: 'tree-table', noCache: false }
							},
							{
								name: 'Dept',
								path: 'dept',
								hidden: false,
								component: 'systemManage/dept/index',
								meta: { title: '部门管理', icon: 'tree', noCache: false }
							},
							{
								name: 'Post',
								path: 'post',
								hidden: false,
								component: 'systemManage/post/index',
								meta: { title: '岗位管理', icon: 'post', noCache: false }
							},
							{
								name: 'Dict',
								path: 'dict',
								hidden: false,
								component: 'systemManage/dict/index',
								meta: { title: '字典管理', icon: 'dict', noCache: false }
							},
							{
								name: 'Config',
								path: 'config',
								hidden: false,
								component: 'systemManage/config/index',
								meta: { title: '参数设置', icon: 'edit', noCache: false }
							},
							{
								name: 'Client',
								path: 'client',
								hidden: false,
								component: 'systemManage/client/index',
								meta: { title: '终端设置', icon: 'client', noCache: false }
							},
							{
								name: 'Notice',
								path: 'notice',
								hidden: false,
								component: 'systemManage/notice/index',
								meta: { title: '通知公告', icon: 'message', noCache: false }
							},
							{
								name: 'Log',
								path: 'log',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '日志管理', icon: 'log', noCache: false },
								children: [
									{
										name: 'Operlog',
										path: 'operlog',
										hidden: false,
										component: 'systemManage/operlog/index',
										meta: { title: '操作日志', icon: 'empty', noCache: false }
									},
									{
										name: 'Logininfor',
										path: 'logininfor',
										hidden: false,
										component: 'systemManage/logininfor/index',
										meta: { title: '登录日志', icon: 'empty', noCache: false }
									}
								]
							}
						]
					},
					{
						name: 'Tool',
						path: '/tool',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '系统工具', icon: 'tool', noCache: false },
						children: [
							{
								name: 'Build',
								path: 'build',
								hidden: false,
								component: 'tool/build/index',
								meta: { title: '表单构建', icon: 'build', noCache: false }
							},
							{
								name: 'Gen',
								path: 'gen',
								hidden: false,
								component: 'tool/gen/index',
								meta: { title: '代码生成', icon: 'code', noCache: false }
							},
							{
								name: 'Http://localhost:8080/swagger-ui.html',
								path: 'http://localhost:8080/swagger-ui.html',
								hidden: false,
								component: 'Layout',
								meta: { title: '系统接口', icon: 'swagger', noCache: false }
							}
						]
					},
					{
						name: 'BasicInfo',
						path: '/basicInfo',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '基础信息', icon: 'new-basic-info', noCache: false },
						children: [
							{
								name: 'BasicAmzAccount',
								path: 'BasicAmzAccount',
								hidden: false,
								component: 'basicInfo/BasicAmzAccount/index',
								meta: {
									title: '亚马逊账号',
									icon: 'new-amazon-account',
									noCache: false
								}
							},
							{
								name: 'SeriesManagement',
								path: 'SeriesManagement',
								hidden: false,
								component: 'basicInfo/SeriesManagement/index',
								meta: {
									title: '系列信息',
									icon: 'new-series-info',
									noCache: false
								}
							},
							{
								name: 'BrandManagement',
								path: 'BrandManagement',
								hidden: false,
								component: 'basicInfo/BrandManagement/index',
								meta: {
									title: '品牌信息',
									icon: 'new-brand-info',
									noCache: false
								}
							},
							{
								name: 'BUManagement',
								path: 'BUManagement',
								hidden: false,
								component: 'basicInfo/BUManagement/index',
								meta: { title: 'BU信息', icon: 'new-bu-info', noCache: false }
							},
							{
								name: 'AdveAuthInfo',
								path: 'AdveAuthInfo',
								hidden: false,
								component: 'basic/AccountAuthManage/AdveAuthInfo',
								meta: { title: '广告授权信息', icon: 'button', noCache: false }
							},
							{
								name: 'ProductMark',
								path: 'ProductMark',
								hidden: true,
								component: 'basic/ProductMark',
								meta: {
									title: '产品标记',
									icon: 'new-product-mark',
									noCache: false
								}
							},
							{
								name: 'ProductEOLAnalysis',
								path: 'productEOLAnalysis',
								hidden: true,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '产品EOL分析',
									icon: 'new-product-analysis',
									noCache: false
								},
								children: [
									{
										name: 'AnalysisSummary',
										path: 'analysisSummary',
										hidden: false,
										component: 'basic/productEOLAnalysis/analysisSummary',
										meta: {
											title: 'EOL分析总表',
											icon: 'new-eol-sum',
											noCache: false
										}
									},
									{
										name: 'AnalysisDetail',
										path: 'analysisDetail',
										hidden: false,
										component: 'basic/productEOLAnalysis/analysisDetail',
										meta: {
											title: 'EOL分析明细',
											icon: 'new-eol-detail',
											noCache: false
										}
									}
								]
							},
							{
								name: 'AccountManage',
								path: 'AccountManage',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '账号管理', icon: 'button', noCache: false },
								children: [
									{
										name: 'AccountManageList',
										path: 'AccountManageList',
										hidden: false,
										component: 'basic/AccountManage/index',
										meta: {
											title: '账号管理列表',
											icon: 'button',
											noCache: false
										}
									}
								]
							}
						]
					},
					{
						name: 'SupplyChain',
						path: '/supplyChain',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '供应链', icon: 'new-supply-chain', noCache: false },
						children: [
							{
								name: 'ProductCenter',
								path: 'productCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '产品中心',
									icon: 'new-product-center',
									noCache: false
								},
								children: [
									{
										name: 'ProductInfo',
										path: 'ProductInfo',
										hidden: false,
										component: 'supplyChain/productCenter/ProductInfo/index',
										meta: {
											title: '产品列表',
											icon: 'new-product-list',
											noCache: false
										}
									},
									{
										name: 'ProductMark',
										path: 'productMark',
										hidden: false,
										component: 'supplyChain/productCenter/ProductMark',
										meta: {
											title: '产品标记',
											icon: 'new-product-mark',
											noCache: false
										}
									},
									{
										name: 'ProductEOLAnalysis',
										path: 'productEOLAnalysis',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '产品EOL分析',
											icon: 'new-product-analysis',
											noCache: false
										},
										children: [
											{
												name: 'AnalysisSummary',
												path: 'analysisSummary',
												hidden: false,
												component:
													'supplyChain/productCenter/productEOLAnalysis/analysisSummary.vue',
												meta: {
													title: 'EOL分析总表',
													icon: 'new-eol-sum',
													noCache: false
												}
											},
											{
												name: 'AnalysisDetail',
												path: 'analysisDetail',
												hidden: false,
												component:
													'supplyChain/productCenter/productEOLAnalysis/analysisDetail.vue',
												meta: {
													title: 'EOL分析明细',
													icon: 'new-eol-detail',
													noCache: false
												}
											}
										]
									},
									{
										name: 'LogisticsInfo',
										path: 'LogisticsInfo',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: { title: '产品物流', icon: 'build', noCache: false },
										children: [
											{
												name: 'LogisticsInfo',
												path: 'LogisticsInfo',
												hidden: false,
												component:
													'supplyChain/productCenter/LogisticsInfo/index',
												meta: {
													title: '产品物流信息',
													icon: 'new-product-log',
													noCache: false
												}
											},
											{
												name: 'FirstPrice',
												path: 'firstPrice',
												hidden: false,
												component:
													'supplyChain/productCenter/LogisticsInfo/firstPrice',
												meta: {
													title: '头程单价明细',
													icon: 'build',
													noCache: false
												}
											}
										]
									},
									{
										name: 'ProductOperatorInfo',
										path: 'ProductOperatorInfo',
										hidden: false,
										component:
											'supplyChain/productCenter/ProductOperatorInfo/index',
										meta: {
											title: '产品运营负责人',
											icon: 'new-prod-operate',
											noCache: false
										}
									}
								]
							},
							{
								name: 'InventoryCenter',
								path: 'inventoryCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '库存中心',
									icon: 'new-inventory-center',
									noCache: false
								},
								children: [
									{
										name: 'Situation',
										path: 'situation',
										hidden: false,
										component: 'supplyChain/inventoryCenter/situation/index',
										meta: {
											title: '库存情况',
											icon: 'new-inventory-situate',
											noCache: false
										}
									},
									{
										name: 'Details',
										path: 'details',
										hidden: false,
										component: 'supplyChain/inventoryCenter/details/index',
										meta: {
											title: '库存明细',
											icon: 'new-inventory-detail',
											noCache: false
										}
									},
									{
										name: 'Turnover',
										path: 'turnover',
										hidden: false,
										component: 'supplyChain/inventoryCenter/turnover/index',
										meta: {
											title: '库存周转',
											icon: 'new-inventory-turn',
											noCache: false
										}
									},
									{
										name: 'Uploadtable',
										path: 'uploadtable',
										hidden: false,
										component: 'supplyChain/inventoryCenter/uploadtable/index',
										meta: {
											title: '表格导入',
											icon: 'new-table-import',
											noCache: false
										}
									},
									{
										name: 'ShipmentTracking',
										path: 'shipmentTracking',
										hidden: false,
										component: 'supplyChain/inventoryCenter/shipmentTracking',
										meta: {
											title: '亚马逊货件追踪',
											icon: 'new-amazon-tracking',
											noCache: false
										}
									},
									{
										name: 'OverseasStock',
										path: 'overseasStock',
										hidden: false,
										component: 'supplyChain/inventoryCenter/overseasStock',
										meta: {
											title: '海外仓库存',
											icon: 'new-oversea-inv',
											noCache: false
										}
									},
									{
										name: 'DomesticStock',
										path: 'domesticStock',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '国内库存',
											icon: 'new-dom-inv',
											noCache: false
										},
										children: [
											{
												name: 'InOutCheck',
												path: 'inOutCheck',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/domesticStock/inOutCheck',
												meta: {
													title: '出入库登记',
													icon: 'new-inOut-check',
													noCache: false
												}
											},
											{
												name: 'VoucherLbrary',
												path: 'voucherLbrary',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/domesticStock/voucherLbrary',
												meta: {
													title: '凭证单据库',
													icon: 'new-proof-library',
													noCache: false
												}
											},
											{
												name: 'OutCnDelivery',
												path: 'outCnDelivery',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/domesticStock/outCnDelivery/index',
												meta: {
													title: '出库发货明细',
													icon: 'new-delivery-details',
													noCache: false
												}
											}
										]
									},
									{
										name: 'DomesticNowStock',
										path: 'domesticNowStock',
										hidden: false,
										component:
											'supplyChain/inventoryCenter/domesticNowStock/index',
										meta: {
											title: '国内实时库存',
											icon: 'new-dom-inv2',
											noCache: false
										}
									},
									{
										name: 'CnStorageAage',
										path: 'cnStorageAage',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '国内库龄',
											icon: 'new-dom-inv',
											noCache: false
										},
										children: [
											{
												name: 'StorageAgeDetail',
												path: 'storageAgeDetail',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/cnStorageAage/storageAgeDetail/index',
												meta: {
													title: '库龄明细表',
													icon: 'new-eol-detail',
													noCache: false
												}
											},
											{
												name: 'StorageAgeAnalysis',
												path: 'storageAgeAnalysis',
												hidden: false,
												component:
													'supplyChain/inventoryCenter/cnStorageAage/storageAgeAnalysis/index',
												meta: {
													title: '库龄分析统计',
													icon: 'new-eol-sum',
													noCache: false
												}
											}
										]
									},
									{
										name: 'OverseasWarehouse',
										path: 'overseasWarehouse',
										hidden: false,
										component:
											'supplyChain/inventoryCenter/overseasWarehouse/index',
										meta: {
											title: '海外仓库信息',
											icon: 'new-oversea-inv',
											noCache: false
										}
									}
								]
							},
							{
								name: 'PlanningCenter',
								path: 'planningCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '计划中心',
									icon: 'new-plan-center',
									noCache: false
								},
								children: [
									{
										name: 'DeliveryPlan',
										path: 'deliveryPlan',
										hidden: false,
										component: 'supplyChain/planningCenter/deliveryPlan',
										meta: {
											title: '发货计划',
											icon: 'new-delivery-plan',
											noCache: false
										}
									},
									{
										name: 'TakeDeliveryPlan',
										path: 'takeDeliveryPlan',
										hidden: false,
										component: 'supplyChain/planningCenter/takeDeliveryPlan',
										meta: {
											title: '提货计划',
											icon: 'new-delivery-plan2',
											noCache: false
										}
									},
									{
										name: 'ProcurementPlan',
										path: 'procurementPlan',
										hidden: false,
										component: 'supplyChain/planningCenter/procurementPlan',
										meta: {
											title: '采购计划',
											icon: 'new-procure-plan',
											noCache: false
										}
									},
									{
										name: 'ActivityNeeds',
										path: 'activityNeeds',
										hidden: false,
										component: 'supplyChain/planningCenter/activityNeeds',
										meta: {
											title: '活动需求明细',
											icon: 'new-active-detail',
											noCache: false
										}
									},
									{
										name: 'GoodsRisk',
										path: 'goodsRisk',
										hidden: false,
										component: 'supplyChain/planningCenter/goodsRisk',
										meta: {
											title: '备货风险维护',
											icon: 'new-stock-risk',
											noCache: false
										}
									},
									{
										name: 'ShenzhenWarehouseDelivery',
										path: 'shenzhenWarehouseDelivery',
										hidden: false,
										component:
											'supplyChain/planningCenter/shenzhenWarehouseDelivery',
										meta: {
											title: '深圳仓当日发货需求',
											icon: 'new-loclal-deliver',
											noCache: false
										}
									}
								]
							},
							{
								name: 'SupplierCenter',
								path: 'supplierCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '供应商中心',
									icon: 'new-supplier-center',
									noCache: false
								},
								children: [
									{
										name: 'Supplier',
										path: 'supplier',
										hidden: false,
										component:
											'supplyChain/supplierCenter/PurchaseInfo/supplier',
										meta: {
											title: '供应商信息',
											icon: 'new-supplier-info',
											noCache: false
										}
									},
									{
										name: 'PurchaseInfo',
										path: 'PurchaseInfo',
										hidden: false,
										component: 'supplyChain/supplierCenter/PurchaseInfo/index',
										meta: {
											title: '供应商产品信息',
											icon: 'new-supplier-prodInfo',
											noCache: false
										}
									}
								]
							},
							{
								name: 'ChipCenter',
								path: 'chipCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '芯片中心',
									icon: 'new-chip-center',
									noCache: false
								},
								children: [
									{
										name: 'OperationalMaterialPlan',
										path: 'operationalMaterialPlan',
										hidden: false,
										component: 'supplyChain/chipCenter/operationalMaterialPlan',
										meta: {
											title: '物料计划',
											icon: 'new-material-plan',
											noCache: false
										}
									},
									{
										name: 'PurchaseMaterialsOrder',
										path: 'purchaseMaterialsOrder',
										hidden: false,
										component: 'supplyChain/chipCenter/purchaseMaterialsOrder',
										meta: {
											title: '采购物料订单',
											icon: 'new-material-order',
											noCache: false
										}
									},
									{
										name: 'DocTransfers',
										path: 'docTransfers',
										hidden: false,
										component: 'supplyChain/chipCenter/docTransfers',
										meta: {
											title: '调拨单据',
											icon: 'new-transfer-doc',
											noCache: false
										}
									},
									{
										name: 'Chip-warehouseDetail',
										path: 'chip-warehouseDetail',
										hidden: false,
										component: 'supplyChain/chipCenter/warehouseDetail',
										meta: {
											title: '芯片-成品入库明细',
											icon: 'new-oversea-inv-info',
											noCache: false
										}
									}
								]
							},
							{
								name: 'LogisticsCenter',
								path: 'logisticsCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '物流商中心',
									icon: 'new-supplier-center',
									noCache: false
								},
								children: [
									{
										name: 'LogProviderInfo',
										path: 'logProviderInfo',
										hidden: false,
										component: 'supplyChain/logisticsCenter/logProviderInfo',
										meta: {
											title: '物流商信息',
											icon: 'new-log-supplier',
											noCache: false
										}
									},
									{
										name: 'LogisticsDeliveryDetails',
										path: 'LogisticsDeliveryDetails',
										hidden: true,
										component: 'basic/LogisticsDeliveryDetails',
										meta: {
											title: '物流发货明细',
											icon: 'new-product-log',
											noCache: false
										}
									}
								]
							},
							{
								name: 'BuyingCenter',
								path: 'buyingCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '采购中心',
									icon: 'new-buying-center',
									noCache: false
								},
								children: [
									{
										name: 'PurchaseAnalysis',
										path: 'purchaseAnalysis',
										hidden: false,
										component: 'supplyChain/buyingCenter/purchaseAnalysis',
										meta: {
											title: '采购分析',
											icon: 'new-buy-analys',
											noCache: false
										}
									},
									{
										name: 'PurchaseOrderDetail',
										path: 'purchaseOrderDetail',
										hidden: false,
										component: 'supplyChain/buyingCenter/purchaseOrderDetail',
										meta: {
											title: '采购订单明细',
											icon: 'new-buy-detail',
											noCache: false
										}
									},
									{
										name: 'PurchaseOutstand',
										path: 'purchaseOutstand',
										hidden: false,
										component: 'supplyChain/buyingCenter/purchaseOutstand',
										meta: {
											title: '采购未清订单明细',
											icon: 'build',
											noCache: false
										}
									}
								]
							},
							{
								name: 'QualityCenter',
								path: 'qualityCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '质检中心',
									icon: 'bar-chart-box-line',
									noCache: false
								},
								children: [
									{
										name: 'QualityInspectionReport',
										path: 'qualityInspectionReport',
										hidden: false,
										component:
											'supplyChain/qualityCenter/qualityInspectionReport/index',
										meta: { title: '质检报告', icon: 'bug', noCache: false }
									},
									{
										name: 'QualityManagement',
										path: 'qualityManagement',
										hidden: false,
										component:
											'supplyChain/qualityCenter/qualityManagement/index',
										meta: {
											title: '产品质检管理',
											icon: 'build',
											noCache: false
										}
									},
									{
										name: 'WorkManagement',
										path: 'workManagement',
										hidden: false,
										component: 'supplyChain/qualityCenter/workManagement/index',
										meta: {
											title: 'QC工作管理',
											icon: 'cascader',
											noCache: false
										}
									},
									{
										name: 'SupplierQualityManagement',
										path: 'supplierQualityManagement',
										hidden: false,
										component:
											'supplyChain/qualityCenter/supplierQualityManagement/index',
										meta: {
											title: '供应商质量管理',
											icon: 'cascader',
											noCache: false
										}
									}
								]
							}
						]
					},
					{
						name: 'SalesCenter',
						path: '/salesCenter',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '销售中心',
							icon: 'new-salses-center',
							noCache: false
						},
						children: [
							{
								name: 'DataCenter',
								path: 'dataCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '数据中心',
									icon: 'new-data-center',
									noCache: false
								},
								children: [
									{
										name: 'DataTracking',
										path: 'dataTracking',
										hidden: false,
										component: 'salesCenter/dataCenter/tracking/dataTracking',
										meta: {
											title: '销售数据（表格）',
											icon: 'new-salses-data',
											noCache: false
										}
									},
									{
										name: 'NewIndex',
										path: 'newIndex',
										hidden: false,
										component: 'salesCenter/dataCenter/salesTracking/newIndex',
										meta: {
											title: '销售数据（图表）',
											icon: 'new-salses-data2',
											noCache: false
										}
									},
									{
										name: 'SalesDynamic',
										path: 'salesDynamic',
										hidden: false,
										component:
											'salesCenter/dataCenter/salesDynamic/salesDynamic',
										meta: {
											title: '销售数据(动态图表)',
											icon: 'new-salses-data2',
											noCache: false
										}
									},
									{
										name: 'DailySalesDataNew',
										path: 'dailySalesDataNew',
										hidden: false,
										component: 'salesCenter/dataCenter/dailySalesDataNew',
										meta: {
											title: '日更销售数据(表格)',
											icon: 'new-dailysales-data',
											noCache: false
										}
									},
									{
										name: 'DayMore',
										path: 'dayMore',
										hidden: false,
										component: 'salesCenter/dataCenter/dayMore/index',
										meta: {
											title: '日更销售数据(图表)',
											icon: 'chart',
											noCache: false
										}
									}
								]
							},
							{
								name: 'AssessmentCenter',
								path: 'assessmentCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '测评中心',
									icon: 'new-evaluate-center',
									noCache: false
								},
								children: [
									{
										name: 'TestReview',
										path: 'testReview',
										hidden: false,
										component: 'salesCenter/assessmentCenter/testReview',
										meta: {
											title: '需求列表',
											icon: 'new-need-list',
											noCache: false
										}
									},
									{
										name: 'Resources',
										path: 'resources',
										hidden: false,
										component: 'salesCenter/assessmentCenter/resources',
										meta: {
											title: '资源列表',
											icon: 'new-resource-list',
											noCache: false
										}
									},
									{
										name: 'TestRecord',
										path: 'testRecord',
										hidden: false,
										component: 'salesCenter/assessmentCenter/testRecord',
										meta: {
											title: '测评列表',
											icon: 'new-evaluate-list',
											noCache: false
										}
									},
									{
										name: 'AddDetail',
										path: 'addDetail',
										hidden: true,
										component: 'evaluation/testReview/addDetail.vue',
										meta: {
											title: '测评录入',
											icon: 'new-evaluate-list',
											noCache: false
										}
									},
									{
										name: 'ResourcesDetail',
										path: 'resourcesDetail',
										hidden: true,
										component: 'evaluation/resources/resourcesDetail',
										meta: {
											title: '资源列表详情',
											icon: 'new-evaluate-center',
											noCache: false
										}
									}
								]
							},
							{
								name: 'SalesPlan',
								path: 'salesPlan',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '销售计划',
									icon: 'new-sales-plan',
									noCache: false
								},
								children: [
									{
										name: 'ProductAdjust',
										path: 'productAdjust',
										hidden: false,
										component: 'salesCenter/salesPlan/productAdjust/index',
										meta: {
											title: '销售月度预测',
											icon: 'new-sales-forecast2',
											noCache: false
										}
									},
									{
										name: 'SalesForecast',
										path: 'salesForecast',
										hidden: false,
										component:
											'salesCenter/salesPlan/salceDepart/salesForecast.vue',
										meta: {
											title: '销售预测',
											icon: 'new-sales-forecast',
											noCache: false
										}
									},
									{
										name: 'AuditReport',
										path: 'auditReport',
										hidden: false,
										component:
											'salesCenter/salesPlan/salceDepart/auditReport.vue',
										meta: {
											title: '审核列表',
											icon: 'new-check-list',
											noCache: false
										}
									},
									{
										name: 'ActivityPlan',
										path: 'activityPlan',
										hidden: false,
										component:
											'salesCenter/salesPlan/activityPlan/activityPlan',
										meta: {
											title: '活动计划',
											icon: 'new-active-plan',
											noCache: false
										}
									},
									{
										name: 'PredictDetails',
										path: 'predictDetails',
										hidden: true,
										component: 'salesCenter/salceDepart/predictDetails',
										meta: {
											title: '预测详情',
											icon: 'new-sales-forecast',
											noCache: false
										}
									}
								]
							},
							{
								name: 'AfterSalesCenter',
								path: 'afterSalesCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '售后中心',
									icon: 'new-after-center',
									noCache: false
								},
								children: [
									{
										name: 'ReviewManagement',
										path: 'reviewManagement',
										hidden: false,
										component:
											'salesCenter/afterSalesCenter/productReview/reviewManagement',
										meta: {
											title: '产品评价管理',
											icon: 'new-prod-comment2',
											noCache: false
										}
									},
									{
										name: 'OrderTracking',
										path: 'orderTracking',
										hidden: false,
										component: 'salesCenter/afterSalesCenter/orderTracking',
										meta: {
											title: '订单查询',
											icon: 'new-order-query',
											noCache: false
										}
									},
									{
										name: 'BadReview',
										path: 'badReview',
										hidden: false,
										component:
											'salesCenter/afterSalesCenter/productReview/badReview',
										meta: {
											title: '差评管理',
											icon: 'new-bad-comment',
											noCache: false
										}
									},
									{
										name: 'ShippingRefund',
										path: 'shippingRefund',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '发货及退款',
											icon: 'new--deliver-refund',
											noCache: false
										},
										children: [
											{
												name: 'Ship',
												path: 'ship',
												hidden: false,
												component:
													'salesCenter/afterSalesCenter/shippingRefund/ship',
												meta: { title: '发货', icon: '#', noCache: false }
											},
											{
												name: 'Refund',
												path: 'refund',
												hidden: false,
												component:
													'salesCenter/afterSalesCenter/shippingRefund/refund',
												meta: { title: '退款', icon: '#', noCache: false }
											}
										]
									}
								]
							},
							{
								name: 'BrandVipCenter',
								path: 'brandVipCenter',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '品牌会员中心',
									icon: 'new-brand-center',
									noCache: false
								},
								children: [
									{
										name: 'Pre-sale',
										path: 'pre-sale',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '售前会员服务',
											icon: 'new-before-service',
											noCache: false
										},
										children: [
											{
												name: 'Af-Distributor',
												path: 'af-Distributor',
												hidden: true,
												component: 'salesCenter/brandVipCenter/af-Distributor',
												meta: {
													title: 'AF-Distributor',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Af-GYM',
												path: 'af-GYM',
												hidden: true,
												component: 'salesCenter/brandVipCenter/af-GYM',
												meta: {
													title: 'AF-GYM',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Af-Testing',
												path: 'af-Testing',
												hidden: false,
												component: 'salesCenter/brandVipCenter/af-Testing',
												meta: {
													title: 'AF-评测会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'At-Testing',
												path: 'at-Testing',
												hidden: false,
												component: 'salesCenter/brandVipCenter/at-Testing',
												meta: {
													title: 'AT-评测会员库',
													icon: 'new-member-library',
													noCache: false
												}
											}
										]
									},
									{
										name: 'After-sale',
										path: 'after-sale',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '售后会员服务',
											icon: 'new-after-service',
											noCache: false
										},
										children: [
											{
												name: 'Ub-Warranty',
												path: 'ub-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'UB-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Sy-Warranty',
												path: 'sy-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'SY-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'Af-Warranty',
												path: 'af-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'AF-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											},
											{
												name: 'At-Warranty',
												path: 'at-Warranty',
												hidden: false,
												component: 'salesCenter/brandVipCenter/index',
												meta: {
													title: 'AT-Warranty会员库',
													icon: 'new-member-library',
													noCache: false
												}
											}
										]
									},
									{
										name: 'BlankLayout',
										path: 'BlankLayout',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '推广库',
											icon: 'new-promote-library',
											noCache: false
										},
										children: [
											{
												name: 'YouTube',
												path: 'YouTube',
												hidden: false,
												component: 'salesCenter/brandVipCenter/ytbList.vue',
												meta: {
													title: 'YouTube红人库',
													icon: 'new-red-library',
													noCache: false
												}
											},
											{
												name: 'Deal',
												path: 'deal',
												hidden: false,
												component: 'salesCenter/brandVipCenter/dealList.vue',
												meta: {
													title: 'Deal库',
													icon: 'new-deal-libary',
													noCache: false
												}
											}
										]
									}
								]
							},
							{
								name: 'DataImport',
								path: 'dataImport',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '数据导入',
									icon: 'new-data-import',
									noCache: false
								},
								children: [
									{
										name: 'DataImportZip',
										path: 'dataImportZip',
										hidden: false,
										component: 'salesCenter/dataImport/dataImportJIP',
										meta: {
											title: '数据导入（ZIP）',
											icon: 'new-data-import2',
											noCache: false
										}
									},
									{
										name: 'InfoSupplement',
										path: 'InfoSupplement',
										hidden: false,
										component: 'salesCenter/dataImport/InfoSupplement',
										meta: {
											title: '信息补漏',
											icon: 'new-info-traps',
											noCache: false
										}
									},
									{
										name: 'ReportDownload',
										path: 'reportDownload',
										hidden: false,
										component: 'salesCenter/dataImport/reportDownload',
										meta: {
											title: '报表下载检测',
											icon: 'new-report-check',
											noCache: false
										}
									}
								]
							},
							{
								name: 'BasicInfo',
								path: 'BasicInfo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '基础信息库',
									icon: 'new-basic-info',
									noCache: false
								},
								children: [
									{
										name: 'SalesTable',
										path: 'salesTable',
										hidden: false,
										component: 'salesCenter/dataCenter/tracking/index',
										meta: {
											title: '销售数据跟踪（表格）',
											icon: 'new-salses-data',
											noCache: false
										}
									},
									{
										name: 'SalesChart',
										path: 'salesChart',
										hidden: false,
										component: 'salesCenter/dataCenter/salesTracking/index',
										meta: {
											title: '销售数据跟踪（图表）',
											icon: 'new-salses-data2',
											noCache: false
										}
									},
									{
										name: 'DailySalesData',
										path: 'dailySalesData',
										hidden: false,
										component: 'salesCenter/dataCenter/dailySalesData',
										meta: {
											title: '日更销售数据',
											icon: 'new-dailysales-data',
											noCache: false
										}
									}
								]
							},
							{
								name: 'TargetAds',
								path: 'targetAds',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '广告分析', icon: 'druid', noCache: false },
								children: [
									{
										name: 'AdDataManagement',
										path: 'adDataManagement',
										hidden: false,
										component: 'salesCenter/targetAds/adDataManagement',
										meta: {
											title: 'ASIN广告数据管理',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'KeyWordManagement',
										path: 'keyWordManagement',
										hidden: false,
										component: 'salesCenter/targetAds/keyWordManagement',
										meta: {
											title: 'ASIN关键词管理',
											icon: 'chat-poll-line',
											noCache: false
										}
									},
									{
										name: 'AdvertisingDetails',
										path: 'advertisingDetails',
										hidden: false,
										component: 'salesCenter/targetAds/advertisingDetails',
										meta: {
											title: '广告数据明细',
											icon: 'bar-chart-box-line',
											noCache: false
										}
									},
									{
										name: 'CustomVisualization',
										path: 'customVisualization',
										hidden: false,
										component: 'salesCenter/targetAds/customVisualization',
										meta: {
											title: '自定义可视化图表',
											icon: 'chart',
											noCache: false
										}
									}
								]
							},
							{
								name: 'NegativeReview',
								path: 'negativeReview',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '差评系统',
									icon: 'new-bad-commen2',
									noCache: false
								},
								children: [
									{
										name: 'RecordList',
										path: 'recordList',
										hidden: false,
										component: 'negativeReview/record/index',
										meta: {
											title: '差评列表',
											icon: 'new-bad-comment3',
											noCache: false
										}
									},
									{
										name: 'Operation',
										path: 'operation',
										hidden: false,
										component: 'negativeReview/operation/index',
										meta: {
											title: '处理列表',
											icon: 'new-process-list',
											noCache: false
										}
									},
									{
										name: 'Detail',
										path: 'detail',
										hidden: true,
										component: 'negativeReview/record/detail',
										meta: {
											title: '差评详情',
											icon: 'new-bad-comment3',
											noCache: false
										}
									},
									{
										name: 'ImageList',
										path: 'imageList',
										hidden: true,
										component: 'negativeReview/image/index',
										meta: {
											title: '差评图片',
											icon: 'new-bad-comment',
											noCache: false
										}
									}
								]
							},
							{
								name: 'KanBan',
								path: 'kanBan',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '看板',
									icon: 'chat-check-line',
									noCache: false
								},
								children: [
									{
										name: 'ResultsKanBan',
										path: 'resultsKanBan',
										hidden: false,
										component: 'salesCenter/kanBan/resultsKanBan/index',
										meta: {
											title: '业绩增长看板',
											icon: 'chat-check-line',
											noCache: false
										}
									},
									{
										name: 'PeopleKanBan',
										path: 'peopleKanBan',
										hidden: false,
										component: 'salesCenter/kanBan/peopleKanBan/index',
										meta: {
											title: '人效增长看板',
											icon: 'chat-check-line',
											noCache: false
										}
									}
								]
							},
							{
								name: 'Screen',
								path: 'screen',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '大屏',
									icon: 'bar-chart-box-line',
									noCache: false
								},
								children: [
									{
										name: 'Screen',
										path: 'screen',
										hidden: false,
										component: 'salesCenter/screen/index',
										meta: { title: '可视化大屏', icon: 'chart', noCache: false }
									}
								]
							}
						]
					},
					{
						name: 'OACenter',
						path: '/OACenter',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: 'OA中心', icon: 'OA', noCache: false },
						children: [
							{
								name: 'VisualDesign',
								path: 'visualDesign',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '视觉管理',
									icon: 'new-visual-manage',
									noCache: false
								},
								children: [
									{
										name: 'DemandList',
										path: 'demandList',
										hidden: false,
										component: 'oaCenter/visualDesign/visualDesign',
										meta: {
											title: '视觉需求',
											icon: 'new-visual-demand',
											noCache: false
										}
									},
									{
										name: 'Vision',
										path: 'vision',
										hidden: true,
										component: 'oaCenter/visualDesign/vision',
										meta: { title: '视觉需求提交', icon: '#', noCache: false }
									},
									{
										name: 'RevealImages',
										path: 'revealImages',
										hidden: true,
										component: 'oaCenter/visualDesign/revealImages',
										meta: { title: '需求完成展示', icon: '#', noCache: false }
									},
									{
										name: 'Details',
										path: 'details',
										hidden: true,
										component: 'oaCenter/visualDesign/details',
										meta: { title: '需求详情', icon: '#', noCache: false }
									}
								]
							},
							{
								name: 'Performance',
								path: 'performance',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '绩效管理',
									icon: 'new-perform-manage',
									noCache: false
								},
								children: [
									{
										name: 'Appraisal',
										path: 'appraisal',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效考核',
											icon: 'new-perform-exam',
											noCache: false
										},
										children: [
											{
												name: 'PerformanceOperation',
												path: 'performanceOperation',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/performanceOperation',
												meta: { title: '绩效操作', icon: '#', noCache: false }
											},
											{
												name: 'PerformanceDeal',
												path: 'performanceDeal',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/performanceDeal',
												meta: { title: '绩效处理', icon: '#', noCache: false }
											},
											{
												name: 'PerformanceControls',
												path: 'performanceControls',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/performanceControls',
												meta: { title: '绩效管控', icon: '#', noCache: false }
											},
											{
												name: 'DealWith',
												path: 'dealWith',
												hidden: false,
												component: 'oaCenter/performance/appraisal/dealWith',
												meta: { title: '任务处理', icon: '#', noCache: false }
											},
											{
												name: 'TaskSchedule',
												path: 'taskSchedule',
												hidden: false,
												component:
													'oaCenter/performance/appraisal/taskSchedule',
												meta: { title: '任务进度', icon: '#', noCache: false }
											}
										]
									},
									{
										name: 'Rating',
										path: 'rating',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效评级',
											icon: 'new-perform-level',
											noCache: false
										},
										children: [
											{
												name: 'CenterRating',
												path: 'centerRating',
												hidden: false,
												component: 'oaCenter/performance/rating/centerRating',
												meta: {
													title: '中心评级',
													icon: 'new-center-rate',
													noCache: false
												}
											},
											{
												name: 'DepartmentRating',
												path: 'departmentRating',
												hidden: false,
												component:
													'oaCenter/performance/rating/departmentRating',
												meta: {
													title: '部门评级',
													icon: 'new-depart-rating',
													noCache: false
												}
											},
											{
												name: 'EmployeeRating',
												path: 'employeeRating',
												hidden: false,
												component: 'oaCenter/performance/rating/employeeRating',
												meta: {
													title: '员工评级',
													icon: 'new-employee-rating',
													noCache: false
												}
											},
											{
												name: 'RatingDifferences',
												path: 'ratingDifferences',
												hidden: false,
												component:
													'oaCenter/performance/rating/ratingDifferences',
												meta: {
													title: '评级建议差异',
													icon: 'new-rate-diff',
													noCache: false
												}
											},
											{
												name: 'PerformanceGrievance',
												path: 'performanceGrievance',
												hidden: false,
												component:
													'oaCenter/performance/rating/performanceGrievance',
												meta: {
													title: '绩效申诉',
													icon: 'new-perform-check',
													noCache: false
												}
											}
										]
									},
									{
										name: 'Data',
										path: 'data',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效数据',
											icon: 'new-perform-data',
											noCache: false
										},
										children: [
											{
												name: 'PeopleWork',
												path: 'peopleWork',
												hidden: false,
												component: 'oaCenter/performance/data/peopleWork',
												meta: {
													title: '人效看板',
													icon: 'bar-chart-box-line',
													noCache: false
												}
											},
											{
												name: 'PerformanceResults',
												path: 'performanceResults',
												hidden: false,
												component:
													'oaCenter/performance/data/performanceResults',
												meta: {
													title: '绩效结果列表',
													icon: 'new-perform-list',
													noCache: false
												}
											},
											{
												name: 'RatingDistribution',
												path: 'ratingDistribution',
												hidden: false,
												component:
													'oaCenter/performance/data/ratingDistribution',
												meta: {
													title: '评级分布列表',
													icon: 'new-rate-list',
													noCache: false
												}
											},
											{
												name: 'OperationalData',
												path: 'operationalData',
												hidden: false,
												component: 'oaCenter/performance/data/operationalData',
												meta: {
													title: '运营数据列表',
													icon: 'new-operate-data',
													noCache: false
												}
											}
										]
									},
									{
										name: 'Monitoring',
										path: 'monitoring',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '绩效监控',
											icon: 'new-perform-control',
											noCache: false
										},
										children: [
											{
												name: 'CycleMonitoring',
												path: 'cycleMonitoring',
												hidden: false,
												component:
													'oaCenter/performance/monitoring/cycleMonitoring',
												meta: {
													title: '周期性绩效监控',
													icon: 'new-perform-circle',
													noCache: false
												}
											},
											{
												name: 'AnnualMonitoring',
												path: 'annualMonitoring',
												hidden: false,
												component:
													'oaCenter/performance/monitoring/annualMonitoring',
												meta: {
													title: '年度绩效考核监控',
													icon: 'new-perform-year',
													noCache: false
												}
											}
										]
									},
									{
										name: 'System',
										path: 'system',
										hidden: false,
										redirect: 'noRedirect',
										component: 'ParentView',
										alwaysShow: true,
										meta: {
											title: '系统管理',
											icon: 'new-system-manage',
											noCache: false
										},
										children: [
											{
												name: 'UserTemplate',
												path: 'userTemplate',
												hidden: false,
												component: 'oaCenter/performance/system/userTemplate',
												meta: {
													title: '用户模板配置',
													icon: 'new-user-template',
													noCache: false
												}
											},
											{
												name: 'IndexLibrary',
												path: 'indexLibrary',
												hidden: false,
												component: 'oaCenter/performance/system/indexLibrary',
												meta: {
													title: '指标库',
													icon: 'new-target-library',
													noCache: false
												}
											},
											{
												name: 'TargetSet',
												path: 'targetSet',
												hidden: false,
												component: 'oaCenter/performance/system/targetSet',
												meta: {
													title: '目标设置',
													icon: 'new-target-setting',
													noCache: false
												}
											},
											{
												name: 'InstructionOperation',
												path: 'instructionOperation',
												hidden: false,
												component:
													'oaCenter/performance/system/instructionOperation',
												meta: {
													title: '指令操作',
													icon: 'new-target-setting',
													noCache: false
												}
											}
										]
									}
								]
							},
							{
								name: 'Https://5534697.app.netsuite.com',
								path: 'https://5534697.app.netsuite.com',
								hidden: false,
								component: 'NS-ERP',
								meta: { title: 'NS-ERP', icon: 'new-ns-erp', noCache: false }
							},
							{
								name: 'AddressBook',
								path: 'addressBook',
								hidden: false,
								component: 'oaCenter/addressBook',
								meta: {
									title: '通讯录',
									icon: 'new-address-book',
									noCache: false
								}
							},
							{
								name: 'Feishu',
								path: 'feishu',
								hidden: false,
								component: 'oaCenter/feishu',
								meta: {
									title: '飞书推送',
									icon: 'new-fly-push',
									noCache: false
								}
							},
							{
								name: 'BugReport',
								path: 'BugReport',
								hidden: false,
								component: 'oaCenter/BugReport/BugReport',
								meta: {
									title: 'Bug提交',
									icon: 'new-bug-submit',
									noCache: false
								}
							},
							{
								name: 'BillPrint',
								path: 'BillPrint',
								hidden: false,
								component: 'oaCenter/BillPrint/BillPrint',
								meta: {
									title: '税单打印',
									icon: 'new-fly-push',
									noCache: false
								}
							},
							{
								name: 'ConceptInfo',
								path: 'conceptInfo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '概念信息',
									icon: 'new-fly-push',
									noCache: false
								},
								children: [
									{
										name: 'ConceptInfoList',
										path: 'conceptInfoList',
										hidden: false,
										component: 'oaCenter/conceptInfo/index',
										meta: { title: '列表', icon: 'Group', noCache: false }
									},
									{
										name: 'DetailsInfo',
										path: 'detailsInfo',
										hidden: true,
										component: 'oaCenter/conceptInfo/detailsInfo',
										meta: {
											title: '概念详细页面',
											icon: 'Group',
											noCache: false
										}
									}
								]
							},
							{
								name: 'Workbench',
								path: 'workbench',
								hidden: false,
								component: 'oaCenter/workbench/index',
								meta: { title: '应用工作台', icon: 'build', noCache: false }
							},
							{
								name: 'MyApplication',
								path: 'myApplication',
								hidden: false,
								component: 'oaCenter/myApplication/index',
								meta: {
									title: '我的应用管理',
									icon: 'contacts-line',
									noCache: false
								}
							}
						]
					},
					{
						name: 'ProjectManagement',
						path: '/projectManagement',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '项目管理', icon: 'documentation', noCache: false },
						children: [
							{
								name: 'Assignment',
								path: 'assignment',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '我的项目任务',
									icon: 'checkbox',
									noCache: false
								},
								children: [
									{
										name: 'ToDoTasks',
										path: 'toDoTasks',
										hidden: false,
										component: 'projectManagement/assignment/toDoTasks',
										meta: {
											title: '待办任务',
											icon: 'feedback-line',
											noCache: false
										}
									},
									{
										name: 'HasDoTasks',
										path: 'hasDoTasks',
										hidden: false,
										component: 'projectManagement/assignment/hasDoTasks',
										meta: {
											title: '已办任务',
											icon: 'chat-check-line',
											noCache: false
										}
									}
								]
							},
							{
								name: 'Dashboard',
								path: 'dashboard',
								hidden: false,
								component: 'projectManagement/dashboard/index',
								meta: { title: '项目仪表盘', icon: 'example', noCache: false }
							},
							{
								name: 'List',
								path: 'list',
								hidden: false,
								component: 'projectManagement/list/index',
								meta: {
									title: '项目列表',
									icon: 'list-unordered',
									noCache: false
								}
							},
							{
								name: 'Check',
								path: 'check',
								hidden: false,
								component: 'projectManagement/check/index',
								meta: { title: '项目审核', icon: 'edit', noCache: false }
							},
							{
								name: 'Documentation',
								path: 'documentation',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '项目文档', icon: 'clipboard', noCache: false },
								children: [
									{
										name: 'PrdDocumentLibrary',
										path: 'prdDocumentLibrary',
										hidden: false,
										component:
											'projectManagement/documentation/prdDocumentLibrary',
										meta: {
											title: 'PRD文档库',
											icon: 'new-inOut-check',
											noCache: false
										}
									},
									{
										name: 'ProjectAnalysis',
										path: 'projectAnalysis',
										hidden: false,
										component:
											'projectManagement/documentation/projectAnalysis',
										meta: {
											title: '立项分析文档库',
											icon: 'new-info-traps',
											noCache: false
										}
									},
									{
										name: 'OtherDocumentLibraries',
										path: 'otherDocumentLibraries',
										hidden: false,
										component:
											'projectManagement/documentation/otherDocumentLibraries',
										meta: { title: '其他文档库', icon: 'tool', noCache: false }
									}
								]
							},
							{
								name: 'Report',
								path: 'report',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: {
									title: '项目报表',
									icon: 'bar-chart-box-line',
									noCache: false
								},
								children: [
									{
										name: 'OverviewList',
										path: 'overviewList',
										hidden: false,
										component: 'projectManagement/report/overviewList/index',
										meta: { title: '总览表', icon: 'monitor', noCache: false }
									},
									{
										name: 'RouteList',
										path: 'routeList',
										hidden: false,
										component: 'projectManagement/report/routeList/index',
										meta: { title: '路线图', icon: 'druid', noCache: false }
									},
									{
										name: 'Statistical',
										path: 'statistical',
										hidden: false,
										component: 'projectManagement/report/statistical/index',
										meta: {
											title: '项目群统计表',
											icon: 'new-dailysales-data',
											noCache: false
										}
									},
									{
										name: 'ProjectSales',
										path: 'projectSales',
										hidden: false,
										component: 'projectManagement/report/projectSales/index',
										meta: {
											title: '项目销售数据看板',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'SalesTarget',
										path: 'salesTarget',
										hidden: false,
										component: 'projectManagement/report/salesTarget/index',
										meta: {
											title: '项目销售目标维护',
											icon: 'new-target-setting',
											noCache: false
										}
									}
								]
							},
							{
								name: 'ProjectInfo',
								path: 'projectInfo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '项目配置维护', icon: 'OA', noCache: false },
								children: [
									{
										name: 'MembersMaintenance',
										path: 'membersMaintenance',
										hidden: false,
										component:
											'projectManagement/projectInfo/membersMaintenance',
										meta: {
											title: '成员维护',
											icon: 'contacts-line',
											noCache: false
										}
									},
									{
										name: 'PlanMaintenance',
										path: 'planMaintenance',
										hidden: false,
										component: 'projectManagement/projectInfo/planMaintenance',
										meta: {
											title: '计划维护',
											icon: 'file-edit-line',
											noCache: false
										}
									}
								]
							}
						]
					},
					{
						name: 'Flowable',
						path: '/flowable',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: { title: '流程管理', icon: 'cascader', noCache: false },
						children: [
							{
								name: 'Form',
								path: 'form',
								hidden: false,
								component: 'flowable/task/form/index',
								meta: { title: '表单配置', icon: 'form', noCache: false }
							},
							{
								name: 'Definition',
								path: 'definition',
								hidden: false,
								component: 'flowable/definition/index',
								meta: { title: '流程定义', icon: 'dict', noCache: false }
							}
						]
					},
					{
						name: 'Task',
						path: '/task',
						hidden: false,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '任务管理',
							icon: 'new-brand-center',
							noCache: false
						},
						children: [
							{
								name: 'Process',
								path: 'process',
								hidden: false,
								component: 'flowable/task/process/index',
								meta: { title: '我的流程', icon: 'peoples', noCache: false }
							},
							{
								name: 'Todo',
								path: 'todo',
								hidden: false,
								component: 'flowable/task/todo/index',
								meta: { title: '待办任务', icon: 'time-range', noCache: false }
							},
							{
								name: 'Finished',
								path: 'finished',
								hidden: false,
								component: 'flowable/task/finished/index',
								meta: { title: '已办任务', icon: 'task-line', noCache: false }
							}
						]
					},
					{
						name: 'Advertise',
						path: '/advertise',
						hidden: true,
						redirect: 'noRedirect',
						component: 'Layout',
						alwaysShow: true,
						meta: {
							title: '广告分析',
							icon: 'new-chip-center',
							noCache: false
						},
						children: [
							{
								name: 'AdvertiseIndex',
								path: 'advertiseIndex',
								hidden: false,
								component: 'advertise/advertiseDashborad',
								meta: {
									title: '广告分析首页',
									icon: 'education',
									noCache: false
								}
							},
							{
								name: 'StoreDetail',
								path: 'storeDetail',
								hidden: false,
								component: 'advertise/advertiseDashborad/storeDetail',
								meta: {
									title: '店铺明细',
									icon: 'profile-line',
									noCache: false
								}
							},
							{
								name: 'AdvertiseDashboradTwo',
								path: 'advertiseDashboradTwo',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '广告看板2', icon: 'education', noCache: false },
								children: [
									{
										name: 'AdvertiseSituation',
										path: 'advertiseSituation',
										hidden: false,
										component:
											'advertise/advertiseDashboradTwo/advertiseSituation',
										meta: { title: '广告概况', icon: 'chart', noCache: false }
									}
								]
							},
							{
								name: 'AdvertiseDashboradThree',
								path: 'advertiseDashboradThree',
								hidden: false,
								redirect: 'noRedirect',
								component: 'ParentView',
								alwaysShow: true,
								meta: { title: '广告看板3', icon: 'education', noCache: false },
								children: [
									{
										name: 'A-trendAnalysis',
										path: 'a-trendAnalysis',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/a-trendAnalysis',
										meta: {
											title: 'A表趋势分析',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'A-cateOperateAnalysis',
										path: 'a-cateOperateAnalysis',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/a-cateOperateAnalysis',
										meta: {
											title: 'A表品类运营分析',
											icon: 'druid',
											noCache: false
										}
									},
									{
										name: 'Ad-costRangeAnalysis',
										path: 'ad-costRangeAnalysis',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/ad-costRangeAnalysis',
										meta: {
											title: '广告花费区间分析',
											icon: 'chart',
											noCache: false
										}
									},
									{
										name: 'Sku-productOptimize',
										path: 'sku-productOptimize',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/sku-productOptimize',
										meta: {
											title: 'sku产品优化',
											icon: 'example',
											noCache: false
										}
									},
									{
										name: 'PeopleDetail',
										path: 'peopleDetail',
										hidden: false,
										component: 'advertise/advertiseDashboradThree/peopleDetail',
										meta: { title: '人员明细', icon: 'example', noCache: false }
									},
									{
										name: 'SecondCateDetail',
										path: 'secondCateDetail',
										hidden: false,
										component:
											'advertise/advertiseDashboradThree/secondCateDetail',
										meta: {
											title: '二级品类明细',
											icon: 'chart',
											noCache: false
										}
									}
								]
							}
						]
					}
				]
			}
		}
	}
]
