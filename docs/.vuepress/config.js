module.exports = {
	title: 'MYJ - 工具站',
	description: '工具站',
	markdown: {
		lineNumbers: true,
		toc: {
			includeLevel: [1, 2, 3],
		},
	},
	plugins: ['run'],
	themeConfig: {
		nav: [{
				text: "指南",
				link: "/guide/",
			},
			{
				text: "工具",
				items: [{
					text: "代码生成器",
					link: "/"
				}],
			},
		],
		sidebar: {

		},
		sidebarDepth: 3,
	}
}
